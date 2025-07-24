import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  error?: FieldError;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, name, placeholder = "", rows = 4, error, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2 font-Satoshi">
        <label htmlFor={name}  className="text-neutral-70 leading-6 font-bold">
          {label}
          <span className="text-primary-10"> *</span>
        </label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={rows}
          ref={ref}
         className={`px-[18px] py-[14px] rounded-lg bg-white border focus:outline-none focus:border-primary-10 transition duration-300 ${
            error ? "border-primary-10" : "border-neutral-55"
          }`}
          {...rest}
        ></textarea>
        {error && <span className="text-red-500 text-sm">{error.message}</span>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
