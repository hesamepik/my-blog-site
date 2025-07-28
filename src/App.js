
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogess from './components/blogs/Blogess.js';
import Home from './components/Home/Home.js';
import Footer from './components/layout/Footer.js';
import Header from './components/layout/Header.js';
import Layout from './components/layout/index.js';
import Author from './components/author/Author.js';
import Authorespage from "../src/components/author/Authorespage.js"

import Blogepage from "../src/components/blogs/Blogepage.js"


function App() {
return(

 <>
 <BrowserRouter>

<Layout>
 <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/blogs/:slug' element={<Blogepage/>}></Route>
<Route path='/authors' element={<Authorespage/>}></Route>

 </Routes>
</Layout>
 </BrowserRouter>
 </>
)
}

export default App;
