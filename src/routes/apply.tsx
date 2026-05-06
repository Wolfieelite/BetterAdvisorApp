import FormElement from '#/components/FormElement';
import { Button } from '#/components/ui/button';
import { FieldGroup } from '#/components/ui/field';
import { applySchema } from '#/schema/application.schema';
import { apply } from '#/services/authService';
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

  const onApply = async (data: z.infer<typeof applySchema>) => {
    console.log("student applying");
    const result = await apply(data.firstName, data.lastName, data.email);
    console.log(result);
  }

  return (
    <>
      <section className='h-full flex flex-col gap-4 justify-center align-middle lg:grid lg:grid-cols-2 m-auto'>
        <form className='form-wrapper order-2 px-8' id='applyForm' onSubmit={form.handleSubmit(onApply)}>
          <h1 className='text-3xl'>Apply at the college of the redwoods</h1>
          <hr />
          <FieldGroup>
            <FormElement form={form} label='First name' htmlForId='firstName' inputType='text' name='firstName' />
            <FormElement form={form} label='Last name' htmlForId='lastName' inputType='text' name='lastName' />
            <FormElement form={form} label='Email' htmlForId='email' inputType='email' name='email' />
            <Button className="cursor-pointer" type={"submit"} variant={"default"} form={"applyForm"}>Apply</Button>
          </FieldGroup>
        </form>
      </section>
    </>
  )
}

