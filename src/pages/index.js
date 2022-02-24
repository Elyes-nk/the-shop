import Title from '../components/ui/title/Title';
import Product from '../components/product/Product';
import styles from "./index.module.scss"
import {productRows} from '../dummyData';
import {useState} from "react"
import Input from '../components/ui/input/Input';
export default function Home() {
  
  const [products, setProducts] = useState(productRows);

  const handleFilter = (val) => {
    setProducts(productRows.filter((el) => el.name.includes(val.toLowerCase()) ||
      el.from.toLowerCase().includes(val.toLowerCase()) ||
      el.autor.toLowerCase().includes(val.toLowerCase()) ||
      el.category.toLowerCase().includes(val.toLowerCase()) ||
      el.role.toLowerCase().includes(val.toLowerCase()) ||
      el.departement.toLowerCase().includes(val.toLowerCase()) ||
      el.price.toString().includes(val) ||
      el.date.toString().includes(val)
    ))
  }

  return (
    <div>
        <Title title="Galerie à la une"/>
        <div className={styles.search__bar}> 
          <Input 
              type="text"
              name="Filter"
              label="Recherche"
              placeholder="Titre, from, auteur, département, category, rôle, price, date"
              onChange={(e) => handleFilter(e.target.value)}
          />
        </div>
        <div className={styles.product__cards}>
            {products?.map(product => (
                <div key={product.id}>
                    <Product product={product}/>
                </div>
            ))}
        </div>
    </div>
  )
}
