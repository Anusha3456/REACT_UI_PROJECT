import React from 'react'

function Womenscollection(props) {
    const {title,image1,image2,image3,image4,image5,image6,price1}=props.ladiesFashion
   
    return (
    <div className='womenimages'>
      
       <img src="asserts/LadiesBanner.jpg" alt="" />
     <div className="images">
        <img src={image1} alt="image" />
        <img src={image2} alt="image" />
        <img src={image3} alt="image" />
        <img src={image4} alt="image" />
        <img src={image5} alt="image" />
        <img src={image6} alt="image" />
        
     </div>
    </div>
  )
}

export default Womenscollection
