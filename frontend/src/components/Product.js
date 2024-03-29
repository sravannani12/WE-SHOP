import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating';

const Product = ({product}) => {
    return (
        <Card>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>{product.name}</Card.Title>
                </a>
                <Card.Text as ='div'>
                    <Rating 
                    value={product.rating} text={`${product.numReviews} reviews`}
                    />
                </Card.Text> 
                <Card.Text as ='h3'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product;
