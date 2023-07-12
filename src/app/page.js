import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header/Header";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div>
      <div id="home">
        <Header />
      </div>
      <br />
      <br />
      <div id="about" className="px-3">
        <About />
      </div>
      <br />
      <br />
      <div id="services" className="px-3">
        <Services />
      </div>
      <br />
      <br /> <br />
      <br />
      <div id="gallery">
        <Gallery />
      </div>
      <br />
      <br />
      <div id="contact">
        <Contact />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
