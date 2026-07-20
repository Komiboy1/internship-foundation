# Git Advanced Notes

# Merge Conflicts
A merge conflict happens when two branches modify the same part of the same file, and Git cannot automatically decide which change to keep

Git marks the conflict using:
- '<<<<<< HEAD' - Changes from the current branch
- '=======' - Separates the conflicting versions
- '>>>>>>> branch-name' - Changes from the branch being merged

To resolve a merge conflict:
- Open the conflicted file
- Read both versions
- Decide which changes to keep or combine
- Remove the conflict markers
- Save the file
- Run 'git add 'file'
- Run 'git commit' to complete the merge

Resolving merge conflicts manually helps developers combine work from multiple branches safely

# Git Log, Diff and Stash
# git log
The 'git log' command displays the complete commit history of a repository. Each commit includes its unique ID, author, date, and commit message

# git log --oneline
The 'git log --oneline' command provides a compact view of the commit history, making it easier to read and locate specific commits

# git diff
The 'git diff' command shows the differences between the current working directory and the last committed version of the files. Lines beginning with '-' have been removed, while lines beginning with '+' have been added.

# git stash
The 'git stash' command temporarily saves uncommitted changes so that you can switch branches or work on another task without creating a commit

# Useful commands:
- 'git stash' - Save changes
- 'git stash list' - Display saved stashes
- 'git stash pop' - Restore the most recent stash and remove it from the stash list