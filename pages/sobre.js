import React, { Component } from "react";
import Cabecalho from "../containers/Cabecalho";
import Layout from "../components/Layout";
import Rodape from "../containers/Rodape";

class Sobre extends Component {
    render() {
        return (
            <div>
                <Layout title="BOGFELTS">
                    <Cabecalho />
                    <h1>sobre</h1>
                    <Rodape/>


                </Layout>

                
            </div>
        )
    }
}

export default Sobre;