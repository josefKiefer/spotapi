import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App(): JSX.Element {
    return (
        <div
            role="background-image"
            aria-label="Background image with Spotify logos"
            className="bg-image"
            style={{
                backgroundImage:
                    'url("assets/img/spotify-theme-music-bkg-dark.png")',
                height: '100vh',
                backgroundSize: '100% auto',
            }}
        >
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                </Switch>
            </Router>
        </div>
    );
}
