import React from 'react'
import {Carousel} from '3d-react-carousal';
import './Carousel_3D.css';
export default function Carousel_3D() {
    let slides = [
        <img  src="https://images.unsplash.com/photo-1509386175345-24d4e16ae35f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="1" />,
        <img  src="https://images.unsplash.com/photo-1584988252673-9daf27623d5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80" alt="2" />  ,
        <img  src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="3" />  ,
        <img  src="https://images.unsplash.com/photo-1616410011236-7a42121dd981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" alt="4" />  ,
        <img src="https://images.unsplash.com/photo-1598331668826-20cecc596b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80" alt="5" />   ];
    return (
        <div style={{marginBottom:'20px',marginTop:'30px', width:'100%',backgroundColor:"black"}}>
            <Carousel slides={slides} autoplay={false} interval={1000} />
        </div>
    )
}
