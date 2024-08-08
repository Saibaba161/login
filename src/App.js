import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import Login from "./pages/login";
import Signup from "./pages/signup";
import FGPassword from "./pages/fgpassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Login />} />
        <Route path='signup' element= {<Signup />} />
        <Route path='/forgotpassword' element={<FGPassword />} />
      </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
