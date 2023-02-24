import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import Blogs from './Components/Pages/Blogs/Blogs';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import FAQs from './Components/Pages/FAQs/FAQs';
import Home from './Components/Home/Home';
import NotFound from './Components/Pages/NotFound/NotFound';
import Products from './Components/Pages/Products/Products';
import Sellers from './Components/Pages/Sellers/Sellers';
import Header from './Components/Header/Header';
import Pages from './Components/Pages/Pages';
import Contacts from './Components/Shared/Contacts/Contacts';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/pages' element={<Pages />}>
          <Route path='products' element={<Products />} />
          <Route path='sellers' element={<Sellers />} />
          <Route path='contactUs' element={<ContactUs />} />
          <Route path='aboutUs' element={<AboutUs />} />
          <Route path='faqs' element={<FAQs />} />
          <Route path='blogs' element={<Blogs />} />

          <Route path='*' element={<NotFound />} />
        </Route>
        {/* Authentication */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
