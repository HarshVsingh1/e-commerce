import { Box, Rating } from '@mui/material'
import './categorieCard.css'
import StarIcon from '@mui/icons-material/Star';

function ProductCard(productName,Price,Image) {
 
  const ratingValue = 0 ;

   return (
     <>
           <div id="cardDimension" >
                 <div id='imageBox' >
                        <img  style={{height : "250px" , width : "100%" , objectFit : "cover" }} src={Image}  ></img>   
                 </div>
                 <div id='productName' >
                    {productName}
                 </div>
                 <div id='priceBox' >
                   {Price}
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
                       value={ratingValue}
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

export default ProductCard