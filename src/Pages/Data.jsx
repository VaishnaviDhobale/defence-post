import { Box, Text } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { Spinar } from "../components/Spinar";
import Navbar from "../components/Navbar";

const QuillEditor = lazy(() => import("../components/QuillEditor"));

function Data() {
  return (
    <Box mt={"70px"} bg={"#141925"} p={"50px"}>
      <Suspense fallback={<Spinar />}>
        <Navbar />
        <Text color={"white"} fontSize={"40px"} fontWeight={"bold"}>Welcome, This is <span style={{color : "teal"}}>Vaishnavi Dhobale</span></Text>
        <Text mt={"20px"} color={"white"} fontSize={"20px"} fontWeight={"bold"}>Full Stack Web Developer (MERN)</Text>
        <Text mt={"20px"} color={"white"}>A passionate aspiring Full Stack Web Developer Skilled in MERN stack. Developing websites using JavaScript, React, Node, Chakra-UI, MongoDB and having more than 1000+ hours of coding experience in above mentioned skills. Looking forward to opportunities that can bring challenges and learning to leverage.</Text>
      </Suspense>
    </Box>
  );
}
export default Data;
