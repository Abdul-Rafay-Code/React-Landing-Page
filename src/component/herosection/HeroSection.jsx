import React from 'react'

const HeroSection = () => {
       
  const data = [
    {
      id: 1,
      images :  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOTzmx_N8HaiJ-HBOFvFff8FV2wWGMB39hHhDpSiyMMqflanbPmKQ0XBfcsohDSianIw&usqp=CAU',
      title : 'Chairs'
    },
    {
      id: 2,
      images :  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5VtzJgEoFt34A0wc1_jJmEEjw1F8Gw3sPDyiCJc4pZqW_JzcqickOuYGMY1J7A1uTjQ&usqp=CAU',
      title : 'Lamps'
    },
    {
      id: 3,
      images :  'https://img.archiexpo.com/images_ae/photo-g/49940-15756469.jpg',
      title : ' Sofas'
    }
  ]

  //  console.log(data)
  // data.map((item,index)=>{
  //   console.log(item)
  // })

  return (
    <>
    <div id="carouselExampleCaptions" class="carousel slide relative ">
  <div class="carousel-indicators">
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-photo/blue-armchair-against-blue-wall-living-room-interior-elegant-interior-design-with-copy-space-ai-generative_123827-23719.jpg" class="d-block w-100 img " alt="..."/>
      <div class="carousel-caption d-none d-md-block h-75 w-50 ">
        <h1 className='fs-1'>Furnilux - Your Brand <br /> For Style Living</h1>
        <p className='fs-4 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam at, cupiditate quod sequi laboriosam quos id autem quam provident beatae suscipit quia eaque, dolor eos.</p>

        <div className="flex items-center justify-center mt-2 ">
          <div className="border border-black rounded-5 space-x-2 ">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-5 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-5 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={"handleSearch"}
      >
        Search
      </button>
      </div>
    </div>
      </div>
    </div>
   
  </div>

 {/* <div className="relative">
  <ul className=' flex justify-center items-center'>
    <li className='absolute   flex space-x-3 w-50 justify-center items-center ' >
      <div className="bg-teal-300  flex items-center w-25 space-x-4 rounded-3 p-2"> 
      <p className='fw-bold'>Sofa</p>
      <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg" className='relative w-50' alt="" />
      </div>
      <div className="bg-teal-300 flex items-center w-25 space-x-4 rounded-3 p-2"> 
      <p className='fw-bold'>Sofa</p>
      <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg" className='w-50' alt="" />
      </div>
      <div className="bg-teal-300 flex items-center w-25 space-x-4 rounded-3 p-2"> 
      <p className='fw-bold'>Sofa</p>
      <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg" className='w-50' alt="" />
      </div>
      <div className="bg-teal-300 flex items-center w-25 space-x-4 rounded-3 p-2"> 
      <p className='fw-bold'>Sofa</p>
      <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg" className='w-50' alt="" />
      </div>
      
    </li>
  
  </ul>
 </div> */}


      
      {/* Small Boxes */}
      <div className="flex justify-center space-x-8 absolute boxes ">
        <div className="flex flex-row items-center ">
          {
            data.map((item,index)=>{
              return (
                <>
                 <div className="w-24 h-24 m-1 bg-warning-subtle rounded-3 flex flex-col justify-center  items-center" key={index}>
            <img src={item?.images} className='w-75' alt="" />
          <span className="mt-2 text-gray-700 fw-bold ">{item?.title} </span>
          </div>
         
                </>
              )
            })
          }
         

        </div>

        {/* <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-200 rounded-full flex justify-center items-center">
            <span className="text-gray-600 text-lg font-bold">Box 2</span>
          </div>
          <span className="mt-2 text-gray-700">Description 2</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-200 rounded-full flex justify-center items-center">
            <span className="text-gray-600 text-lg font-bold">Box 3</span>
          </div>
          <span className="mt-2 text-gray-700">Description 3</span>
        </div> */}

    </div>
    </div>
 


</>
  )
}

export default HeroSection