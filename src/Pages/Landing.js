import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Landing() {
    return (
        <>
            <Header />
            <div className="page-content">
      <div>
<div className="container">
  <div className="aa-product-details section" id="features">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="icon icon-danger"><i className="fa fa-tags" aria-hidden="true"></i></div>
        <div className="description">
          <div className="h4">Showcase Your App</div>
          <p className="text-muted">Showcase your app in style with this professional looking template.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="icon icon-danger"><i className="fa fa-cog" aria-hidden="true"></i></div>
        <div className="description">
          <div className="h4">Easy to Customize</div>
          <p className="text-muted">Easily customize the text and replace the images to suit your own app.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="icon icon-danger"><i className="fa fa-paint-brush" aria-hidden="true"></i></div>
        <div className="description">
          <div className="h4">Unlimited Colors</div>
          <p className="text-muted">Easily change the colors in CSS that can go well with your branding.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="icon icon-danger"><i className="fa fa-desktop" aria-hidden="true"></i></div>
        <div className="description">
          <div className="h4">Responsive, HTML5, CSS3</div>
          <p className="text-muted">Our template is 100% responsive and built with modern standards.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="icon icon-danger"><i className="fa fa-file-text" aria-hidden="true"></i></div>
        <div className="description">
          <div className="h4">Designed to Convert</div>
          <p className="text-muted">Designed to engage your user and increase your conversion.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="icon icon-danger"><i className="fa fa-life-ring" aria-hidden="true"></i></div>
        <div className="description">
          <div className="h4">With no Boundaries</div>
          <p className="text-muted">Use Bootstrap and PaperKit to add additional components.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container">
  <hr/>
</div>
<div className="aa-product-features section">
  <div className="container">
    <div className="row">
      <div className="col-md-5 col-sm-12"><img className="img-fluid" src="images/2.jpg" alt="Image"/></div>
      <div className="col-md-7 col-sm-12">
        <h2 className="title mb-2">What is Awesome App?</h2>
        <p className="pt-2">Add a brief story about your app here, what purpose your app solves and why you think your user would want to have it on their device.</p>
        <p className="pt-5 pb-1">Re-establish the main use case of your app by listing them below. Make sure to place a relavent screenshot on the left.</p>
        <ul className="py-1 list-unstyled">
          <li className="py-1"><i className="fa fa-check-circle pr-4" aria-hidden="true"></i> Amazing Design to Present Your App</li>
          <li className="py-2"><i className="fa fa-check-circle pr-4" aria-hidden="true"></i> Fully Responsive and Powered by Bootstrap &amp; PaperKit</li>
          <li><i className="fa fa-check-circle pr-4" aria-hidden="true"></i> Very Easy to Customize and Setup</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="aa-screenshots section">
  <div className="container text-center">
    <h2 className="title pb-3">Take a look at our screenshots</h2>
    <p className="pb-5">Add your app screenshots below. Make sure to make them lively by putting them inside real device mockups<br/>Replace this text to describe the screenshots of your app.</p>
    <div className="row">
      <div className="col-md-12 mb-5">
        <div className="card card-raised page-carousel">
          <div className="carousel slide" id="aa-carousel-indicators" data-ride="carousel">
            <ol className="carousel-indicators">
              <li className="active " data-target="#aa-carousel-indicators" data-slide-to="0"></li>
              <li className=" " data-target="#aa-carousel-indicators" data-slide-to="1"></li>
              <li className=" " data-target="#aa-carousel-indicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active"><img className="img-fluid" src="images/3.jpg" alt="First slide"/>
                <div className="carousel-caption d-none d-md-block"> </div>
              </div>
              <div className="carousel-item"><img className="img-fluid" src="images/4.jpg" alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block"> </div>
              </div>
              <div className="carousel-item"><img className="img-fluid" src="images/5.jpg" alt="Third slide"/>
                <div className="carousel-caption d-none d-md-block"> </div>
              </div>
            </div><a className="left carousel-control carousel-control-prev bg-danger" href="#aa-carousel-indicators" role="button" data-slide="prev"><span className="fa fa-angle-left"></span><span className="sr-only">Previous</span></a><a className="right carousel-control carousel-control-next bg-danger" href="#aa-carousel-indicators" role="button" data-slide="next"><span className="fa fa-angle-right"></span><span className="sr-only">Next</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="aa-price-package section" id="pricing">
  <div className="container">
    <div className="text-center">
      <h2 className="title">We've got the perfect package for you </h2>
      <p className="pb-5">A section to display your pricing structure. Make sure to highlight your most popular plan like shown below.<br/>Replace this text to describe your pricing plan.</p>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="card aa-price text-center">
          <div className="card-body">
            <div className="h5 mt-0">Basic</div>
            <div className="aa-price-section"><sup>$</sup><span>12.0</span><small>/m</small></div>
            <ul className="list-unstyled text-muted">
              <li className="pt-3">One User</li>
              <li>Multiple Access</li>
              <li>SMS Support</li>
              <li>24/7 Online Support</li>
            </ul>
          </div>
          <div className="card-footer">
            <p><a href="#" className="text-muted text-small">Start Free Trial</a></p><a className="btn btn-outline-default btn-round" href="#">Buy Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card text-center aa-price aa-price-active">
          <div className="card-body">
            <div className="h5 mt-0">Standard</div>
            <div className="aa-price-section bg-gradient text-white"><sup>$</sup><span>24.0</span><small>/m</small></div>
            <ul className="list-unstyled text-muted">
              <li className="pt-3">Five User</li>
              <li>Multiple Access</li>
              <li>SMS Support</li>
              <li>24/7 Online Support</li>
            </ul>
          </div>
          <div className="card-footer">
            <p><a href="#" className="text-muted text-small" > Start Free Trial</a></p><a className="btn btn-round bg-gradient " href="#">Buy Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card aa-price text-center">
          <div className="card-body">
            <div className="h5 mt-0">Premium</div>
            <div className="aa-price-section"><sup>$</sup><span>250.0</span><small>/m</small></div>
            <ul className="list-unstyled text-muted">
              <li className="pt-3">Twenty User</li>
              <li>Multiple Access</li>
              <li>SMS Support</li>
              <li>24/7 Online Support</li>
            </ul>
          </div>
          <div className="card-footer">
            <p><a href="#" className="text-muted text-small" > Start Free Trial</a></p><a className="btn btn-outline-default btn-round " href="#">Buy Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="card aa-price text-center">
          <div className="card-body">
            <div className="h5 mt-0">Enterprise</div>
            <div className="aa-price-section"><sup>$</sup><span>999.0</span><small>/m</small></div>
            <ul className="list-unstyled text-muted">
              <li className="pt-3">Unlimited User</li>
              <li>Multiple Access</li>
              <li>SMS Support</li>
              <li><b>24/7 Online Support</b></li>
            </ul>
          </div>
          <div className="card-footer">
            <p><a href="#" className="text-muted text-small" > Start Free Trial </a></p><a className="btn btn-outline-default btn-round " href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container">
  <hr/>
</div>
<div className="aa-testimonials-section section">
  <div className="container">
    <div className="text-center">
      <h2 className="title mt-0">What our customers are saying</h2>
      <p>Real user testimonials are great way to attract new customers and increase their trust into using your app.<br/>Replace the testimonials below with the ones for your own app.</p>
    </div>
    <div className="aa-testimonials">
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="aa-testimonials-body">
            <p>Awesome App is awesome and I can't imagine working on my projects without it. It has saved me countless hours of time and has increased my productivity.</p>
            <div className="row pt-3">
              <div className="col-lg-5 col-md-12"><img className="img-fluid" src="images/user1.jpg" alt="Face 1"/></div>
              <div className="col-lg-7 col-md-12 pt-3">
                <div className="h5">Patrick Harry</div>
                <p className="text-muted">CEO, Awesome Inc.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="aa-testimonials-body">
            <p>Awesome App is awesome and I can't imagine working on my projects without it. It has saved me countless hours of time and has increased my productivity.</p>
            <div className="row pt-3">
              <div className="col-lg-5 col-md-12"><img className="img-fluid" src="images/user2.jpg" alt="Face 2"/></div>
              <div className="col-lg-7 col-md-12 pt-3">
                <div className="h5">Jeanne Lawson</div>
                <p className="text-muted">Design, Awesome Inc</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="aa-testimonials-body">
            <p>Awesome App is awesome and I can't imagine working on my projects without it. It has saved me countless hours of time and has increased my productivity.</p>
            <div className="row pt-3">
              <div className="col-lg-5 col-md-12"><img className="img-fluid" src="images/user3.jpg" alt="Face 3"/></div>
              <div className="col-lg-7 col-md-12 pt-3">
                <div className="h5">Robin Barnes</div>
                <p className="text-muted">Developer, Awesome Inc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="aa-download-section section bg-gradient" id="download">         
  <div className="container">
    <div className="h2 text-center text-title text-white pb-5">Download Awesome App Now </div>
    <div className="row">
      <div className="col-md-4 col-sm-12"><a className="aa-apple" href="#">
          <div className="card">
            <div className="row pb-3">
              <div className="col-lg-3 col-md-12 aa-download-icon"><i className="pt-4 fa fa-apple fa-4x" aria-hidden="true"></i></div>
              <div className="col-lg-9 col-md-12 aa-download-icon-detail">
                <div className="h4 pb-1">Download</div>
                <p className="text-muted">Download from App Store</p>
              </div>
            </div>
          </div></a></div>
      <div className="col-md-4 col-sm-12"><a className="aa-android" href="#">
          <div className="card">
            <div className="row pb-3">
              <div className="col-lg-3 col-md-12 aa-download-icon"><i className="pt-4 fa fa-android fa-4x" aria-hidden="true"></i></div>
              <div className="col-lg-9 col-md-12 aa-download-icon-detail">
                <div className="h4 pb-1">Download</div>
                <p className="text-muted">Download from Play Store</p>
              </div>
            </div>
          </div></a></div>
      <div className="col-md-4 col-sm-12"><a className="aa-windows" href="#">
          <div className="card">
            <div className="row pb-3">
              <div className="col-lg-3 col-md-12 aa-download-icon"><i className="pt-4 fa fa-windows fa-4x" aria-hidden="true"></i></div>
              <div className="col-lg-9 col-md-12 aa-download-icon-detail">
                <div className="h4 pb-1">Download</div>
                <p className="text-muted">Download from Microsoft Store</p>
              </div>
            </div>
          </div></a></div>
    </div>
  </div>
</div></div>
    </div>
            <Footer />
        </>

    );
}

export default Landing;
