import React from "react";
import Link from 'next/link';

const LogoCabecalho = () => (
    <div className="flex-3 flex flex-start">
        <Link href="/">
            <img src="/static/logo.png" className="logo" width="50%"/>
        </Link>
    </div>
)

export default LogoCabecalho;