import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <>
   <footer className=' p-3 bg-danger-subtle'>
    <div className="container">
    <div className="row p-3" >
    <div className="col-md-3 col-sm-6 ">
      <ul>
        <h1 className='fs-1'>Furnilux</h1>
        <li><FontAwesomeIcon icon={faPhone} />        +000 111 222 </li>
        <li><FontAwesomeIcon icon={faEnvelope} />         abc@gmail.com</li>
        <li><FontAwesomeIcon icon={faLocationDot} />       123 Hamested Land, United States</li>
      </ul>
    </div>

    <div className="col-md-3  col-sm-6 ">
      <ul>
        <h1 className='fs-1'>About Us</h1>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>Popular Question</li>
      </ul>
    </div>

    <div className="col-md-3  col-sm-6 ">
      <ul>
        <h1 className='fs-1'>What's Popular</h1>
        <li>King Size Bed</li>
        <li>Sofas</li>
        <li>Chairs</li>
        <li>Decoratice Lamp</li>
      </ul>
    </div>

    <div className="col-md-3 col-sm-6 ">
    <p className='fs-1'>Get 15% Off Your First Order</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque vel voluptatibus, exercitationem asperiores quisquam molestiae nemo animi quibusdam at quod nam iste, magni ipsam!</p>
<div className="border border-black p-2 rounded-5 ">
    <form class="form-inline flex ">
        <div class="form-group mr-2 ">
          <input type="text" class="form-control rounded-5" id="searchBox" placeholder="Search..."/>
        </div>
        <button type="button" class="btn bg-black text-white rounded-5" >Subcribe</button>
      </form>
      </div>
    </div>

    </div>
    </div>

   </footer>



   
   </>
  )
}

export default Footer