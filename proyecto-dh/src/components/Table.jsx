import React from "react";
import RowTable from "./RowTable";

const peliculas = [
    {
        title: 'The Catcher in the Rye',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Catcher-in-the-rye-red-cover.jpg',
        rating: 10,
        genres: ['Aventura', 'Comedia'],
        awards: 10
    },
    {
        title: 'Nine Stories',
        cover: 'https://m.media-amazon.com/images/I/41B2f5VvjVL.jpg',
        rating: 10,
        genres: ['Drama'],
        awards: 10
    },
    {
        title: 'Franny and Zooey',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Frannyzoey.jpg',
        rating: 10,
        genres: ['Terror'],
        awards: 10
    },
    {
        title: 'The Great Gatsby',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg',
        rating: 10,
        genres: ['Terror'],
        awards: 10
    },
    {
        title: 'Tender is the Night',
        cover: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Tender_Is_the_Night_%281934_1st_ed_dust_jacket%29.jpg',
        rating: 10,
        genres: ['Terror'],
        awards: 10
    },
    {
        title: 'Pride and Prejudice',
        cover: 'https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg',
        rating: 10,
        genres: ['Terror'],
        awards: 10
    },
    {
        title: 'Professional ASP.NET 4.5 in C# and VB',
        cover: 'https://media.wiley.com/product_data/coverImage300/59/11183320/1118332059.jpg',
        rating: 10,
        genres: ['Terror'],
        awards: 10
    }
]

function Table() {
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table
                        className="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellSpacing="0"
                    >
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Cover</th>
                                
                            </tr>
                        </thead>
                        
                        <tbody>
                            {peliculas.map((peliculas, i) => (
                                <RowTable 
                                    key={i} 
                                    title={peliculas.title} 
                                    cover={peliculas.cover}
                                    
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Table;