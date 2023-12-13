import user from '../data/user.json';
import Logo from '../ui/icons/Logo';
import Settings from '../ui/icons/Settings';

export const Header = () => {
  const { urlavatar: profilePhoto } = user;
  return (
    <>
      <header className="md:flex md:flex-row md:w-full  md:pt-2 lg:pt-2  xl:pt-2  pb-2 text-sm">
        <section className="flex justify-between items-center p-2  md:order-2 ">
          <div className="md:hidden">
            <figure className="pt-1 ml-2">
              <img
                src={profilePhoto}
                alt="avatar"
                className="w-7 h-7 rounded-full "
              />
            </figure>
          </div>
          <div className="bg-white w-6 h-6 md:hidden">
            <Logo fill="white" />
          </div>
          <div className="w-5 h-5 mr-5">
            <Settings fill="white" />
          </div>
        </section>
        {/* For you Following */}
        <nav className="flex justify-around items-center p-2 md:order-1  md:gap-6 md:flex-1 ">
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
