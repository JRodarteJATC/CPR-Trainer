// Scores tab: shows the local attempt log with print + Excel/CSV export.
window.ModuleScores = (function () {
  let view = null;

  function fmtDate(iso) {
    const d = new Date(iso);
    if (isNaN(d)) return iso;
    return d.toLocaleString();
  }

  function render(v) {
    view = v;
    const log = window.CPRScores.getLog().slice().reverse(); // newest first

    view.innerHTML = `
      <h2 class="module-title">Scores</h2>
      <p class="module-sub">Every completed quiz, drill, and scenario is logged here on this device. Use Export or Print to save them.</p>

      <div class="card">
        <div class="scores-toolbar">
          <button class="btn" id="exportBtn">⬇ Export to Excel (CSV)</button>
          <button class="btn secondary" id="printBtn">🖨 Print</button>
          <button class="btn ghost" id="clearBtn">Clear this device</button>
        </div>
        ${log.length === 0
          ? '<p class="cue" style="text-align:center;margin:20px 0;">No scores yet. Finish a Quiz or a Tap Practice drill and it will appear here.</p>'
          : `<div class="scores-scroll">
              <table class="scores-table" id="scoresTable">
                <thead>
                  <tr><th>Date</th><th>Student</th><th>Activity</th><th>Score</th><th>%</th><th>Details</th></tr>
                </thead>
                <tbody>
                  ${log.map(r => `
                    <tr>
                      <td>${fmtDate(r.timestamp)}</td>
                      <td>${esc(r.name)}</td>
                      <td>${esc(r.module)}</td>
                      <td>${esc(r.score)}</td>
                      <td>${r.percent === '' ? '' : esc(r.percent) + '%'}</td>
                      <td>${esc(r.detail)}</td>
                    </tr>`).join('')}
                </tbody>
              </table>
            </div>
            <p class="cue">${log.length} attempt${log.length === 1 ? '' : 's'} stored on this device.</p>`
        }
      </div>`;

    view.querySelector('#exportBtn').addEventListener('click', exportCSV);
    view.querySelector('#printBtn').addEventListener('click', printScores);
    view.querySelector('#clearBtn').addEventListener('click', () => {
      if (confirm('Clear all scores stored on THIS device? Export or Print first if you want to keep them — this cannot be undone.')) {
        window.CPRScores.clearLog();
        render(view);
      }
    });
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function csvCell(s) {
    const str = String(s == null ? '' : s);
    return '"' + str.replace(/"/g, '""') + '"';
  }

  function exportCSV() {
    const log = window.CPRScores.getLog();
    const header = ['Date', 'Student', 'Activity', 'Score', 'Percent', 'Details'];
    const rows = log.map(r => [fmtDate(r.timestamp), r.name, r.module, r.score, r.percent, r.detail]);
    const csv = [header, ...rows].map(row => row.map(csvCell).join(',')).join('\r\n');
    // BOM so Excel reads UTF-8 correctly
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const stamp = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `cpr-scores-${stamp}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function printScores() {
    const log = window.CPRScores.getLog().slice().reverse();
    const win = window.open('', '_blank');
    if (!win) { alert('Allow pop-ups to print.'); return; }
    const rows = log.map(r => `
      <tr>
        <td>${fmtDate(r.timestamp)}</td><td>${esc(r.name)}</td><td>${esc(r.module)}</td>
        <td>${esc(r.score)}</td><td>${r.percent === '' ? '' : esc(r.percent) + '%'}</td><td>${esc(r.detail)}</td>
      </tr>`).join('');
    win.document.write(`
      <html><head><title>CPR Trainer — Scores</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 24px; color:#111; }
        h1 { font-size: 18px; margin: 0 0 4px; }
        p { color:#555; margin: 0 0 16px; font-size: 12px; }
        table { width:100%; border-collapse: collapse; font-size: 12px; }
        th, td { border: 1px solid #999; padding: 6px 8px; text-align: left; }
        th { background:#eee; }
      </style></head><body>
      <h1>CPR Trainer — Score Report</h1>
      <p>Central Valley Roofers, Waterproofers &amp; Allied Workers JATC · Generated ${new Date().toLocaleString()}</p>
      <table>
        <thead><tr><th>Date</th><th>Student</th><th>Activity</th><th>Score</th><th>%</th><th>Details</th></tr></thead>
        <tbody>${rows || '<tr><td colspan="6">No scores recorded.</td></tr>'}</tbody>
      </table>
      </body></html>`);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 300);
  }

  return { render };
})();
