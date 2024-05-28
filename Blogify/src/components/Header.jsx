import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-3xl font-semibold dark:text-white"
      >
        <span
          className="px-2 py-1 text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg bg-clip-text"
          style={{ fontFamily: "Times New Roman" }}
        >
          MERN BLOGIFY
        </span>
      </Link>

      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Link to="/sign-in">
          <Button
            gradientDuoTone="purpleToBlue"
            style={{ fontFamily: "Times New Roman" }}
          >
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link
            to="/"
            className="text-lg font-serif"
            style={{ fontFamily: "Times New Roman" }}
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link
            to="/about"
            className="text-lg font-serif"
            style={{ fontFamily: "Times New Roman" }}
          >
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link
            to="/projects"
            className="text-lg font-serif"
            style={{ fontFamily: "Times New Roman" }}
          >
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
