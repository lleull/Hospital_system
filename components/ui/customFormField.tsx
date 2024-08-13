import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'
import { Input } from './input'
import { Control } from 'react-hook-form'
import Image from "next/image";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import calendar from "/assets/icons/calendar.svg"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
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
    iconSrc?: string,
    placeholder?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,

    // fieldType: FormFieldType
}

const RenderField = ({ field, props }: { field: any, props: CustomProps }) => {
    const { disabled, control, fieldType, name, iconsAlt, label, iconSrc, placeholder } = props

    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (

                <div className="flex border-dark-400 rounded-md bg-dark-500">
                    {props.iconSrc && (
                        <Image src={iconSrc} alt={iconsAlt || "ICON"} width={24} height={24} className="ml-2" />
                    )}
                    <FormControl>
                        <Input placeholder={placeholder}  {...field} className="shad-input border-0" />
                    </FormControl>

                </div>
            )
        case FormFieldType.PHONE_INPUT:
            return (


                <FormControl >
                    <PhoneInput
                        defaultCountry='ET'
                        placeholder="Enter phone number"
                        international
                        withCountryCallingCode
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className='input-phone'
                    />

                </FormControl >

            )
        case FormFieldType.DATE_PICKER:
            return (
                <div className='flex rounded-md border border-dark-500 bg-dark-400'>

                    <Image
                        src={calendar}
                        height={24}
                        width={24}
                        alt="logo"
                        className='ml-2'
                    />
                    <FormControl>
                        <DatePicker selected={field.value} onChange={(date) => field.onChange(date)} />
                    </FormControl>


                </div>
            )
        case FormFieldType.SKELETON:
            return;
        default:
            break;
    }
}


const CustomFormField = (props: CustomProps) => {
    const { disabled, control, fieldType, name, iconsAlt, label, iconSrc, placeholder } = props
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}
                    <RenderField field={field} props={props} />
                    <FormMessage className="shad-error" />
                </FormItem>
            )}
        />)
}

export default CustomFormField   