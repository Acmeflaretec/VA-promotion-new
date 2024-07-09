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

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [openPopup, setOpenPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSliderChange = (event) => {
    const sliderValue = Number(event.target.value);
    const index = Math.round((sliderValue / 100) * (options.length - 1));
    setSelectedOption(options[index]);
  };

  const handleLabelClick = (option) => {
    setSelectedOption(option);
  };

  const handleOpenPopup = () => setOpenPopup(true);
  const handleClosePopup = () => setOpenPopup(false);
  const handleCheckboxChange = (e) => setIsChecked(e.target.checked);

  const getSliderValue = () => {
    return (options.findIndex(opt => opt.amount === selectedOption.amount) / (options.length - 1)) * 100;
  };

  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className='text-center mt-4 mb-5'> 
          <h2 className='promotion-title'>Video Promotion</h2>
        </div>
        <div className="promotion-container">
          <div className="package-selector">
            <h3 className="section-title">Select Your Promotion Package</h3>
            <div className="slider-container">
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={getSliderValue()}
                onChange={handleSliderChange}
                className="slider"
              />
              <div className="slider-labels">
                {options.map((option, index) => (
                  <div 
                    key={option.label} 
                    className={`slider-label ${selectedOption.amount === option.amount ? 'active' : ''}`}
                    onClick={() => handleLabelClick(option)}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="selected-package">
            <div className="package-info">
              <span className="package-label">Selected Package:</span>
              <span className="package-value">{selectedOption.label}</span>
            </div>
            <div className="amount-display">
              <span className="currency">₹</span>
              <span className="amount">{selectedOption.amount}</span>
            </div>
          </div>
        </div>
        <div className="policy-section mt-4">
          <div className="policy-header">
            <h3 className="section-title">Promotional Policy</h3>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="policyCheckbox"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="policyCheckbox">
                I agree to the promotional policy
              </label>
            </div>
          </div>
          <a href="https://docs.google.com/document/d/1n9iSk6hLj2vg4-XHx8qBuny_nKcd0sNIJuCMq4IWVWY/edit?usp=drivesdk" 
             target="_blank" 
             rel="noopener noreferrer"
             className="policy-link">
            View full policy
          </a>
        </div>
        <div className='text-center mt-4'>
          <button 
            className='btn btn-primary btn-lg proceed-button' 
            onClick={handleOpenPopup} 
            disabled={!isChecked}
          >
            Proceed to Payment
          </button>
        </div>
        <div className="mt-5">
          <Personaladd />
        </div>
      </div>
      {openPopup && <Popup onClose={handleClosePopup} selectedAmount={selectedOption.amount} type={'video'}/>}
    </div>
  );
}

export default Videopromotion;