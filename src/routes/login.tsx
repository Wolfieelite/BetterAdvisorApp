import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '#/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form';
import Header from '#/components/Header'
import { login } from '#/services/authService'
import FormElement from '#/components/FormElement'

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
      <Header />
      <form
        className="form-wrapper-half"
        id="loginForm"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormElement<z.infer<typeof loginFormSchema>> form={form} inputType='input' name="username" htmlForId='username' label='Username' />
        <FormElement<z.infer<typeof loginFormSchema>> form={form} inputType='password' name="password" htmlForId='password' label='Password' />
        <Button className="cursor-pointer" type={"submit"} variant={"outline"} form={"loginForm"}>Log in</Button>
      </form>
    </>
  )
}
