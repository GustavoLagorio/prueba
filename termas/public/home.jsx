import ReactDOM from "react-dom/server";


import { Navbar } from '../src/comp/layout/nav';
import { Footer } from '../src/comp/layout/footer';
import { IndexMain } from '../src/comp/index-main';

require('../public/style.css');


ReactDOM.createRoot(document.getElementById('rootHome')).render(
    <React.StrictMode>
        <>
            <Navbar />
            <IndexMain />
            <Footer />
        </>
    </React.StrictMode>
)