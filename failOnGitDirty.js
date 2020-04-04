const { execSync } = require('child_process');

const isDirty = execSync('git status --porcelain').toString().length > 0;
if (isDirty) throw new Error('Failed as git status is dirty!');