import fs from 'fs';
import path from 'path';

const appDirectory = fs.realpathSync(process.cwd());

export const resolveAbs = relativePath => path.resolve(appDirectory, relativePath);
