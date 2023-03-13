import Head from "next/head";
import React from 'react';
import Decentralize from "./Components/Decentralize";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import Courses from "./Components/Courses";
import Work from "./Components/Work";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";



export default function Home() {
  return (
   <div>
    <header>
    <NavBar />
    </header>
    <main>
    <Hero />
    <Decentralize />
    <Courses />
    <Third />
    <Fourth />
    <Contact />
    </main>
    <footer>
      <Footer />
    </footer>
   </div>
  );
}
