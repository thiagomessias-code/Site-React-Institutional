import React from 'react';
import Link from 'next/link';

const REDES_SOCIAIS = [
    { nome: "facebook", url: "#" },
    { nome: "instagram", url: "#" },
    { nome: "twitter", url: "#" },
    { nome: "whatsapp", url: "#" },
];

const RedesSociais = () => (
    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <div>
            <h2>Redes Sociais</h2>
            <br />
        </div>
        <div className="flex-1 flex redes-sociais wrap">
            {
                REDES_SOCIAIS.map((item, idx)=> (
                    <div className="flex-1 flex" key={idx}>
                        <Link href={item.url}>
                            <i className={`fa fa-${item.nome} fa-lg`}></i>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
)

export default RedesSociais;