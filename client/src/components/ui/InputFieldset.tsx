import {InputFieldsetInterface} from "@/types/fieldsets";
import {useState} from "react";
import {
    FORM_FIELDSET_FIELD_INVALID,
    FORM_FIELDSET_FIELD_VALID,
    FORM_FIELDSET_INVALID,
    FORM_FIELDSET_VALID
} from "@/utils/constants/form-classes";

const InputFieldset = (data: InputFieldsetInterface) => {
    const {
        isAutoFocus = false,
        fieldType = 'text',
        name = '',
        mask = null,
        required = true,
        disabled = false,
        placeholder = '',
        tooltip = '',
        label = '',
        value = '',
        autocomplete,
        maxLength,
        helpImageUrl,

        isValidField,
        isFilledField,
        errorMessage,

        prefix,
        icon,

        changeHandler,
        blurHandler
    } = data;

    const [isFocusedField, setIsFocusedField] = useState<boolean>(false);

    const fieldsetStateClass =
        isFilledField || (!isFilledField && !isValidField)
            ? isValidField
                ? `${FORM_FIELDSET_VALID}`
                : `${FORM_FIELDSET_INVALID}`
            : '';
    const fieldStateClass =
        isFilledField || (!isFilledField && !isValidField)
            ? isValidField
                ? `${FORM_FIELDSET_FIELD_VALID}`
                : `${FORM_FIELDSET_FIELD_INVALID}`
            : '';

    return (
        <div>

        </div>
    )
}

export default InputFieldset;