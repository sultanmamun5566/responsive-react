import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Booking from "./Pages/Booking/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PraivetRoute from "./Pages/Login/PrivetRoute/PraivetRoute";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shered/Header/Header";


function App() {
  return <div className="App">


    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/booking/:serviceId' element={<PraivetRoute><Booking></Booking></PraivetRoute>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter> 

  </div>;
}

export default App;
