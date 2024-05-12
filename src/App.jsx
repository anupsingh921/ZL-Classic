import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";
import ChatBot from 'react-simple-chatbot';
import { Segment } from "semantic-ui-react";
// Import the PaymentForm component

const App = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [steps, setSteps] = useState([]);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
    if (!chatVisible) {
      setSteps([
        {
          id: "Greet",
          message: "Welcome to ZL-Classic customer support! How can we assist you today?",
          trigger: "Name",
        },
        {
          id: "Name",
          message: "Before we begin, may I have your name please?",
          trigger: "waiting1",
        },
        {
          id: "waiting1",
          user: true,
          trigger: "issues",
        },
        {
          id: "issues",
          message: "Hi {previousValue}, what type of assistance do you need?",
          trigger: "issueType",
        },
        {
          id: "issueType",
          options: [
            { value: "Order-Related", label: "Order-Related", trigger: "Order" },
            { value: "Product-Maintenance", label: "Product Maintenance", trigger: "Product" },
            { value: "Customer-Guide", label: "Customer-Guide", trigger: "CG" },
          ],
        },
        {
          id: "Order",
          message: "Thank you for your input. Our team will assist you shortly and resolve your issue ASAP",
          end: true,
        },
        {
          id: "Product",
          message: "Thank you for your input. Our team will assist you shortly and resolve your issue ASAP",
          end: true,
        },
        {
          id: "CG",
          message: "Thank you for your input. Our team will assist you shortly and resolve your issue ASAP",
          end: true,
        },
        
        
      ]);
    }
  };
      
  
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<CategoryPage />} />
          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster />
      </Router>
      {chatVisible && (
        <Segment
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 9999,
            width: 300,
          }}
          floated="right"
        >
          <ChatBot steps={steps} />
        </Segment>
      )}
      <button
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          fontWeight: "bold",
          zIndex: 10000,
        }}
      >
        {chatVisible ? "Hide Chat" : "Chat with Us"}
      </button>

      
    </MyState>
  );
}

export default App;
