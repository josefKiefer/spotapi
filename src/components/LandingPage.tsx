import React from 'react';
import { useDispatch } from 'react-redux';
import { getToken } from '../slices/authSlice';
import Authorize from './Authorize';
import Footer from './Footer';
import Header from './Header';
import Home from './home';
// import TopTracks from './TopTracks';
import '../styles.css';
import TopMedia from './Personalization';
import { PersonalizationTypes } from '../state/appState';

export default function LandingPage(): JSX.Element {
    const dispatch = useDispatch();

    if (window.location.href.includes('code')) {
        dispatch(getToken());
    }

    return (
        <div className="masthead">
            <Header />
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
            {window.location.href.includes('code') ? (
                <div className="text-center mt-2">
                    <section
                        className="page-section try-it justify-content-center"
                        id="try-it"
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col">
                                    <TopMedia
                                        type={PersonalizationTypes.tracks}
                                    />
                                </div>
                                <div className="col">
                                    <TopMedia
                                        type={PersonalizationTypes.artists}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ) : (
                <Authorize />
            )}
            {/* <Home /> */}
            <Footer />
        </div>
    );
}
