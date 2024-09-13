import React from "react";
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";
import campagne from "assets/img/Campagne.jpg";
import castaneda from "assets/img/castañeda.jpg";
import gonzalezHerrera from "assets/img/GonzálezHerrera.png";
import gurrolaAntuna from "assets/img/GurrolaAntuna.jpg";
import herreraOrtiz from "assets/img/Herrera_Ortiz.jpg";
import manzanilla from "assets/img/manzanilla.jpg";
import marlenne from "assets/img/Marlenne.png";
import ontiveros from "assets/img/Ontiveros.jpeg";
import Sanchez_Daniel from "assets/img/Sanchez_Daniel.jpeg";
import soto_cervantes from "assets/img/soto cervantes.jpg";
// import SotoGraciano from "asses/img/SotoGraciano.jpg"
import vallejo from "assets/img/vallejo.jpg";


// Componente reutilizable para tarjetas de alumnos
const AlumnoCard = ({ categoria, nombre, imagen }) => (
  <Col lg="3" md="6" sm="6">
    <Card className="card-stats">
      <CardBody>
        <Row>
          <Col md="4" xs="5">
            <div className="icon-big text-center icon-warning">
              <i className="nc-icon nc-globe text-warning" />
            </div>
          </Col>
          <Col md="8" xs="7">
            <div className="numbers">
              <p className="card-category">{categoria}</p>
              <CardTitle tag="p">{nombre}</CardTitle>
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats"></div>
        <a href="/" className="simple-text logo-mini">
          <div className="logo-img">
            <img src={imagen} alt={nombre} />
          </div>
        </a>
      </CardFooter>
    </Card>
  </Col>
);

function Dashboard() {
  return (
    <div className="content">
      <Row>
        <AlumnoCard categoria="ALUMNO 3" nombre="CAMPAGNE" imagen={campagne} />
        <AlumnoCard categoria="ALUMNO 4" nombre="CASTAÑEDA" imagen={castaneda} />
        <AlumnoCard categoria="ALUMNO 5" nombre="GONZALEZ HERRERA" imagen={gonzalezHerrera} />
        <AlumnoCard categoria="ALUMNO 6" nombre="GURROLA ANTUNA" imagen={gurrolaAntuna} />
      </Row>
      
      <Row>
        <AlumnoCard categoria="ALUMNO 7" nombre="HERRERA ORTIZ" imagen={herreraOrtiz} />
        <AlumnoCard categoria="ALUMNO 8" nombre="MANZANILLA" imagen={manzanilla} />
        <AlumnoCard categoria="ALUMNO 9" nombre="MARLENNE" imagen={marlenne} />
        <AlumnoCard categoria="ALUMNO 10" nombre="ONTIVEROS" imagen={ontiveros} />
        <AlumnoCard categoria="ALUMNO 11" nombre="SANCHES" imagen={Sanchez_Daniel} />
        <AlumnoCard categoria="ALUMNO 12" nombre="SOTO" imagen={soto_cervantes} />
        {/* <AlumnoCard categoria="ALUMNO 13" nombre="SOTO" imagen={SotoGraciano} /> */}
        <AlumnoCard categoria="ALUMNO 14" nombre="VALLEJO" imagen={vallejo} />
      </Row>
    </div>
  );
}

export default Dashboard;
