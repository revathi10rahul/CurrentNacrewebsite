import React from 'react'
import royalbluebg from '../Assets/royalbluebg.jpg'
import aporablack from '../Assets/apora_black.png'
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Chart from './Chart';
import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import multibanner from '../Assets/multibanner.png'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import ListGroup from 'react-bootstrap/ListGroup';
import { Container,Row,Col,Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import orderprocessing from '../Assets/orderprocessing.svg'
import './Responsive.css'
import multichannelintegration from '../Assets/Multichannelintegration.svg'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
const items = [
  { id: 1, title: 'The Leading AI-Powered Fulfilment Automation System', imgSrc: '../Assets/cuttingedge.webp', description: 'Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.' },
  { id: 2, title: 'Hybrid Proprietary Methodology, Opti-Pick', imgSrc: 'image2.jpg', description: 'Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business.' },
  { id: 3, title: 'Unlocking Fulfilment Automation Potential', imgSrc: 'image3.jpg', description: 'Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.' },
];

function Orderprocessing() {

  const [selectedItem, setSelectedItem] = useState(items[0]); // Default to the first item

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };


  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '', image: '' });

  const cardContents = [
    {
      title: "The Leading AI-Powered Fulfilment Automation System",
      body: "Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.",
      image: "../Assets/work3.jpg" // Update as needed for each card
    },
    {
      title: "Hybrid Proprietary Methodology, Opti-Pick",
      body: "Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business..",
      image: "../Assets/work4.jpg" // Replace with actual image path
    },
    {
      title: "Unlocking Fulfilment Automation Potential",
      body: "Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.",
      image: "../Assets/integration.webp" // Replace with actual image path
    },
  ];

  const images = [
    {
      default: '../Assets/eco.jpg',
      hover: '../Assets/work2.webp',
    },
    {
      default: '../Assets/eco.jpg',
      hover: '../Assets/work3.jpg',
    },
    {
      default: '../Assets/eco.jpg',
      hover: '../Assets/work4.jpg',
    },
  ];

  const handleShow = (index) => {
    setModalContent(cardContents[index]);
    setShowModal(true);
  };




  const navigate=useNavigate()
  const handleMultichannelintegration=()=>{
    navigate('/multichannelintegration')
  }
  const handleOrderProcessing=()=>{
    navigate('/orderprocessing')
  }
  const handlePicklistgeneration=()=>{
    navigate('/picklistgeneration')
  }
  const handleWorkforcemanagement=()=>{
    navigate('/workforcemanagement')
  }
  const handlePicksequencing=()=>{
    navigate('/picksequencing')
  }
  const handlePickandshipping=()=>{
    navigate('/pickandshipping')
  }
  const handleFulfillmentvalidation=()=>{
    navigate('/fulfillmentvalidation')
  }
  const handleEcommerceintegration=()=>{
  navigate('/ecommerceintegration')
  }
  const handleApora=()=>{
    navigate('/aporafulfillmentautomation')
  }


// ==================================================================


        const handleRequestdemo=()=>{
            navigate('/contactus')
        }
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="center-center">

















<Helmet>
        <title>Order Processing & AI-Powered Synchronization</title>
        <meta name="description" content="Enhance your warehouse efficiency with AI-powered order synchronization. Optimize same-day delivery and streamline inventory with reduced picklists." />
        <meta name="keywords" content="Order Processing, AI-powered synchronization, Warehouse efficiency, Same-day delivery, Inventory management, Just-in-time inventory" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Order Processing & AI-Powered Synchronization" />
        <meta property="og:description" content="Revolutionize warehouse operations with AI-powered order synchronization for faster same-day delivery and streamlined inventory." />
        <meta property="og:image" content={orderprocessing} />
        <meta property="og:type" content="website" />
      </Helmet>















 <div style={{height:"40vh"}}>
 <div className='starting-picklistgeneration'>
    <h1 className="gradient-text">Enhance Multi-Channel Order Processing Efficiency. <br /></h1>
    {/* <h3 className="gradient-text">Customer Satisfaction</h3> */}

    <div className='aboutpage-subtitle'>
    <h6 className='gradient-text-h6'><img src={aporablack} alt="" style={{height:"80px"}}/></h6>
    </div>
    </div>

   
    <div style={{height:"20vh"}} className='mt-5'>
    <div>
        <div class="container-chart">
  <h1 class="level-1 rectangle "  onClick={handleApora}>APORA</h1>
  <ol class="level-2-wrapper">
    <li>
      <h6 class="level-2 rectangle " onClick={handleMultichannelintegration}>Multi-Channel Integration</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle bg-success text-white" onClick={handleOrderProcessing}> Order Processing</h6>
     
    </li>
      <li>
      <h6 class="level-2 rectangle" onClick={handlePicklistgeneration}>Pick List Generation</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleWorkforcemanagement}>Work Force Management</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handlePicksequencing}>  Pick Sequencing</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handlePickandshipping}>Package & Shipping</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleFulfillmentvalidation}> Fulfillment Validation</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleEcommerceintegration}>  E-Commerce Integration</h6>
     
    </li>
  </ol>
