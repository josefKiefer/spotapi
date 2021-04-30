import { useDispatch } from 'react-redux';
import { authorizeAsync } from '../slices/authSlice';

export default function Authorize(): JSX.Element {
    const dispatch = useDispatch();

    return (
        <div>
            <section
                className="page-section try-it justify-content-center"
                id="try-it"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-5 mt-2">
                                Try it
                            </h2>
                            <div
                                className="portfolio-item mx-auto"
                                data-toggle="modal"
                                data-target="#portfolioModal1"
                            >
                                <div className="text-center">
                                    <button
                                        onClick={() =>
                                            dispatch(authorizeAsync())
                                        }
                                        className="btn btn-primary"
                                    >
                                        Authorize!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
