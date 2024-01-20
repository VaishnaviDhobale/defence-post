import axios from "axios";
import { Box, Text, Button } from "@chakra-ui/react";
import { Suspense, lazy, useEffect, useState } from "react";

import { Spinar } from "../components/Spinar";
import { baseUrl } from "../BaseUrl";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const SingleMyCourse = lazy(() => import("../components/SingleMyCourse"));

function MyCourse() {
  let token = JSON.parse(localStorage.getItem("DefencePostUserDetails"))?.token;
  const headers = {
    token: token, // Replace with your actual authorization token
    "Content-Type": "application/json", // Adjust content type as needed
    // Add any other headers you need
  };

  let [myCourse, setMyCourse] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  async function getMyCourseData() {
    try {
      setIsLoading(true);
      let myCourseData = await axios.get(`${baseUrl}/mycourse/`, { headers });
      setMyCourse(myCourseData?.data?.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }

  useEffect(() => {
    getMyCourseData();
  }, []);

  if (isLoading) {
    return (
      <>
        <Spinar />
      </>
    );
  }

  return (
    <>
    <Navbar />
      {myCourse?.length === 0 || !token ? (
        <Box>
          <Text
            fontWeight="bold"
            fontSize="20px"
            fontFamily="Barlow"
            textAlign="center"
            marginTop={"160px"}
          >
            Start your CDS journey with our interactive Booklets.
          </Text>
          <Link to={"/course"}>
            <Button
              mt="4"
              bg={"#28a4de"}
              size="lg"
              fontFamily="Barlow"
              color={"white"}
            >
              Explore Courses
            </Button>
          </Link>
        </Box>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="50px"
          margin={{ base: "30px 20px", sm: "100px 60px" }}
          fontFamily="Barlow"
        >
          {myCourse?.map((ele, index) => {
            return (
              <Suspense fallback={<Spinar />}>
                <SingleMyCourse key={index} data={ele} />
              </Suspense>
            );
          })}
        </Box>
      )}
    </>
  );
}
export default MyCourse;
