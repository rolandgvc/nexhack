import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  // arrows: true,
  // centerPadding: "100px",
  infinite: true,
  autoplay: true,
  speed: 1000,
  // autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ContestCarousel = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "50%", md: "50%" });
  const side = useBreakpointValue({ base: "5%", md: "40px" });
  // const top = useBreakpointValue({ base: "90%", md: "45%" });
  // const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      id: 1,
      title: "It's Time to Build",
      text: "Design for the age of metaverse. Be part of Nike's RTFKT drop.",
      // image: "https://wallpaperaccess.com/full/1267580.jpg",
      image: "/sneaker.png",
    },
  ];

  return (
    <Box
      position="relative"
      // height="600px"
      width="full"
      overflow="hidden"
      boxShadow="2xl"
      borderRadius="50px"
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        color="gray.600"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={1}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        color="gray.600"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={1}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(sliderRef) => setSlider(sliderRef)}>
        {cards.map((card) => (
          <Box
            key={card.id}
            height="lg"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`${card.image}`}
            // backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Stack
              maxW="450px"
              maxH="lg"
              position="relative"
              marginLeft="10%"
              top="45%"
              transform="translate(0, -50%)"
              // bg={"green"}
            >
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                fontWeight="bold"
                color="gray.500"
              >
                FEATURED CONTEST
              </Text>
              <Heading
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                color="gray.800"
              >
                {card.title}
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "xl" }}
                color="gray.600"
                pt="100px"
                // bg={"green"}
              >
                {card.text}
              </Text>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ContestCarousel;
