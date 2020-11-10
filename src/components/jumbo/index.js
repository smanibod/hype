import React, { useState } from "react";
import { Container, Image, Slide, Left, Right } from "./jumbo";
/*
import ft1 from "../../images/featured/ft1.png";
import ft2 from "../../images/featured/ft2.png";
import ft3 from "../../images/featured/ft3.png";
import ft4 from "../../images/featured/ft4.png";
*/
import ft1 from "../../images/banner/carhartt-banner.png";
import ft2 from "../../images/banner/chrystie-nyc-banner.png";
import ft3 from "../../images/banner/cv-banner.png";
import ft4 from "../../images/banner/stussy-banner.png";
import ft5 from "../../images/banner/ch-banner.png";

export default function Jumbo({ ...restProps }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [ft4, ft1, ft2, ft3, ft5];
  const prevSlide = () => {
    let i = slideIndex - 1;

    if (i < 0) {
      setSlideIndex(4);
    } else {
      setSlideIndex(i);
    }
  };
  const nextSlide = () => {
    let i = slideIndex + 1;

    if (i > 4) {
      setSlideIndex(0);
    } else {
      setSlideIndex(i);
    }
  };
  return (
    <Container {...restProps}>
      <Slide>
        <Image src={images[slideIndex]} />
      </Slide>
      <Left onClick={prevSlide}>&#10094;</Left>
      <Right onClick={nextSlide}>&#10095;</Right>
    </Container>
  );
}
