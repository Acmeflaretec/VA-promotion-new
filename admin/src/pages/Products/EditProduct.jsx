import { useGetOrderById,useEditchannel,useDeleteChannel} from 'queries/OrderQuery';
// import Details from './Details';
import { Alert, Box, Button, Grid, ToggleButton, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react'
import PageLayout from 'layouts/PageLayout';
import toast from "react-hot-toast";
// import Input from "components/Input";
import { useNavigate, useParams } from "react-router-dom";
// import { useUpdateProduct } from 'queries/ProductQuery'

const EditProduct = () => {
   const { id } = useParams();
   const [data, setData] = useState({})
   const navigate = useNavigate()
   const { data: res, isLoading } = useGetOrderById({ id });
   useEffect(() => {
      setData(res?.data)
   }, [res])
   
   const fileInputRef = React.useRef(null);
   // const handleFileSelect = () => {
   //    fileInputRef.current.click();
   // };

   // const handleFileChange = (event) => {
   //    const file = event.target.files[0];
   //    setData(prev => ({ ...prev, image: file }));
   // };

   // const handleChange = (e) => {
   //    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
   // };
   const { mutateAsync: editChannel, isLoading: updating } = useEditchannel()
   const { mutateAsync: deleteChannel, isLoading: deleting } = useDeleteChannel()

   const handleDelete = () => {
      deleteChannel(data)
         .then((res) => {
            if (res) {
               toast.success(res?.message ?? "channel deleted Successfully");
               navigate('/payment')
            }
         })
         .catch((err) => {
            toast.error(err?.message ?? "Something went wrong");
         });
   };
   const handleSubmit = () => {
      try {
         const formData = new FormData();
         for (const key in data) {
            if (data.hasOwnProperty(key) && key !== "image") {
               formData.append(key, data[key]);
            }
         }

        editChannel(formData)
            .then((res) => {
               if (res) {
                  toast.success(res?.message ?? "channel edited Successfully");
                  navigate('/payment')
               }
            })
            .catch((err) => {
               toast.error(err?.message ?? "Something went wrong");
            });

      } catch (error) {
         console.error(error)
      }
   }


    return (
        <PageLayout
            title={'Payment Details'}
        >
            <Box sx={{ flexGrow: 1 }} display={'flex'} justifyContent={'center'}>
            <Grid container spacing={2} maxWidth={600} py={5}>
            <Grid item xs={12} sm={6}>
                  <Typography variant="caption">
                     Change Status &nbsp;
                  </Typography>
                  <ToggleButton
                     value={data?.status}
                     selected={data?.status}
                     // onChange={() => {
                     //    setData(prev => ({ ...prev, status: !data?.status }))
                     // }}
                     onClick={handleSubmit}
                  >
                     {data?.status ? 'verify' : 'unverify'}
                  </ToggleButton>
               </Grid>
               <Grid item xs={12}>
                  {/* <Button onClick={handleSubmit}>Update Blog</Button> */}
                  <Button color="secondary" onClick={handleDelete}>Delete Payment</Button>
               </Grid>
               </Grid>
         </Box>
        </PageLayout>
    )
}


export default EditProduct;