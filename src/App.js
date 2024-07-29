// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { Landingpage } from './Components/Landingpage';
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export  const App =()=>{
  return(
      <AuthProvider>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
     <Route path="/Signup" element={<Signup/>}/>
         <Route path="/landingpage" element={
           <PrivateRoute>
          <Landingpage/>
          </PrivateRoute>
          }/>
    </Routes>
        <ToastContainer
         position="top-center" // Center the toast notifications
          autoClose={5000} // Automatically close after 5 seconds
          hideProgressBar={false} // Show the progress bar
          newestOnTop={false} // Newest toasts appear on top
          closeOnClick // Close the toast when clicked
          rtl={false} // Left-to-right layout
          pauseOnFocusLoss // Pause toast when window loses focus
          draggable // Allow toast to be dragged
          pauseOnHover // Pause toast on hover
        />
    </BrowserRouter>
    </AuthProvider>
  );
}
