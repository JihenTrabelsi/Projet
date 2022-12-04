import { Switch, Tooltip, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react'

const DetailsCard = () => {
  return (
    <div>
        <Stack  direction ="row" style = {{backgroundColor:"white" ,  justifyContent: "center"}} padding={4} mb={[8, 3]} spacing={30}>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        paddingLeft={2}
        width={"1/5"}
      >
        <Typography fontWeight={"light"} fontSize={"lg"} color="black">
          Name
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent="center"
        paddingLeft={4}
        width={"1/5"}
      >
        <Box
        //   bgColor={
        //     (item.status === BankStatus.Active ? true : false)
        //       ? statusColor("active")
        //       : statusColor("inactive")
        //   }
          maxW={"80%"}
          borderRadius="8px"
          style = {{backgroundColor:"red"}}
        >
          <Typography
            textAlign={"center"}
            padding={1}
            textTransform="uppercase"
            color="black"
            fontWeight={"semibold"}
          >
            {/* {(item.status === BankStatus.Active ? true : false)
              ? "active"
              : "inactive"} */}
          Inactive
          </Typography>

        </Box>
      </Box>
      
      <Box
        cursor={"pointer"}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        width={"1/5"}
      >
        {/* <CopyToClipboard
          text="{item.id_}"
          onCopy={() => toastSuccess("Address copied successfully")}
        >
          <Typography fontWeight={"light"} fontSize={"xl"}>
            <Tooltip
              maxWidth={"100%"}
              label={"Click to copy"}
              placement={"bottom"}
            >
              {truncateString(item.id_)}
            </Tooltip>
          </Typography>
        </CopyToClipboard> */}
      </Box>
      <Stack alignItems={"center"} justifyContent="center" width={"1/5"}>
        {/* {loading ? (
          <Spinner size="sm" color="warning.700" />
        ) : ( */}
          <Switch
            size={"lg"}
            // onToggle={() =>
            //   handleToggleOp(item.status === BankStatus.Active ? true : false)
            // }
            // isChecked={item.status === BankStatus.Active ? true : false}
            offTrackColor="orange.100"
            onTrackColor="orange.200"
            onThumbColor="orange.500"
            offThumbColor="orange.50"
          />
        {/* )} */}
      </Stack>
      <Box width="1/5">
        {/* {isUdpdating ? (
          <Spinner size="sm" color="warning.700" />
        ) : ( */}
          <Tooltip placement="bottom" label="edit details">
            <button
              style={{ marginLeft: ".5rem" }}
            //   onClick={() => setShowEditModal(true)}
            >
              {/* <AiFillEdit size={18} cursor="pointer" color="green" /> */}
            </button>
          </Tooltip>
        {/* )} */}
      </Box>
      {/* <EditModal
        data={item}
        setApproval={(data: { name: string; email: string; id: string }) =>
          handleEditOp(data)
        }
        modalVisible={showEditModal}
        setModalVisible={() => setShowEditModal(false)}
      /> */}
    </Stack>
    </div>

  )
}

export default DetailsCard;