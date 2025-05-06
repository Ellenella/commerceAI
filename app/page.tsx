import Image from "next/image";
import Navbar from "./components/navbar/NavBar";
import StorePage from "./(commerce)/store/page";

export default function Home() {
  return (
    <div> 
      <main>
        <StorePage/>
      </main>
    </div>
  );
}
