import React from 'react';
//styles
import "./TransactionsBody.css"
//assetes
import leftArrowIcon from "../../assets/leftArrow.svg";
import rightArrowIcon from "../../assets/rightArrow.svg";
//components
import Button from '../Button/Button';

const PageNavigateBar = props => {
    //props
    const {pages, updatePage} = props;
    return ( 
        <div className='TransactionBar PageNavigateBar'>
            <Button 
            icon={leftArrowIcon} 
            buttonSize="smallButton" 
            background="" 
            clickFunction={()=> updatePage("left")}
            />
            <Button 
            text={pages.currentPage} 
            buttonSize="mediumButton" 
            background="backgroundDarkGreen" 
            />
            <Button 
            icon={rightArrowIcon} 
            buttonSize="smallButton" 
            background="" 
            clickFunction={()=> updatePage("right")}
            />
        </div>
    );
};

export default PageNavigateBar;