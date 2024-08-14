import React from 'react'
import bbekkImage from '../../images/bbek.jpg'
const IntroCard = () => {
  return (
    <div className='intro-card'>
        <div className='card-wrapper'>
            <div className='three-dots'>
                <div className='dot-1'></div>
                <div className='dot-2'></div>
                <div className='dot-3'></div>
            </div>
            <div className='email-wrapper'>
                bibekmanandhar2@gmail.com
            </div>

           
        </div>
        <div className='main-section'>
        <div className='image-wrapper'>
                <img className='user-image'src={bbekkImage}></img>
                <p className='theme-header'>Change Theme</p>

                <div className='theme-buttons'>
               <div className='light-theme'>
                  <div className='dark-theme'>
                  </div>
                </div>
               </div>
                </div>
                
               
                {/* <div className='description-wrapper'>
                  
                <h1 className='name-header'>Hello World!<br></br> I'm Bibek Manandhar</h1>
             
               
                </div> */}
                <div className='description-wrapper'>
                  <div className='small-dot-1'></div>
                  <div className='small-dot-2'></div>
                  <div className='small-dot-3'></div>
                  <div className='small-dot-4'></div>

                  <div className='blue-card'>
                    <div className='blue-card-content'>
                      <h3>Hello! World!</h3>
                      <h2>I am Bibek Manandhar</h2>
                    </div>
                  </div>


            
                </div>

                
              
               
            </div>
    </div>
  )
}

export default IntroCard