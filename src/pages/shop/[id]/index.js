import React, {useContext} from 'react'
import { useRouter } from 'next/router';
import Context from "../../../context/Context"; 
import {productRows} from '../../../dummyData';
import styles from './index.module.scss'

function index() {
    const { addItem } = useContext(Context);
    const router = useRouter();
    const { query: { id } } = router;
    const product = productRows.find((el) => el.id == id)

    return (
        <div className={styles.container}>
            <div className={styles.left__content} >
                <img src={product?.img} alt="shop" />
                <h1>{product?.name}</h1>
                <a>{product?.from}</a>
            </div>
            <div className={styles.right__content}>
                <table>
                  <thead>
                    <tr>
                      <td>Height / Weight</td>
                      <td>{product?.height} / {product?.weight}</td>
                    </tr>
                    <tr>
                      <td>Author</td>
                      <td>{product?.autor}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lived</td>
                      <td>{product?.life}</td>
                    </tr>
                    <tr>
                      <td>Role</td>
                      <td>{product?.role}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>{product?.price} €</td>
                    </tr>
                  </tbody>
                </table>
              <div className={styles.btn__group}>
                    <button 
                        className="btn btn-black"
                        onClick={() => addItem(product)}
                    >
                        Ajouter au panier
                    </button>
                </div>
             
            </div>
        </div>
    )
}

export default index
