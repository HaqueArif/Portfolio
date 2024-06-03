import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
