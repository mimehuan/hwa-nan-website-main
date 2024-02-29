import { SelectedPage } from "@/shared/types";
import { Link } from "react-router-dom";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuToggled: (value: boolean) => void;
};

const NavBarLink = ({ page, selectedPage, setSelectedPage,  setIsMenuToggled}: Props) => {
  const lowerCasePage: string = page.toLowerCase().replace(/ /g, "-"); // treat this as a SelectedPage enum
  return (
    <Link
      to={`/${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage
          ? "active font-bold text-title-purple-100"
          : ""
      } link-underline link-underline-black w-max transition duration-100 hover:text-title-purple-100`}
      onClick={() => {setSelectedPage(lowerCasePage as SelectedPage); setIsMenuToggled(false);}}
    >
      {page}
    </Link>
  
  );
};

export default NavBarLink;
