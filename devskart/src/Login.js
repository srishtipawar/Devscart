import React from 'react';
import './Login.css';
import { auth , provider } from './firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName,selectUserEmail,setActiveUser } from './features/userSlice';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
   
        root: {
          flexGrow: 1,
        },
        paper: {
          height: 540,
          width: 500,
          marginTop:70,
        

        },
        control: {
          padding: theme.spacing(2),
        },
  
      
    button: {
      margin: theme.spacing(1),
      

    },
  }));
  

   

function Login(){
    
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
    const dispatch = useDispatch();
    const useremail = useSelector(selectUserEmail);
    const username = useSelector(selectUserName);
    const handleSignIn = ()=>{
        auth.signInWithPopup(provider).then((result)=>{
           dispatch(setActiveUser({
             userName:result.user.displayName,
             userEmail:result.user.email
           }))
        })
      }
  
    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };
  
        return(
            <div className="main">
          
              
               
              
               <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
           
              <Grid item>
                <Paper className={classes.paper} id="pap">
                    <br></br>
                    <h1>DevsKart</h1>
                    <h3>
Education which makes you financially independent.</h3>
<p className="p">Sign In to get access!</p>
                <Button
        variant="contained"
        color="primary"
        className="btn"
        onClick={handleSignIn}
        
      >
          <img className="g" src="https://img-authors.flaticon.com/google.jpg"></img>
        Sign In with Google
      </Button>
      <img className="new" src="https://finlabsindia.com/wp-content/uploads/2021/03/happy-women-learning-language-online-isolated-flat-vector-illustration-cartoon-female-characters-taking-individual-lessons-through-messenger-education-digital-technology-concept_74855-10088-1.jpg"></img>
                </Paper>
              </Grid>
        
          </Grid>
        </Grid>
        
      </Grid>
                   
            
                  
            </div>
        )
   
}
export default Login;