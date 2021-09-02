import React from 'react';
import "./Land.css";
import { auth , provider } from './firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName,selectUserEmail,setActiveUser } from './features/userSlice';
import {useState} from 'react';



const Landing = ({setIslogin}) => {
  
    const dispatch = useDispatch();
    const useremail = useSelector(selectUserEmail);
    const username = useSelector(selectUserName);
    const handleSignIn = ()=>{
        auth.signInWithPopup(provider).then((result)=>{
           dispatch(setActiveUser({
             userName:result.user.displayName,
             userEmail:result.user.email
           }))
           
           localStorage.setItem("name","login");
           setIslogin(localStorage.name)
           console.log(localStorage.name)
        })
      }
  
    return (
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <div id="main">
          <div id="box1" />
          <div id="box2">
            {/* <h3>Kya Haal Hai Janta</h3> */}
            <div id="text">WELCOME TO<br />DEVSC🛒RT</div>
          </div>
          <div id="box3">
            <div id="container">
              {/* <div id="logo">            <img src="" />          </div> */}
              <div id="menu">
                {/* <ul>              <li>HOME</li>              <li>SERVICES</li>              <li>ABOUT</li>              <li>CONTACT</li>              <li>HELP</li>                        </ul> */}
                <div className="btn-row">
                  <div className="ct-btn">
                    <button className="border-neon"  onClick={handleSignIn}>Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
    );
}

export default Landing;

// var NewComponent = React.createClass({//     render: function() {//       return (
       //       );//     }//   });