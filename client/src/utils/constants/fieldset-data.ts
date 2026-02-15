import {FieldsetDataInterface} from "@/types/fieldsets";

export const ADDRESS_DATA: FieldsetDataInterface = {
    name: 'address',
    label: 'Street address',
    placeholder: 'Street address',
    fieldType: 'text',
    fieldsetComponentType: 'input',
    autocomplete: 'billing street-address'
};
export const BANK_ACCOUNT_NUMBER_DATA: FieldsetDataInterface = {
    name: 'bankAccountNumber',
    label: 'Bank Account Number',
    placeholder: 'Bank Account Number',
    fieldType: 'number',
    fieldsetComponentType: 'input',
    autocomplete: 'on',
    tooltip: 'Where would you like the funds to be deposited? TIP: Banks are significantly more likely to fund checking accounts than savings accounts',
    helpImageUrl: `/imageprocessors?i=account-number.jpg`
};
export const BANK_ACCOUNT_TYPE_DATA: FieldsetDataInterface = {
    name: 'bankAccountType',
    label: 'Bank Account Type?',
    fieldType: 'radio',
    fieldsetComponentType: 'bankAccountTypeComponent',
    tooltip: 'TIP: Banks are significantly more likely to fund checking accounts than savings accounts',
    isCustomComponent: true,
    fieldOptions: [
        {
            optionText: 'Checking',
            optionValue: 'checking'
        },
        {
            optionText: 'Saving',
            optionValue: 'saving'
        }
    ]
};
export const BANK_MONTHS_DATA: FieldsetDataInterface = {
    name: 'bankMonths',
    label: 'Length of Bank Account',
    fieldsetComponentType: 'select',
    fieldOptions: [
        {
            optionText: 'One Year or Less',
            optionValue: '12'
        },
        {
            optionText: '2 Years',
            optionValue: '24'
        },
        {
            optionText: '3 Years',
            optionValue: '36'
        },
        {
            optionText: '4 Years',
            optionValue: '48'
        },
        {
            optionText: '5 Years',
            optionValue: '60'
        },
    ]
};