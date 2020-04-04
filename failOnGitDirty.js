const { execSync } = require('child_process');

const isDirty = execSync('git status --porcelain').toString().length > 0;
console.log(isDirty)
if (isDirty) throw new Error('Failed as git status is dirty!');