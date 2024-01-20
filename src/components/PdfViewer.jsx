// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { Navbar } from "./Navbar";
// import { Box, Button, Spinner } from "@chakra-ui/react";
// import { Spinar } from "./Spinar";
// import { YourPDFComponent } from "./YourPDFComponent";

// const PdfViewer = () => {
//   const { link } = useParams();
//   const [isLoading, setIsLoading] = useState(true);

//   const handleIframeLoad = () => {
//     // This function will be called when the iframe has finished loading
//     setIsLoading(false);
//   };

//   const handleFullScreen = () => {
//     const iframe = document.getElementById("pdfIframe");

//     if (iframe) {
//       if (iframe.requestFullscreen) {
//         iframe.requestFullscreen();
//       } else if (iframe.mozRequestFullScreen) {
//         iframe.mozRequestFullScreen();
//       } else if (iframe.webkitRequestFullscreen) {
//         iframe.webkitRequestFullscreen();
//       } else if (iframe.msRequestFullscreen) {
//         iframe.msRequestFullscreen();
//       }
//     }
//   };

//   return (
//     <>
//       {/* <Navbar /> */}
//       <Box
//         display={"flex"}
//         flexDirection="column"
//         alignItems="center"
//         mt={"-50px"}
//         position={"relative"}
//       >
//         {isLoading && (
//           <Spinar position="absolute" right="0px" top="40px" color="white" />
//         )}
//         <Button
//           onClick={handleFullScreen}
//           variant="outline"
//           mb={4}
//           position={"absolute"}
//           right="0px"
//           top={"12px"}
//           color={"white"}
//           bg={"#313131"}
//           zIndex={1000}
//         >
//           Fullscreen
//         </Button>
//         <iframe
//           id="pdfIframe"
//           title="PDF Viewer"
//           src={
//             link.includes("drive")
//               ? `${decodeURIComponent(link)}`
//               : `https://www.youtube.com/embed/${decodeURIComponent(link)}`
//           }
//           sandbox="allow-same-origin allow-scripts allow-popups"
//           width={"100%"}
//           height={"800px"}
//           allowFullScreen
//           frameborder="0"
//           onLoad={handleIframeLoad}
//         >
//           iframe
//         </iframe>
//         {/* <YourPDFComponent/> */}
//       </Box>
//     </>
//   );
// };

// export default PdfViewer;

import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { Box, Button, useQuery } from "@chakra-ui/react";
import { Spinar } from "./Spinar";
import { baseUrl } from "../BaseUrl";
import axios from "axios";

const PdfViewer = () => {
  const { link } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const token = JSON.parse(
    localStorage.getItem("DefencePostUserDetails")
  )?.token;
  const headers = {
    token: token, // Replace with your actual authorization token
    "Content-Type": "application/json", // Adjust content type as needed
    // Add any other headers you need
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const getMyCourseData = async() => {
    try {
      setIsLoading(true);
      let myCourseData = await axios.get(`${baseUrl}/file-upload/geturl/${link}`, {
        headers,
      });
      setData(myCourseData?.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }

  useEffect(()=>{
    getMyCourseData();
  },[])

  const handleFullScreen = () => {
    const iframe = document.getElementById("pdfIframe");

    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  return (
    <>
     
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt="-50px"
        position="relative"
      >
        {isLoading && (
          <Spinar position="absolute" right="0px" top="40px" color="white" />
        )}
        <Button
          onClick={handleFullScreen}
          variant="outline"
          mb={4}
          position="absolute"
          right="0px"
          top="12px"
          color="white"
          bg="#313131"
          zIndex={1000}
        >
          Fullscreen
        </Button>
        {/* "https://defencepost.s3.amazonaws.com/uploads/2024-01-19T07-06-27_Booklet-1.pdf?AWSAccessKeyId=AKIAVRUVUOIZRIXBVWHZ&Expires=1705655963&Signature=PC46akZJtkHe1l3Hu%2BWlKKOHkSQ%3D" */}
        <iframe
          title="PDF Viewer"
          src={`https://defencepost.s3.amazonaws.com/${data?.fileName}?AWSAccessKeyId=${data?.accessKeyId}&Expires=${data?.expires}&Signature=${data?.signature}`}
          width="100%"
          height="800px"
          allowFullScreen
          frameborder="0"
          onLoad={handleIframeLoad}
        >
          iframe
        </iframe>
      </Box>
    </>
  );
};

export default PdfViewer;
