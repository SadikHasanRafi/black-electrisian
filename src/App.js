// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import CartContextProvider from "./contexts/CartContext";
import useAuth from "./Hooks/useAuth";
// import useAuth from './Hooks/useAuth';
import Appointment from "./Pages/Appointment/Appointment";
import AppointmentPayment from "./Pages/Appointment/AppointmentPayment/AppointmentPayment";
import AppointmentPage from "./Pages/Appointment/AppointmentShow/AppointmentPage";
import DetailsAppointment from "./Pages/Appointment/DetailsAppointment/DetailsAppointment";
import DoctorPayment from "./Pages/Appointment/DoctorPayment/DoctorPayment";
import SuccessPayment from "./Pages/Appointment/DoctorPayment/SuccessPayment/SuccessPayment";
import RoomPage from "./Pages/Appointment/VideoSession/RoomPage/RoomPage";
import VideoSession from "./Pages/Appointment/VideoSession/VideoSession";
import AdminProductsShow from "./Pages/Dashboard/AdminDashboard/AdminProductsShow/AdminProductsShow";
import AdminProductUpload from "./Pages/Dashboard/AdminDashboard/AdminProductUpload/AdminProductUpload";

import MakeAdmin from "./Pages/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin";
import UserApproved from "./Pages/Dashboard/AdminDashboard/UserApproved/UserApproved";
import AdminRoute from "./Pages/Dashboard/AdminRoute/AdminRoute";
import BuyerUploadProduct from "./Pages/Dashboard/BuyerDashboard/BuyerUploadProduct/BuyerUploadProduct";

import BuyerWelcome from "./Pages/Dashboard/BuyerWelcome/BuyerWelcome";
import Dashboard from "./Pages/Dashboard/Dashboard";

import NewDashboard from "./Pages/Dashboard/NewDashboard/NewDashboard";
import ApplyVideo from "./Pages/Dashboard/UserDashboard/ApplyVideo/ApplyVideo";
import SeeApplyFeedback from "./Pages/Dashboard/UserDashboard/ApplyVideo/SeeApply/SeeApplyFeedback";
import Profile from "./Pages/Dashboard/UserProfile/Profile";
import About from "./Pages/Homes/About/About";
import AllAdminProduct from "./Pages/Homes/AllAdminProduct/AllAdminProduct";
import ProductDetails from "./Pages/Homes/BuyerProducts/ProductsDetails/ProductsDetails";

import Contact from "./Pages/Homes/Contact/Contact";
import Home from "./Pages/Homes/Home/Home";
import ManyProducts from "./Pages/Homes/ManyProducts/ManyProducts";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import MyOrder from "./Pages/MyOrder/MyOrder";
import OrderReview from "./Pages/OrderReview/OrderReview";
import Payment from "./Pages/Payment/Payment";
import SuccessOrder from "./Pages/Payment/SuccessOrder/SuccessOrder";

import ApprovedProduct from "./Pages/Dashboard/AdminDashboard/ApprovedProduct/ApprovedProduct";
import AddProduct from "./Pages/Dashboard/BuyerDashboard/BuyerUploadProduct/AddProduct";
import Light from "./Pages/Products/Light/Light";
import Multimeter from "./Pages/Homes/Categories/Multimeter/Multimeter";
import Electricaldrill from "./Pages/Homes/Categories/ElectricalDill/ElectricalDill";
import Fan from "./Pages/Homes/Categories/Fan/Fan";
import AllCategories from "./Pages/Homes/Categories/AllCategories/AllCategories";
import Robotics from "./Pages/Homes/Categories/Robotics/Robotics";
import AdminProductDetails from "./Pages/Homes/BuyerProducts/ProductsDetails/AdminProductDetails";
import Electrician from "./Pages/Dashboard/UserDashboard/ApplyVideo/Electrician";
import ElectricianShow from "./Pages/Homes/Categories/ElectricalDill/ElectricianShow";
import DetailsElectrician from "./Pages/Homes/Categories/ElectricalDill/DetailsElectrician";
import SeeBookelectrician from "./Pages/MyOrder/SeeBookelectrician";
import BlogRobotics from "./Pages/Dashboard/AdminDashboard/BlogRobotics/BlogRobotics";
import ShowBlog from "./Pages/Dashboard/AdminDashboard/BlogRobotics/ShowBlog";
import ContactUs from "./Pages/Homes/Contact/ContactUs/ContactUs";
// import SeeBookElectrician from './Pages/MyOrder/SeeBookelectrician';

