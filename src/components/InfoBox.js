import React from 'react'
import './styles/InfoBox.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function InfoBox({text}) {
    return (
        <div className='infobox'>          
            <CheckCircleIcon className='infobox__icon' fontSize='large'/>
            <p>{text}</p>
        </div>
    )
}

export default InfoBox
