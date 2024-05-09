import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function MovieCard() {
  const data = [
    {
      id:1,
      productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jtT0via5wgD-CH8ctR7g2BDOCjNonjlN2GboaOuZtfAeZQztQuSNy1AGAjRzDk-sBYE&usqp=CAU",
      ProductTitle : 'Comfortable Bed',
      poductPrice : '$75.99'
    },
    {
      id:2,
      productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMTLhQy_jKpMFe0nvQQ8vufkAM-7PDTc4xDCWiWr-l_QHL9eK_SGl81xrjZgS0qAP2is&usqp=CAU",
      ProductTitle : 'Comfortable Sofa',
      poductPrice : '$60.99'
    },
    {
      id:3,
      productImage : "https://image.made-in-china.com/202f0j00RCMkocSPntqb/Hot-Sale-Customizable-New-Luxury-Modern-Dining-Room-Home-Furniture-6-Dining-Chairs-Dinner-Table-with-Chair.webp",
      ProductTitle : 'Modern Dinner Table',
      poductPrice : '$85.99'
    }
  ]
  return (
     <>
     <h1 className='fs-1  text-center mt-5 mb-3'>Elevate Your Living Room</h1>
    <div className='mt-5 mb-4'>
      <div className='flex flex-wrap justify-center px-4 lg:px-10 '>

        {
          data.map((item,index)=>{

            return (
              <>
                      <div className="p-2 md:w-1/4 w-full" key={index}>
          <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src={item?.productImage} alt="" />
            <div className="flex justify-between items-center">
            <h2 className='text-xl text-white font-bold'>{item?.ProductTitle}</h2>
            <FontAwesomeIcon icon={faCartShopping} className='text-white' />
            </div>
            <h2 className='text-lg text-white mb-2'>{item?.poductPrice}</h2>
          </div>
        </div>
              </>
            )
          })
        }



        {/* <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-white font-bold'>This is title</h2>
            <h2 className='text-lg text-white mb-2'>desc</h2>
          </div>
        </div>

        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-white font-bold'>This is title</h2>
            <h2 className='text-lg text-white mb-2'>desc</h2>
          </div>
        </div> */}

        

      </div>
    </div>
    </>
  )
}

export default MovieCard