function App() {
  // const { admin, user } = useAuth()
  return (
    <div className="App">
      <AuthProvider>
        <CartContextProvider>
          <BrowserRouter>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/product" element={<AdminProductsShow />} />

                <Route path="/OrderReview" element={<OrderReview />} />

                <Route path="/appointment" element={<Appointment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/showBlogs" element={<ShowBlog />} />
                <Route path="/about" element={<About />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="success/:id" element={<SuccessOrder />} />
                <Route path="/manyProducts" element={<ManyProducts />} />
                <Route path="/light" element={<Light />} />
                <Route path="/ElectricalDill" element={<Electricaldrill />} />
                <Route path="/showElectrician" element={<ElectricianShow />} />
                <Route path="/fan" element={<Fan />} />
                <Route path="/addpro" element={<AddProduct />} />
                <Route path="/Multimeter" element={<Multimeter />} />
                <Route path="/robotics" element={<Robotics />} />
                <Route path="/all-categories" element={<AllCategories />} />

                <Route path="/video" element={<VideoSession />} />
                {/* <Route path="/seeBooks" element={<SeeBookElectrician />} /> */}
                <Route path="/room/:roomId" element={<RoomPage />} />

                <Route path="/allAdminProduct" element={<AllAdminProduct />} />
                <Route path="bookDetails/:id" element={<ProductDetails />} />
                <Route
                  path="electricianDetails/:id"
                  element={<DetailsElectrician />}
                />
                <Route
                  path="adminAllDetails/:id"
                  element={<AdminProductDetails />}
                />
                <Route path="Details/:id" element={<DetailsAppointment />} />
                <Route path="/successdata/:id" element={<SuccessPayment />} />
                {/* <Route path="/success/:id">
      <SuccessBikash></SuccessBikash>
    </Route> */}
                {/* <Route path="farmer" element={<ProductDetails />}/> */}

                <Route
                  path="dashboard"
                  element={
                    // <Suspense fallback={<LoadingPage />}>
                    // <PrivateRoute>
                    <NewDashboard />
                    // </PrivateRoute>
                    // </Suspense>
                  }
                >
                  {<Route index element={<BuyerWelcome />} />}

                  <Route
                    path="makeadmin"
                    element={
                      <AdminRoute>
                        <MakeAdmin />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="Profile"
                    element={
                      // <AdminRoute>
                      <Profile />
                      // </AdminRoute>
                    }
                  />
                  <Route
                    path="myOrder"
                    element={
                      // <AdminRoute>
                      <MyOrder />
                      // </AdminRoute>
                    }
                  />
                  <Route
                    path="seeBooks"
                    element={
                      // <AdminRoute>
                      <SeeBookelectrician />
                      // </AdminRoute>
                    }
                  />
                  <Route
                    path="Electricians"
                    element={
                      // <AdminRoute>
                      <Electrician />
                      // </AdminRoute>
                    }
                  />
                  <Route
                    path="myApproved"
                    element={
                      // <AdminRoute>
                      <ApprovedProduct />
                      // </AdminRoute>
                    }
                  />
                  <Route
                    path="productUpload"
                    element={<BuyerUploadProduct />}
                  />
                  <Route path="adds" element={<AddProduct />} />
                  <Route
                    path="applyVideos"
                    element={
                      // <AdminRoute>
                      <ApplyVideo />
                      // </AdminRoute>
                    }
                  />
                  <Route
                    path="blogRobotics"
                    element={
                      // <AdminRoute>
                      <BlogRobotics />
                      // </AdminRoute>
                    }
                  />
                  <Route
                    path="seeApplyVideo"
                    element={
                      // <AdminRoute>
                      <SeeApplyFeedback />
                      // </AdminRoute>
                    }
                  />

                  {/* <Route
                path="updatevideoCode"
                element={
                  // <AdminRoute>
                    <UpdateVideoCodes />
                  // </AdminRoute>
                }
              /> */}
                  <Route
                    path="adminUpload"
                    element={
                      <AdminRoute>
                        <AdminProductUpload />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="showContact"
                    element={
                      <AdminRoute>
                        <ContactUs />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="userApproved"
                    element={
                      <AdminRoute>
                        <UserApproved />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="showAppointment"
                    element={
                      // <AdminRoute>
                      <AppointmentPage />
                      //  </AdminRoute>
                    }
                  />
                  <Route
                    path="video"
                    element={
                      // <AdminRoute>
                      <VideoSession />
                      //  </AdminRoute>
                    }
                  />
                  <Route
                    path="payment/:appointmentId"
                    element={
                      // <AdminRoute>
                      <DoctorPayment />
                      //  </AdminRoute>
                    }
                  />
                </Route>
              </Routes>
            </div>
          </BrowserRouter>
        </CartContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
