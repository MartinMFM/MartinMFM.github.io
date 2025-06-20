import "./App.css";

import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Qualification } from "./components/qualification/Qualification";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { ScrollUp } from "./components/scrollup/ScrollUp";
import { Work } from "./components/work/Work";
import Certificates from "./components/certificates/Certificates";

export const App = () => {
  return (
    <LanguageProvider>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Certificates />
        <Qualification />
        <Work />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </LanguageProvider>
  );
};
