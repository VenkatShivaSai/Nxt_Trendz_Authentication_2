// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Product = () => {
  console.log('product')

  const cookieToken = Cookies.get('jwt_token')
  if (cookieToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="bg-container-product">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="product-image"
        />
      </div>
    </>
  )
}

export default Product
