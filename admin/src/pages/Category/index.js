import Button from 'components/Button';
import { Link } from 'react-router-dom';
import PageLayout from "layouts/PageLayout";
import { useGetCategory } from "queries/ProductQuery";
import TableData from "./tableData";

function Category() {
  const { data, isLoading } = useGetCategory({ pageNo: 1, pageCount: 100 });
  return (
    <PageLayout
      title={'Category'}
      action={
        <Button component={Link} to={`/category/addCategory`}>Add Category</Button>
      }
    >
      <TableData/>
    </PageLayout>
  );
}

export default Category;
