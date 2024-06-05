import React from 'react'
import { useParams } from 'react-router-dom'

const ProductsInfo = () => {
    const data = [
        {
          id:1,
          productImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGWiJmfx0w4dCqByHlKgVe9R3MfpfPyjxGh2ecDOSj-AXTZrO0Cezg-OWVGabyyIh8Fc&usqp=CAU',
          ProductTitle : 'Luxurious Bed',
          ProductPrice : '$95.99'
        },
        {
          id:2,
          productImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttrfK7LSO93WYZthGPlZyVfrPDgkVggIuZu0trB7MKbJcGtfpU8AOWVYr6nhGekLWAeI&usqp=CAU',
          ProductTitle : 'Modern Lights',
          ProductPrice : '$45.99'
        },
        {
          id:3,
          productImage : 'https://m.media-amazon.com/images/I/41hVCjliWIL._AC_.jpg',
          ProductTitle : 'Beautiful Sofa ',
          ProductPrice : '$55.99'
        },
        {
          id:4,
          productImage : 'https://m.media-amazon.com/images/I/51Vk8YOXoWL._AC_.jpg',
          ProductTitle : 'Complete Dinner Table ',
          ProductPrice : '$65.99'
        },
        {
          id:5,
          productImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7ErvsWaAVJaO7W6rNkhxwuAN8c1hnpf1tAaQYI_pFIqYDfYKBixcfX9WFsyN0OILSMY&usqp=CAU',
          ProductTitle : 'Stylish Chairs',
          ProductPrice : '$35.99'
        },
        {
          id:6,
          productImage : 'https://m.media-amazon.com/images/I/41hVCjliWIL._AC_.jpg',
          ProductTitle : 'Beautiful Sofa ',
          ProductPrice : '$55.99'
        },
        {
          id:7,
          productImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttrfK7LSO93WYZthGPlZyVfrPDgkVggIuZu0trB7MKbJcGtfpU8AOWVYr6nhGekLWAeI&usqp=CAU',
          ProductTitle : 'Modern Lights',
          ProductPrice : '$45.99'
        },
        {
          id:8,
          productImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGWiJmfx0w4dCqByHlKgVe9R3MfpfPyjxGh2ecDOSj-AXTZrO0Cezg-OWVGabyyIh8Fc&usqp=CAU',
          ProductTitle : 'Luxurious Bed',
          ProductPrice : '$95.99'
        },    
  ]

  const {id} = useParams()
  const filterProduct = data.filter((obj)=> obj.id == id)
    // console.log(filterProduct)
  return (
 <>
 {filterProduct.map((item,index)=>{

 return (
    <>
    
  <div className="flex justify-center items-center">
  <div className="p-2 md:w-1/4 w-full" key={index}>
          <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src={item?.productImage} 
            
            alt="" />
            <div className="flex justify-between items-center">
            <h2 className='text-xl text-white font-bold'>{item?.ProductTitle}</h2>
            {/* <FontAwesomeIcon icon={faCartShopping} className='text-white' /> */}
            </div>
            <h2 className='text-lg text-white mb-2'>{item?.ProductPrice}</h2>
          </div>
        </div>
          </div>
        </>
 )
        })}
 </>
)
}

export default ProductsInfo