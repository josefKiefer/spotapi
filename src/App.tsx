import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';

export default function App(): JSX.Element {
    return (
        <body>
            <div
                role="background-image"
                aria-label="Background image with Spotify logos"
                className="page-container"
                style={{
                    backgroundImage:
                        'url("assets/img/spotify-theme-music-bkg-dark.png")',
                    height: '100vh',
                    backgroundSize: '100% auto',
                }}
            >
                <div className="content-wrap">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                        </Switch>
                    </Router>
                </div>
                <div className="push"></div>
            </div>
            {/* <Footer /> */}
        </body>
    );
}
