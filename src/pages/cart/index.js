import React, {useContext} from 'react';
import Title from '../../components/ui/title/Title';
import Context from '../../context/Context';
import styles from './index.module.scss'
import Link from 'next/link'

const Index = () => {

    const { cart, total, addItem, deductItem, clearCart, removeItem } = useContext(Context);

    const totalPrice = cart ? 
      (cart.reduce((prev, item) => 
      prev + item.product.price * item.amount, 
      0
      )) 
      :
      0

    const handleConfirmation = () => {

    }

    return (
        <div>
            <Title title="Panier" />
            <div className={styles.cart__content}>
              {cart?.length ? (
                <table>
                  <thead>
                    <tr>
                      <td>Produit</td>
                      <td>Quantités</td>
                      <td>Prix</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    cart.map((item) => (
                    <tr key={item.product.id}>
                      <td>{item.product.name}</td>
                      <td>{item.amount}</td>
                      <td>{item.amount * item.product.price} €</td>
                      <td>
                        <button onClick={() => addItem(item.product)} className="btn">
                          +
                        </button>
                      </td>
                      <td>
                          <button className="btn" onClick={()=> {deductItem(item.product)}}>
                            -
                          </button>
                      </td>
                      <td>
                        <button className="btn btn-white" onClick={()=>{removeItem(item.product.id)}}>Supprimer</button>
                      </td>
                    </tr>
                    ))}
                  <tr>
                      <td>Total :</td>
                      <td>{total}</td>
                      <td>{totalPrice} €</td>
                      <td></td>
                      <td></td>
                      <td>
                        <button className="btn btn-white" onClick={()=>{clearCart()}}>Supprimer le panier</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <div className='text-center'>
                    <p>Aucun produit sélectionné.</p>
                </div>
              )}
              {cart?.length ? (
              <div className={styles.btn__group}>
                  <button className="btn btn-black" onClick={handleConfirmation}>
                    Payer
                  </button>
                </div>
              ):(
                <div className={styles.btn__group}>
                 
                </div>
              )}
            </div>
        </div>
      );
}
export default Index;