import Image from "next/image";
import Header from "./components/header"; 
import MainShowcase from "./components/MainShowcase";
export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <MainShowcase />
      </div>
    </div>
  );
}
