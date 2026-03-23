import { Button } from '#/components/ui/button'
import { FieldGroup, FieldLabel, FieldSet } from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import { createFileRoute } from '@tanstack/react-router'
import type { SubmitEventHandler } from 'react'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <form>
      <FieldSet className='px-1 py-5 lg:px-64 lg:py-12'>
        <FieldGroup>
          <FieldLabel htmlFor='username'>Username</FieldLabel>
          <Input id='username' type="text" placeholder='Enter your username' required />
        </FieldGroup>
        <FieldGroup>
          <FieldLabel htmlFor='password'>Password</FieldLabel>
          <Input id='password' type="password" placeholder='Enter your password' required />
        </FieldGroup>

        <Button variant={"outline"}>Submit</Button>

      </FieldSet>
    </form>
  )
}
