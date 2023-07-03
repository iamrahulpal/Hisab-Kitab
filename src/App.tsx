import { useState } from "react";
import MaterialTable from "./Components/MaterialTable";
import AccountTable from "./Components/MaterialTable";
import MaterialTabs from "./Components/MaterialTabs";
import ButtonAppBar from "./Components/AppBar";
import Box from "@mui/system/Box";

function App() {
  return (
    <>
      <Box>
        {/* <AccountTable data={data}/> */}
        {/* <ButtonAppBar sx={{ margin: "10px"}}/> */}
        <MaterialTabs />
        {/* <MaterialTable data={data} /> */}
      </Box>
    </>
  );
}

export default App;
