/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Notes } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotesUpdateFormInputValues = {
    text?: string;
    title?: string;
    audios?: string[];
};
export declare type NotesUpdateFormValidationValues = {
    text?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    audios?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotesUpdateFormOverridesProps = {
    NotesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    audios?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotesUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notes?: Notes;
    onSubmit?: (fields: NotesUpdateFormInputValues) => NotesUpdateFormInputValues;
    onSuccess?: (fields: NotesUpdateFormInputValues) => void;
    onError?: (fields: NotesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotesUpdateFormInputValues) => NotesUpdateFormInputValues;
    onValidate?: NotesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotesUpdateForm(props: NotesUpdateFormProps): React.ReactElement;
