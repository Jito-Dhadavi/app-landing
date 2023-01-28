
function Header() {
    return (
        <header>
            <div className="aa-header">
                <nav className="navbar navbar-expand-md navbar-transparent">
                    <div className="container"><img className="img-fluid pr-3 aa-logo-img" src="images/logo.png" alt="logo" /><a className="navbar-brand px-0 py-0" href="#">Awesome App</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                                <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
                                <li className="nav-item"><a className="btn btn-outline-neutral btn-round" href="#download">Download Now</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container aa-header-content text-left text-white">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h1 className="text-white mb-4">Awesome App <br />App Landing Template</h1>
                            <p>An awesome landing page template to showcase your app features, screenshots, pricing, user testimonials and download links.</p>
                            <ul className="py-1 list-unstyled">
                                <li className="py-2"><i className="fa fa-check-circle pr-4" aria-hidden="true"></i> Amazing Design to Present Your App</li>
                                <li className="py-2"><i className="fa fa-check-circle pr-4" aria-hidden="true"></i> Fully Responsive and Powered by Bootstrap &amp; PaperKit</li>
                                <li className="py-2"><i className="fa fa-check-circle pr-4" aria-hidden="true"></i> Very Easy to Customize and Setup</li>
                            </ul><a className="mt-4 btn btn-outline-neutral btn-round" href="#features">Start Exploring</a>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right"><img className="img-fluid" src="images/1.jpg" alt="Image" /></div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
