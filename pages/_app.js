import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';

class Principal extends App {
    static async getServerSideProps({ Component, ctx }){
        return {
            pageProps: Component.getServerSideProps ? await Component.getServerSideProps(ctx) : {}
        }
    }

    render(){
        const { Component, pageProps, store } = this.props;
        return(
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(initStore)(Principal);