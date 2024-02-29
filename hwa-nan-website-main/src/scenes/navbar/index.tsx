import { Bars3Icon, XMarkIcon, GiftIcon } from "@heroicons/react/24/solid";
import NavBarLink from "./NavBarLink";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import NavPic from "@/assets/bg-overview.jpg";
import { Link } from "react-router-dom";
import ContributeButton from "@/components/ContributeButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props) {
  const items = ["ABOUT", "NEWS AND EVENTS", "RECRUITMENT", "STUDY IN U.S."];
  const flexCenter = "flex items-center justify-center"; // move close to center & align vertically in center
  const flexBetween = "flex items-center justify-between"; // move to opposite ends of div & align vertically in center
  const centerColumn = "flex flex-col items-center justify-center"; // center the elements in a column
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 820px)");
  const mobileNavBarBg = isTopOfPage ? "" : "bg-gray-50";
  return (
    <nav>
      {isAboveMediumScreens ? (
        <div className={`${centerColumn} w-full pb-2`}>
          <Link
            to="/"
            onClick={() => {
              setSelectedPage(SelectedPage.Home);
            }}
          >
            <div className={`${flexCenter} w-full py-4`}>
              <span className="text-3xl">HWA NAN</span>
              <span className="font-barlowcondensedthin text-3xl font-light">
                &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
              <span className="font-taprom text-3xl font-thin">
                alumnae inc
              </span>
            </div>
          </Link>

          <div className={`${flexCenter}`}>
            <div className={`${flexCenter} gap-16 font-inter text-sm`}>
              <div className={`${flexCenter} gap-20`}>
                {items.map((item, index) => (
                  <NavBarLink
                    page={item}
                    key={item + index}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    setIsMenuToggled={setIsMenuToggled}
                  />
                ))}
              </div>
              <ContributeButton
                className={`btn-invert gap-2 rounded-lg bg-violet-400 p-2 font-extrabold`}
                classIfSelected={"btn-invert:hover"}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              >
                <GiftIcon className="h-5 w-5" />
                CONTRIBUTE
              </ContributeButton>
            </div>
          </div>
        </div>
      ) : (
        // MOBILE NAV VER
        <div className={`${mobileNavBarBg} fixed top-0 z-30 w-full p-3`}>
          <div className={`${flexBetween} w-full`}>
            <button
              className="p-2.5"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-8 w-8 text-title-purple-500" />
            </button>

            <Link
              to="/"
              className="text-2xl"
              onClick={() => setSelectedPage(SelectedPage.Home)}
            >
              HWA NAN
            </Link>
            <ContributeButton
              className="btn-invert rounded-2xl bg-violet-400 p-2"
              classIfSelected="btn-invert:hover"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            >
              <GiftIcon className="h-6 w-6" />
            </ContributeButton>
          </div>
        </div>
      )}

      {/** MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 left-0 z-40 h-full w-full overflow-auto bg-white px-5 py-3">
          <div className={`${flexBetween}`}>
            <Link
              to="/"
              className={`w-full`}
              onClick={() => {
                setIsMenuToggled(false);
                setSelectedPage(SelectedPage.Home);
              }}
            >
              <span className="text-2xl">HWA NAN</span>
              <span className="font-barlowcondensedthin text-2xl font-light">
                &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
              <span className="font-taprom text-2xl font-thin">
                alumnae inc
              </span>
            </Link>

            {/* ClOSE ICON */}
            <div className="flex justify-end">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-title-purple-100" />
              </button>
            </div>
          </div>

          <div className={`overlay-purple my-10 flex justify-center`}>
            <img
              className="overlay-img flex justify-center border-4 border-primary-purple-50/25"
              src={NavPic}
              alt="navpic"
            />
          </div>

          <div className={`flex flex-col gap-10 text-2xl`}>
            {items.map((item, index) => (
              <NavBarLink
                page={item}
                key={item + index}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              />
            ))}
            <div>
              <ContributeButton
                className={`link-underline link-underline-black gap-2 font-extrabold`}
                classIfSelected="text-title-purple-100"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setIsMenuToggled={setIsMenuToggled}
              >
                CONTRIBUTE
                <GiftIcon className="h-5 w-5" />
              </ContributeButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
