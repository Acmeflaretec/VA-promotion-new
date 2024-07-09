import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer text-center mt-5 p-2" style={{backgroundColor: "#cfe2ff"}}>
      <p className='m-1'>Organized by <a href="https://youtube.com/@vatech14?si=s35ZUUjG_Bt0ykNa" target="_blank" rel="noopener noreferrer" style={{color:'black'}}>
        <FaYoutube /> VA Tech 14
      </a> & <a href="https://youtube.com/@vlogingafil?si=ZlnWO0dEMqzTrwV1" target="_blank" rel="noopener noreferrer" style={{color:'black'}}>
          <FaYoutube /> Vloging afil
        </a>
      </p>
      <p style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '10%', display: 'flex', justifyContent: 'space-between' }}>
          <a href="https://youtube.com/@vatech14?si=s35ZUUjG_Bt0ykNa" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/vapwebsupportteam?igsh=MWp0Z2dkZ2o2d2JxbA==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61562071536384&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </p>
    </div>
  );
};

export default Footer;
