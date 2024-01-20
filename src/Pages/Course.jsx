
import { Box } from "@chakra-ui/react";
import { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import { Spinar } from "../components/Spinar";
import { baseUrl } from "../BaseUrl";
import Navbar from "../components/Navbar.jsx";

const SingleCourse = lazy(() => import("../components/SingleCourse.jsx"));

function Course() {
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCourseData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${baseUrl}/course/`);
      setCourseData(data);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("prevPage", null);
    getCourseData();
  }, []);

  if (isLoading) {
    return <Spinar />;
  }

  return (
    <>
      <Navbar />
      <Box
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="50px"
        margin={{ base: "-10px 20px", sm: "100px 60px" }}
        fontFamily="Barlow"
      >
        {courseData.map((ele) => (
          <Suspense key={ele._id} fallback={<Spinar />}>
            <SingleCourse data={ele} />
          </Suspense>
        ))}
      </Box>
    </>
  );
}

export default Course;
