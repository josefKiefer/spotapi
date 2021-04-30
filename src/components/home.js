export default function Home() {
    return (
        <div>
            <section
                className="page-section bg-primary text-white mb-0"
                id="about"
            >
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white">
                        About
                    </h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ml-auto">
                            <p className="lead">
                                Freelancer is a free bootstrap theme created by
                                Start Bootstrap. The download includes the
                                complete source files including HTML, CSS, and
                                JavaScript as well as optional SASS stylesheets
                                for easy customization.
                            </p>
                        </div>
                        <div className="col-lg-4 mr-auto">
                            <p className="lead">
                                You can create your own custom avatar for the
                                masthead, change the icon in the dividers, and
                                add your email address to the contact form to
                                make it fully functional!
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <a
                            className="btn btn-xl btn-outline-light"
                            href="https://startbootstrap.com/theme/freelancer/"
                        >
                            <i className="fas fa-download mr-2"></i>
                            Free Download!
                        </a>
                    </div>
                </div>
            </section>
            <section className="page-section" id="contact">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                        Contact Me
                    </h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <form
                                id="contactForm"
                                name="sentMessage"
                                noValidate="novalidate"
                            >
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Name</label>
                                        <input
                                            className="form-control"
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                            required="required"
                                            data-validation-required-message="Please enter your name."
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Email Address</label>
                                        <input
                                            className="form-control"
                                            id="email"
                                            type="email"
                                            placeholder="Email Address"
                                            required="required"
                                            data-validation-required-message="Please enter your email address."
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Phone Number</label>
                                        <input
                                            className="form-control"
                                            id="phone"
                                            type="tel"
                                            placeholder="Phone Number"
                                            required="required"
                                            data-validation-required-message="Please enter your phone number."
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            rows="5"
                                            placeholder="Message"
                                            required="required"
                                            data-validation-required-message="Please enter a message."
                                        ></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br />
                                <div id="success"></div>
                                <div className="form-group">
                                    <button
                                        className="btn btn-primary btn-xl"
                                        id="sendMessageButton"
                                        type="submit"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
