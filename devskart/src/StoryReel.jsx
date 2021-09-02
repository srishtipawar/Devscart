import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    
    return (
        <div className="storyReel">
         <Story image="https://i.pinimg.com/736x/6c/12/e3/6c12e352b084732486bf575ca502704d.jpg"
            profileSrc="https://cdn.dribbble.com/users/673429/screenshots/12590629/__400x300.gif"
            title="Get 10% discount on Realme discount"
            
            />

  <Story image="https://photos5.appleinsider.com/gallery/28053-43005-apple-12-inch-macbook-deal-l.jpg" 
  profileSrc='https://www.viewydigital.com/wp-content/uploads/2019/01/ezgif.com-optimize.gif' title="CULTURAL"/>


  <Story image="https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2021/05/Featured-image-3-Realme-Watch-2-Pro.jpeg"
            profileSrc="https://i.giphy.com/media/5xtDarqPCe4BofVSz3W/giphy.webp"
            title="" />


  <Story image="https://www.bajar.in/imgs_c/25078_0_924.jpg"
            profileSrc="https://i.giphy.com/media/tOi4zkAikroTOBV9oy/200.gif"
            title="" />

   <Story image="https://ae01.alicdn.com/kf/Hd4893f3e021b4831a5d8eee3b24be0der.jpg"
            profileSrc="https://i.giphy.com/media/SuIYVyiAehl3sdCkaV/giphy.webp"
            title="" />

        </div>
    )
}

export default StoryReel;
