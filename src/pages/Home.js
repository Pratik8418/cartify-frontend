import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Container from "../components/Container";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/productCard"
import SpecialProduct from "../components/SpecialProduct";

//images
import mainBanner1 from "../images/main-banner-1.jpg"
import mainBanner from "../images/main-banner.jpg"
import catBanner1 from "../images/catbanner-01.jpg"
import catBanner2 from "../images/catbanner-02.jpg"
import catBanner3 from "../images/catbanner-03.jpg"
import catBanner4 from "../images/catbanner-04.jpg"
import camera from "../images/camera.jpg"
import tv from "../images/tv.jpg"
import headphone from "../images/headphone.jpg"
import service1 from "../images/service.png"
import service2 from "../images/service-02.png"
import service3 from "../images/service-03.png"
import service4 from "../images/service-04.png"
import service5 from "../images/service-05.png"
import brand8 from "../images/brand8.png"
import brand7 from "../images/brand7.png"
import brand6 from "../images/brand6.png"
import brand5 from "../images/brand5.png"
import brand4 from "../images/brand4.png"
import brand3 from "../images/brand3.png"
import brand2 from "../images/brand2.png"
import brand1 from "../images/brand1.png"
import famous1 from "../images/famous-1.webp"
import famous2 from "../images/famous-2.webp"
import famous3 from "../images/famous-3.webp"
import famous4 from "../images/famous-4.webp"


const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-3">
        <div className="row">
          <div className="col-6 carousel slide" data-bs-ride="carousel" id="carouselExampleControls">
          <div className="carousel-inner">
            <div className="main-banner position-relative carousel-item active">
              <img
                src={mainBanner1}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
            <div className="main-banner position-relative carousel-item">
              <img
                src={mainBanner}
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src={catBanner1}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src={catBanner2}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={catBanner3}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src={catBanner4}
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
            {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container> */}

      <section className="home-wrapper-2 py-3">
        <div className="cotainer-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15 ms-5">
                  <img src={service1} alt="services" />
                  <div>
                    <h6> Free Shipping </h6>
                    <p className="mb-0">on Orders $500 and Above! </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service2} alt="services" />
                  <div>
                    <h6> Daily Surprise Offers </h6>
                    <p className="mb-0">Get upto 25% off </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service3} alt="services" />
                  <div>
                    <h6> Support 24/7 </h6>
                    <p className="mb-0"> Shop with expert </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service4} alt="services" />
                  <div>
                    <h6> Affordable Prices </h6>
                    <p className="mb-0"> Factory Diract Price </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 me-5">
                  <img src={service5} alt="services" />
                  <div>
                    <h6> Secure payments </h6>
                    <p className="mb-0"> Protected payments </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container class1="home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <ProductCard />
          </div>
          <div className="col-3">
            <ProductCard />
          </div>
          <div className="col-3">
            <ProductCard />
          </div>
          <div className="col-3">
            <ProductCard />
          </div>
        </div>
      </Container>

      <Container class1="famous-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={famous1}
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={famous2}
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={famous3}
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src={famous4}
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From $699 or $116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      
      <Container class1="popular-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={brand1} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand2} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand3} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand4} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand5} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand6} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand7} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand8} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      
      <Container class1="blog-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
 
    </>
  );
};

export default Home;