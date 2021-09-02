import React from 'react';
import Grid from '@material-ui/core/Grid';
import "./Categories.css";

import { NavLink, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Categories = () => {


  return (
    <>
    <hr style={{backgroundColor: "lightgray"}}/>
    <h1 id="categories">Top Categories</h1>
    <div className="container">
    <div className="categories-card">
      <Grid container spacing={5}>
        <Grid item xs={6}>
         
          <div className="img1">
          <NavLink to="/and">
              <img className="categories-img" src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.2.2074516007.1629158400" alt=""/>
              </NavLink>
              <h2>Android Development</h2>
          </div>
        </Grid>
        <Grid item xs={6}>
       
          <div className="img2">
          <NavLink to="/web">
              <img className="categories-img"src="https://cdn.dribbble.com/users/3036385/screenshots/6694433/web_development.jpg" alt=""/>
              </NavLink>
              <h2>Web Development</h2>
          </div>
       
        </Grid>
        <Grid item xs={6}>
          <div className="img3">
          <NavLink to="/accessories">
          <img className="categories-img" src="https://i.pinimg.com/originals/22/29/ab/2229ab619400f9e376604b98249a8eda.jpg" alt=""/>
              </NavLink>
              <h2>Accessories</h2>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="img">
              <img className="categories-img" src="https://www.duendev.com/wp-content/uploads/2021/05/istockphoto-1054541696-612x612-1.jpeg" alt=""/>
              <h2>Game Development</h2>
          </div>
        </Grid>
      </Grid>
    </div>
    </div>
    {/* <hr style={{backgroundColor: "lightgray"}}/> */}
    </>
  );
}

export default Categories;