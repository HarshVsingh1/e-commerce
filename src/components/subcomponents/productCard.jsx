import { Box, Button, Rating } from '@mui/material'
import './categorieCard.css'
import StarIcon from '@mui/icons-material/Star';
import './productCard.css'
import { useNavigate } from 'react-router-dom';


function ProductCard({productName,Price,Image,description , id}) {
  
  const navigate = useNavigate()

  console.log('Image:', Image);

  const ratingValue = 3.5 ;

   return (
     <>
           <div id="productcardDimension" > 
           <div>

          
                 <div id='imageBox' >
                        <img  onClick={ () => { navigate('/product/' + id )}} style={{height : "250px" , width : "100%" , objectFit : "cover" , borderTopLeftRadius : "20px" , borderTopRightRadius : "20px" }} src={`data:image/png;base64,${Image}`}  ></img>   
                 </div>
                 
             </div>  

             <div id='productDescription' >
                         
                        <div id='productName' >
                               {productName}
                            </div>
                            
                            <div id='descriptionText' > 
                              {description}
                            </div>
                            <div id='priceBox' >
                            ₹{Price}
                            </div>
                            <div>
                            <Box sx={{
                                  width: 200,
                                  display: 'flex',
                                  alignItems: 'center',
                                  margin : "10px"
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

                            <div id='buttonSection' >
                                   <div  >
                                   <Button sx={{backgroundColor : "red" , ":hover"  : { backgroundColor : "#BF3131"}}} variant="contained">Add to cart</Button>
                                   </div>
                                   <div>
                                   <Button sx={{backgroundColor : "red" , ":hover"  : { backgroundColor : "#BF3131"}}} variant="contained">Buy Now</Button>
                                    </div>
                            </div>
                        
            </div>

        </div>
           
    </>
   )
}

export default ProductCard