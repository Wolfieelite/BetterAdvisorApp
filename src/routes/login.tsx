import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '#/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form';
import { login } from '#/services/authService'
import FormElement from '#/components/FormElement'
import { FieldGroup } from '#/components/ui/field';

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

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    const result = await login(data.username, data.password);
    console.log("submit")
    console.log(result)
  }

  return (
    <>
      <section className='h-full flex flex-col gap-4 justify-center align-middle lg:grid lg:grid-cols-2 m-auto'>
        <form
          className="form-wrapper order-2"
          id="loginForm"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <header>
            <h1 className='text-3xl text-accent-100'>Student login</h1>
            <hr className='text-accent-100' />
          </header>

          <FieldGroup className='px-8'>
            <FormElement<z.infer<typeof loginFormSchema>> form={form} inputType='email' name="username" htmlForId='username' label='Username' />
            <FormElement<z.infer<typeof loginFormSchema>> form={form} inputType='password' name="password" htmlForId='password' label='Password' />
            <div className='flex flex-row-reverse'>
              <Button className="cursor-pointer text-accent-100" type={"submit"} variant={"default"} form={"loginForm"}>Log in </Button>
              <Button className="cursor-pointer text-accent-100" type='button' variant={"ghost"}>Forgot password</Button>
            </div>
          </FieldGroup>

        </form>

        <div className='hidden text-accent-100 lg:block lg:text-8xl'>
          <p>Your future</p>
          <p>starts here!</p>
        </div>
      </section>
    </>
  )
}
