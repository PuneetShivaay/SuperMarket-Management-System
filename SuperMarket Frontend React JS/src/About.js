import React, { Component } from 'react';
//importing BootStrap
// import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'

export default class AboutPage extends Component {
  render() {
    return (
      <>

        <div class="bg-light">
          <div class="container py-5">
            <div class="row h-100 align-items-center py-5">
              <div class="col-lg-6 abouthead">

                <h1 class="display-4  abouthead">QuickZ Mart</h1>
                <h2 class="lead text-muted mb-0 abouthead">We grow businesses by creating experiences People Love.</h2>
                <p class="lead text-muted">
                  QuickZ Mart started in 1999 with a handpicked team of Sellers,Clients, and In house employees, specialists who form a synergy in our togetherness to reach the altitudes of professional excellence.
                  We're individually specialized in the services that we offer with proven subject matter expertise and product knowledge across a broad set of areas.
                </p>
              </div>
              <div class="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid" /></div>
            </div>
          </div>
        </div>

        <div class="bg-white py-5">
          <div class="container py-5">
            <div class="row align-items-center mb-5">
              <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                {/* <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2> */}
                <p class="text-muted mb-4 lead text-muted">We're a steadfast company striving to achieve its goals by providing world-class end-to-end software solutions to our clients. We analyze, build, create, design,
                  and develop a better experience for our clients to improve their impact, usability, and customer
                  conversion. We focus on models with a collaborative engagement to understand clients' priorities
                  and deliver with a bang, that you look for.</p>
                {/* <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a> */}
              </div>
              <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
              <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                {/* <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2> */}
                <h1 class="font-italic text-muted mb-4">23 YEARS OF DEXTERITY!</h1>
                {/* <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a> */}
              </div>
            </div>
          </div>
        </div>

        <div class="bg-light py-5">
          <div class="container py-5">
            <div class="row mb-4">
              <div class="col-lg-5">
                <h2 class="display-4 font-weight-light">Our team</h2>
                <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div class="row text-center">
              {/* <!-- Team item--> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="assets\images\Antony_js.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">Antony Jude E P</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              {/* <!-- End-->

      <!-- Team item--> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">Mohammed Fazil K</h5><span class="small text-uppercase text-muted">Managing Director</span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              {/* <!-- End-->

      <!-- Team item--> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">Danish MD</h5><span class="small text-uppercase text-muted">Accountant</span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              {/* <!-- End-->

      <!-- Team item--> */}
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">Arpit Kumar Singh</h5><span class="small text-uppercase text-muted">CIO -Co Founder</span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              {/* <!-- End--> */}

           
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                  <h5 class="mb-0">Ankit Kumar</h5><span class="small text-uppercase text-muted">CIO -Co Founder</span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            

            </div>
          </div>
        </div>


      </>
    )
  }
}
