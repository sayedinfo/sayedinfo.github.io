import { person } from "../data";

const Footer = () => {
  const socialLink = person.social_media;
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer border-t-2 border-theme dark:border-[#333333] px-3 py-5">
      <div className="content text-sm text-center md:flex items-center justify-between">
        <div className="link capitalize flex items-center md:justify-start justify-center gap-3">
          {socialLink.map((item) => (
            <a
              className="text-theme dark:text-[#d5d5d5] hover:text-blue-500"
              href={item.link}
              target="_blank"
              key={item.name}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="copyright text-theme dark:text-[#d5d5d5] md:mt-0 mt-3">
          &copy; {year} All rights reserved. Abu Sayed.
        </div>
      </div>
    </div>
  );
};

export default Footer;
