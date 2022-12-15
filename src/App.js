import React from "react";
import { RouterProvider } from "react-router";
import Header from './header/header';
import Nav from './navigation/nav';
import Section from "./section/section";
import Footer from "./footer/footer";
function App() {
  return (
    <div>
      {console.clear()}
        <Header />
        <Nav />
        <Section />
		<Footer />
    </div>
  );
}

export default App;
