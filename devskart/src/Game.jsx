import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Courses.css";
import Row from './Row'
import Card from './Card';
import { Grid } from "@material-ui/core";

const Game  = () => {
    const cards = [
        {
            id: Math.random()*10,
            src:"https://source.unsplash.com/1600x900/?onlinegame,videogame",
            title: "The Game Development",
            desc: "The only course you need to learn game development - Valorant and More!",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★★★",
            view: ""
            
        },
        {
            id: Math.random()*10,
            src:"https://source.unsplash.com/1600x900/?gaming,laptop,online",
            title: "Video Game Optimization",
            desc: "The modern JavaScript course for everyone! Master JavaScript with projects and theory!",
            price: "₹499",
            cutprice:"₹9,000",
            rating: "★★★★☆",
            view: ""
            
        },
        {
            id: Math.random()*10,
            src: "https://source.unsplash.com/1600x900/?games,gaming,coding",
            title: "C# Unity Game Developer 2D",
            desc: "Learn Unity in C# & Code Your First Seven 2D Video Games for Web, Mac & PC.",
            price: "₹786",
            cutprice:"₹1,999",
            rating: "★★★★★",
            view: ""
            
        },
        {
            id: Math.random()*10,
            src:"https://source.unsplash.com/1600x900/?musical,games",
            title: "Unreal Engine C++ Developer",
            desc: "Create your video game in collaboration with Epic Games. Code Your first 5 3D games",
            price: "₹450",
            cutprice:"₹7,200",
            rating: "★★★☆☆",
            view: ""
            
        },
        {
            id: Math.random()*10,
            src:"https://source.unsplash.com/1600x900/?blockchain,videogame",
            title: "RPG Core Combat Creator",
            desc: "Learn Intermediate Unity C# Coding and advanced game design. Balance the player and enemy stats!",
            price: "₹799",
            cutprice:"₹3,999",
            rating: "★★★★★",
            view: ""
            
        },
        {
            id: Math.random()*10,
            src:"https://source.unsplash.com/1600x900/?game,software",
            title: "Unreal Engine 4",
            desc: "learn the Unreal Editor, master the gameplay framework, and use Blueprint to program.",
            price: "₹459",
            cutprice:"₹5,600",
            rating: "★★★★☆",
            view: ""
            
        },
        {
            id: Math.random()*10,
            src:"https://source.unsplash.com/1600x900/?games,mobile,archery",
            title: "Master Unity : Video Games",
            desc: "Learn How To Plan, Design, Create And Publish Your Games On Any Platform Using Unity Game Engine",
            price: "₹500",
            cutprice:"₹9,670",
            rating: "★★★★★",
            view: ""
            
        },
        {
            id: Math.random()*10,
            src:"https://source.unsplash.com/1600x900/?videogame,mobile",
            title: "Blender Character v2.0",
            desc: "Learn How To Plan, Design, Create And Publish Your Games On Any Platform Using Unity Game Engine",
            price: "₹899",
            cutprice:"₹9,999",
            rating: "★★★★☆",
            view: ""
            
        },
        {
            id: Math.random()*10,
            src:"https://source.unsplash.com/1600x900/?ouija",
            title: "Unity & Game Fundamentals",
            desc: "quickly and easily navigate around your 3D scene as well as import, create and manipulate 3D objects.",
            price: "₹385",
            cutprice:"₹6,400",
            rating: "★★★☆☆",
            view: ""
            
        },
        {
            id: Math.random()*10,
            src:"https://source.unsplash.com/1600x900/?valorant",
            title: "VALORANT: The Gameplay",
            desc: "All about Valorant! Master the mechanics of maps, tactics, directions & gun control methods.",
            price: "₹880",
            cutprice:"₹9,510",
            rating: "★★★★★",
            view: ""
            
        },
        {
            id: Math.random()*10,
            src:"https://source.unsplash.com/1600x900/?game,chess",
            title: "PUBG Devt For Gamers",
            desc: "Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase",
            price: "₹400",
            cutprice:"₹6,400",
            rating: "★★★☆☆",
            view: ""
            
        },
        {
            id: Math.random()*10,
            src:"https://source.unsplash.com/1600x900/?game,ludo",
            title: "Advanced Behaviour Trees",
            desc: " Learn use of advanced behaviour trees to define the actions of non-player characters.",
            price: "₹567",
            cutprice:"₹4,800",
            rating: "★★★★☆",
            view: ""
            
        },
        
        
        ];
    let arr = [];
    for(let i=0;i<=cards.length-4;i+=4) {
        arr.push(
            <Row>
                <Card key={cards[i].id} src={cards[i].src} title={cards[i].title} desc={cards[i].desc} price={cards[i].price} cutprice={cards[i].cutprice} rating={cards[i].rating} view = {cards[i].view} />
                <Card key={cards[i+1].id} src={cards[i+1].src} title={cards[i+1].title} desc={cards[i+1].desc} price={cards[i+1].price} cutprice={cards[i+1].cutprice} rating={cards[i+1].rating} view = {cards[i+1].view} />
                <Card key={cards[i+2].id} src={cards[i+2].src} title={cards[i+2].title} desc={cards[i+2].desc} price={cards[i+2].price} cutprice={cards[i+2].cutprice} rating={cards[i+2].rating} view = {cards[i+2].view} />
                <Card key={cards[i+3].id} src={cards[i+3].src} title={cards[i+3].title} desc={cards[i+3].desc} price={cards[i+3].price} cutprice={cards[i+3].cutprice} rating={cards[i+3].rating} view = {cards[i+3].view} />
            </Row>
        )
    }
    if(cards.length%4==1) {
        arr.push(
            <Row>
                <Card key={cards[cards.length-1].id} src={cards[cards.length-1].src} title={cards[cards.length-1].title} desc={cards[cards.length-1].desc} price={cards[cards.length-1].price} cutprice={cards[cards.length-1].cutprice} rating={cards[cards.length-1].rating} view = {cards[cards.length-1].view} />
            </Row>
        );
    } else if(cards.length%4==2) {
        arr.push(
            <Row>
                <Card key={cards[cards.length-2].id} src={cards[cards.length-2].src} title={cards[cards.length-2].title} desc={cards[cards.length-2].desc} price={cards[cards.length-2].price} cutprice={cards[cards.length-2].cutprice} rating={cards[cards.length-2].rating} view = {cards[cards.length-2].view} />
                <Card key={cards[cards.length-1].id} src={cards[cards.length-1].src} title={cards[cards.length-1].title} desc={cards[cards.length-1].desc} price={cards[cards.length-1].price} cutprice={cards[cards.length-1].cutprice} rating={cards[cards.length-1].rating} view = {cards[cards.length-1].view} />
            </Row>
        );
    } else if(cards.length%4==3) {
        arr.push(
            <Row>
                <Card key={cards[cards.length-3].id} src={cards[cards.length-3].src} title={cards[cards.length-3].title} desc={cards[cards.length-3].desc} price={cards[cards.length-3].price} cutprice={cards[cards.length-3].cutprice} rating={cards[cards.length-3].rating} view = {cards[cards.length-3].view} />
                <Card key={cards[cards.length-2].id} src={cards[cards.length-2].src} title={cards[cards.length-2].title} desc={cards[cards.length-2].desc} price={cards[cards.length-2].price} cutprice={cards[cards.length-2].cutprice} rating={cards[cards.length-2].rating} view = {cards[cards.length-2].view} />
                <Card key={cards[cards.length-1].id} src={cards[cards.length-1].src} title={cards[cards.length-1].title} desc={cards[cards.length-1].desc} price={cards[cards.length-1].price} cutprice={cards[cards.length-1].cutprice} rating={cards[cards.length-1].rating} view = {cards[cards.length-1].view} />
            </Row>
        );
    }
  
  return (
    <div className="App">
      <h1 class="heading">
        <span>Game Development</span>
      </h1>
      <div id="cards_landscape_wrap-2">
        <div className="container">
         <Grid>{arr}</Grid>
        </div>
      </div>
    </div>
  );
};
export default Game;
