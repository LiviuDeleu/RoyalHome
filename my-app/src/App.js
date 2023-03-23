import './App.css';
import IndexPage from './Pages/PageHome';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactsPage from  './Pages/PageContacts/ContactsPage'
import FavoritesPage from './Pages/Favorites/FavoritesPage'
import BasketPage from './Pages/Basket/BasketPage'
import ShopPage from './Pages/PageShop/ShopPage'
import Layout from "./components/template/layout";

 function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<IndexPage/>}/>
            <Route path='contactspage' element={<ContactsPage/>}/>
            <Route path='favoritespage' element={<FavoritesPage/>}/>
            <Route path='basketpage' element={<BasketPage/>}/>
            <Route path='shoppage' element={<ShopPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App





