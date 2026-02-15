export interface InputFieldsetInterface {
    isAutoFocus: boolean;
    fieldType: 'text' | 'email' | 'tel';
    name: string;
    mask: null;
    required: boolean;
    disabled: boolean;
    placeholder: string;
    tooltip: string;
    label: string;
    value: string;
    autocomplete: string | undefined;
    maxLength: number | undefined;
    helpImageUrl: string;

    isValidField: string;
    isFilledField: string;
    errorMessage: string;

    prefix: string;
    icon: string;

    changeHandler: () => void;
    blurHandler: () => void;
}