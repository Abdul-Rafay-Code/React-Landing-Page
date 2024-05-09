import React from 'react'

const Blog = () => {
    const data = [
        {
            id:1,
            blogImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrito2qyv6ei287G1AI9gwHQZnbGjV1LGifow6J0qwHhQLLOTpEQ84W6tUil2ZpZjlvM&usqp=CAU',
            blogDescription : ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus aut laudantium sequi obcaecati repu amet..'
        },
        {
            id:2,
            blogImage: 'https://mysleepyhead.com/media/catalog/product/q/u/queen_size_wooden_bed_1.jpg',
            blogDescription : ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus aut laudantium sequi obcaecati repu amet..'
        },
        {
            id:3,
            blogImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01XOKUvKNDawOIfjwm9hCId8CvV0FnghWggK07MOBavyM7x699bxDwwSqgYh2-TiOQdo&usqp=CAU',
            blogDescription : ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus aut laudantium sequi obcaecati repu amet..'
        }
    ]
  return (
    <>
    <div className=" mt-4">
        <h1 className='fs-1 text-center'>Blog & Insights</h1>
        <p className='text-center text-gray-700'>Explore our blogs for design and tips.</p>
    </div>
    <div className="mb-3 mt-3">
    <div className="flex items-center justify-center flex-wrap h-full space-x-3 space-y-3   relative">
      {
        data.map((item,index)=>{

            return (
                <div className="border border-black w-25 rounded-3 overflow-hidden hover:-translate-y-1 relative">
                <img
                    src={item?.blogImage}
                    className="h-96"
                    alt=""
                />
                <div className="absolute top-60 right-0">
                    <div className="border border-black  bg-slate-200 text-center text-black rounded-4 w-60 p-4">
                        <p className="m-0">
                        {item?.blogDescription}
                        </p>
                    </div>
                </div>
            </div>
            )
        })
      }

   
</div>
</div>

    
    </>
  )
}

export default Blog