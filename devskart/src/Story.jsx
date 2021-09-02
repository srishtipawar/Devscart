import React from 'react';
import './Story.css';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor:'black',
  },
}));


function Story({image, profileSrc, title}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
        <div className="story" style={{ backgroundImage: `url(${profileSrc})`,backgroundSize:'cover' }} onClick={handleOpen}>
            {/* <Avatar className="story__avatar" src={''} /> */}
            <h4> {} </h4>
    </div> 
     <Modal
     aria-labelledby="transition-modal-title"
     aria-describedby="transition-modal-description"
     className={classes.modal}
     open={open}
     onClose={handleClose}
     closeAfterTransition
     BackdropComponent={Backdrop}
     BackdropProps={{
       timeout: 500,
     }}
   >
     <Fade in={open}>
       <div className={classes.paper}>
         <img src={image} alt="" />
         <div>
         {/* <h2 id="transition-modal-title" style={{color:'#fff',zIndex:10} }>{title}</h2>
         <p id="transition-modal-description" style={{color:'#fff'}}>{title}</p> */}
         </div>
       </div>
     </Fade>
   </Modal>
   </div>
    )
}

export default Story;
