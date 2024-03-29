const NavItem = ({ id, link }) => {
  return (
    <li className="relative group">
      <a
        href={`#${id}`}
        className="ud-menu-scroll capitalize text-base text-dark md:text-white md:group-hover:opacity-70 md:group-hover:text-white group-hover:text-primary py-2 md:py-6 md:inline-flex md:px-0 flex mx-8 md:mr-0 md:ml-7 xl:ml-12"
      >
        {link}
      </a>
    </li>
  );
};

export default NavItem;
