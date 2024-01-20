import { Box, Button, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { BsCalendarDate } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";

import axios from "axios";
import { Suspense, lazy, useEffect, useState } from "react";

import { Spinar } from "../components/Spinar";
import { baseUrl } from "../BaseUrl";
import Navbar from "../components/Navbar";

const SharePost = lazy(() => import("../components/SharePost"));

function SinglePostPage({ data }) {
  let { postId, index,category } = useParams();
  let [singlePostData, setSinglePostData] = useState({});
  let [allPostData, setAllPostData] = useState([]);
  let [postIndex, setPostIndex] = useState(index);
  let [isLoading, setIsLoading] = useState(false);
  let [testIndex, setTestIndex] = useState(0);

  // let [recentPost,setRecentPost] = useState([]);
  // console.log(category)

  let getPostData = async () => {
    try {
      setIsLoading(true);
      let dataSinglePost = await axios.get(`${baseUrl}/post/`);
      
      // Filter the data to include only objects where ele.category === category
      let filteredData = dataSinglePost.data.filter(ele => ele.category === category);
      
      setAllPostData(filteredData);
  
      // // finding singlePost element
      // setSinglePostData(filteredData[postIndex]);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert(err);
    }
  };
  
   // get single Element 
   let getSinglePostData = async () => {
    try {
      setIsLoading(true)
      let dataSinglePost = await axios.get(`${baseUrl}/post/${postId}`);
      // console.log(dataSinglePost?.data);

      // // finding singlePost element
      setSinglePostData(dataSinglePost?.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert(err);
    }
  };
  // tag link componant

  let Tags = ({ data }) => {
    return (
      <Link
        style={{
          fontStyle: "italic",
          fontSize: "14px",
          backgroundColor: "#eeeeee",
          color: "#959594",
          marginRight: "15px",
          borderRadius: "5px",
          padding: "2px 5px",
        }}
        to={"/posts"}
      >
        {data?.tagName}
      </Link>
    );
  };

  // handle previous next post
  let handleNextPost = () => {
   setSinglePostData(allPostData[Number(testIndex) + 1]);

   setTestIndex((testIndex) => {
      return Number(testIndex) + 1;
    });
  };

  let handlePrevPost = () => {
   setSinglePostData(allPostData[Number(testIndex) - 1]);

   setTestIndex((testIndex) => {
      return Number(testIndex) - 1;
    });
   
  };

  // console.log(singlePostData,"singlePostData")
  // convert text into html
  function ComponentWithJSX({ jsxString }) {
    // Use the dangerouslySetInnerHTML property to render the JSX string as JSX.
    const renderJSXStringAsJSX = () => {
      return { __html: jsxString };
    };

    return (
      <Box>
        <div dangerouslySetInnerHTML={renderJSXStringAsJSX()} />
      </Box>
    );
  }

  let recentPost = [];
allPostData?.forEach((ele, index) => {
  if (ele?.category === singlePostData?.category && recentPost.length < 10) {
    recentPost.push(ele);
  }
});

  useEffect(() => {
    getPostData();
    getSinglePostData();
  }, [index]);

  console.log(allPostData.length ,postIndex,testIndex,allPostData.length-1 ,allPostData.length);
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
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "1fr",
          lg: "1fr 26%",
        }}
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <Box
          textAlign={"left"}
          margin={{ base: "-20px 20px", sm: "100px 60px" }}
          className="longContent"
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"flex-end"}
            marginBottom={"7px"}
          >
            <Box>
              <Text classname="category" fontSize={"20px"}>
                {singlePostData?.category}
              </Text>
            </Box>
            {/* Share post  */}

            <Suspense fallback={<Spinar />}>
              <SharePost
                shareUrl={window.location.href}
                title={
                  singlePostData?.heading +
                  "-" +
                  singlePostData?.intro?.substring(0, 150) +
                  "..."
                }
              />
            </Suspense>
          </Box>
          <hr style={{ border: "2px solid red", marginBottom: "40px" }} />

          <Box>
            <Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"flex-start"}
              >
                <Text
                  fontSize={{ base: "21px", sm: "25px", md: "35px" }}
                  color={"black"}
                  marginBottom={"15px"}
                  fontWeight={"bold"}
                >
                  <h1>{singlePostData?.heading}</h1>
                </Text>
                <Box
                  display={"flex"}
                  fontSize={"30px"}
                  cursor={"pointer"}
                  mt={{ base: "0px", md: "10px" }}
                >
                  <button disabled={allPostData.length == 1 || testIndex==0}>
                    <Text color={allPostData.length == 1 || testIndex==0 ? "gray" : "#29a4de"}>
                      {" "}
                      <BiSolidChevronLeft onClick={handlePrevPost} />
                    </Text>
                  </button>
                  <button disabled={testIndex == allPostData.length-1 ||  allPostData.length == 1 }>
                    <Text
                      color={
                        testIndex == allPostData.length - 1 || allPostData.length == 1? "gray" : "#29a4de"
                      }
                    >
                      <BiSolidChevronRight onClick={handleNextPost} />
                    </Text>
                  </button>
                </Box>
              </Box>
              {/* date and read Time starts */}
              <Box
                display={"flex"}
                gap="30px"
                color={"gray"}
                marginBottom={"40px"}
              >
                <Box
                  display={"flex"}
                  gap={"10px"}
                  position={"relative"}
                  top={"7px"}
                >
                  <BsCalendarDate />
                  <Text className="date" fontSize={"13px"}>
                    {singlePostData?.date}
                  </Text>
                </Box>

                {/* read time  */}
                <Box
                  display={"flex"}
                  gap={"8px"}
                  position={"relative"}
                  top={"7px"}
                >
                  <MdOutlineWatchLater
                    style={{
                      fontSize: "20px",
                      position: "relative",
                      bottom: "2px",
                    }}
                  />
                  <Text fontSize={"13px"}>{singlePostData?.readTime}</Text>
                </Box>
              </Box>
              {/* date and read Time starts */}

              {/* tags here  */}
              <Box
                className="tags"
                textAlign={"left"}
                marginBottom={"20px"}
                marginTop={"20px"}
              >
                <Text lineHeight={"30px"}>
                  {" "}
                  Tags :{" "}
                  {singlePostData?.tag?.map((ele, index) => {
                    return <Tags data={{ tagName: ele }} />;
                  })}
                </Text>
              </Box>
              {/* tags  end here  */}
              <Text
                width={"100%"}
                textAlign={{
                  base: "left",
                  md: "justify",
                }}
                fontSize={"18px"}
              >
                <h3>
                  <ComponentWithJSX jsxString={singlePostData?.content} />
                </h3>
              </Text>
            </Box>
          </Box>
        </Box>

        {/* sidebar  */}
        <Box
          className="sidebar"
          padding={"15px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          display={{
            base: "none",
            lg: "block",
          }}
          // border={"2px solid red"}
          mt={"100px"}
        >
          <Text
            backgroundColor={"#29a4de"}
            padding={"10px"}
            color={"white"}
            fontSize={"18px"}
            textAlign={"center"}
            borderRadius={"5px"}
            marginBottom={"20px"}
          >
            Recent Posts
          </Text>
          {recentPost.map((ele, index) => {
            return (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                padding={"10px 0px"}
                borderBottom={"2px solid #e7e7e7"}
                cursor={"pointer"}
                onClick={() => {
                  setSinglePostData(ele);
                }}
              >
                <Text>{ele.heading}</Text>
                <BiSolidChevronRight
                  style={{ fontSize: "25px", color: "gray" }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
export default SinglePostPage;
