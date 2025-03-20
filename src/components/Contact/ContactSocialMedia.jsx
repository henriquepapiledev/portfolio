const ContactSocialMedia = ({ href, target, img }) => {
  return (
    <a className="block w-9 h-9" href={href} target={target}>
      {img}
    </a>
  );
};

export default ContactSocialMedia;
