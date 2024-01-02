import React, {useState, useEffect} from "react";
import Genre from './Books'

function GenresInDb2(){

    const [genresList, setGenresList] = useState([])

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         genresList: []
    //     };
    // }

    // componentDidMount(){
    //     fetch("/api/genres") //'http://localhost:3031/api/genres'
    //     .then(res => res.json())
    //     .then(genres =>{
    //         this.setState({genresList: genres.data})
    //         console.log(this.state.genresList)
    //     })       
    // }

    // componentDidUpdate(){
    //     console.log('Ya actualice el componente')
    // }

    // componentWillUnmount(){
        
    // }

    // changeColor(){
    //     let title = document.querySelector("h6")
    //     title.classList.toggle("bg-secondary");
    // }

    
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">{/*Genres ind DB*/}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800">Genres in DB</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {genresList.map((genre, index) =>{
                                return <Genre {...genre} key={index} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default GenresInDb2;