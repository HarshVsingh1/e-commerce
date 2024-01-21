import { Button } from '@mui/material'
import './categories.css'
import CategorieCard from './subcomponents/categorieCard'

function Categories() {
   
    return (
        <> 
              <div id='cardBlock' >
                     <div id="title" >
                            <div id="block" >
                                    
                            </div>
                            <div id='titleText' >
                                Today's
                            </div>
                     </div>
                     <div id="subTitleAndTime" >
                            <div id='subTitleAndTitleText' >
                                Flash Sales
                            </div>
                     </div>
                     <div id="cardDisplay" >
                           <CategorieCard></CategorieCard>
                     </div>
                     <div id="viewAllProduct" >
                     <Button sx={{backgroundColor : "red" , ":hover"  : { backgroundColor : "#BF3131"}}} variant="contained">Contained</Button>
                     </div>
              </div>

        </>
    )
}

export default Categories