</div>


    </div>
 </div>

 </div>




 {/* <div className='firstdiv-multichannelintegration'>
 <div className="multichannelintegration-image">
    <div className="image-wrapper-multi">
        <img src="../Assets/orderprocessing.webp" alt="orderprocessing image" />
    </div>
</div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>Same day delivery is increasingly becoming normal expectation of customers. With capital scarcity Brick and mortar business are also keen to achieve just-in-time inventory efficiency. In the bustling world of warehouse operations, streamlining processes to maximize efficiency is a top priority. Traditional order picking methods often result in a large number of picklists, leading to increased complexity and reduced productivity. However, with the power of AI-powered order synchronization, organizations can revolutionize their warehouse operations. <br /> <br /> Our AI-powered order synchronization, showcases how it optimizes efficiency and effectively reduces the number of picklists, which results in significant reduction of walk around time and increase same day deliveries.</p>    </div>
   </div> */}
<div style={{height:'30vh'}} className='mob-multi-space'></div>
 <div className='multi-main'>

<div className='multi-content'>
  <p style={{fontSize:'19.5px'}}>  <FontAwesomeIcon icon={faQuoteLeft} style={{color:'blue',fontSize:"30px"}}/> Same day delivery is increasingly becoming normal expectation of customers. With capital scarcity Brick and mortar business are also keen to achieve just-in-time inventory efficiency. In the bustling world of warehouse operations, streamlining processes to maximize efficiency is a top priority. Traditional order picking methods often result in a large number of picklists, leading to increased complexity and reduced productivity. However, with the power of AI-powered order synchronization, organizations can revolutionize their warehouse operations. Our AI-powered order synchronization, showcases how it optimizes efficiency and effectively reduces the number of picklists, which results in significant reduction of walk around time and increase same day deliveries<FontAwesomeIcon icon={faQuoteRight} style={{color:'blue',fontSize:"30px"}}/></p>
</div>
<div className='multi-img-div'>
<img src="../Assets/order-processing-workflow.png" alt="orderprocessing image" />

</div>
</div>




   <div className='container mt-5'>
      <div className='d-flex justify-content-center'>
        <h2 style={{fontSize:"30px"}}>Features</h2>
      </div>
      <div className='row justify-content-center '>
       
        <div className='col-md-4 col-sm-12 mb-4'>
          <div className='card-orderprocessing' style={{background:"white"}}>
            <div style={{color:"white",background:"#303097",padding:'20px',textAlign:'center',borderRadius:'10px'}} className='fs-3'>Intelligent Order Analysis</div>
            <div className='image-crop-orderprocessing mt-2'>
              <img className='avatar-orderprocessing' src='../Assets/intelligentorderanalysis.jpeg' alt='Order Analysis' />
            </div>
            <div className='bio-orderprocessing' >
              <p style={{color:"black"}}>The AI-powered order synchronization system utilizes advanced algorithms to analyse order similarities and content item proximities within the warehouse. By understanding the relationships between orders and item locations, the system intelligently synchronizes orders to minimize the number of picklists required.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='col-md-4 col-sm-12 mb-4'>
          <div className='card-orderprocessing' style={{background:"white"}}>
          <div style={{color:"white",background:"#303097",padding:'20px',textAlign:'center',borderRadius:'10px'}} className='fs-3'>Real-Time Data Integration</div>
            {/* <h5 style={{color:"white",background:"#303097"}}>Real-Time Data Integration</h5> */}
            <div className='image-crop-orderprocessing mt-2'>
              <img className='avatar-orderprocessing' src='../Assets/realtimedataintegration.webp' alt='Inventory Management' />
            </div>
            <div className='bio-orderprocessing'>
              <p style={{color:"black"}}>The system seamlessly integrates with existing warehouse management systems, to receive real-time data on order details, item locations, and availability. This integration ensures accurate and up-to-date information, enabling the system to make informed decisions for order synchronization.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='col-md-4 col-sm-12 mb-4'>
          <div className='card-orderprocessing' style={{background:"white"}}>
          <div style={{color:"white",background:"#303097",padding:'20px',textAlign:'center',borderRadius:'10px'}} className='fs-3'>Tailored Sync Rules</div>
            {/* <h5 style={{color:"white",background:"#303097",fontSize:"18px"}}>Customizable Synchronization Rules</h5> */}
            <div className='image-crop-orderprocessing mt-2'>
              <img className='avatar-orderprocessing' src='../Assets/synchronization.png' alt='Real-Time Analytics' />
            </div>
            <div className='bio-orderprocessing'>
              <p style={{color:"black"}}>The AI-powered order synchronization system considers criteria such as item similarity, item proximity, or order priorities to tailor the synchronization process to their unique needs.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>



    <div className='seconddiv-orderprocessing'>
    <h1>Value Delivered</h1>
