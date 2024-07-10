/* eslint-disable react/prop-types */
// import Box from "components/Box";
import Typography from "components/Typography";
import Table from "examples/Tables/Table";
import { Icon } from "@mui/material";
import Badge from "components/Badge";
import { Link } from "react-router-dom";
import { useGetBanners } from "queries/StoreQuery";


const TableData = () => {
  const { data, isLoading } = useGetBanners({ pageNo: 1, pageCount: 100 });
  const columns = [
    { name: "name", align: "left" },
    { name: "email", align: "center" },
    { name: "phone", align: "center" },
    { name: "url", align: "center" },
    { name: "type", align: "center" },
    { name: "isActive", align: "center" },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ]

  const rows = data?.data?.map(item => ({
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
    type: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.type}
      </Typography>
    ),
    isActive: (
      <Badge variant="gradient" badgeContent={item?.isActive ? 'showing' : 'no-showing'} color={item?.isActive ? "success" : 'secondary'} size="xs" container />
    
    ),
    status: (
      <Badge variant="gradient" badgeContent={item?.status ? 'verify' : 'unverify'} color={item?.status ? "success" : 'secondary'} size="xs" container />
    ),
    action: (
      <Link to={`/banners/editBanner/${item?._id}`}>
        <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
          more_vert
        </Icon>
      </Link>
    ),
  }))
  return isLoading ? <Typography fontSize={14} sx={{ paddingX: 5 }}>loading...</Typography> : <Table columns={columns} rows={rows} />
};

export default TableData;
