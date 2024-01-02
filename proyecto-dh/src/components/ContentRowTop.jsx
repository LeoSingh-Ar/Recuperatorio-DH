import React, {useState} from "react";
import logo from '../assets/images/prueba.jpg'

function ContentRowTop(){
    return(
        <>
            <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            
            <div className="row">
                
                <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Books in Data Base
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                            7
                        </div>
                        </div>
                        <div className="col-auto">
                        <i className="fas fa-film fa-2x text-gray-300" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
                <div className="col-md-4 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            {" "}
                            Total Authors
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                            8
                        </div>
                        </div>
                        <div className="col-auto">
                        <i className="fas fa-award fa-2x text-gray-300" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
                <div className="col-md-4 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Total Users
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                            6
                        </div>
                        </div>
                        <div className="col-auto">
                        <i className="fas fa-user fa-2x text-gray-300" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="row">
                
                <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Last book in Data Base
                    </h5>
                    </div>
                    <div className="card-body">
                    <div className="text-center">
                        <img
                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                        style={{ width: "40rem" }}
                        src={logo}
                        alt=" Star Wars - Mandalorian "
                        />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolores, consequatur explicabo officia inventore libero
                        veritatis iure voluptate reiciendis a magnam, vitae, aperiam
                        voluptatum non corporis quae dolorem culpa citationem ratione
                        aperiam voluptatum non corporis ratione aperiam voluptatum quae
                        dolorem culpa ratione aperiam voluptatum?
                    </p>
                    <a
                        className="btn btn-danger"
                        target="_blank"
                        rel="nofollow"
                        href="/"
                    >
                        View book detail
                    </a>
                    </div>
                </div>
                </div>
                
                <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Title Books in Data Base
                    </h5>
                    </div>
                    <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">The Catcher in the Rye</div>
                        </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">Nine Stories</div>
                        </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">Franny and Zooey</div>
                        </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">The Great Gatsby</div>
                        </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">Tender is the Night</div>
                        </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">Pride and Prejudice</div>
                        </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">Professional ASP.NET 4.5 in C# and VB</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ContentRowTop;