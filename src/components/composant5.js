import React, {useState, useEffect} from 'react'
import "/home/mouna/Bureau/React/react-debut/src/components/style.css"

function composant5() {
    return (
        <div className="cards">
            <img className="image2" src="./im.png"></img>
             <div className="myCard">
        
         <h1>The world's biggest healthcare platform </h1>
         <p className="paragraph-4">We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries.</p>
         
        </div>
        
        <div class="myCard-1">
        <h5 className="myH5">Leader in 12 countries </h5>
        <p className="myParag-1">Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile </p>
        </div>
        <div class="myCard-2">
        <h5 className="myH5">4.8 million appointments </h5>
       <p className="myPrag-2">booked last month </p>
        </div>
        <div class="myCard-3">
        <h5 className="myH5">61.9 mln unique patients </h5>
        <p className="myParag-3">visit our websites each month </p>
        </div>
        <div class="myCard-4">
        <h5 className="myH5">92.5k active doctors</h5>
        <p className="myParag-4">trust our solutions </p>
        </div>
       
      </div> 
        
    )
}

export default composant5

