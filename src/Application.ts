import { ApplicationSettings, ApplicationLoader } from 'mvc-ts';
import * as path from 'path';

import './controllers';
@ApplicationSettings({rootDir: path.resolve(__dirname, '..'), port: 9000})
export class Application extends ApplicationLoader { }
