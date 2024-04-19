import { IDisabled } from "./IDisabled";
import { SelectChangeEvent } from "@mui/material";

export interface ISelectItem {
    value: string,
    label: string
}

export interface ISelectField extends IDisabled {
    id: string,
    title: string,
    items: ISelectItem[],
    value?: string,
    onChange?: (e: SelectChangeEvent) => void
}