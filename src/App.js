import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import AnimatedRoutes from "./pages/AnimatedRoutes";
import Spinner from "./components/Spinner/Spinner";

import './styles/app.scss';

const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <main className="main">
                    <div className="main__container">
                        <div className="photo">
                            <div className="photo__image"></div>
                        </div>
                        <div className="container">
                            <Suspense fallback={<Spinner />}>
                                <AnimatedRoutes />
                            </Suspense>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
