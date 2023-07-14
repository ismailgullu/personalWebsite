const SocialMediaIcons = ({ className }) => {
  return (
    <div
      className={
        ("flex justify-center md:justify-start my-10 gap-7", className)
      }
    >
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ismail-gullu/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
