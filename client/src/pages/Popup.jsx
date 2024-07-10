import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Popup = ({ onClose, selectedAmount,type}) => {
  const [qrCode, setQrCode] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      url: '',
      location: '',
      paymentimage: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
      url: Yup.string().url('Invalid URL'),
      location: Yup.string().required('Required'),
      paymentimage: Yup.mixed().required('A file is required'),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('url', values.url);
      formData.append('location', values.location);
      formData.append('type', type);
      formData.append('image', values.paymentimage);
     

      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/payment`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert('Payment created successfully');
        onClose();
      } catch (error) {
        console.error(error);
        alert('Failed to create payment');
      }
    },
  });

  useEffect(() => {
    const fetchQrCode = async (amount) => {
      // const qrCodeUrl = `/src/assets/${amount}.jpg`;
      const qrCodeUrl = `../../${amount}.jpg`;
      setQrCode(qrCodeUrl);
    };

    fetchQrCode(selectedAmount);
  }, [selectedAmount]);

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Payment Method</DialogTitle>
      <DialogContent dividers style={{ maxHeight: '400px' }}>
      <div style={{  textAlign: 'center'}}>
        <p>"Scan this QR and make payment. Then fill the form."</p>
          <img src={qrCode} alt="Payment QR Code" style={{ width: '100%', height: 'auto' }} />
        </div>
        <hr />
        <form onSubmit={formik.handleSubmit} style={{ flex: 1, overflowY: 'auto' }}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            margin="normal"
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
          />
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            margin="normal"
          />
          <TextField
            fullWidth
            id="url"
            name="url"
            label={type==='channel'?"Your Channel URL":"Your Video URL"}
            value={formik.values.url}
            onChange={formik.handleChange}
            error={formik.touched.url && Boolean(formik.errors.url)}
            helperText={formik.touched.url && formik.errors.url}
            margin="normal"
          />
          <TextField
            fullWidth
            id="location"
            name="location"
            label="Location"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
            margin="normal"
          />
          <strong>Upload the Screenshots of Payment</strong>
          <input
            id="paymentimage"
            name="paymentimage"
            type="file"
            onChange={(event) => {
              formik.setFieldValue("paymentimage", event.currentTarget.files[0]);
            }}
            style={{ display: 'block', marginTop: '16px' }}
          />
          {formik.touched.paymentimage && formik.errors.paymentimage ? (
            <div style={{color:'red'}}>{formik.errors.paymentimage}</div>
          ) : null}
          <DialogActions>
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
            <Button onClick={onClose} color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </form>
        
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
