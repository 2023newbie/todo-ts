import { EPriority } from "../../sidebar/createTaskForm/enums/EPriority";
import { EStatus } from "../../sidebar/createTaskForm/enums/EStatus";

export interface ITaskApi {
    id: string,
    date: string,
    title: string,
    description: string,
    priority: EPriority,
    status: EStatus
}