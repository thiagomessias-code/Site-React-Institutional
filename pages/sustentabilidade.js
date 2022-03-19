import React, {Component} from "react";
import Layout from "../components/Layout";
import Cabecalho from "../containers/Cabecalho";
import Rodape from "../containers/Rodape";
import { Sus } from "../containers/Sus";

class Sustentabilidade extends Component {
    render(){
        return (
            <div>
                <Layout title="SUSTENTABILIDADE">
                    <Cabecalho/>
                    <Sus/>
                    <Rodape/>
                </Layout>
            </div>
        )
    }
}

export default Sustentabilidade;