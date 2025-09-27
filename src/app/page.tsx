import Image from "next/image";
import Header from "./components/header"; 
import MainShowcase from "./components/MainShowcase";
import Navigation from "./components/navigation";
import Popup from "./components/Popup";
import HorizontalScroll from "./components/HorizontalScroll";
export default function Home() {
  return (
    <div>
      <div className="">
        <Header />
      </div>

      


      <div>
        <MainShowcase />
      </div>
      <div>
        <HorizontalScroll />
      </div>
      <div>
        <Popup />
      </div>
    </div>
  );
}
