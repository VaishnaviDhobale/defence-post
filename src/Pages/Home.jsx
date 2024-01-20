import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState, Suspense,lazy } from "react";
import { Spinar } from "../components/Spinar";
const HomeBox1 = lazy(() => import("../components/HomeBox1"));
const HomeBox2 = lazy(() => import("../components/HomeBox2"));
const HomeBox3 = lazy(() => import("../components/HomeBox3"));
const Footer = lazy(() => import("../components/Footer"));

import axios from "axios";
import { baseUrl } from "../BaseUrl";
import Navbar from "../components/Navbar";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [allCourseData, setAllCourseData] = useState([]);
  const [allReview, setAllReview] = useState([]);
  const [bestReview, setBestReview] = useState([]);

  const getAllCourseData = async () => {
    try {
      setIsLoading(true);
      const { data: courseData } = await axios.get(`${baseUrl}/course/`);
      setAllCourseData(courseData);
    } catch (err) {
      setIsLoading(false);
      alert(err);
    }
  };

  const getAllReview = async () => {
    try {
      const { data: dataReview } = await axios.get(`${baseUrl}/review/`);
      setAllReview(dataReview);
      const bestReviews = dataReview?.filter(
        (ele) => ele?.rating === "4" || ele?.rating === "5"
      );
      setBestReview(bestReviews);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await getAllCourseData();
        await getAllReview();
        localStorage.setItem("prevPage", null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinar />;
  }

  return (
    <>
      <Navbar />
      <Box margin={{ base: "-50px 20px", sm: "100px 60px" }}>
        <Suspense fallback={<Spinar />}>
          <HomeBox1 />
          <HomeBox2 allCourseData={allCourseData} />
          <HomeBox3 allReview={allReview} bestReview={bestReview} />
        </Suspense>
      </Box>
      <Suspense fallback={<Spinar />}>
        <Footer />
      </Suspense>
    </>
  );
}
export default Home;
