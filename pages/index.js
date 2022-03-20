import React, { Component} from "react";
import Layout from '../components/Layout';
import Access from "../containers/Access";
import Banner from "../containers/Banner";
import Banner2 from "../containers/bannerSustentabilidade";
import Cabecalho from "../containers/Cabecalho";



import Cards from "../containers/Cards";
import Counter from "../containers/Counter";
import Projetos from "../containers/Projeto";
import Rodape from "../containers/Rodape";
import Slider from "../containers/Slider";
import Team from "../containers/Team";
import { Video } from "../containers/Videosection";




export default class Index extends Component {
    render() {
        return (
            <Layout title="BOGFELTS">
                <Cabecalho/>
                <Slider/>
                <Banner/>
                <Cards/>
                <Banner2/>
                <Counter/>
                <br/>
                <Projetos/>
                <Team/>
                <Video/>
                <Access/>
                <Rodape/>
                
            </Layout>

        )
    }
}