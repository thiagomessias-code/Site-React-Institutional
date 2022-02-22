import React, { Component } from "react";

import Paginas from '../../components/Listas/Paginas';
import RedeSociais from '../../components/Listas/RedeSociais';
import DadosDaLoja from '../../components/item/DadosDaLoja';


class Rodape extends Component {
    render() {
        return (
            <div className="rodape">
                <div className="container flex horizontal">
                    <Paginas />
                    <RedeSociais />
                    <DadosDaLoja />
                </div>
            </div>
        )
    }
}

export default Rodape;
