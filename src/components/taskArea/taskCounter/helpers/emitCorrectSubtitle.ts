import { EStatus } from "../../../sidebar/createTaskForm/enums/EStatus";
import { TaskCounterStatusType } from "../interfaces/ITaskCounter";

export const emitCorrectSubtitle = (status: TaskCounterStatusType): string => {
    switch (status) {
        case EStatus.todo:
            return 'Todo\'s'
        case EStatus.inProgress:
            return 'In Progress'
        case EStatus.completed:
            return 'Completed'
    }
}