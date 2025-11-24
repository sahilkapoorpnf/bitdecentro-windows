import { useState } from "react";
import { SlideContainer } from "@/components/SlideContainer";
import { Slide1 } from "@/components/slides/Slide1";
import { Slide2 } from "@/components/slides/Slide2";
import { Slide3 } from "@/components/slides/Slide3";
import { Slide4 } from "@/components/slides/Slide4";
import { Slide5 } from "@/components/slides/Slide5";
import { Slide6 } from "@/components/slides/Slide6";
import { Slide7 } from "@/components/slides/Slide7";
import { Slide8 } from "@/components/slides/Slide8";
import { Slide9 } from "@/components/slides/Slide9";
import { Slide10 } from "@/components/slides/Slide10";
import { Slide11 } from "@/components/slides/Slide11";
import { Slide12 } from "@/components/slides/Slide12";
import { Slide13 } from "@/components/slides/Slide13";
import { Slide14 } from "@/components/slides/Slide14";
import { Slide15 } from "@/components/slides/Slide15";
import { Slide16 } from "@/components/slides/Slide16";
import { Slide17 } from "@/components/slides/Slide17";

const slides = [
  { component: <Slide1 />, title: "Customer Workflow - App Homepage", section: "Customer" },
  { component: <Slide2 />, title: "Size Entry & Photo Upload", section: "Customer" },
  { component: <Slide3 />, title: "Choose Window Type", section: "Customer" },
  { component: <Slide4 />, title: "Price Estimation", section: "Customer" },
  { component: <Slide5 />, title: "Schedule Appointment", section: "Customer" },
  { component: <Slide6 />, title: "Payment & Confirmation", section: "Customer" },
  { component: <Slide7 />, title: "Technician Visit", section: "Customer" },
  { component: <Slide8 />, title: "Installation Progress Tracking", section: "Customer" },
  { component: <Slide9 />, title: "Inspection & Warranty", section: "Customer" },
  { component: <Slide10 />, title: "Ratings & Reviews", section: "Customer" },
  { component: <Slide11 />, title: "Admin Dashboard Home", section: "Admin" },
  { component: <Slide12 />, title: "Order Management", section: "Admin" },
  { component: <Slide13 />, title: "Technician Management", section: "Admin" },
  { component: <Slide14 />, title: "Customer CRM", section: "Admin" },
  { component: <Slide15 />, title: "Materials & Inventory", section: "Admin" },
  { component: <Slide16 />, title: "Digital Marketing Tools", section: "Admin" },
  { component: <Slide17 />, title: "Business Growth Benefits", section: "Summary" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <SlideContainer
      currentSlide={currentSlide}
      totalSlides={slides.length}
      onNext={handleNext}
      onPrev={handlePrev}
      slideTitle={slides[currentSlide].title}
      slideNumber={currentSlide + 1}
    >
      {slides[currentSlide].component}
    </SlideContainer>
  );
};

export default Index;
