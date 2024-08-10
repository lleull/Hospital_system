import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'
import { Input } from './input'
import { Control } from 'react-hook-form'
// import formContr
export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}


interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    iconsAlt: string,
    label?: string,
    iconSrc: string,
    placeholder?: string,
    disabled: boolean,
    dateFormat?: string,

    // fieldType: FormFieldType
}


const CustomFormField = ({ disabled, control, fieldType, name, iconsAlt, label, iconSrc, placeholder }: CustomProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    {fieldType !== FormFieldType.CHECKBOX && (
                        <FormLabel>{label}</FormLabel>
                    )}

                </FormItem>
            )}
        />)
}

export default CustomFormField   