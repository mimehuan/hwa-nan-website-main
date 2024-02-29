import Navbar from "@/scenes/navbar"; // referencing the folder w index.tsx, no need to directly import index.tsx
import VideoMain from "@/components/VideoMain";
import Footer from "@/components/Footer";
import MoreStuff from "@/components/MoreStuff";
import CarouselMain from "@/components/CarouselMain";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { Route, Routes } from "react-router-dom";
import About from "./scenes/about";
import Contribute from "./scenes/contribute";
import NewsAndEvents from "./scenes/newsandevents";
import Recruitment from "./scenes/recruitment";
import StudyInUS from "./scenes/studyinus";
import Home from "./scenes/home";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${SelectedPage.About}`} element={<About />} />
        <Route path={`/${SelectedPage.NewsAndEvents}`} element={<NewsAndEvents />} />
        <Route path={`/${SelectedPage.Recruitment}`} element={<Recruitment />} />
        <Route path={`/${SelectedPage.StudyInUS}`} element={<StudyInUS />} />
        <Route path={`/${SelectedPage.Contribute}`} element={<Contribute />} />
    </Routes>
    <div className="app bg-white text-title-purple-500">
      <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
     <VideoMain />
     <MoreStuff />
     <CarouselMain/>
     <Footer />
     
    </div>
    </>
  );
}

export default App;
