import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Courses.css";
import Row from "./Row";
import Card from "./Card";
import Grid from '@material-ui/core/Grid';

const Web = ({product, setProduct}) => {
  const cards = [
    {
      id: Math.random() * 10,
      src: "https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg",
      title: "Web Developer Bootcamp",
      desc: "The only course you need to learn web development - HTML, CSS, JS, Node, and More!",
      price: "₹385",
      cutprice: "₹6,400",
      rating: "★★★★★",
      view: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    },
    {
      id: Math.random() * 10,
      src: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
      title: "The JavaScript Course",
      desc: "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory!",
      price: "₹499",
      cutprice: "₹9,000",
      rating: "★★★★☆",
      view: "https://www.udemy.com/course/the-complete-javascript-course/",
    },
    {
      id: Math.random() * 10,
      src: "https://img-c.udemycdn.com/course/240x135/756150_c033_2.jpg",
      title: "Angular - From Zero to Hero!",
      desc: 'Master Angular 12 (formerly "Angular 2") and build awesome, reactive web apps with Angular.js',
      price: "₹786",
      cutprice: "₹1,999",
      rating: "★★★★★",
      view: "https://www.udemy.com/course/the-complete-guide-to-angular-2/",
    },
    {
      id: Math.random() * 10,
      src: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_12.jpg",
      title: "The Backend Bootcamp",
      desc: "Learn Web Development using HTML, CSS, Javascript, PHP, Python, MySQL and more! ",
      price: "₹450",
      cutprice: "₹7,200",
      rating: "★★★☆☆",
      view: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    },
    {
      id: Math.random() * 10,
      src: "https://img-c.udemycdn.com/course/240x135/764164_de03_2.jpg",
      title: "Complete Web Dev Course",
      desc: "Become a full-stack web developer & learn Js, Node, React,MongoDB and more!",
      price: "₹799",
      cutprice: "₹3,999",
      rating: "★★★★★",
      view: "https://www.udemy.com/course/the-complete-web-developer-course-2/",
    },
    {
      id: Math.random() * 10,
      src: "https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg",
      title: "Node.js, Express, MongoDB",
      desc: "Master Node by building a real-world Restful API (authentication, payments & more)",
      price: "₹459",
      cutprice: "₹5,600",
      rating: "★★★★☆",
      view: "ps://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
    },
    {
      id: Math.random() * 10,
      src: "https://img-c.udemycdn.com/course/240x135/437398_46c3_10.jpg",
      title: "Responsive Websites",
      desc: "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio!",
      price: "500",
      cutprice: "₹9,670",
      rating: "★★★★★",
      view: "https://www.udemy.com/course/react-redux/",
    },
    {
      id: Math.random() * 10,
      src: "https://img-c.udemycdn.com/course/240x135/995016_ebf4_3.jpg",
      title: "Vue - w/ Router, Vuex",
      desc: "Vue.js is a Js Framework for building Frontend Apps! VueJS mixes the Best of Angular + React!",
      price: "₹899",
      cutprice: "₹9,999",
      rating: "★★★★☆",
      view: "https://www.udemy.com/course/vuejs-2-the-complete-guide/",
    },
    {
      id: Math.random() * 10,
      src: "https://img-c.udemycdn.com/course/240x135/822444_a6db.jpg",
      title: "Python & Django Bootcamp",
      desc: "Learn to build websites with HTML , CSS , Bootstrap Javascript , jQuery , Python 3 , and Django!",
      price: "₹385",
      cutprice: "₹6,400",
      rating: "★★★☆☆",
      view: "https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/",
    },
    {
      id: Math.random() * 10,
      src: "https://img-c.udemycdn.com/course/240x135/1646980_23f7_2.jpg",
      title: "Build MERN Stack Project",
      desc: "Build and deploy a social network with Node.js, Express, React, Redux & MongoDB.",
      price: "₹880",
      cutprice: "₹9,510",
      rating: "★★★★★",
      view: "https://www.udemy.com/course/mern-stack-front-to-back/",
    },
    {
      id: Math.random() * 10,
      src: "https://img-c.udemycdn.com/course/240x135/2365628_0b60_8.jpg",
      title: "React Developer in 2021",
      desc: "Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase",
      price: "₹400",
      cutprice: "₹6,400",
      rating: "★★★☆☆",
      view: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/",
    },
    {
      id: Math.random() * 10,
      src: "https://img-c.udemycdn.com/course/240x135/705264_caa9_11.jpg",
      title: "Modern React with Redux",
      desc: "Master React and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!",
      price: "₹567",
      cutprice: "₹4,800",
      rating: "★★★★☆",
      view: "https://www.udemy.com/course/react-redux/",
    },
  ];
  let arr = [];
  for (let i = 0; i <= cards.length - 4; i += 4) {
    arr.push(
      <Row>
        <Card
          key={cards[i].id}
          src={cards[i].src}
          title={cards[i].title}
          desc={cards[i].desc}
          price={cards[i].price}
          cutprice={cards[i].cutprice}
          rating={cards[i].rating}
          view={cards[i].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[i + 1].id}
          src={cards[i + 1].src}
          title={cards[i + 1].title}
          desc={cards[i + 1].desc}
          price={cards[i + 1].price}
          cutprice={cards[i + 1].cutprice}
          rating={cards[i + 1].rating}
          view={cards[i + 1].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[i + 2].id}
          src={cards[i + 2].src}
          title={cards[i + 2].title}
          desc={cards[i + 2].desc}
          price={cards[i + 2].price}
          cutprice={cards[i + 2].cutprice}
          rating={cards[i + 2].rating}
          view={cards[i + 2].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[i + 3].id}
          src={cards[i + 3].src}
          title={cards[i + 3].title}
          desc={cards[i + 3].desc}
          price={cards[i + 3].price}
          cutprice={cards[i + 3].cutprice}
          rating={cards[i + 3].rating}
          view={cards[i + 3].view}
          product={product} setProduct={setProduct}
          type={1}
        />
      </Row>
    );
  }
  if (cards.length % 4 === 1) {
    arr.push(
      <Row>
        <Card
          key={cards[cards.length - 1].id}
          src={cards[cards.length - 1].src}
          title={cards[cards.length - 1].title}
          desc={cards[cards.length - 1].desc}
          price={cards[cards.length - 1].price}
          cutprice={cards[cards.length - 1].cutprice}
          rating={cards[cards.length - 1].rating}
          view={cards[cards.length - 1].view}
          product={product} setProduct={setProduct}
          type={1}
        />
      </Row>
    );
  } else if (cards.length % 4 === 2) {
    arr.push(
      <Row>
        <Card
          key={cards[cards.length - 2].id}
          src={cards[cards.length - 2].src}
          title={cards[cards.length - 2].title}
          desc={cards[cards.length - 2].desc}
          price={cards[cards.length - 2].price}
          cutprice={cards[cards.length - 2].cutprice}
          rating={cards[cards.length - 2].rating}
          view={cards[cards.length - 2].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[cards.length - 1].id}
          src={cards[cards.length - 1].src}
          title={cards[cards.length - 1].title}
          desc={cards[cards.length - 1].desc}
          price={cards[cards.length - 1].price}
          cutprice={cards[cards.length - 1].cutprice}
          rating={cards[cards.length - 1].rating}
          view={cards[cards.length - 1].view}
          product={product} setProduct={setProduct}
          type={1}
        />
      </Row>
    );
  } else if (cards.length % 4 === 3) {
    arr.push(
      <Row>
        <Card
          key={cards[cards.length - 3].id}
          src={cards[cards.length - 3].src}
          title={cards[cards.length - 3].title}
          desc={cards[cards.length - 3].desc}
          price={cards[cards.length - 3].price}
          cutprice={cards[cards.length - 3].cutprice}
          rating={cards[cards.length - 3].rating}
          view={cards[cards.length - 3].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[cards.length - 2].id}
          src={cards[cards.length - 2].src}
          title={cards[cards.length - 2].title}
          desc={cards[cards.length - 2].desc}
          price={cards[cards.length - 2].price}
          cutprice={cards[cards.length - 2].cutprice}
          rating={cards[cards.length - 2].rating}
          view={cards[cards.length - 2].view}
          product={product} setProduct={setProduct}
          type={1}
        />
        <Card
          key={cards[cards.length - 1].id}
          src={cards[cards.length - 1].src}
          title={cards[cards.length - 1].title}
          desc={cards[cards.length - 1].desc}
          price={cards[cards.length - 1].price}
          cutprice={cards[cards.length - 1].cutprice}
          rating={cards[cards.length - 1].rating}
          view={cards[cards.length - 1].view}
          product={product} setProduct={setProduct}
          type={1}
        />
      </Row>
    );
  }

  return (
    <div className="App">
      <h1 class="heading">
        <span>Web Development</span>
      </h1>
      <div id="cards_landscape_wrap-2">
        <div className="container"><Grid>{arr}</Grid></div>
      </div>
    </div>
  );
};
export default Web;
