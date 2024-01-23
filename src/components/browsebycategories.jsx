
import './browsebycategories.css'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import WatchIcon from '@mui/icons-material/Watch';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

function BrowseCategories() {
    return (
        <> 
                  <div id='cardBlockCategory' >
                     <div id="title" >
                            <div id="block" >
                                    
                            </div>
                            <div id='titleText' >
                                Categories
                            </div>
                     </div>
                     <div id="subTitleAndTime" >
                            <div id='subTitleAndTitleText' >
                                Browse By Category
                            </div>
                            
                     </div>

                     <div id="categories" >
                              <div className='categoryContainer' >
                                <div className='icon' >

                                    <PhoneAndroidIcon sx={{fontSize : "100px"}} ></PhoneAndroidIcon>
                                    <div className='iconText' >
                                        phone
                                    </div>
                                </div>
                               
                              </div>
                              <div className='categoryContainer' >
                                <div className='icon' >

                                    <ComputerIcon sx={{fontSize : "100px"}} ></ComputerIcon>
                                    <div className='iconText' >
                                        Laptops
                                    </div>
                                </div>
                              </div>
                              <div className='categoryContainer' >
                              <div className='icon' >

                                        <WatchIcon sx={{fontSize : "100px"}} ></WatchIcon>
                                        <div className='iconText' >
                                        Smartwatch
                                    </div>
                               </div> 
                              </div>
                              <div className='categoryContainer' >
                              <div className='icon' >

                                       <CameraAltIcon sx={{fontSize : "100px"}} ></CameraAltIcon>
                                       <div className='iconText' >
                                        Camera
                                       </div>
                              </div>
                              </div>
                              <div className='categoryContainer' >
                              <div className='icon' >

                                         <HeadphonesIcon sx={{fontSize : "100px"}}  ></HeadphonesIcon>
                                         <div className='iconText' >
                                        Headphone
                                    </div>
                              </div>
                              </div>
                              <div className='categoryContainer' >
                              <div className='icon' >

                                      <SportsEsportsIcon sx={{fontSize : "100px"}}  ></SportsEsportsIcon>
                                      <div className='iconText' >
                                        Games
                                      </div>
                                </div>
                              </div>
                     </div>
                    
              </div>
        </>
    )
}


export default BrowseCategories