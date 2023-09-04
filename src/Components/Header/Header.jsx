import { Fragment } from "react";
import logo from "../../assets/images/logo-bg-removed.png";

export default function Header() {
  return (
    <Fragment>
      <header className=" h-20 flex justify-between items-center">
        <span className="flex items-center space-x-2 w-1/2 ml-10 cursor-pointer">
          <img src={logo} alt="some alternative text" className="h-12" />
          <span className="text-customBlue text-xl font-semibold">JETMA</span>
        </span>
        <ul className="flex space-x-5 w-1/2 justify-end mr-10 text-gray-600">
          <li className="cursor-pointer hover:text-customBlue">Flights</li>
          <li className="cursor-pointer hover:text-customBlue">Reservations</li>
          <li className="cursor-pointer hover:text-customBlue">Sign Up</li>
          <li className="cursor-pointer hover:text-customBlue">Sign In</li>
        </ul>
      </header>
    </Fragment>
  );
}
