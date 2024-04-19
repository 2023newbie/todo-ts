import { EStatus } from "../../../sidebar/createTaskForm/enums/EStatus"
import { TaskCounterStatusType } from "../interfaces/ITaskCounter"

export const emitCorrectBorderColor = (status: TaskCounterStatusType): string => {
    switch (status) {
        case EStatus.todo:
            return 'error.light'
        case EStatus.inProgress:
            return 'warning.light'
        case EStatus.completed:
            return 'success.light'
    }
}