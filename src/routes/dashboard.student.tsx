import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/student')({
  beforeLoad: () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (user?.metadata?.userType !== "Student") {
      throw redirect({ to: "/" })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/student"!</div>
}
