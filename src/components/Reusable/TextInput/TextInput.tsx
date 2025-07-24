/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: any;
  isDisabled?: boolean;
  isRequired?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      name,
      placeholder = "",
      type = "text",
      error,
      defaultValue,
      isDisabled = false,
      isRequired = true,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-2 font-Satoshi w-full">
        <label htmlFor={name} className="text-neutral-70 leading-6 font-bold">
          {label}
          {isRequired && <span className="text-primary-10">*</span>}
        </label>
        <input
          required={isRequired}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          ref={ref}
          disabled={isDisabled}
          className={`px-[18px] py-[14px] rounded-lg bg-white border focus:outline-none focus:border-primary-10 transition duration-300 ${
            error ? "border-primary-10" : "border-neutral-55"
          }`}
          {...rest}
        />
        {error?.message && (
          <span className="text-red-500 text-sm">{String(error.message)}</span>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
