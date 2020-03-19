import React, { Component } from "react";
import '../Cards/Cards.css'
import CupTea from '../../images/tea.svg'


class Otracosa extends Component {
  render() {
    return (
      <div class="container-cards">
         <div className="header-cards">
          <img src={CupTea}/>
          <h2>Datos Curiosos</h2>
         </div>
      <div class="block-grid">
        <div class="block-panel">
          <div class="block-content">
            <h4>Descubrimiento</h4>
            <p className="txtcads">Dos mil años antes de Cristo mientras varios guerreros chinos 
            hervían agua en medio del campo, una brisa hizo caer hojas de la planta Camellia Sinensis en la vasija, a partir de la infusión de estas hojas, surgió el té.</p>
  
          </div>
        </div>
        <div class="block-panel">
          <div class="block-content">
            <h4>Hay 2 especies</h4>
            <p className="txtcads">Es muy común que llames té de manzanilla a la infusión que se realiza con esta planta, pero realmente no es un té, sino el sabor que acompaña a las hojas molidas. Las especies son sólo dos: Por un lado está la Sinsensis que nos regala el té verde y la Assamica que sirve para el té negro.</p>
          </div>
        </div>
        <div class="block-panel">
          <div class="block-content">
            <h4>Medicinales</h4>
            <p className="txtcads">Infusiones de té negro o verde acompañan a otras hierbas como la hierbabuena, el zacate limón o el anís se usan para la gripe o la digestión. Variedades como flor de jamaica, canela, 12 flores y raíces, que ayudan tanto al metabolismo y al descanso.</p>
          </div>
        </div>
        <div class="block-panel">
          <div class="block-content">
            <h4>La hora del té</h4>
            <p className="txtcads">El viejo mundo y en especial los ingleses consumen cantidades obscenas de té, tal es la fascinación de los británicos que institucionalizaron la 5:00 de la tarde como la hora específica para beberlo.</p>
          </div>
        </div>
        <div class="block-panel">
          <div class="block-content">
            <h4>Te Chai</h4>
            <p className="txtcads">En la India el té es todo un ritual poder prepararlo hasta beberlo. El país es reconocido por sus especias, por ejemplo, existe una infusión llamada Masalá Chai. Algunos especialistas lo recomiendan beber con leche y así obtenemos el Chai latte. ¿Qué tiene de interesante? La preparación contiene: cardamomo, comino, pimienta, hojas de Assamica, canela, clavo, jengibre, y algunas veces toques de nuez o vainilla.</p>
          </div>
        </div>
        <div class="block-panel">
          <div class="block-content">
            <h4>Hojas alteradas</h4>
            <p className="txtcads">Japón también tiene su hora del té y es tradición consumirlo en la tarde/noche. La aportación más famosa de este país es el Matcha realizado con las hojas de té verde, las cuales son cubiertas del sol para interrumpir su crecimiento y obtener una molienda más intensa. Su sabor es dulce y reconfortante.</p>
          </div>
        </div>
        <div class="block-panel">
          <div class="block-content">
            <h4>¿Tisana o té?</h4>
            <p className="txtcads">Las tisanas se preparan en todo el planeta. Lo que la diferencia del té es que no contiene hojas de Camellia Sinensis, pero sí, frutas, hierbas y hojas de árboles que al contacto del agua se hidratan para hacer explotar la esencia y el sabor.</p>
          </div>
        </div>
        <div class="block-panel">
          <div class="block-content">
            <h4>Y para finalizar…</h4>
            <p className="txtcads">Ya sea solo o acompañado lo importante es disfrutar el té con todos los sentidos. Te recomendamos salir de la zona de confort y probar mezclas diferentes que te recuerden todas las cosas buenas que existen bajo el sol.</p>
          </div>
        </div>
      </div>
  
  
    </div>
    );
  }
}

export default Otracosa;