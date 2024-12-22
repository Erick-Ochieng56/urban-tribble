/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'

const Blogs = () => {

  const blogs=[
    {
      "id":1,
      'title':'Blog 1',
      'desc':"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex amet perspiciatis pariatur quam dignissimos facere recusandae rerum adipisci facilis natus! Aperiam illo corporis culpa cum reprehenderit repellendus doloribus quae dolor?",
      'coverImg':'https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png'
  },
  {
    "id":2,
    'title':'Blog 2',
    'desc':"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex amet perspiciatis pariatur quam dignissimos facere recusandae rerum adipisci facilis natus! Aperiam illo corporis culpa cum reprehenderit repellendus doloribus quae dolor?",
    'coverImg':'https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png'
},
{
  "id":3,
  'title':'Blog 3',
  'desc':"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex amet perspiciatis pariatur quam dignissimos facere recusandae rerum adipisci facilis natus! Aperiam illo corporis culpa cum reprehenderit repellendus doloribus quae dolor?",
  'coverImg':'https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png'
}

]




  return (
    <div className='w-full bg=[f9f9f9] py-[50px]'>
      <div className='max-w-[1240px] mx-auto'> 
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black '>

          {blogs.map((blog)=>
          <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>  
            <img className='h-56 w-full object-cover ' src={blogs.coverImg}/>
            <div className='p-8'>
              <h3 className='font-bold text-2xl my-1'>{blogs.title}</h3>
              <p className='text-gray-600 text-xl'>{blogs.desc}</p>
            </div>
          </div>
          
         )}
          


        </div>
      </div>
    </div>
  )
}

export default Blogs