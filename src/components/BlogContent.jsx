/* eslint-disable no-unused-vars */
import React from 'react'

const BlogContent = () => {


    const blog={
        "id":1,
        'title':'10 days of Solodity',
        'desc':'Learn on how to learn Solidity in 10 days!',
        'coverImg':'https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png',
        'content':'It might not look necessary but after death,one of the reasons the body is kept for around 7 days is to help those grieving adjust to the tragedy accordingly. To some especially those who were close,its very hard to come to terms with the unfortunate reality,so they need time. And sometimes the provided time is not enoughI remember the day we buried my grandfather,my Cousin Cecilia after kuona geneza inaingizwa kwa shimo alilala chini akaanza kugaragara kwa hiyo mchanga ya kaburi,for around 5 minutes she was down there yelling and bathing in the sand like a chicken. Na alikua na stocking hiyo siku nikama she knew she would do that hakuvaa skirt kama wamama wenzake. Mpaka nikajiuliza kimoyomoyo ama ni yeye alimuua? Anyway she was taken at the back of the tent for consolation. But she grieved,na hiyo kitu ikamtoka. This is the same reason Luhyas,a day before burial take the body wanaeka sitting room hiyo usiku. Wanapiga story geneza ikiwa juu ya meza pretending to be involving the deceased inthe conversation. They laugh and drink as they say their goodbyes. Very subtly and composed. In ghana they dress the deceased,even apply make up,wanamvalisha miwani ya welding then take him out the coffin wanamkaisha kwa kiti. Masaa ya kumzika wanamrudisha kwa geneza. All these are ways of dealing with grief,tying to adjust to the new outcome.You see,grief as a loss,is not something you can get over ,its something you learn to live with,its part of you. Losing a parent cannot be forgotten,you cannot burry the feeling,you can only embrace it. And such is life wazee,si ndio maana tunasema kasongo must go.',
    
        'authorName':'John Doe',
        'authorImg':'https://i.pinimg.com/originals/15/6b/73/156b73b4e25b6922d0205901e683ed08.png',
        'authorDesc':'Web Developer',

    } 
    

  return (
    <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 
            gap-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
                
                <div className='col-span-2'>
                    <img className='h-56 w-full object-cover'src={blog.coverImg}/>
                    <h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
                    <div className='pt-5'><p>{blog.content}</p></div>
                </div>

                <div className='items-center w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px] '>
                    <div>
                        <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={blog.authorImg}/>
                        <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.authorName}</h1>
                        <p className='text-center text-gray-900 font-medium'>{blog.authorDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default BlogContent