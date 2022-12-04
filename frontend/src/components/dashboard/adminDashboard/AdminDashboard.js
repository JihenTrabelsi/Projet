import React from 'react';
import './AdminDashboard.css';
import AddInstitution from './AddInstitution';
import {Routes, Route, useNavigate} from 'react-router-dom';


// import {
//     Box,
//     HStack,
//     Spinner,
//     Text,
//     VStack,
//     Heading,
//     Center,
//     Button,
//   } from "native-base";
import { CaseCount } from '../../case-count';
import { Box, Stack, Typography,Paper, Button } from '@mui/material';
import { DetailsHeader } from './details-header';
import DetailsCard from './details-card';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import FormCus from '../customerDashboard/FormCus';



const AdminDashboard = () => {
    
  const navigate = useNavigate();

  const navigateToAddInstitution = () => {
    // 👇️ navigate to /AddInstitution
    navigate('/AddInstitution');
  };

  const navigateToFormCus = () => {
    // 👇️ navigate to /FormCus
    navigate('/FormCus');
  };
   

  return (
    <>
   <Navbar></Navbar>
    <div className='home-dashboard'>
        <div className='container'>
        <Box margin={7}   spacing={8} 
>
        <Stack space={4} mb={8}>
          <Typography
            textTransform={"capitalize"}
            fontWeight={"semibold"}
            color={"white"}
            fontSize={"lg"}
          >
            My Dashboard
          </Typography>
          <br></br>
          <Stack direction="row" spacing={2} > 
          {/* <Stack space={10} flexDirection={["column", "row"]}> */}
          <Paper  elevation={3} color="white" >

          <CaseCount count={"9"} heading={"Total Institutions"} />

          </Paper>
           
            <Paper elevation={3} color="white" >
            <CaseCount
              count={"1"}
              heading={"Inactive Institutions"}
            />
            </Paper>
            <Paper elevation={3} color="white" >
            <CaseCount
              count={"8"}
              heading={"Active Institutions"}
            />
            </Paper>
            {/* <AddEntity entity="Institution" route="/dashboard/add"
             /> */}
          </Stack>
        </Stack>
        <Stack>
          <Stack
            flexDirection={["column", "row"]}
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={5}
          >
            <Typography
              mb={[2]}
              color={"white"}
              textTransform={"capitalize"}
              fontWeight={"semibold"}
              fontSize={"lg"}
            >
              My Individual Cases
            </Typography>
          </Stack>
          <Stack alignItems={"center"} space={5}>
            <Box width={["90vw", "100%"]} overflow={["scroll", "unset"]}>
              <DetailsHeader />
              {/* {listLoading ? (
                <Spinner size="lg" />
              ) : ( */}
                <Stack flexDir={"column-reverse"}>
                  {/* {data.length === 0 ? ( */}
                    <Box>
                    <DetailsCard/>
                    <DetailsCard/>
                    <DetailsCard/>
                      <Typography color="white" mb="4">
                        No Bank Found
                      </Typography>
                      
                      

                      <Button onClick={navigateToAddInstitution}>Add Bank</Button>

                       <Button onClick={navigateToFormCus}>Add Customer</Button>
                      <Routes>
                        <Route  element={<AddInstitution />} />
                      </Routes>
                       <Routes>
                        <Route path='/FormCus' element={<FormCus />} />
                      </Routes>  
                      

                    </Box>
                    
                {/* //   ) : (
                //     (data as Bank[]).map((item: Bank) => (
                //       <DetailsCard item={item} />
                //     ))
                //   )} */}
                </Stack>
            {/* //   )} */}
            </Box>
          </Stack>
        </Stack>
            </Box>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminDashboard;