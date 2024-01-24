import { Button } from "@mui/material";
import CategorieCard from "./subcomponents/categorieCard";
import { useNavigate } from "react-router-dom";

function Exploreproduct({products}) {
    const navigate =useNavigate()
    return (
        <>
        <div id='cardBlock' >
                     <div id="title" >
                            <div id="block" >
                                    
                            </div>
                            <div id='titleText' >
                                This Month
                            </div>
                     </div>
                     <div id="subTitleAndTime" >
                            <div id='subTitleAndTitleText' >
                                Best Selling Products
                            </div>
                     </div>
                     <div id="cardDisplay" > 
                           {
                            products.map((product) => ( 
                                <div id='cardStyle' >
                                <CategorieCard 
                                key={product._id}
                                productName={product.productName}
                                price={product.price}
                                image={product.imageUrl}
                                ></CategorieCard>
                                </div>
                            )) 
                           }
                          
                     </div>
                     <div id="viewAllProduct" >
                     <Button onClick={() => {navigate('/productview')}}  sx={{backgroundColor : "red" , ":hover"  : { backgroundColor : "#BF3131"}}} variant="contained">View All</Button>
                     </div>
              </div>
        </>
    )
}

export default Exploreproduct ;