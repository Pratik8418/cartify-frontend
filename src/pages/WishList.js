import React from 'react'
import BreadComp from "../components/BreadComp";
import Meta from "../components/Meta";
import Container from "../components/Container";

//images
import cross from '../images/cross.svg'
import watch from '../images/watch.jpg'
import watch1 from '../images/watch-1.jpg'
import camera from '../images/camera.jpg'

function WishList() {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadComp title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src={watch}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src={watch1}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src={cross}
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src={camera}
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default WishList
