import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import { list } from '../api/product'
import Banner from '../components/Banner'
import { ProductType } from '../types/product'

type HomeProps = {
  data: ProductType[]
}

const Home = (props: HomeProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])
  console.log();
  
const fetchProducts = async (currentPage) => {
  const res = await fetch(`http://localhost:8000/api/products?_page=${currentPage}`)
  const { data } = await list();

}

  const handlePageClick = (data: HomeProps) => {
    console.log(data.selected);

    let currentPage = data.selected + 1

  }
  return (
    <div className="max-w-5xl mx-auto py-4">
      <div className="banner">
        <Banner />
      </div>
      <div className="fle flex-col justify-center items-center my-4">
        <div className="flex justify-center items-center space-y-4 px-4">
          <p className="text-3xl lg:text-4xl font-semibold leading-9 text-stone-900 dark:text-stone-500 border border-slate-300 px-3 py-2">Sản phẩm mới</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-8 gap-y-8 lg:gap-y-0 gap-x-8">
          {props.data && props.data.map((item, index) => {
            return <div className="relative" key={index}>
              <div className="relative group">
                <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <img src={item.image} alt="" />
              </div>
              <Link to={`/products/${item._id}`} className="no-underline"><p className="font-normal dark:text-black text-xl leading-5 text-stone-900 md:mt-6 mt-4">{item.name}</p></Link>
              <p className="font-semibold dark:text-black text-xl leading-5 text-stone-900 mt-4">{item.price} đ</p>
            </div>
          })}
        </div>
        <div>
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={10}
            marginPagesDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName = {'page-link'}
            previousClassName = {'page-item'}
            previousLinkClassName = {'page-link'}
            nextClassName = {'page-item'}
            nextLinkClassName = {'page-link'}
            breakClassName = {'page-item'}
            breakLinkClassName = {'page-link'}
            activeClassName = {'active'}
          />
        </div>
      </div>

    </div>

  )
}

export default Home