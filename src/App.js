import { Routes, Route, BrowserRouter} from "react-router-dom";

import "./App.css";
import Nav from "./Components/Nav";
import ShowData from "./Components/Show-Data";
import Cart from "./Components/cartPage";
function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path='/' element={
       <>
         <Nav></Nav>
         <ShowData></ShowData>
       </>
      }
    />
                <Route path='cart' element={<Cart/>} />
    </Routes>
    
      
    </BrowserRouter>
  );
}

export default App;
