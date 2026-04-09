import { Field, FieldGroup, FieldLabel, FieldError } from '#/components/ui/field'
import { Controller } from 'react-hook-form';
import type { UseFormReturn, FieldValues, Path } from 'react-hook-form';
import { Input } from './ui/input';

type InputType = "email" | "password" | "date"

interface FormElementProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  inputType: InputType;
  name: Path<T>;
  label: string;
  htmlForId: string;
}

function FormElement<T extends FieldValues>({ form, inputType, name, htmlForId, label }: FormElementProps<T>) {
  return (
    <FieldGroup>
      <Controller
        name={name}
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={htmlForId}>{label}</FieldLabel>
            <Input
              className={fieldState.invalid ? 'border-red-400 outline-0 aria-invalid:ring-red-400' : ' '}
              type={inputType}
              {...field}
              id={htmlForId}
              aria-invalid={fieldState.invalid} />
            {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
          </Field>
        )}
      />
    </FieldGroup>
  )
}

export default FormElement
