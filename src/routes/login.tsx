import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '#/components/ui/button'
import { Field, FieldGroup, FieldLabel, FieldSet, FieldError } from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { createFileRoute } from '@tanstack/react-router'
import { Controller, useForm } from 'react-hook-form';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const loginFormSchema = z.object({
    username: z.string().min(3, "Username needs to be longer than 3 characters"),
    password: z.string().min(5, "Password needs to be greater than 5 charcters"),
  });

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { username: "", password: "" }
  })

  const onSubmit = (data: z.infer<typeof loginFormSchema>) => {
    console.log("submit")
    alert(JSON.stringify(data));
    console.log(data)
    console.log("clicked!")
  }

  return (
    <form id="loginForm" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="px-1 py-5 md:px-12 lg:w-2xl lg:flex mx-auto my-auto">
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                className={fieldState.invalid ? 'border-red-400 outline-0 aria-invalid:ring-red-400' : ''}
                type='email'
                {...field}
                id='username'
                aria-invalid={fieldState.invalid} />
              {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                className={fieldState.invalid ? 'border-red-400 outline-0 aria-invalid:ring-red-400' : ''}
                type="password"
                {...field}
                id='password'
                aria-invalid={fieldState.invalid} />
              {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
            </Field>
          )}
        />
      </FieldGroup>
      <Button className="cursor-pointer" type={"submit"} variant={"outline"} form={"loginForm"}>Log in</Button>
    </form>
  )
}
