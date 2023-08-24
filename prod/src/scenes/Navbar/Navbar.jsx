import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ val, page, selectedPage, setSelectedPage, className }) => {
  return (
    <AnchorLink
      className={`${
        selectedPage === val ? "text-cyan-200" : ""
      } hover:text-cyan-200 transition duration-500, ${className}`}
      href={val === "ig" ? `#home` : `#${val}`}
      onClick={() => setSelectedPage(val)}
    >
      {val === "ig" ? "IG" : page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-black";
  const { i18n } = useTranslation();
  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <nav className={`${navbarBackground} z-40 w-full sticky top-0 py-4`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <Link
          page="IG"
          val="ig"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          className="font-opensans text-6xl font-bold hover:text-white"
        />

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between items-center gap-16 font-opensans text-lg font-semibold top-0 sticky">
            <Link
              page={i18n.t("home")}
              val="home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={i18n.t("skills")}
              val="skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={i18n.t("testimonials")}
              val="testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={
                i18n.t("contact").charAt(0).toUpperCase() +
                i18n.t("contact").slice(1)
              }
              val="contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <span className="flex items-center gap-2">
              <img
                className="aspect-square h-9 cursor-pointer"
                alt="TR"
                src="../assets/tr.png"
                onClick={() => clickHandle("tr")}
              />
              |{" "}
              <img
                className="aspect-square ml-0.5 h-7 cursor-pointer"
                alt="EN"
                src="../assets/uk.png"
                onClick={() => clickHandle("en")}
              />
            </span>
          </div>
        ) : (
          <div className="flex gap-3">
            <span className="flex items-center gap-2">
              <img
                className="aspect-square h-9 cursor-pointer"
                alt="TR"
                src="../assets/tr.png"
                onClick={() => clickHandle("tr")}
              />
              |{" "}
              <img
                className="aspect-square ml-0.5 h-7 cursor-pointer"
                alt="EN"
                src="../assets/uk.png"
                onClick={() => clickHandle("en")}
              />
            </span>
            <button
              className="rounded-full border-2 border-white p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menu-icon" src="../assets/menu-icon.svg" />
            </button>
          </div>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-black w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="-translate-y-3"
              >
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
