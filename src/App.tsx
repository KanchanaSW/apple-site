import Navbar from "@/scenes/navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"

import About from "@/scenes/about"
import ContactUs from "@/scenes/contactUs"
import Footer from "@/scenes/footer"
import Home from "@/scenes/home"
import Products from "@/scenes/products"
import Features from "@/scenes/features"

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-white">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Products setSelectedPage={setSelectedPage} />

      <Features setSelectedPage={setSelectedPage} />

      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
