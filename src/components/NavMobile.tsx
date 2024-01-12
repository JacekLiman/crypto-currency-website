import { navData } from "../data";
import { CgClose } from "react-icons/cg";

type NavMobileProps = {
  setNavMobile:(arg:boolean)=>void
}

const NavMobile = ({setNavMobile}:NavMobileProps) => {
  return (
    <nav className=" bg-violet h-full w-80 flex justify-center items-center">
      <div onClick={()=>setNavMobile(false)} className="absolute top-2 left-2 cursor-pointer">
        <CgClose className="text-3xl" />
      </div>

      <ul className="text-xl flex flex-col gap-y-8 items-center">
        {navData.map((item, idx) => {
          return (
            <li key = {idx}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
