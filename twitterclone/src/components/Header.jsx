import { useState } from "react";
import { NavLink } from "react-router-dom";
import user from "../data/user.json";
import Logo from "../ui/icons/Logo";
import Settings from "../ui/icons/Settings";


export const Header = () => {
  const [activeStyle, setActiveStyle] = useState(true);
    const { avatar: profilePhoto } = user;

  return (
    <>
      <header className="md:flex md:flex-row md:w-full  ">
        <section className="flex justify-between items-center p-2  md:order-2 ">
          <div className="md:hidden">
            <figure>
              <img
                src={profilePhoto}
                alt="avatar"
                className="w-6 h-6 rounded-full"
              />
            </figure>
          </div>
          <div className="bg-white w-6 h-6 md:hidden">
            <Logo fill="white" />
          </div>
          <div className="w-6 h-6">
            <Settings fill="white" />
          </div>
        </section>

        {/*For you Following*/}
        <nav className="flex justify-around items-center p-2 md:order-1  md:gap-6 md:flex-1">
          <section>
            <NavLink to="/">
              <span>For you</span>
            </NavLink>
          </section>
          <section>
            <NavLink to="/">
              <span>Following</span>
            </NavLink>
          </section>
        </nav>
      </header>
    </>
  );
};
