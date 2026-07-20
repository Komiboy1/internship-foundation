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
