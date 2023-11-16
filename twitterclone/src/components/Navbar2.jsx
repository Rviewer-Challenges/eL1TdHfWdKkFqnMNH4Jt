import Logo from "../ui/icons/Logo";
const Navbar2 = () => {
  return (
    <aside className="hidden md:flex flex-col w-20  pr-5 lg:w-[24rem] lg:items-center h-full">
      <nav className="flex flex-end justify-end">
        <div className="bg-white w-6 h-6 lg:hidden mt-3">
          <Logo fill="white" />
        </div>
        <ul className="hidden lg:flex flex-col">
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
        </ul>{" "}
      </nav>
    </aside>
  );
}
export default Navbar2
