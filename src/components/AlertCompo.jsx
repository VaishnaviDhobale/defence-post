import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

function AlertCompo({ data }) {
  return (
    <>
      <Alert status={data.type} style={{ marginTop: "20px" }}>
        <AlertIcon />
        <AlertTitle>{data.msg}</AlertTitle>
      </Alert>
    </>
  );
}
export default AlertCompo;