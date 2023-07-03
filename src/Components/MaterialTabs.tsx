import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MaterialTable from "./MaterialTable";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "Burger",
      amount: 300,
      category: "Food",
    },
    {
      id: 2,
      name: "Headphones",
      amount: 1500,
      category: "Accessories",
    },
    {
      id: 3,
      name: "Grocery Shopping",
      amount: 2000,
      category: "Grocery",
    },
    {
      id: 4,
      name: "T-shirt",
      amount: 500,
      category: "Clothes",
    },
    {
      id: 5,
      name: "Airfare",
      amount: 5000,
      category: "Traveling",
    },
    {
      id: 6,
      name: "Laptop",
      amount: 50000,
      category: "Online Shopping",
    },
    {
      id: 7,
      name: "Restaurant Dinner",
      amount: 800,
      category: "Food",
    },
    {
      id: 8,
      name: "Mobile Phone Case",
      amount: 200,
      category: "Accessories",
    },
    {
      id: 9,
      name: "Grocery Shopping",
      amount: 1500,
      category: "Grocery",
    },
    {
      id: 10,
      name: "Summer Dress",
      amount: 1000,
      category: "Clothes",
    },
    {
      id: 11,
      name: "Flight Tickets",
      amount: 3000,
      category: "Traveling",
    },
    {
      id: 12,
      name: "Online Book Purchase",
      amount: 500,
      category: "Online Shopping",
    },
  ]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const visibleData = () => {
    if (value) {
      const queryData = data.filter((item) => {
        if (value === 1) {
          return item.category === "Food";
        } else if(value === 2){
          return item.category === "Grocery";
        }else if(value === 3){
          return item.category === "Clothes";
        }else if(value === 4){
          return item.category === "Online Shopping";
        }else if(value === 5){
          return item.category === "Traveling";
        }else if(value === 6){
          return item.category === "Accessories";
        }
      });
      return queryData;
    } else {
      return data;
    }
  };

  const table = visibleData();

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Food" {...a11yProps(1)} />
          <Tab label="Grocery" {...a11yProps(2)} />
          <Tab label="Clothes" {...a11yProps(3)} />
          <Tab label="Grocery" {...a11yProps(4)} />
          <Tab label="Grocery" {...a11yProps(5)} />
          <Tab label="Grocery" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <MaterialTable
            data={table}
            onDelete={(id) => setData(data.filter((item) => item.id !== id))}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <MaterialTable
            data={table}
            onDelete={(id) => setData(data.filter((item) => item.id !== id))}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <MaterialTable
            data={table}
            onDelete={(id) => setData(data.filter((item) => item.id !== id))}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>
          <MaterialTable
            data={table}
            onDelete={(id) => setData(data.filter((item) => item.id !== id))}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div>
          <MaterialTable
            data={table}
            onDelete={(id) => setData(data.filter((item) => item.id !== id))}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div>
          <MaterialTable
            data={table}
            onDelete={(id) => setData(data.filter((item) => item.id !== id))}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <div>
          <MaterialTable
            data={table}
            onDelete={(id) => setData(data.filter((item) => item.id !== id))}
          />
        </div>
      </TabPanel>
    </Box>
  );
}
