import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";

const StudioHeader = (props: any) => {
  return (
    <div>
      <div className="p-5 bg-black text-gray-100 flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-3 font-semibold hover:text-blue-600 duration-200"
        >
          <IoReturnDownBack className="text-2xl" /> Go to Website
        </Link>
        <h1 className="text-2xl font-bold text-gray-100">SEXBOMB</h1> {/* Replaced logo with text */}
        <p className="text-sm">Admin Studio</p>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default StudioHeader;