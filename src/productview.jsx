
import Navbar from "./components/navbar"
import ProductCard from "./components/subcomponents/productCard"


function Productview() {
  return (
    <>
    <div>
        <Navbar></Navbar>
        <div>
            <div id="productGrid" >
                       <ProductCard 
                            >

                       </ProductCard>
            </div>
        </div>
    </div>
    </>
  )
}

export default Productview 