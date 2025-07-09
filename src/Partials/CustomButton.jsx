import React from 'react'
import SimpleBtnBg from '../assets/images/simple-btn-bg.png';
import GradientBtnBg from '../assets/images/gradient-btn.png';

const SimpleButton = ({ text, onClick, className, type, disabled }) => {
    return (
        <button className={`simpleBgBtn ${className || ''}`}
            type={type || 'button'}
            onClick={onClick}
            disabled={disabled || false}>
            <img src={SimpleBtnBg} alt="" />
            <div className="inner-content">
                <p className="m-0">{text}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" stroke='#fff' fill='#fff'>
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
            </div>
            <div className="button-glow"></div>
        </button>
    )
}

const SimpleLink = ({ text, to, className, type, disabled }) => {
    return (
        <a className={`simpleBgBtn ${className || ''}`}
            type={type || 'button'}
            to={to}
            disabled={disabled || false}>
            <img src={SimpleBtnBg} alt="" />
            <div className="inner-content">
                <p className="m-0">{text}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" stroke='#fff' fill='#fff'>
                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
            </div>
            <div className="button-glow"></div>
        </a>
    )
}

const GradientButton = ({ text, onClick, className, type, disabled }) => {
    return (
        <button className={`gradientBgBtn ${className || ''}`}
            type={type || 'button'}
            onClick={onClick}
            disabled={disabled || false}>
            <img src={GradientBtnBg} alt="" />
            <div className="inner-content">
                <p className="m-0">{text}</p>
            </div>
            <div className="button-glow"></div>
        </button>
    )
}

const GradientLink = ({ text, to, className, type, disabled }) => {
    return (
        <a className={`gradientBgBtn ${className || ''}`}
            type={type || 'button'}
            to={to}
            disabled={disabled || false}>
            <img src={GradientBtnBg} alt="" />
            <div className="inner-content">
                <p className="m-0">{text}</p>
            </div>
            <div className="button-glow"></div>
        </a>
    )
}

export {SimpleButton, SimpleLink, GradientButton, GradientLink}

