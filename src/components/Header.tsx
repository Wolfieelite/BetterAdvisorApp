import { imageSVG } from "#/utilz/image"
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b-2">
      <ul className="flex flex-row justify-between">
        <li>
          <Link to="/">
            <img src={imageSVG.mainLogo.src} alt="The better advisor logo" />
          </Link>
        </li>

        <li className="flex gap-3">
          {/*Create the enroll route path to fix error*/}
          <Link to="/enroll">
            <Button variant={"default"}>Enroll</Button>
          </Link>
          <Link to="/login">
            <Button variant={"secondary"}>login</Button>
          </Link>
        </li>
      </ul>
    </header>
  )
}
