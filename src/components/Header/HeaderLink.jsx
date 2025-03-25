const HeaderLink = ({ href, title }) => {
  return (
    <>
      <li>
        <a
          href={href}
          className="block link font-light text-sm text-black p-2 pb-0"
        >
          {title}
        </a>
      </li>
    </>
  );
};

export default HeaderLink;
