
import { useEffect, useState } from "react"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import { useParams } from "react-router-dom"
import { Box, Button, Rating } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import './singleproduct.css'

function Singleproductview() {

  const {productId} = useParams()
   {console.log(productId)}
   const [product,setProduct] = useState([])

   const fetchProduct = async () => {
     
    try {
         const response =  await fetch('http://localhost:3000/api/products/'+ productId , {
          method : "GET" ,
          headers : {
            "Content-Type" : "application/json" 
          },
          
         })

        if(response.ok) {
          const data =  await response.json()
           console.log(data)
          setProduct(data)
        } 
    }
    catch {

    }
      
   }  

   useEffect(() => {
            fetchProduct()
   },[])

  return (
    <>
    <div>
        <Navbar></Navbar>
        <div>
            <div id="productGrid" >
               
               <div id='imageSection' >
                              <img style={{  height : "100%" , width : "100%" ,objectFit : "cover" , borderRadius : "20px"}}  src={`data:image/png;base64,${product.imageUrl}`} ></img>
                       </div> 
               
                       <div id="productInfoSection" >
                       <div id="Text" >
                               {product.productName}
                            </div>
                            
                            <div id='descriptiontext' > 
                              {product.description}
                            </div>
                            <div id='productPriceBox' >
                            ₹{product.price}
                            </div>
                            <div>
                            <Box sx={{
                                  width: 200,
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                              >
                                <Rating
                                  name="text-feedback"
                                  value={3}
                                  readOnly
                                  precision={0.5}
                                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                             </Box>
           
                            </div>

                            <div id='productButtonSection' >
                                   <div  >
                                   <Button sx={{backgroundColor : "red" , ":hover"  : { backgroundColor : "#BF3131"}}} variant="contained">Add to cart</Button>
                                   </div>
                                   <div>
                                   <Button sx={{backgroundColor : "red" , ":hover"  : { backgroundColor : "#BF3131"}}} variant="contained">Buy Now</Button>
                                    </div>
                            </div>
                       </div>

            </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
    </div>
    </>
  )
}

export default Singleproductview 