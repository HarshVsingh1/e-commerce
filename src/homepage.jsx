import BrowseCategories from "./components/browsebycategories";
import Categories from "./components/categories";
import Exploreproduct from "./components/exploreproduct";
import Imageslide from "./components/Imageslides";
import './Homepage.css'
import addbanner from './assets/banner.png'
import Services from "./components/services";
import Newarrival from "./components/newarrivals";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function Homepage() {
    return (
        <> 
        <div  >
            <div>
                <Navbar></Navbar>
            </div>
            <div className="centerdiv">
                 <Imageslide></Imageslide>
            </div>
            <div>
                <Categories></Categories>
            </div>
            <div>
                <BrowseCategories></BrowseCategories>
            </div>
            <div>
                <Exploreproduct></Exploreproduct>
            </div>

           
            <div>
                <Newarrival></Newarrival>
            </div>
            <div>
                <Services></Services>
            </div>
            <div>
                <Footer></Footer>
            </div>
          
        </div>
        </>
    )
}

export default Homepage ;