import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="/">PRODUCT MANAGEMENT PROJECT</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link text-white" href="/create-product">REGISTER</a>
                                <a className="nav-link text-white" href="/products">LIST-PRODUCTS</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent