import React from "react";
import PropTypes from "prop-types";
import './../../styles/card.css'

export const Card = props => {
	Card.propTypes = {
		onClick: PropTypes.func,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.string
	};

	return (
        <article className='card'>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.price} €</p>
            <button onClick={props.onClick}>Add to Cart</button>
        </article>
	);
};

Card.defaultProps = {
    name: 'name placeholder',
    description: 'description placeholder',
    price: '0'
};