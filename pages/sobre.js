import React, { Component } from "react";
import Cabecalho from "../containers/Cabecalho";
import Layout from "../components/Layout";
import Rodape from "../containers/Rodape";
import About from "../containers/About";

class Sobre extends Component {
    render() {
        return (
            <div>
                <Layout title="SOBRE">
                    <Cabecalho />
                    <About/>
                    <Rodape />
                </Layout>


            </div>
        )
    }
}

export default Sobre;