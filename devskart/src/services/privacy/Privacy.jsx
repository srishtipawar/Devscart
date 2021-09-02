import './Privacy.css';
import Comp from './Comp.jsx';
import Para from './Para.jsx';
function Privacy() {
  return (
    <div className="Box_in">
    <h1>Website Privacy Policy</h1>
    <img src="https://image.flaticon.com/icons/png/128/2133/2133152.png" alt=""/>
    <div className="Privacy">
    <Comp head="Key Information"/>
    <ul className="para_list">
      <li>DevsCart, Inc. is the data controller of the personal information we collect about you (i.e., the entity that determines the means and purposes of collecting, using, and disclosing the personal information), unless you are part of a degree, certain MasterTrack programs, or certain other circumstances as communicated to you, in which case DevsCart is the data processor.</li>
      <li>We collect the personal information set out in the "What Information We Collect" section of this Privacy Notice below, including account registration details such as name and email, details of Content Offerings you undertake, survey information (where you provide it), identity verification data, and information about your use of our site and Services.</li>
      <li>We use your personal information for the purposes set out in the "How We Use the Information" section of this Privacy Notice below, including providing our site and Services to you, ensuring the security and performance of our site, conducting research relating to Content Offerings, sharing information with our Content Providers and our suppliers, direct marketing, and performing statistical analysis of the use of our site and Services.</li>
      <li>You have a number of rights that you can exercise in relation to our use of your personal information, as set out in the "Updating or Deleting Your Personally Identifiable Information" section of this Privacy Notice below.</li>
    </ul>


    <Comp head="Purpose and who we are"/>
    <Para para="The purpose of this Privacy Notice is to describe how DevsCart, Inc., our subsidiaries, and our international branches, (DevsCart, us, we, or our) collects, uses, and shares information about you through our online interfaces (e.g., websites and mobile applications) owned and controlled by us, including but not limited to DevsCart.org and rhyme.com (collectively referred to herein as the Site). Please read this Privacy Notice carefully to understand what we do. "
     />

    <Comp head="What Information this Privacy Notice Covers"/>
    <Para para="This Privacy Notice covers information we collect from you through our Site. Some of our Site’s functionality can be used without revealing any Personal Data, but for features or Services related to the Content Offerings, Personal Data is required. In order to access certain features and benefits on our Site, you may need to submit, or we may collect, Personal Data (i.e., information that can be used to identify you and which may also be referred to as “personally identifiable information” or “personal information”). "
     />


    <Comp head="What You Agree to by Using Our Site"/>
    <Para para="We consider that the legal bases for using your personal information as set out in this Privacy Notice are as follows:"
     />
     <ul className="para_list">
       <li>our use of your personal information is necessary for complying with our legal obligations; or</li>
       <li>use of your personal information is necessary for our legitimate interests or the legitimate interests of others. Our legitimate interests are to: a)run, grow and develop our business. b) operate our Site and provide our Services. c) select appropriately skilled and qualified suppliers;</li>
       <li>consent, to send you certain communications or where you submit certain information to us, or where required to rely upon consent by local law.</li>
       <li>If we rely on our (or another party’s) legitimate interests for using your personal information, we will undertake a balancing test to ensure that our (or the other party’s) legitimate interests are not outweighed by your interests or fundamental rights and freedoms which require protection of the personal information.</li>
       <li>If we rely on your consent for us to use your personal information in a particular way, but you later change your mind, you may withdraw your consent by visiting your profile page and clicking the box to remove consent and we will stop doing so. If you withdraw your consent, this may impact the ability for us to provide some of our Services to you.</li>
     </ul>


    <Comp head="What Information We Collect"/>
    <Para para="We gather two types of information about users through the Site:"
     />
     <ul className="para_list">
       <li><b>Information relating to your use of our Site: </b> When users come to our Site, we may track, collect, and aggregate information indicating, among other things, which pages of our Site were visited, the order in which they were visited, when they were visited, and which hyperlinks were clicked. </li>
       <li><b>Personal Data provided directly by you or via third parties: </b> We collect Personal Data that you provide to us when you register for an account, update or change information for your account, purchase products or Services, complete a survey, sign-up for email updates, participate in our public forums, send us email messages, and/or participate in Content Offerings or other Services on our Site.</li>
      
     </ul>
    </div>
    </div>
  );
}

export default Privacy;