import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "./Product.css";
import { Jumbotron } from "reactstrap";
import { useState } from "react";
import { Link,Redirect } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    height: "auto",
    backgroundSize: "cover",
    marginLeft: -250,
    marginTop: 20,
  },
  sec: {
    marginTop: 40,
    marginLeft: -230,
  },
  short: {
    height: 150,
    width: 150,
    marginLeft: 30,
    marginTop:"5%",
    backgroundSize: "cover",
  },
  root2: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function NewProd({ product, setProduct ,cartItems, setCartItems }) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [idx, setIdx] = useState();

  const side_img = [
    <Row>
      <Card className={classes.short} spacing={1}>
        <CardContent>
          <img
            style={{ height: 150, width: 100 }}
            src={product.img2}
          ></img>
        </CardContent>
      </Card>
    </Row>,
    <Row>
      <Card className={classes.short} spacing={1}>
        <CardContent>
          <img
            style={{ height: 130, width: 130 }}
            src={product.img3}
          ></img>
        </CardContent>
      </Card>
    </Row>,
    <Row>
      <Card className={classes.short} spacing={1}>
        <CardContent>
          <img
            style={{ height: 130, width: 130 }}
            src={product.img4}
          ></img>
        </CardContent>
      </Card>
    </Row>,
  ];

  return (
    <div>
      <div>
        <Grid item>
          <Row>
            <Col>{product.type == 1 ? "" : side_img}</Col>
            <Col>
              <Card className={classes.root}>
                <img className="product_img" src={product.img}></img>
              </Card>
            </Col>

            <Col className={classes.sec}>
              <p className="head">{product.name}</p>

              <hr />
              <p style={{ color: "red", fontSize: "medium" }}>
                <span className="deal">Deal price: </span>
                {product.price}
              </p>

              <p>{product.desc}</p>

              <Button onClick={() => {let temp = cartItems; temp.push({name:product.name, price:product.price, image:product.img, cutprice:product.cutprice}); setCartItems(temp); localStorage.setItem('cart',temp)  }} className="my-4" color="primary" variant="contained">
                <Link to="/cart"> Add to cart </Link>
              </Button>

              <h4>REQUIREMENTS</h4>
            <ul>
              <li>Operating System: Windows 7/8.1/10 (64-bit Version)</li>
              <li>Processor: Intel i5-750/AMD Phenom II X4-945.</li>
              <li>Memory: 8 GB RAM</li>
              <li>Hard Disk Space: 12GB free HDD Space</li>

              <li>Video Card: NVIDIA GTX 470 1GB /AMD HD 7870 2GB</li>
              <li>Operating System: Windows 7 / 8.1 / 10(64 - bit Version)</li>
              <li>Processor: Intel i5 - 2400 / AMD FX - 8320.</li>
              <li>Memory: 8 GB RAM</li>
              </ul>
            </Col>
            <br></br>

            <hr />
          </Row>
          
        </Grid>

        <Grid>
          <Jumbotron style={{ marginTop: 50, backgroundColor: "black" }}>
            <img
              style={{ backgroundSize: "cover", marginLeft: "25%" }}
              src="https://images.moneycontrol.com/static-mcnews/2021/06/Realme_watch_2-770x433.jpg?impolicy=website&width=770&height=431"
            ></img>
          </Jumbotron>
        </Grid>
      </div>
    </div>
  );
}
export default NewProd;
