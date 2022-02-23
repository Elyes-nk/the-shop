import React from 'react';
import Title from '../../components/ui/title/Title'
import Product from '../../components/product/Product'
import styles from './index.module.scss'
import {productRows} from '../../dummyData';

const Index = () => {
    return (
        <>
        <Title title="Nos coups de coeur du moment"/>
        <div className={styles.product__cards}>
            {productRows.map(product => (
                <div key={product.id}>
                    <Product product={product}/>
                </div>
            ))}
        </div>
        </>
    );
}

export default Index;
