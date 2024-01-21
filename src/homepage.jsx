import Categories from "./components/categories";
import Imageslide from "./components/Imageslides";
import './Homepage.css'

function Homepage() {
    return (
        <> 
        <div  >
            <div className="centerdiv">
                 <Imageslide></Imageslide>
            </div>
            <div>
                <Categories></Categories>
            </div>
        </div>
        </>
    )
}

export default Homepage ;