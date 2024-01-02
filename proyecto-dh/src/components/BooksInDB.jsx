import React, {Component} from "react";
import Books from './Books'

class BooksInDB extends Component{

    constructor(props){
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount(){
        fetch("/api/books") //'http://localhost:3001/api/books'
        .then(res => res.json())
        .then(books =>{
            this.setState({book: books.data})
            console.log(this.state.books)
        })       
    }

    componentDidUpdate(){
        console.log('Ya actualice el componente')
    }

    componentWillUnmount(){
        
    }

    changeColor(){
        let title = document.querySelector("h6")
        title.classList.toggle("bg-secondary");
    }

    render(){
    return(
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 onMouseOver={this.changeColor} onMouseOut={this.changeColor} className="m-0 font-weight-bold text-gray-800">Books in DB</h6>
            </div>
            <div className="card-body">
                <div className="row">
                    {this.state.bookt.map((book, index) =>{
                        return <Books {...books} key={index} />
                    })}
                </div>
            </div>
        </div>
        </div>
    )
}
}

export default BooksInDB;

{/* <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Acción
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Animación
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Aventura
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Cienca Ficción
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Comedia
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Documental
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Drama
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Fantasia
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Infantiles
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">
                                Musical
                            </div>
                        </div>
                    </div>
                </div> */}