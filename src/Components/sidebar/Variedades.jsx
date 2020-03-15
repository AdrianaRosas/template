import React, { Component } from "react";
import '../sidebar/otro.css'


class Variedades extends Component {
  render() {
    return (
        <div class="container-variedades">
            <h2 className="introduccion-variedades">
            El método original para preparar bebidas de té es usar hojas de té frescas en agua caliente que se arrancan directamente del arbusto. El sabor del té cambia mucho dependiendo del tipo. 
            Las hojas de té frescas no se pueden almacenar por mucho tiempo, ya que fermentan o se estropean por la acción de microorganismos no deseados. Por lo tanto, la fermentación y el secado 
            dirigidos se desarrollaron para que el te sea almacenable. Dependiendo del procedimiento y del material de partida, se crean numerosas cualidades de sabor diferentes. Hoy en día, 
            se distinguen cuatro formas tradicionales que se diferencian en el grado de oxidación:
            </h2>
            <div id="table-wrapper">
  <table>
    <tr id="heading">
      <th>Nombre</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td data-th="Nombre">Té Blanco</td>
      <td data-th="Descripcion">
          Llamado así porque los pelos en la parte inferior de las hojas dan a las hojas de té secas un color blanco plateado. 
          Son hojas jóvenes (brotes nuevos del arbusto) que no se han oxidado; los brotes pueden haber sido protegidos del sol 
          para evitar la formación de clorofila. Los brotes jóvenes se cosechan y secan (como el heno) y en muchos casos solo 
          las mejores plantas son adecuadas para la producción de té blanco.
      </td>
    </tr>
    <tr>
      <td data-th="Nombre">Té Verde</td>
      <td data-th="Descripcion">
          Sin oxidación. Un favorito en Asia, es así denominado porque las hojas se secan y son fragmentadas rápidamente después 
          de ser recogidas. En la producción tradicional, después de la cosecha, el té se empapa en sartenes de hierro sobre el 
          fuego y luego se seca. En la producción industrial, esto ocurre en grandes contenedores. El té hecho de estas hojas 
          presenta un sabor más fresco que otros tipos de té. A causa de esto, el té verde generalmente no se sirve con leche ni 
          azúcar. Algunos tipos de té verde son Zhū chá, Sencha y Gyokuro cuyo nombre (literalmente "rocío de jade") se refiere 
          al color verde pálido de la infusión.   
      </td>
    </tr>
    <tr>
      <td data-th="Nombre">Oolong (烏龍茶)</td>
      <td data-th="Descripcion">
          También llamado té azul. Tiene un grado de oxidación media entre los tés negros y los tés verdes. Sus hojas son fermentadas 
          cerca de la mitad del tiempo empleado en el té negro. Los oolong son marchitados muy lentamente, y su proceso de oxidación 
          es lento y sutil. Luego del cuarteado el té desarrolla muchísimos compuestos aromáticos a flores y frutas que se verán 
          reflejados en la taza ​紅茶, chino Hóngchá, Kōcha japonés
      </td>
    </tr>
    <tr>
      <td data-th="Nombre">Té Negro</td>
      <td data-th="Descripcion">
          Se conoce en Asia como té rojo.(紅茶, chino Hóngchá, Kōcha japonés)- oxidación completa. Da lugar a una infusión rojiza y oscura; 
          el té negro es muy popular en los países occidentales.
      </td>
    </tr>
  </table>
</div>
      </div>
    );
  }
}

export default Variedades;