import React from 'react'
import Warning from '../../Assets/Warning.svg'
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
export const TextError = (props) => {
  return (
    <div className='form-error' style={props.styles}>
        <GppMaybeOutlinedIcon sx={{height:"14px",width:"15px"}} fontSize='small' color='red'/>
        {props.children}
    </div>
  )
}
