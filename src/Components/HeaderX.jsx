import React from 'react';
import { Box, Button } from '@mui/material'
import { Tabs, Tab } from '@mui/material'
import { Link } from 'react-router-dom';
import Text from './Text.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BasicTabs from "../teste.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#ff1818'
    },
  },
});


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function HeaderX() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box padding="15px" bgcolor="darkBlue" width="100vw" height="5%" display="flex">
        <Box marginLeft="10px">
          <Text size="20px" color="white">Ararahistory</Text>
        </Box>
      </Box>

      <Box sx={{ borderBottom: 0, borderColor: 'white' }}>
        <ThemeProvider theme={theme}>
          <Tabs
            centered variant="fullWidth"
            textColor="inherit"
            allowScrollButtonsMobile
            scrollButtons
            style={{ backgroundColor: "blue", color: "white" }}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            stickyHeader aria-label="sticky tabs example"
          >
            <Tab label="Início" color="inherit" component={Link} to="/" {...a11yProps(0)} />
            <Tab label="Blog" color="inherit" component={Link} to="/blog" {...a11yProps(1)} />
            <Tab label="Teste" color="inherit" component={Link} to="/teste" {...a11yProps(2)} />
          </Tabs>
        </ThemeProvider>

      </Box>

    </Box>
  );
}

export default HeaderX;