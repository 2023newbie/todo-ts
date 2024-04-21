import { ITaskHeader } from './ITaskHeader';
import { ITaskDescription } from './ITaskDescription';
import { ITaskFooter } from './ITaskFooter';

import { EPriority } from '../../../sidebar/createTaskForm/enums/EPriority';

export interface ITask
    extends ITaskHeader,
        ITaskDescription,
        ITaskFooter {
            priority: EPriority
        }
