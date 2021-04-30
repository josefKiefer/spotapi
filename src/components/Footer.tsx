import './footer.css';

export default function Footer(): JSX.Element {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Denver
                            <br />
                            CO
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a
                            className="btn btn-outline-light btn-social mx-1"
                            href="https://github.com/josefKiefer"
                        >
                            <i className="fab fa-fw fa-github"></i>
                        </a>
                        <a
                            className="btn btn-outline-light btn-social mx-1"
                            href="https://www.linkedin.com/in/josef-kiefer-b8319270/"
                        >
                            <i className="fab fa-fw fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Me</h4>
                        <p className="lead mb-0">I&apos;m Joe &#128075;</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
