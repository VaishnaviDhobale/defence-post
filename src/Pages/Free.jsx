import { Box, useToast } from "@chakra-ui/react";
import { FreeCart } from "../components/FreeCart";

import { useEffect, useState } from "react";
import axios from "axios";
import { Spinar } from "../components/Spinar";
import { baseUrl } from "../BaseUrl";
import Navbar from "../components/Navbar";

function Free() {
  let toast = useToast();
  let [allFreeDataGet, setAllFreeDataGet] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  let getAllFreeData = async () => {
    try {
      setIsLoading(true);
      let dataFreeGet = await axios.get(`${baseUrl}/free/`);
      setAllFreeDataGet(dataFreeGet?.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert(err);
    }
  };
  useEffect(() => {
    localStorage.setItem("prevPage", null);
    getAllFreeData();
  }, []);

  if (isLoading) {
    return (
      <>
        <Spinar />
      </>
    );
  }

  return (

    <Box>
      <Navbar />
      <Box
        marginTop={"50px"}
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={"70px"}
        margin={{ base: "-20px 20px", sm: "100px 60px" }}
        fontFamily={"Barlow"}
      >
        {allFreeDataGet &&
          allFreeDataGet?.map((ele, index) => {
            return <FreeCart data={ele} />;
          })}
      </Box>
    </Box>
  );
}

export default Free;
