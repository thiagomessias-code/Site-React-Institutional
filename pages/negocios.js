import React, { Component } from "react";
import Layout from "../components/Layout";
import { Business } from "../containers/Business";
import Cabecalho from "../containers/Cabecalho";
import Rodape from "../containers/Rodape";

class Negocio extends Component {
    render() {
        return (
            
            <div>
                <Layout title="NEGOCIOS">
                    <Cabecalho/>
                    <Business/>
                    <Rodape/>
                </Layout>
            </div>
 )
    }
}

export default Negocio;