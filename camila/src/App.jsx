import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="navbar">
      <h1>Juegos olimpicos 2024</h1>
        <a href="#">Inicio</a> 
        <a href="#jugadores">jugadores</a>
        <a href="#medallas">medallas</a>
        
      </header>

      <div className="carousel" id="carousel">
        <img src="https://s.france24.com/media/display/fca96976-bc77-11ee-9bfe-005056bfb2b6/w:980/p:16x9/Paris1.jpg" alt="País 1"/>
      </div>

      <h1>Los Juegos Olímpicos de París 2024 llegaron a su fin.</h1>
      <p>Durante dos semanas, más de 10.000 deportistas estuvieron en las pistas, en las canchas, en las olas, incluso en el río para ganar alguna medalla olímpica.
        Vimos a Simone Biles brillar de nuevo en gimnasia artística, pero también el ascenso de la brasileña Rebeca Andrade.
        El francés Léon Marchand se convirtió en el rey de la piscina al lograr cuatro medallas de oro.
        Pero si hablamos de leyendas es inevitable no referirse al luchador cubano Mijaín López.</p>

      <div className="content">
        <h2 id="jugadores" >Los jugadores</h2>
        <div className="participants">
          <div className="participant">
            <img src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/c340/live/cb2e2150-5599-11ef-8f0f-0577398c3339.jpg.webp" alt="Participante 1"/>
            <p>Los clavados, que se realizaron el centro acuático de Saint Denis, nos dieron una de las mejores imágenes de los Juegos Olímpicos de París 2024.</p>
          </div>
          <div className="participant">
            <img src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/bc07/live/010d8900-5810-11ef-b2d2-cdb23d5d7c5b.jpg.webp" alt="Participante 2"/>
            <p>Simone Biles fue sin duda una de las reinas de París 2024.</p>
          </div>
          <div className="participant">
            <img src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/76f3/live/814fdaf0-5810-11ef-aebc-6de4d31bf5cd.jpg.webp" alt="Participante 3"/>
            <p>Mondo Duplatis fue el rey del salto con garrocha. Ganó su segunda medalla de oro olímpica.</p>
          </div>
          <div className="participant">
            <img src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/5dff/live/4a0705f0-5810-11ef-aebc-6de4d31bf5cd.jpg.webp" alt="Participante 4"/>
            <p>El ateltismo dejó decenas de hermosas imágenes en estos Juegos Olímpicos.</p>
          </div>
          <div className="participant">
            <img src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/1dc3/live/73153c60-559e-11ef-aebc-6de4d31bf5cd.jpg.webp" alt="Participante 5"/>
            <p>La fuerza de un cuerpo en dos brazos. Erin King y Emily Lane de Irlanda recuperan un balón en el aire durante un encuentro de rugby seven.</p>
          </div>
          <div className="participant">
            <img src="https://ichef.bbci.co.uk/ace/ws/621/cpsprodpb/5760/live/07099670-559d-11ef-b2d2-cdb23d5d7c5b.jpg.webp" alt="Participante 6"/>
            <p>Daiki Hashimoto de Japón hace una rutina impecable que le ayudará a conseguir la medalla de oro en el all-around por equipos.</p>
          </div>
        </div>
      </div>

      {/* Nueva sección con la tabla de medallas */}
      <div className="medal-table">
        <h2 id="medallas" >Medallas Destacadas</h2>
        <table>
          <thead>
            <tr>
              <th>Equipos</th>
              <th>1 oro 2 plata 3 fronce</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="https://s1.significados.com/foto/bandera-estados-unidos.jpg?class=article" alt="Medalla de Oro" /></td> 
              <td>40, 44, 42</td>
            </tr>
            <tr>
              <td><img src="https://s1.significados.com/foto/bandera-china.jpg?class=article" alt="Medalla de Plata" /></td>
              <td>40, 27, 24, </td>
            </tr>
            <tr>
              <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkKMIcqvcCuSFQ0lhznO4cVHfNwZ9Zw9BhhQ&s" alt="Medalla de Bronce" /></td>
              <td>20, 12, 13</td>
            </tr>
            <tr>
              <td><img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg" alt="Medalla de Bronce" /></td>
              <td>18, 19, 16</td>
            </tr>
            <tr>
              <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/200px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png" alt="Medalla de Bronce" /></td>
              <td>16, 26, 22</td>
            </tr>
            <tr>
              <td><img src="https://img.freepik.com/vector-gratis/ilustracion-bandera-holanda_53876-27103.jpg" alt="Medalla de Bronce" /></td>
              <td>15, 7, 12</td>
            </tr>
            <tr>
              <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="Medalla de Bronce" /></td>
              <td>14, 22, 29</td>
            </tr>
            <tr>
              <td><img src="https://img.freepik.com/fotos-premium/bandera-nacional-corea-sur-fondo-bandera-corea-sur_659987-358.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid" alt="Medalla de Bronce" /></td>
              <td>13, 9, 10</td>
            </tr>
            <tr>
              <td><img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg" alt="Medalla de Bronce" /></td>
              <td>12, 13, 15</td>
            </tr>
            <tr>
              <td><img src="https://img.freepik.com/vector-premium/bandera-alemania-ilustracion-vectorial_514344-272.jpg" alt="Medalla de Bronce" /></td>
              <td>12, 13, 8</td>
            </tr>
            <tr>
              <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/640px-Flag_of_Canada_%28Pantone%29.svg.png" alt="Medalla de Bronce" /></td>
              <td>10, 7, 3</td>
            </tr>
            <tr>
              <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcOuzFo4S4vw5qkcbZ-sLop3TFyZdlx49ig&s" alt="Medalla de Bronce" /></td>
              <td>0, 3, 1</td>
            </tr>
            <tr>
              <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png" alt="Medalla de Bronce" /></td>
              <td>3, 7, 10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

