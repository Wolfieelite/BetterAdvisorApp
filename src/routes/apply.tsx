import FormElement from '#/components/FormElement';
import { Button } from '#/components/ui/button';
import { FieldGroup } from '#/components/ui/field';
import { applySchema } from '#/schema/application.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import z from 'zod';

export const Route = createFileRoute('/apply')({
  component: RouteComponent,
})


function RouteComponent() {
  const form = useForm<z.infer<typeof applySchema>>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    }
  })

  return (
    <>
      <form className='p-12' id='applyForm'>
        <h1>Apply at the college of the redwoods</h1>
        <hr />
        <FieldGroup >
          <FormElement form={form} label='First name:' htmlForId='firstname' inputType='text' name='firstName' />
          <FormElement form={form} label='Last name' htmlForId='lastName' inputType='text' name='lastName' />
          <FormElement form={form} label='Email' htmlForId='email' inputType='email' name='email' />
          <Button className="cursor-pointer" type={"submit"} variant={"default"} form={"applyForm"}>Apply</Button>
        </FieldGroup>
      </form>
    </>
  )
}

