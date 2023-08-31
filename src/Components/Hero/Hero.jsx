import { Fragment } from "react";
import background from "../../assets/images/bg.jpg";
export default function Hero() {
  return (
    <Fragment>
      <div className="h-screen">
        <img src={background} className="opacity-10 -z-10 absolute" />
        <div className=" h-4/5 flex flex-col justify-center space-y-20">
          <span className="text-customBlue font-bold text-6xl">
            It'more than
            <br />
            just a trip
          </span>
          <ul className="flex justify-center ">
            <li className=" h-10 w-1/5">
              <select className="w-full h-10 text-gray-600 ">
                <option value="">From Where ?</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
            </li>
            <li className=" h-10 w-1/5">
              <select className="w-full h-10 text-gray-600">
                <option value="">Where To ?</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
            </li>
            <li className=" h-10 w-1/5">
              <select className="w-full h-10 text-gray-600">
                <option value="">Depart - Return</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
            </li>
            <li className=" h-10 w-1/5">
              <input
                type="text"
                className="w-full h-10 text-gray-600"
                placeholder="1 Adult"
              />
            </li>
            <li className="px-10 flex items-center rounded-sm text-white bg-customBlue cursor-pointer">
              Search
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
