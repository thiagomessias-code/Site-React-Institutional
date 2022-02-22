import React from "react";
import Link from 'next/link'

const Paginas = () => (
    <div class="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0" >
            <div>
                <h2 className="titulo-pagina">
                    Paginas
                </h2>
            </div>
                <Link href="/store">
                <span className="links-pagina">Página Inicial</span>
                </Link>
                <Link href="/store">
                <span className="links-pagina">Página Inicial</span>
                </Link>
                <Link href="/store">
                <span className="links-pagina">Página Inicial</span>
                </Link>
                <Link href="/store">
                <span className="links-pagina">Página Inicial</span>
                </Link>
                <Link href="/store">
                <span className="links-pagina">Página Inicial</span>
                </Link>
        
        
        </div>
    </div>
)

export default Paginas;

