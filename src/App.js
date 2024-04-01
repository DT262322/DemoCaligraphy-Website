import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './component/JS/Menu';
import Content_index from './component/JS/Content_index';
import About from './component/JS/About'
import Category_filter from './component/JS/Category_filter'
import Feature_post from './component/JS/Feature_post';
import Contact from './component/JS/Contact';
import Footer from './component/JS/Footer';
import Detail_calligraphy from './component/JS/Detail_calligraphy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isDOMComponent } from 'react-dom/test-utils';
import Category_main from './component/JS/Category_main'
import Banner from './component/JS/banner';
import Comment_box from './component/JS/Comment_box';
import Detail_feature from './component/JS/Detail_feature';
import Register from './component/JS/Register';
import Login from './component/JS/Login';
import Notify from './component/JS/Notify';
import Album from './component/JS/album';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Menu />
      <Notify />
      <Routes>

        <Route path='/' element={<Content_index />} />
        <Route path='/About' element={<About />} />
        <Route path='/Category/:cat_id' element={<Category_filter />} />
        <Route path='/Category_main' element={<Category_main />} />
        <Route path='/Feature_post' element={<Feature_post />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Detail_calligraphy/:id' element={<Detail_calligraphy />} />
        <Route path='/Detail_feature/:id' element={<Detail_feature />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/album' element={<Album />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
