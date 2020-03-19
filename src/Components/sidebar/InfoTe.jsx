import React, { Component } from "react";
import '../sidebar/otro.css'


class InfoTe extends Component {
  render() {
    return (
        <div class="container-infote">
            <img
          className="tea-tea"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tea_remix.png/375px-Tea_remix.png"
          alt="profile"
        />
          <h5 className="txt-infote">
          El té proviene principalmente de China continental, India, Sri Lanka, Taiwán, Japón, Nepal, Australia, Argentina y Kenia.

La planta de té se adapta mejor en climas tropicales y subtropicales, además necesita de lluvia aproximadamente 1250 mm por año, varios de los mejores sembradíos de té se encuentran a más de 1500 metros de altura, este factor hace que crezca más lento y las hojas intensifiquen su sabor.

Los cuatro tipos principales de té se distinguen según su procesamiento.

Las hojas del arbusto Camellia sinensis, si no son secadas apenas se recolectan, comienzan a oxidarse. Para prevenir este proceso de oxidación, se calientan con el objetivo de quitarles la humedad.

El arbusto es podado para que no supere los 2 metros de altura facilitando así la labor de recolección. A partir del tercer año, las hojas pueden cosecharse con rendimiento.

Las hojas de té se procesan para producir el té verde o negro. La fabricación del té negro comienza con el proceso de "desecado" de las hojas, sea en forma natural o con aire caliente. Luego del desecado, se hace pasar el material entre rodillos para exprimir los jugos y se golpea para romper las hojas. Después se ciernen y se fermentan para lograr la calidad del producto final. Entonces se seca, gradúa y clasifica el té fermentado para empaquetarlo. El té verde se prepara calentando las hojas, sea en platos calientes o con vapor. Las hojas se apisonan con el rodillo, se calientan y se apisonan otra vez, para lograr la calidad deseada.

La producción del té puede causar algunos desechos gaseosos de la operación de desecado. Estas emisiones tienen poca importancia, comparadas con las descargas de las calderas a carbón o petróleo que se utilizan para producir el vapor. Los desechos líquidos procedentes de las operaciones de limpieza son, igualmente, de poca importancia.
          </h5>
      </div>
    );
  }
}

export default InfoTe;