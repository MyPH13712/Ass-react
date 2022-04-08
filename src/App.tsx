import { useEffect, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import type { ProductType } from './types/product';
import { add, list, remove, update } from './api/product';
import { addCate, listCate, removeCate, updateCate } from './api/category'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/product/ManagerProduct';
import ProductAdd from './pages/product/ProductAdd';
import ProductEdit from './pages/product/ProductEdit';
import Turtorial from './pages/Turtorial';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { CategoryType } from './types/category';
import ManagerCategory from './pages/Category/ManagerCategory';
import CategoryAdd from './pages/Category/CategoryAdd';
import CategoryEdit from './pages/Category/CategoryEdit';
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])

  const [categories, setCategory] = useState<CategoryType[]>([]);
  useEffect(() => { 
    const getCate = async () => {
      const { data } = await listCate();
      setCategory(data);
    }
    getCate();
  }, [])

  const onHandleRemove = async (id: number) => {
    // xoa tren API
    await remove(id);
    // reRender
    setProducts(products.filter(item => item._id !== id));
  }
  const onHandleRemoveCate = async (id: number) => {
    await removeCate(id);
    setCategory(categories.filter(item => item._id !== id));
  }
  
  const onHandleAdd = async (product: ProductType) => {
    console.log('app.js', product);
    const { data } = await add(product);
    setProducts([...products, data])
  }
  const onHandleAddCate = async (category: CategoryType) => {
    console.log('app.js', category);
    const { data } = await addCate(category);
    setCategory([...categories, data])
  }
  const onHandleUpdate = async (product: ProductType) => {
    console.log(product);
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data.id ? data : item));
  }
  const onHandleUpdateCate = async (category: CategoryType) => {
    console.log(category);
    const { data } = await updateCate(category);
    setCategory(categories.map(item => item._id == data.id ? data : item))
  }
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<Home data={products} />} />
        <Route path="product" element={<Product data={products} />} />
        <Route path="turtorial" element={<Turtorial />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />

      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="category">
          <Route index element={<ManagerCategory data={categories} onRemove={onHandleRemove} />} />
          <Route path="add" element={<CategoryAdd onAddCate={onHandleAddCate} />} />
          <Route path=":id/edit" element={<CategoryEdit onUpdateCate={onHandleUpdateCate} />} />
        </Route>
        <Route path="products">
          <Route index element={<ManagerProduct data={products} onRemove={onHandleRemove} />} />
          <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
          <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
        </Route>
      </Route>
    </Routes>

  )
}
export default App