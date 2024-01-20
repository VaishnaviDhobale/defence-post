import { Box } from "@chakra-ui/react";


import { Suspense, lazy, useEffect, useState } from "react";
import axios from "axios";
import { Spinar } from "../components/Spinar";
import { baseUrl } from "../BaseUrl";
import Navbar from "../components/Navbar.jsx";
const SinglePost=lazy(()=>import("../components/SinglePost.jsx"));
function Post() {
  let [postData, setPostData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  let getPostData = async () => {
    try {
      setIsLoading(true);
      let dataPost = await axios.get(`${baseUrl}/post/`);
      setPostData(dataPost?.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert(err);
    }
  };
  useEffect(() => {
    sessionStorage.setItem("prevPage", null);
    getPostData();
  }, []);
  // console.log(postData)

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

      <Box margin={{ base: '-20px 20px', sm: '100px 60px' }} fontFamily="Roboto, sans-serif">
      {postData && postData?.slice()?.reverse()?.map((ele, index) => {
        return <Suspense fallback={<Spinar/>} >
          <SinglePost key={index} data={{ ele, index }} />
        </Suspense>;
      })}
    </Box>
    </>
  );
}
export default Post;
