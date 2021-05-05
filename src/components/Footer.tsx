import './footer.css';

export default function Footer(): JSX.Element {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col-lg-4 mt-0 mb-0 mb-lg-0">
                    <h4 className="text-uppercase mb-4 text-center">
                        Location
                    </h4>
                    <p
                        className="lead mb-0 text-center"
                        style={{ color: 'white' }}
                    >
                        Denver
                        <br />
                        CO
                    </p>
                </div>
                <div className="col-lg-4 mb-0 mb-lg-0">
                    <h4 className="text-uppercase mb-4 text-center">
                        Around the Web
                    </h4>
                    <div className="social-btns">
                        <a
                            className="btn btn-outline-light btn-social mx-2"
                            href="https://github.com/josefKiefer"
                        >
                            <i className="fab fa-fw fa-github"></i>
                        </a>
                        <a
                            className="btn btn-outline-light btn-social mx-2"
                            href="https://www.linkedin.com/in/josef-kiefer-b8319270/"
                        >
                            <i className="fab fa-fw fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h4 className="text-uppercase mb-0 text-center">
                        About Me
                    </h4>
                    <p
                        className="lead mb-0 text-center"
                        style={{ color: 'white' }}
                    >
                        I&apos;m Joe &#128075;
                    </p>
                </div>
            </div>
        </footer>
    );
}
