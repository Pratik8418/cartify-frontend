import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
//images
import product1 from "../images/watch.jpg"
import product2 from "../images/watch-1.jpg"
import productCompare from "../images/prodcompare.svg"
import view from "../images/view.svg"
import addCart from "../images/add-cart.svg"
import wish from "../images/wish.svg"

function productCard(props) {
  const { grid } = props;
  console.log(grid);
  let tmpLoc = window.location.href.split('/');
  let location = useLocation;
  console.log(location);
  return (
    <>
    <div className={` ${
       tmpLoc[tmpLoc.length-1] == "ourstore" ? `gr-${grid}` : "col-3"
    } `}>
      <Link to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
         className='product-card position-relative'>

        <div className='wishlist-icon position-absolute'>
          <Link>
              <img src={wish} alt='wishlist'/>
          </Link>
        </div>
        <div className='product-image'>
           <img src={product1} alt="product image" />
           <img src={product2} alt="product image" />
        </div>
        <div className='product-details'>
          <h6 className='brand'> Havels </h6>
          <h5 className='product-title'> best watch for young man </h5>
          <ReactStars count={5}
            value={3}
            size={24}
            edit={false}
            activeColor="#ffd700" />

          <p className='price'>$100</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column'>
            <Link>
               <img src={productCompare} alt="product-compare" />
            </Link>
            <Link>
               <img src={view} alt="view" />
            </Link>
            <Link>
               <img src={addCart} alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>

    <div className={` ${
       tmpLoc[tmpLoc.length-1] == "ourstore" ? `gr-${grid}` : "col-3"
    } `}>
      <Link to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
         className='product-card position-relative'>

        <div className='wishlist-icon position-absolute'>
          <Link>
              <img src={wish} alt='wishlist'/>
          </Link>
        </div>
        <div className='product-image'>
           <img src={product1} alt="product image" />
           <img src={product2} alt="product image" />
        </div>
        <div className='product-details'>
          <h6 className='brand'> Havels </h6>
          <h5 className='product-title'> best watch for young man </h5>
          <ReactStars count={5}
            value={3}
            size={24}
            edit={false}
            activeColor="#ffd700" />

          <p className='price'>$100</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column'>
            <Link>
               <img src={productCompare} alt="product-compare" />
            </Link>
            <Link>
               <img src={view} alt="view" />
            </Link>
            <Link>
               <img src={addCart} alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>

    <div className={` ${
       tmpLoc[tmpLoc.length-1] == "ourstore" ? `gr-${grid}` : "col-3"
    } `}>
      <Link to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
         className='product-card position-relative'>

        <div className='wishlist-icon position-absolute'>
          <Link>
              <img src={wish} alt='wishlist'/>
          </Link>
        </div>
        <div className='product-image'>
           <img src={product1} alt="product image" />
           <img src={product2} alt="product image" />
        </div>
        <div className='product-details'>
          <h6 className='brand'> Havels </h6>
          <h5 className='product-title'> best watch for young man </h5>
          <ReactStars count={5}
            value={3}
            size={24}
            edit={false}
            activeColor="#ffd700" />

          <p className='price'>$100</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column'>
            <Link>
               <img src={productCompare} alt="product-compare" />
            </Link>
            <Link>
               <img src={view} alt="view" />
            </Link>
            <Link>
               <img src={addCart} alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    
    <div className={` ${
       tmpLoc[tmpLoc.length-1] == "ourstore" ? `gr-${grid}` : "col-3"
    } `}>
      <Link to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
         className='product-card position-relative'>

        <div className='wishlist-icon position-absolute'>
          <Link>
              <img src={wish} alt='wishlist'/>
          </Link>
        </div>
        <div className='product-image'>
           <img src={product1} alt="product image" />
           <img src={product2} alt="product image" />
        </div>
        <div className='product-details'>
          <h6 className='brand'> Havels </h6>
          <h5 className='product-title'> best watch for young man </h5>
          <ReactStars count={5}
            value={3}
            size={24}
            edit={false}
            activeColor="#ffd700" />

          <p className='price'>$100</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column'>
            <Link>
               <img src={productCompare} alt="product-compare" />
            </Link>
            <Link>
               <img src={view} alt="view" />
            </Link>
            <Link>
               <img src={addCart} alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    
     {/* <div className={` ${
      location.pathname === "/product" ? `gr-${grid}` : "col-3"
    } `}>
      <Link to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
         className='product-card position-relative'>

        <div className='wishlist-icon position-absolute'>
          <Link>
              <img src={wish} alt='wishlist'/>
          </Link>
        </div>
        <div className='product-image'>
           <img src={product1} alt="product image" />
           <img src={product2} alt="product image" />
        </div>
        <div className='product-details'>
          <h6 className='brand'> Havels </h6>
          <h5 className='product-title'> best watch for young man </h5>
          <ReactStars count={5}
            value={3}
            size={24}
            edit={false}
            activeColor="#ffd700" />

          <p className='price'>$100</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column'>
            <Link>
               <img src={productCompare} alt="product-compare" />
            </Link>
            <Link>
               <img src={view} alt="view" />
            </Link>
            <Link>
               <img src={addCart} alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div> */}
    </>
  )
}

export default productCard