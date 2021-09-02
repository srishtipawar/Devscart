import './Service.css';
import Card from './Card.jsx';
function Service() {
  return (
    <div className="container">
      <h1>Our Services</h1>
    <div className="App">
    <Card icon="https://image.flaticon.com/icons/png/128/1062/1062167.png"
      head="World-class" para="Earn recognized credentials from leading universities and companies to achieve your goals."
    />

     <Card icon="https://img-premium.flaticon.com/png/128/1303/premium/1303247.png?token=exp=1629485062~hmac=57a2809608221e6f3b8e6799e4c96947"
      head="Affordable" para="Earn a university degree and enjoy high-quality curriculum, affordable pricing, and flexible scheduling."
    />


     <Card icon="https://img-premium.flaticon.com/png/128/3242/premium/3242257.png?token=exp=1629485102~hmac=7565d8041bdd09793ba341e5d2022bf3"
      head="Development" para="Bringing the design to life. Content and programming transform your template into a finished, manageable website."
    />


    <Card icon="https://image.flaticon.com/icons/png/128/1055/1055687.png"
      head="Web Design" para="Crafting the user experience. The visual design booms from the template you choose, also wordpress use for web design."
    />

     <Card icon="https://image.flaticon.com/icons/png/128/1197/1197409.png"
      head="Coding" para="coding is used for communicating with computers. People use coding to give computers and other machines instructions on what actions to perform. "
    />


    <Card icon="https://image.flaticon.com/icons/png/128/2646/2646017.png"
      head="Flexible" para="Choose from free courses, hands-on projects, certificate programs, and stackable credentials."
    />
    
    </div>
    </div>
  );
}

export default Service;