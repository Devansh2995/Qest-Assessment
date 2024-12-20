

import React from "react";
import "./Empowering.css";
import Carousel from "./Corousel";

const Empowering = () => {
  const carouselData = [
    {
      imgSrc: "/Sports.png",
      altText: "Sports",
      title: "Sports",
      description:
        "From fitness studios to sports academies, Rmax empowers sports businesses.",
    },
    {
      imgSrc: "/health.png",
      altText: "Healthcare and Wellness",
      title: "Healthcare & Wellness",
      description:
        "Health and wellness service providers—from yoga instructors and gyms.",
    },
    {
      imgSrc: "/Learning-activities.jpg",
      altText: "Learning Activities",
      title: "Learning Activities",
      description:
        "Tutors, educators, and learning centers—from music schools to art studios.",
    },
    {
      imgSrc: "/technology.jpg",
      altText: "Technology",
      title: "Technology",
      description: "Empowering tech providers to deliver exceptional services.",
    },
    {
      imgSrc: "/logistics.jpg",
      altText: "Logistics",
      title: "Logistics",
      description:
        "Streamlining operations for logistics and supply chain businesses.",
    },
    {
      imgSrc: "/Retail.jpg",
      altText: "Retail",
      title: "Retail",
      description:
        "Enhancing retail businesses to provide better customer experiences.",
    },
  ];

  return (
    <section className="empowering-service">
      <div className="empower-container">
        <h2>Empowering Service Providers Across Industries</h2>
        <p>
          Whether you're in sports, education, wellness, household services, or
          niche markets, our technology simplifies your business operations,
          making it easier for you to focus on what you do best.
        </p>
        <Carousel items={carouselData} />
      </div>
    </section>
  );
};

export default Empowering;
