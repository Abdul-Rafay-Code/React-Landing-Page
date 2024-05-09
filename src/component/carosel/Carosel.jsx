import React from 'react'

const Carosel = () => {

  const data = [
    {
      id:1,
      caroselImage : "https://www.ifurnishco.com/cid343/css/20497/images/living-hero.jpg",
      caroselSale : 'Complete Luxurious Sofas Get 30% Off',
      caroselDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis  exercitationem nam dolores? Corrupti, dolorum accusamus?'
    },
    {
      id:2,
      caroselImage : "https://www.kingswaycane.co.uk/wp-content/uploads/2023/02/rattan-sofa-set-banner-1-1200x400.jpg",
      caroselSale : 'Complete Luxurious Sofas Get 30% Off',
      caroselDescription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis  exercitationem nam dolores? Corrupti, dolorum accusamus?'
    }
  ]

  return (
      <>
      <div id="carouselExampleCaptions" class="carousel slide mt-5 mb-4">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div class="carousel-inner">
    {
      data.map((item,index)=>{

        return (
              <>
              <div class="carousel-item active" key={index}>
      <img src={item?.caroselImage} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block w-50 h-100">
        <h5 className='fs-1 text-black	'>{item?.caroselSale}</h5>
        <p className='text-black'>{item?.caroselDescription} </p>
      </div>
    </div>
              </>
        )
      })
    }
    



    {/* <div class="carousel-item active">
      <img src="https://www.kingswaycane.co.uk/wp-content/uploads/2023/02/rattan-sofa-set-banner-1-1200x400.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block w-50 h-100">
        <h5 className='fs-1 text-black	'>Complete Luxurious Sofas <br />Get 30% Off</h5>
        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis <br /> exercitationem nam dolores? Corrupti, dolorum accusamus? </p>
      </div>
    </div> */}

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </>
)
}

export default Carosel