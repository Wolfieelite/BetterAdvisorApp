import * as z from "zod";
import { createFileRoute } from '@tanstack/react-router'
import FormElement from '#/components/FormElement'
import { useForm } from 'react-hook-form'

export const Route = createFileRoute('/newuser')({
  component: RouteComponent,
})

function RouteComponent() {
  const form = useForm()

  return (
    <form>
      <FormElement<z.infer<typeof loginFormSchema>> form={form} inputType='email' name="username" htmlForId='username' label='Username' />

    </form>
  )
}
