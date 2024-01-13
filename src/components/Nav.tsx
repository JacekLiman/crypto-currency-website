import { navData } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-8 items-center">
        {navData.map((item, idx) => {
          return (
            <li className=" border-b-2 border-transparent hover:border-blue transition-all duration-300" key={idx}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
