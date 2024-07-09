

import React, { useState } from 'react';
import './Promotion.css';
import Personaladd from '../components/Personaladd';
import NavBar from '../components/Navbar';
import Popup from './Popup';

function Videopromotion() {
  const options = [
    { label: '1k', amount: 400 },
    { label: '2k', amount: 777 },
    { label: '3k', amount: 1149 },
    { label: '4k', amount: 1525 },
    { label: '5k', amount: 1899 },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].amount);
  const [openPopup, setOpenPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSliderChange = (event) => {
    const newValue = Number(event.target.value);
    setSelectedOption(newValue);
  };

  const getLabel = (amount) => {
    const option = options.find(opt => opt.amount === amount);
    return option ? option.label : '';
  };

  const getAmount = (label) => {
    const option = options.find(opt => opt.label === label);
    return option ? option.amount : '';
  };

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className='text-center d-flex justify-content-center mt-3'> 
          <h3 className='bg-warning p-4 w-50'>Video Promotion</h3>
        </div>
        <div className="promotion-container mt-5">
          <div className="slider-container">
            <input
              type="range"
              min={options[0].amount}
              max={options[options.length - 1].amount}
              step="300"
              value={selectedOption}
              onChange={handleSliderChange}
              className="slider"
              list="tickmarks"
            />
            <datalist id="tickmarks">
              {options.map(option => (
                <option key={option.amount} value={option.amount} label={option.label}></option>
              ))}
            </datalist>
            <div className="selected-value">Amount: {selectedOption}</div>
            <div className="labels">
              {options.map((option) => (
                <div key={option.amount} className={`label ${selectedOption === option.amount ? 'active' : ''}`}>
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="text-center">
            <h2>Promotional Policy</h2>
          </div>
          <div className="d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="policyCheckbox"
                onChange={handleCheckboxChange}
              />
              <a href="https://docs.google.com/document/d/1n9iSk6hLj2vg4-XHx8qBuny_nKcd0sNIJuCMq4IWVWY/edit?usp=drivesdk">
                <label className="form-check-label" htmlFor="policyCheckbox">
                  Agreed with policy
                </label>
              </a>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <button
            className='btn btn-secondary mt-5'
            onClick={handleOpenPopup}
            disabled={!isChecked}
          >
            Payment Method
          </button>
        </div>
        <div>
          <Personaladd />
        </div>
      </div>
      {openPopup && <Popup onClose={handleClosePopup} selectedAmount={selectedOption} type={'video'} />}
    </div>
  );
}

export default Videopromotion;
