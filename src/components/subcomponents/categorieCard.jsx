import { Box, Rating } from '@mui/material'
import './categorieCard.css'
import StarIcon from '@mui/icons-material/Star';

function CategorieCard() {
 

   const mockdata = {
      discount : "-40%" ,
      productName : "Supra gendfaad gadi" ,
      price : "₹400" ,
      image : "https://wallpapercave.com/wp/wp10935405.jpg" , 
      ratingValue : "2.7"
   
   }

   return (
     <>
           <div id="cardDimension" >
                 <div id='imageBox' >
                        <img  style={{height : "250px" , width : "100%" , objectFit : "cover" }} src={mockdata.image}  ></img>   
                 </div>
                 <div id='productName' >
                    {mockdata.productName}
                 </div>
                 <div id='priceBox' >
                   {mockdata.price}
                 </div>
                 <div>
                 <Box sx={{
                       width: 200,
                       display: 'flex',
                       alignItems: 'center',
                     }}
                   >
                     <Rating
                       name="text-feedback"
                       value={mockdata.ratingValue}
                       readOnly
                       precision={0.5}
                       emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                     />
                   </Box>

                 </div>
           </div>
           
    </>
   )
}

export default CategorieCard