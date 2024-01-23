import { Button } from "@mui/material";
import CategorieCard from "./subcomponents/categorieCard";

function Exploreproduct() {
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
                          <CategorieCard></CategorieCard>
                     </div>
                     <div id="viewAllProduct" >
                     <Button sx={{backgroundColor : "red" , ":hover"  : { backgroundColor : "#BF3131"}}} variant="contained">View All</Button>
                     </div>
              </div>
        </>
    )
}

export default Exploreproduct ;