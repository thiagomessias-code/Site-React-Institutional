import React, {Component} from 'react';
import Logo from '../../components/Logo/Cabecalho';
import Navbar from '../../components/Header/Navbar';




class Cabecalho extends React.Component {
    renderCabecalhoNormal(){
        return (
            <div>
                    <Navbar/>
            </div>
        )
    }

    renderCabecalhoSimples(){
        return (
            <div className="Header No-Links Header-Simples">
                <div className="header-wrapper">
                    <Logo />
                </div>
            </div>
        )
    }

    render(){
        const { simples } = this.props;
        return simples ? 
                this.renderCabecalhoSimples() : 
                this.renderCabecalhoNormal()
    }
}

export default Cabecalho;



