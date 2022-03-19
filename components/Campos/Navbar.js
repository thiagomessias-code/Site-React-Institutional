import React, { useState, useEffect } from "react";
import Link from "next/link";


const Navbar = () => {
    const [menu, setMenu] = useState(false);
    

    const changeBackground = () => {
        if (window.scrollY >= 40) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }
   

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    });


    return (
        <div className="col-12 " >

                <div class={menu ? 'header header-bg' : 'header'}>
                    <nav class="navbar  navbar-expand-md navbar-light  "
                        style={{ height: '90px'}} >
                        <div class="container-fluid m-auto col-11">
                            <a class="navbar-brand" href="#"><img className="logo" src="/static/logook.jpg" /></a>
                            <button class="navbar-toggler" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="navbar-toggler-icon bg-light"></i>
                            </button>
                            <div class="collapse  navbar-collapse" id="navbarTogglerDemo02">
                                <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link href="/">
                                        <a class="nav-link" aria-current="page" href="#">Hem</a>
                                        </Link>
                                        
                                    </li>
                                    <li class="nav-item">
                                        <Link href="/sobre">
                                        <a class="nav-link" href="#">Om Oss</a>
                                        </Link>
                                        
                                    </li>
                                    <li class="nav-item">
                                        <Link href="/negocios"><a class="nav-link ">Företag</a></Link>

                                    </li>
                                    <li class="nav-item">
                                         <Link href="/sustentabilidade"><a class="nav-link ">Hållbarhet</a></Link>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link ">Kontact</a>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit"><i className="fa fa-search" /></button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            
            <br />
            <br />



        </div>

    )
}


export default Navbar;