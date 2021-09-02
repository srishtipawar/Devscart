import React from 'react'
import Grid from '@material-ui/core/Grid'
export default function Row(props) {
    return (
        <div className="row">
          
            {props.children}
           
        </div>
    )
}
