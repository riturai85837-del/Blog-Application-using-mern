import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import SingleBlog from "./SingleBlog";
import SignUp from "./SignUp";
import Login from "./Login";  
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Blogs />
      <Footer />
      <SingleBlog/>
      <SignUp/>
      <Login/>
    
    </>
  );
};

export default Home;