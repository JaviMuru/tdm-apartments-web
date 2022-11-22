import React from 'react'
import {Navbar} from "../../components/Navbar";
import './Home.styles.css'
import './Home.new.styles.css'
import {About} from "../../components/About";
import {Rooms} from "./components/Rooms";
import {Slider} from "./components/Slider";
import {Footer} from "../../components/Footer";
import {Facilities} from "../../components/Facilities";

export const Home = () => {
  return (
    <>
      <Navbar/>
      <Slider/>
      <About/>
      <Rooms/>
      <Facilities/>
      <Footer/>
    </>
  )
}
