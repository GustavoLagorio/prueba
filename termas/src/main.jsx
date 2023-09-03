import { Navbar } from './comp/layout/nav';
import { Footer } from './comp/layout/footer';
import { IndexMain } from './comp/index-main';

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