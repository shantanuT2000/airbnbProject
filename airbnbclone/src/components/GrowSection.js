import React from 'react'

function GrowSection() {
    return (
        <>
        <div className="container3-heading">
        <h2>Grow with us</h2>
                <p>
                    Come aboard India's No. 1 travel company & unfold infinite
                    possibilities of growth.
                </p>
        </div>

            <div className="container3">
                <div className="part1">
                <ul>
                    <li>
                        <span>
                            <img src="images/bargraph.png" alt="bargraph" />
                        </span>
                        <div>
                            <h4>Partnering with us Easy, Fun &amp; Rewarding</h4>
                            <p class="groWthUsSec__itmDesc">
                                Listing your property with us means better discoverability, more
                                bookings and higher revenues.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <img src="images/signup.webp" alt="signup" />
                        </span>
                        <div>
                            <h4> Hassle-free Sign Up </h4>
                            <p>
                                Finish your registration in 3-simple steps on our intuitive host
                                platform and go live.
                            </p>
                        </div>
                    </li>
                    </ul>
                </div>
                  <div className="part2">
                  <ul>
                    <li>
                        <span>
                            
                            <img src="images/money.png" alt="money symbol" />
                        </span>
                        <div>
                            <h4>Prices &amp; Payment</h4>
                            <p>
                                Set your own prices and enjoy real-time payments on confirmed
                                bookings. It's that easy.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <img src="images/img2.jpeg" alt="24/7" />
                        </span>
                        <div>
                            <h4> 24x7 Support </h4>
                            <p>
                                When in doubt, just reach out to us. We are always available to
                                address your concerns.
                            </p>
                        </div>
                    </li>
                </ul>
                  </div>
                  
            </div>
         </>
    );
}

export default GrowSection