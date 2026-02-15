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
export const BANK_NAME_DATA: FieldsetDataInterface = {
    name: 'bankName',
    label: 'Bank Name',
    placeholder: 'Bank Name',
    fieldType: 'text',
    fieldsetComponentType: 'input',
    autocomplete: 'on'
};
export const BANK_ROUTING_NUMBER_DATA: FieldsetDataInterface = {
    name: 'bankRoutingNumber',
    label: 'Bank Routing Number',
    placeholder: '9-digit Bank Routing Number',
    tooltip: 'Where would you like the funds to be deposited',
    fieldType: 'number',
    fieldsetComponentType: 'bankRoutingNumberComponent',
    isCustomComponent: true,
    autocomplete: 'on',
    mask: '000000000',
    helpImageUrl: '/imageprocessors?i=routing-number.jpg'
};
export const CITY_DATA: FieldsetDataInterface = {
    name: 'city',
    label: 'City',
    placeholder: 'Home City',
    fieldType: 'text',
    fieldsetComponentType: 'input',
    autocomplete: 'on'
};
export const CREDIT_SCORE_DATA: FieldsetDataInterface = {
    name: 'creditScore',
    label: 'Credit Score',
    fieldsetComponentType: 'select',
    fieldOptions: [
        {
            optionText: 'Excellent Credit (720-850)',
            optionValue: 'excellent'
        },
        {
            optionText: 'Good Credit (690-719)',
            optionValue: 'good'
        },
        {
            optionText: 'Fair Credit (630-689)',
            optionValue: 'fair'
        },
        {
            optionText: 'Bad Credit (300-629)',
            optionValue: 'bad'
        },
        {
            optionText: 'Not Sure',
            optionValue: 'notSure'
        },
    ]
};