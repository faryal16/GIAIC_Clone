"use client"
import React, { useState } from "react";
import "@/styles/About.css"; // Import the custom CSS file

const Page = () => {

  const images = [
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
    "/images/11.png",
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div id="container">
      {/* Heading Section */}
      <h1 id="heading">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
        Developing Billion-Dollar Valued Developers and Solopreneurs
      </h1>

      {/* Paragraph Section */}
      <p className="description">
        The pace of technological change is accelerating, big players like
        Microsoft, Amazon, Google, and OpenAI are winning by providing
        infrastructure, large AI foundation models, frameworks, 3D Metaverse
        experiences, and massive distribution networks. Solopreneurs trained in
        this program will win by automating work typically outsourced to
        employees, by directly connecting to customers by eliminating the
        middleman, and by developing vertical metaverses, thus paving the way
        for the first billion-dollar valued solopreneur businesses. This
        program has the objective to train this new breed of billion-dollar
        solopreneurs. These solopreneurs will adopt the ultra-lean business
        model and work independently and will not need to hire employees or
        other&nbsp;team&nbsp;members.
      </p>

      {/* Grid Section */}
      <div className="grid">
        <img
          className="grid-image"
          src="/images/1.png"
          alt="Solo 1"
        />
        <img
          className="grid-image"
          src="/images/2.png"
          alt="Solo 2"
        />
        <img
          className="grid-image"
          src="/images/3.png"
          alt="Solo 3"
        />
      </div>

      {/* Slideshow Section */}
      <div className="slideshow">
        <div className="relative overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Slide"
          className="w-full h-auto transition-all duration-300"
        />
      </div>
        <img
          className="slideshow-image"
          src="/images/4.png"
          alt="Slide 1"
        />
        <img
          className="slideshow-image"
          src="/images/5.png"
          alt="Slide 2"
        />
        <img
          className="slideshow-image"
          src="/images/6.png"
          alt="Slide 3"
        />
        <img
          className="slideshow-image"
          src="/images/7.png"
          alt="Slide 3"
        />
        <img
          className="slideshow-image"
          src="/images/8.png"
          alt="Slide 3"
        />
        <img
          className="slideshow-image"
          src="/images/9.png"
          alt="Slide 3"
        />
        <img
          className="slideshow-image"
          src="/images/10.png"
          alt="Slide 3"
        />
        <img
          className="slideshow-image"
          src="/images/11.png"
          alt="Slide 3"
        />
        {/* Add more images as necessary */}
      </div>
      
    </div>
  );
};

export default Page;
