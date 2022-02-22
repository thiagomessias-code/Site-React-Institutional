import Head from "./Head";
import Style from './Style'

const Layout = ({ children, title, description, url, image}) => (
    <div>
        <Head title={title}
        description={description}
        url={url}
        ogImage={image}>
        </Head>

        <Style />
        <div className="">
            {children}
            
        </div>
        <footer>
            <div className="flex flex-center" style={{ background:'rgb(55, 15, 175)'}}>
                <smal className="Copyright">
                    &copy; 2022 Copyright: Bogfelts
                </smal>
            </div>
        </footer>
    </div>
);

export default Layout;