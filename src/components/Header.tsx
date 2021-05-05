export default function Header(): JSX.Element {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
                id="mainNav"
            >
                <div className="container">
                    <a
                        className="navbar-brand js-scroll-trigger"
                        href="#page-top"
                    >
                        Spotapi
                    </a>
                    <button
                        className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarResponsive"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1">
                                <a
                                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    href="#try-it"
                                >
                                    Try it
                                </a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <a
                                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    href="#about"
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <a
                                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <h1 className="masthead-heading text-uppercase mb-2">
                        SpotAPI
                    </h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
            </header>
        </div>
    );
}
