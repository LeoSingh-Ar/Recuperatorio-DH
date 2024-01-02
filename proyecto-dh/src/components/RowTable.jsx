import React from "react";
import PropTypes from 'prop-types';

function RowTable(props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.cover}</td>
            <td>{props.rating}</td>
            <td>
                <ul>
                    {props.genres.map((genre, i) => {
                        return (<li key={i}>{genre}</li>)
                    })}
                </ul>
            </td>
            <td>{props.awards}</td>
        </tr>
    )
}

//Definir tipos de datos de nuestras props
RowTable.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    cover: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    awards: PropTypes.number.isRequired,
}

//Definir valores por defecto de nuestras props
RowTable.defaultProps = {
    title: 'Nada',
    rating: '0',
    cover: '0',
    genres: [],
    awards: '0'
}

export default RowTable;