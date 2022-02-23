import Link from 'next/link'
import React from 'react'
import styles from './Product.module.scss'


function Product(props) {
    return (
        <>
            <Link href={`/shop/${props.product.id}`}>
                <div className={styles.product__card}>
                    <img src={props.product.img} alt="Image" />
                    <a>{props.product.name} </a>
                    <a>{props.product.price} €</a>
                </div>  
            </Link>      
        </>
    )
}

export default Product
