import React from "react";
import { Link } from "react-router-dom";

export default function InPageNav() {
  return (
    <div className="leading-10  py-14">
      <div className="text-center">
        <div className="">
          <Link to="#" className="text-[14px]">
            New Arrivials
          </Link>
        </div>
        <div>
          <Link to="#" className="text-[25px] font-thin hover:text-slate-700">
            Men
          </Link>
        </div>
        <div>
          <Link to="#" className="text-[25px] font-thin hover:text-slate-700">
            Women
          </Link>
        </div>
        <div>
          <Link to="#" className="text-[25px] font-thin hover:text-slate-700">
            Children
          </Link>
        </div>
      </div>
    </div>
  );
}
