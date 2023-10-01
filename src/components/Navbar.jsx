import { navLinks } from "../constants";


const Navbar = () => {
  return (
    <nav className="hidden w-full fixed top-0 z-20 bg-gradient-to-b from-primary to-tertiary h-16 md:flex lg:flex items-center py-5">
      <div className="w-full flex justify-around items-center max-w-full">
        <h1 className="text-[#ffffff] font-nunito">
          Lucas Albornoz
        </h1>
        <ul className="list-none hidden sm:flex flex-row flex-end gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-[#ffffff] cursor-pointer hover:text-lightblue"
            >
              <a href={nav.linkTo}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
