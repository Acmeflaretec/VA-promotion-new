/* eslint-disable react/prop-types */
import Box from "components/Box";
import Typography from "components/Typography";
import Avatar from "components/Avatar";
import Badge from "components/Badge";
import toast from 'react-hot-toast';
import Table from "examples/Tables/Table";
import { useGetProducts } from "queries/ProductQuery";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";

function Author({ image, name}) {
  return (
    <Box display="flex" alignItems="center" px={1} py={0.5}>
      <Box mr={2}>
        <Avatar src={image} alt={name} size="sm" variant="rounded" />
      </Box>
      {/* <Box display="flex" flexDirection="column">
        <Typography variant="button" fontWeight="medium">
          {name}
        </Typography>
        <Typography variant="caption" color="secondary">
          {desc}
        </Typography>
      </Box> */}
    </Box>
  );
}

const TableData = () => {
  const { data, isLoading } = useGetProducts({ pageNo: 1, pageCount: 100 });
  const columns = [
    { name: "name", align: "left" },
    { name: "email", align: "center" },
    { name: "phone", align: "center" },
    { name: "url", align: "center" },
    { name: "paymentimage", align: "center" },
    { name: "location", align: "center" },
    { name: "type", align: "center" },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ]

  const rows = data?.data?.map(item => ({
    // status: (
    //   <Badge variant="gradient" badgeContent={item?.isAvailable ? 'Available' : 'Unavailable'} color={item?.isAvailable ? "success" : 'secondary'} size="xs" container />
    // ),
    name: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.name}
      </Typography>
    ),
    email: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.email}
      </Typography>
    ),
    phone: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.phone}
      </Typography>
    ),
    url: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        <a href={item?.url}>{item?.url?.substring(0, 30)}</a>
      </Typography>
    ),
    paymentimage: <Author image={`${process.env.REACT_APP_API_URL}/uploads/${item?.image?.[0]}`}/>,

    location: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.location}
      </Typography>
    ),
    type: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.type}
      </Typography>
    ),
    status: (
      <Badge variant="gradient" badgeContent={item?.status ? 'verify' : 'unverify'} color={item?.status ? "success" : 'secondary'} size="xs" container />
    ),
    
    action: (
      <Link to={`/products/editProduct/${item?._id}`}>
        <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
          more_vert
        </Icon>
      </Link>
    ),
  }))
  return isLoading ? <Typography fontSize={14} sx={{paddingX:5}}>loading...</Typography> : <Table columns={columns} rows={rows} />
};

export default TableData;