</div>
<Container  className='seconddiv-orderprocessing-container mt-3'>
 

    <div className='valuedelivered-maindiv-orderprocessing' >

  <div className='valuedelivered-firstdiv-orderprocessing'>
    {/* <img src='../../Assets/eff.jpg' alt="eff image" /> */}
    {/* <h6>Enhanced Efficiency</h6> */}
    <p><span  className='fs-3'>Enhanced Efficiency</span> through AI-powered order synchronization leverages advanced algorithms to intelligently analyze order similarities and content item proximities within the warehouse. By identifying patterns, the system synchronizes multiple orders that share common items or are in close proximity. This synchronization reduces the number of picklists, enabling warehouse staff to complete orders more efficiently.</p>
  </div>









  <div className='valuedelivered-seconddiv-orderprocessing'>
    {/* <img src='../../Assets/eff.jpg' alt="eff image" /> */}
    {/* <h6>Enhanced Efficiency</h6> */}
    <p><span className='fs-3'>Reduced Complexity</span> in traditional order picking processes often leads to numerous picklists, requiring warehouse staff to walk around multiple times for each list. AI-powered order synchronization simplifies this by consolidating related orders into a single picklist, allowing staff to manage tasks more effectively and focus on efficient order fulfillment</p>
  </div>

  <div className='valuedelivered-firstdiv-orderprocessing mt-3'>
    {/* <img src='../../Assets/eff.jpg' alt="eff image" /> */}
    {/* <h6>Enhanced Efficiency</h6> */}
    <p><span className='fs-3'>Increased Productivity</span> is achieved by reducing the number of picklists through AI-powered order synchronization. Warehouse staff spend less time managing and switching between lists, which allows for a more streamlined process. This efficiency enables employees to work faster, fulfill orders promptly, and effectively meet customer demands in the warehouse</p>
  </div>
{/* 
  <div className='valuedelivered-seconddiv-orderprocessing'>
    <img src='../../Assets/reducedcomplexity.jpg' alt="reducedcomplexity image" />
    <p><b>Reduced Complexity</b> in traditional order picking processes often leads to numerous picklists, requiring warehouse staff to walk around multiple times for each list. AI-powered order synchronization simplifies this by consolidating related orders into a single picklist, allowing staff to manage tasks more effectively and focus on efficient order fulfillment.</p>
  </div> */}
  
    {/* <div className='valuedelivered-thirddiv-orderprocessing'>
      <img src='../../Assets/crowdedwarehouse.webp' alt="crowdedwarehouse image" />
  
      <p><b>Increased Productivity</b> is achieved by reducing the number of picklists through AI-powered order synchronization. Warehouse staff spend less time managing and switching between lists, which allows for a more streamlined process. This efficiency enables employees to work faster, fulfill orders promptly, and effectively meet customer demands in the warehouse</p>
    </div> */}


<div className='valuedelivered-seconddiv-orderprocessing'>
    {/* <img src='../../Assets/eff.jpg' alt="eff image" /> */}
    {/* <h6>Enhanced Efficiency</h6> */}
    <p><span className='fs-3'>Improved Resource Utilization </span> is achieved through AI-powered order synchronization, which considers the proximity of items within the warehouse. By synchronizing orders based on similar item locations, staff can navigate efficiently, minimizing travel time and maximizing the use of labor and equipment, ultimately leading to significant cost savings for the operation.</p>
  </div>

 



</div>
</Container>




<div style={{height:'4vh'}}></div>
<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<button className="custom-btn btn-5">
            <span onClick={handleRequestdemo}>Request Demo</span>
          </button>
</div>
<div style={{height:'4vh'}}></div>


<div className='resp-footer mt-5'>
<Footer/>
</div>
    </div>
  )
}

export default Orderprocessing