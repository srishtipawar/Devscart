import React from "react";
import "./About.css";


import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

export default function About() {
  return (
    <div className="abo">
      <div className="Box">
        {/* <h3>hii</h3> */}
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className="Box1"></div>
          </Grid>
          <Grid item xs={6}>
            <div className="Box2">
              <div className="tex">
                <h2 className="hand">Devsnest!</h2>
                <div className="tex2">
                  Devsnest aims towards creating highly skilled individuals by
                  bridging the skill gap between colleges' academic curriculum
                  and industry requirements. College education is somewhat
                  broken, but here at Devsnest, we only work on the solutions!
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="Boxx">
        {/* <h3>hii</h3> */}
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className="Box22">
              <div className="texx">
                {/* <h2 className="hand">DevsCart!</h2> */}
                <h2 className="hand2">Kickstart your Career </h2>
                <div className="tex22">
                  With Devsnest, you can kick start your career with good tech
                  industry jobs. Learning new concepts daily, working with a
                  team, engaging with new people, and guidance from industry
                  mentors is all what you need to take your career to the next
                  level.
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="Box11"></div>
          </Grid>
        </Grid>
      </div>

      <div className="Boxxx">
        {/* <h3>hii</h3> */}
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className="Box111"></div>
          </Grid>
          <Grid item xs={6}>
            <div className="Box2">
              <div className="tex">
                <h2 className="hand3">Let's Grow Together</h2>
                <div className="tex2">
                  We also have interactive sessions taken by various industry
                  experts on topics such as start ups, managing time, working as
                  a freelancer and many more. The community will help you grow
                  in all aspects possible. You just require the zeal to learn
                  and there, you are ready to go!
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>



      <div className="Boxxxx">
        {/* <h3>hii</h3> */}
        <Grid container spacing={0}>
          <Grid item xs={12}>
          <h2 className="hand4">Still Here? </h2>
          {/* <div>          <Button variant="contained" color="primary" >        Primary      </Button>          </div> */}
         

          </Grid>
          
        </Grid>
      </div>
    </div>
  );
}