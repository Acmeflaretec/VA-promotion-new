
/* eslint-disable */
import React from "react";
import Box from "components/Box";
import Typography from "components/Typography";
import Table from "examples/Tables/Table";
import { Avatar, Icon, Tooltip } from "@mui/material";
import Badge from "components/Badge";
import { Link } from "react-router-dom";
import { useGetBlogs } from "queries/StoreQuery";
import "./TableData.css";

function Blogs({ image, name }) {
  return (
    <Box display="flex" alignItems="center" px={1} py={0.5}>
      <Box>
        <Avatar src={image} alt={name} size="sm" variant="rounded" />
      </Box>
    </Box>
  );
}

const TableData = () => {
  const { data, isLoading } = useGetBlogs({ pageNo: 1, pageCount: 100 });
  const columns = [
    { name: "title", align: "center" },
    { name: "subtitle", align: "center" },
    { name: "url", align: "center" },
    { name: "description", align: "center" },
    { name: "image", align: "center" },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ];

  const rows = data?.data?.map(item => ({
    title: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.title}
      </Typography>
    ),
    subtitle: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {item?.subtitle}
      </Typography>
    ),
    url: (
      <Typography variant="caption" color="secondary" fontWeight="medium" className="url-column">
        <a href={item?.url}>{item?.url?.substring(0, 30)}</a>
        {/* {item?.url} */}
      </Typography>
    ),
    description: (
      <Tooltip title={item?.description} arrow>
        <Typography variant="caption" color="secondary" fontWeight="medium" className="description-column">
          {item?.description}
        </Typography>
      </Tooltip>
    ),
    image: <Blogs image={`${process.env.REACT_APP_API_URL}/uploads/${item?.image}`} name={item.title} />,
    status: (
      <Badge variant="gradient" badgeContent={item?.status ? 'Active' : 'Blocked'} color={item?.status ? "success" : 'secondary'} size="xs" container />
    ),
    action: (
      <Link to={`/ads/editAds/${item?._id}`}>
        <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
          more_vert
        </Icon>
      </Link>
    ),
  }));

  return isLoading ? (
    <Typography fontSize={14} sx={{ paddingX: 5 }}>loading...</Typography>
  ) : (
    <Table columns={columns} rows={rows} />
  );
};

export default TableData;

