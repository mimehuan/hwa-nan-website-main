import { SelectedPage } from "@/shared/types";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  className: string;
  classIfSelected: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuToggled: (value: boolean) => void;
};

const ContributeButton = ({
  children,
  className,
  classIfSelected,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}: Props) => {
  const flexCenter = "flex items-center justify-center"; // move close to center & align vertically in center

  return (
    <Link
      to={`/${SelectedPage.Contribute}`}
      // className={className}
      onClick={() => {
        setSelectedPage(SelectedPage.Contribute);
        setIsMenuToggled(false);
      }}
    >
      <button
        className={`${className} ${flexCenter} ${
          selectedPage === "contribute" ? `active ${classIfSelected}` : "text-violet-400"
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default ContributeButton;
