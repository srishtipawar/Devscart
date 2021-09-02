import React from 'react'
import Grid from '@material-ui/core/Grid';
import "./Template.css";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import StarsIcon from '@material-ui/icons/Stars';
import FourKIcon from '@material-ui/icons/FourK';

const Template = () => {
    return (
        <div>
        <div style={{marginTop: "60px"}} className="design-bar">
                <div className="bar">
                    <span><PlayCircleFilledIcon style={{fontSize: "50", marginRight: "15px", marginTop: "15px"}}/></span>
                    <h3>Learn in-demand skills with over various video courses</h3>
                </div>
                <div className="bar">
                    <StarsIcon style={{fontSize: "50", marginRight: "15px", marginTop: "15px"}}/>
                    <h3>Choose courses taught by real-world experts</h3>
                </div>
                <div className="bar">
                    <FourKIcon style={{fontSize: "50", marginRight: "15px", marginTop: "15px"}}/>
                    <h3>Learn at your own pace, with lifetime access at high Quality</h3>
                </div>
            </div>
        <div className="template">
            
                <Grid style={{marginBottom: "50px"}} item xs={12}>
                    <div className="row1">
                        <div className="template-text">
                            <h1>Become an Instructor</h1>
                            <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                        </div>
                        <img className="template-img" src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt=""/>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="row1">
                        <img className="template-img" src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg" alt=""/>
                        <div className="template-text">
                            <h1>Become an Instructor</h1>
                            <p>Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="row1">
                        <div className="template-text">
                            <h1>Become an Instructor</h1>
                            <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                        </div>
                        <img className="template-img" src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg" alt=""/>
                    </div>
                </Grid>
            </div>
        </div>
    )
}

export default Template