import React from 'react'

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jgp",
    "/img7.jpg",
    "/img8.jpg",
  ];
  return (
    <section className='gallery '>
     <h1> BETTER BEATS BEST</h1>
     <div className='images'>
      <div>
         {
        gallery.slice(0,3).map((element , index)=>(
          <img key={index} src={element} alt="" />
        ))
       }
      </div>

       <div>
         {
        gallery.slice(3,6).map((element , index)=>(
          <img key={index} src={element} alt="" />
        ))
       }
      </div>

       <div>
         {
        gallery.slice(6,9).map((element , index)=>(
          <img key={index} src={element} alt="" />
        ))
       }
      </div>

      
     </div>
    </section>
  )
}

export default Gallery