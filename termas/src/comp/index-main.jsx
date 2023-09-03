const React = require('react');
const Carrousel = require('./layout/home-carrousel')
require('../../public/home.css');

export function IndexMain() {
    return (
        <main className="home_main">
            <div className="reservas">
                <a href="./docs/bungalows.html" id="reservas">Reservar</a>
            </div>
            <div className="home_main_titulo">
                <p>Termas &</p>
                <p className="txt-bungalows">Bungalows</p>
                <p className="txt-basavilbaso">Basavilbaso</p>
                <p className="txt-slogan">Lujo natural, descanso</p>
                <p className="txt-slogan">asegurado</p>
            </div>
            <div className="home_main_bungalows">
                <h2>Bungalows</h2>
                <div className="home_main_bungalows_reservas">
                    <h3>Sentite en casa</h3>
                    <p>Nuestros Bungalows cuentan con el mejor equipamiento y confort, para que tu experiencia en las Termas
                        Basavilbaso sea la mejor. Te ofrecemos un espacio para disfrutar en familia o en pareja.
                    </p>
                    <a href="./docs/bungalows.html" className="btn-accion">Reservar</a>
                </div>
                <Carrousel />
            </div>
            <div className="home_main_predio">
                <h2>Predio</h2>
                <h3>Termas Basavilbaso</h3>
                <div className="home_main_predio_imagenes">
                    <div className="predio_imagen primera">
                        <img src="./assets/predio1.jpg" alt="" />
                    </div>
                    <div className="predio_imagen imagen1">
                        <img src="./assets/predio2.jpg" alt="" />
                    </div>
                    <div className="predio_imagen imagen2">
                        <img src="./assets/predio3.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="home_main_desc">
                <div className="predio_desc">
                    <h3>Acerca del predio</h3>
                    <p>Descubre Termas de Basavilbaso, un moderno complejo turístico en Entre Ríos, cercano a Rosario y
                        Buenos Aires. Ofrece aguas termales relajantes en cuatro piscinas, incluyendo una cubierta todo
                        el año. Disfruta de tratamientos de spa, masajes y buena comida. Tu escapada de tranquilidad te
                        espera en Termas de Basavilbaso.
                    </p>
                    <a href="" className="btn-accion">Conocer más</a>
                </div>
            </div>
        </main>
    )
}

export default IndexMain;