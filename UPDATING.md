# Updating the repo on GitHub

Whenever you change files in this project, push the updates to GitHub with three commands.

```bash
cd path/to/cpr-trainer

git add -A
git commit -m "Describe what you changed"
git push
```

Then refresh your GitHub repo page — the changes will be there.

## What each command does

- `git add -A` — stages **all** your changes (new, edited, and deleted files).
- `git commit -m "..."` — saves a snapshot with a short message describing the change.
- `git push` — uploads your commits to GitHub.

## First time only: connect to GitHub

If you haven't linked this folder to GitHub yet:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/cpr-trainer.git
git push -u origin main
```

Replace the URL with the one shown on your new repo's page. After this first push,
plain `git push` is all you need.

## Troubleshooting

**"Unable to create .git/index.lock: File exists"**
A previous git process left a lock file. Remove it, then retry:

```bash
rm -f .git/index.lock
git add -A && git commit -m "..." && git push
```

**It asks for a password when pushing**
GitHub no longer accepts your account password over HTTPS. Use a
**personal access token** instead (GitHub → Settings → Developer settings →
Personal access tokens), or install the [GitHub CLI](https://cli.github.com/)
and run `gh auth login` once.

**"Updates were rejected" / remote has changes you don't**
Pull first, then push:

```bash
git pull --rebase
git push
```
