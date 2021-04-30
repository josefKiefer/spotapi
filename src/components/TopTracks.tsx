import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopArtists, selectArtists } from '../slices/artistsSlice';
import { getToken, selectToken } from '../slices/authSlice';
import { getTopTracks, selectTracks } from '../slices/tracksSlice';
import { Artist, Term } from '../state/appState';

export default function TopTracks(): JSX.Element {
    const tracks = useSelector(selectTracks);
    const artists = useSelector(selectArtists);
    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    const [artistsTerm, setArtistsTerm] = useState(Term.medium_term);

    const setTerm = (term: string) => {
        switch (term) {
            case '0':
                setArtistsTerm(Term.short_term);
                return;
            case '1':
                setArtistsTerm(Term.medium_term);
                return;
            case '2':
                setArtistsTerm(Term.long_term);
                return;
        }
    };

    let key: keyof typeof artists;
    if (window.location.href.includes('code') && !token) {
        dispatch(getToken());
    }

    return (
        <div className="text-center mt-2">
            <section
                className="page-section try-it justify-content-center"
                id="try-it"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-5 mt-2">
                                Top Tracks
                            </h2>
                            <div
                                className="portfolio-item mx-auto"
                                data-toggle="modal"
                                data-target="#portfolioModal1"
                            >
                                <div className="text-center">
                                    <button
                                        onClick={() =>
                                            dispatch(getTopTracks(token))
                                        }
                                        className="btn btn-primary"
                                    >
                                        Get top tracks
                                    </button>
                                    {tracks ? (
                                        tracks.map((track) => (
                                            <div
                                                key={track.name}
                                                style={{ color: 'white' }}
                                            >
                                                {track.name}
                                            </div>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-5 mt-2">
                                Top Artists
                            </h2>
                            <div
                                className="portfolio-item mx-auto"
                                data-toggle="modal"
                                data-target="#portfolioModal1"
                            >
                                <div className="text-center">
                                    <button
                                        onClick={() =>
                                            dispatch(getTopArtists(token))
                                        }
                                        className="btn btn-primary"
                                    >
                                        Get top Artists
                                    </button>
                                    {console.log(artists[artistsTerm])}
                                    {artists[artistsTerm].map(
                                        (artist: Artist) => (
                                            <div
                                                key={artist.name}
                                                style={{ color: 'white' }}
                                            >
                                                {artist.name}
                                            </div>
                                        )
                                    )}
                                    <label
                                        htmlFor="customRange1"
                                        className="form-label"
                                    >
                                        Example range
                                    </label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        id="customRange1"
                                        min="0"
                                        max="2"
                                        step="1"
                                        onChange={(event) =>
                                            setTerm(event.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
