import { imageSVG } from "#/utilz/image"
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b-2 flex justify-between items-center">
      <Link to="/">
        <img src={imageSVG.mainLogo.src} width={120} height={120} alt="The better advisor logo" />
      </Link>

      <ul className="flex gap-3 h-full bg-red-50">
        <li className="">
          {/*Create the enroll route path to fix error*/}
          <Link to="/enroll">
            <Button variant={"secondary"}>Enroll</Button>
          </Link>
        </li>

        <li>
          <Link to="/login">
            <Button variant={"secondary"}>Student portal</Button>
          </Link>
        </li>

        <li>
          <Link to="/search">
            <Button variant={"secondary"}>Search classes</Button>
          </Link>
        </li>
      </ul>
    </header>
  )
}
