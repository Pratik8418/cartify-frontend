import React from 'react'

const Header = () => {
  return (
    <>
       <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over 10,000 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+91 9786534210">
                  +91 9786534210
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header