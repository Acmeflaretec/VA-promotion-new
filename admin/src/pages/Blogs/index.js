import PageLayout from "layouts/PageLayout";
import Button from "components/Button";
import { Link } from "react-router-dom";
import TableData from "./tableData";

function Blogs() {
  return (
    <PageLayout
      title={'Ads'}
      action={
        <Button component={Link} to={`/ads/addAds`}>Add Ads</Button>
      }
    >
      <TableData/>
    </PageLayout>
  );
}

export default Blogs;
