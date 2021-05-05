import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, selectToken } from '../slices/authSlice';
import Authorize from './Authorize';
import Footer from './Footer';
import Header from './Header';
import '../styles.css';
import './LandingPage.css';
import TopMedia from './TopMedia';
import { PersonalizationTypes } from '../state/appState';

export default function LandingPage(): JSX.Element {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);

    if (window.location.href.includes('code') && !token) {
        dispatch(getToken());
    }

    return (
        <div>
            <div>
                <Header />
                {token ? (
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
            </div>
        </div>
    );
}
