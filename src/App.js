import './App.css';
// import { Container} from 'react-bootstrap';
import NavbarArea from './component/Navbar/NavbarArea';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Featured from './component/Featured/Featured';
import Footer from './component/Footer/Footer';
import Blog from './component/Blog/Blog';
import GetInTouch from './component/Get_In_Touch/GetInTouch';
import Services from './component/Services/Services';
import Review from './component/Review/Review';
import Admin_Deshboard from './component/Admin_Deshboard/Admin_Deshboard';
import Add_Services from './component/Add_Services/Add_Services';
import AddReview from './component/Review/AddReview';
import AddAdmin from './component/Add Admin/AddAdmin';
import { createContext, useState } from 'react';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import CheckOut from './component/CheckOut/CheckOut';
import OrderList from './component/OrderList/OrderList';
import BlogPost from './component/Blog/BlogPost';
import Add_BlogPost from './component/Blog/AddBlogPost';
import AboutMe from './component/AboutMe/AboutMe';
import FeaturedAbout from './component/Featured_About/Featured_About.jsx';
import WatchOurProgram from './component/OurProgramme/WatchOurProgram';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <Container> */}
      <Router className="Ap">
        <NavbarArea></NavbarArea>
        
        {/* <Admin_Deshboard></Admin_Deshboard> */}

        <Switch>
          <Route path="/home">
            <Header></Header>
            <Featured></Featured>
            <FeaturedAbout/>
            <WatchOurProgram></WatchOurProgram>
            <Services></Services>
            <AboutMe></AboutMe>
            <Review></Review>
            <GetInTouch></GetInTouch>
            <Blog></Blog>
          </Route>

          

          <Route path="/AddServices">
            <Admin_Deshboard></Admin_Deshboard>
            <Add_Services></Add_Services>
          </Route>

          
          <PrivateRoute path="/AddAdmin">
            <Admin_Deshboard></Admin_Deshboard>
            <AddAdmin></AddAdmin>
          </PrivateRoute>


          <PrivateRoute path="/Blog/addPost">
            <Admin_Deshboard></Admin_Deshboard>
            <Add_BlogPost></Add_BlogPost>
          </PrivateRoute>


          <PrivateRoute path="/orderList">
            <Admin_Deshboard></Admin_Deshboard>
            <OrderList></OrderList>
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <Admin_Deshboard></Admin_Deshboard>
          </PrivateRoute>

          <PrivateRoute path="/Addreview">
            <Admin_Deshboard></Admin_Deshboard>
            <AddReview></AddReview>
          </PrivateRoute>


          <PrivateRoute path="service/checkout/:_id">
            <CheckOut></CheckOut>
          </PrivateRoute>


          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/Blog/Post">
            <BlogPost></BlogPost>
          </Route>


          <Route path="/">
            <Header></Header>
            <Featured></Featured>
            <Services></Services>
            <Review></Review>
            <GetInTouch></GetInTouch>
            <Blog></Blog>
          </Route>


        </Switch>
        <Footer></Footer>
      </Router>
      {/* </Container> */}
    </UserContext.Provider>
  );
}

export default App;
