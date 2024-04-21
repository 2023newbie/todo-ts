import { ChangeEvent } from 'react';
import { IDisabled } from './IDisabled';

export interface ITextField extends IDisabled {
    value: string,
    onChange?: (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >,
    ) => void;
}
