import Logo from '../ui/icons/Logo';

export const Navbar = () => {
  return (
    <aside className="hidden md:flex flex-col w-24 h-screen pr-5 lg:w-[20rem] ">
      <nav className="flex flex-end justify-end lg:justify-center lg:flex-col lg:items-center">
        <div className="bg-white w-6 h-6 mt-3 lg:mb-6">
          <Logo fill="white" />
        </div>
        <ul className="hidden lg:flex flex-col gap-4 text-sm">
          <li>Home</li>
          <li>Explore</li>
          <li>Notifications</li>
          <li>Messages</li>
          <li>Lists</li>
          <li>Bookmarks</li>
          <li>Commuunities</li>
          <li>Premium</li>
          <li>Profile</li>
          <li>More</li>
        </ul>{' '}
      </nav>
    </aside>
  );
};
