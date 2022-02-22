import React, { Component } from "react";
import Layout from '../components/Layout';
import Banner from "../containers/Banner";
import Banner2 from "../containers/bannerSustentabilidade";
import Cabecalho from "../containers/Cabecalho";


import Cards from "../containers/Cards";
import Counter from "../containers/Counter";
import Rodape from "../containers/Rodape";
import Slider from "../containers/Slider";



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
                <Rodape/>
                
            </Layout>

        )
    }
}