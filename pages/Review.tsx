import React from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import ReviewData from "../components/ReviewData";
import { Rating, Group } from "@mantine/core";

function Review() {
  const img =
    "https://res.cloudinary.com/isreal/image/upload/v1675285922/My%20portfolio%20Project/1671744344371-removebg-preview_dxwbbb.png";

  return (
    <div className="reviews">
      <h1>REVIEWS</h1>
      <Carousel
        // withIndicators
        slidesToScroll={1}
        slideSize="50%"
        slideGap="md"
        breakpoints={[
        //   { maxWidth: "lg", slideSize: "50%" },
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        loop
        align="center"
        className="review-container"
      >
        {ReviewData.map((item: any) => (
          <Carousel.Slide key={item.comment} className="carousel" size="50%">
            <Image
              className="review-img"
              src={item.img}
              alt="Project image"
              width={200}
              height={200}
            ></Image>
            <h3>{item.name}</h3>
            <i>{item.job}</i>
            <p>{item.comment}</p>
            <Group position="center">
              <Rating value={item.rating} fractions={2} readOnly />
            </Group>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default Review;
