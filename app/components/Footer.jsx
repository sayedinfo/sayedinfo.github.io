const Footer = () => {
  return (
    <div className="footer border-t-2 border-[#333] px-3 py-5">
      <div className="content text-[#d5d5d5] text-sm text-center md:flex items-center justify-between">
        <div className="link capitalize flex items-center md:justify-start justify-center gap-3">
          <a href="https://www.facebook.com/sayeed2011" target="_blank">
            facebook
          </a>
          <a href="https://www.linkedin.com/in/sayed2017" target="_blank">
            linkedin
          </a>
          <a href="https://github.com/ovi100" target="_blank">
            github
          </a>
        </div>
        <div className="copyright md:mt-0 mt-3">
          &copy; 2023 All rights reserved. Abu Sayed.
        </div>
      </div>
    </div>
  );
};

export default Footer;
