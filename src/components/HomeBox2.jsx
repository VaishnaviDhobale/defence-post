import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import "animate.css/animate.min.css";
import { Suspense, lazy, useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import axios from "axios";
import { baseUrl } from "../BaseUrl";
import { Spinar } from "./Spinar.jsx";
const SingleCourse = lazy(() => import("../components/SingleCourse.jsx"));


function HomeBox2({ allCourseData }) {
  // let baseUrl = "https://breakable-dirndl-yak.cyclic.cloud/";
  //  let baseUrl = "https://backend.defencepost.in";
  //  console.log(allCourseData)

  const topThreeCourses = allCourseData
    .sort((a, b) => b.rating - a.rating) // Sort in descending order by rating
    .slice(0, 3); // Take the first three items

  const [isAnimating, setIsAnimating] = useState(false);

  const onEnterViewport = () => {
    setIsAnimating(true);
  };

  const onExitViewport = () => {
    setIsAnimating(false);
  };

  // handle scale
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <Box
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        marginBottom={"50px"}
        fontFamily={"Barlow"}
        // className={`animated animate__fadeInDown ${isHovered ? 'hovered' : ''} ${
        //   isAnimating ? 'animate__animated animate__fadeInDownBig' : ''
        // }`}
      >
        <Box
          className="heading"
          textAlign={{
            base: "center",
            lg: "left",
          }}
        >
          <Text
            fontSize={{
              base: "25px",
              sm: "30px",
            }}
            fontWeight={"bold"}
          >
            Our Popular <span style={{ color: "#28a4de" }}>Courses</span>
          </Text>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
          }}
          gap={{
            base: "30px",
            md: "25px",
            lg: "50px",
          }}
          marginTop={"30px"}
        >
          {topThreeCourses.map((ele, index) => {
            return (
              <Suspense fallback={<Spinar />}>
                <SingleCourse data={ele} />
              </Suspense>
            );
          })}
        </Box>
        <Button
          textAlign={"center"}
          marginTop={"50px"}
          backgroundColor={"#28a4de"}
          color={"white"}
          fontWeight={"500"}
        >
          <Link to={"/course"}>View All Courses</Link>
        </Button>
      </Box>
    </ScrollTrigger>
  );
}

export default HomeBox2;

// return (
//   <>

//   </>
// );
