import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useGetAllProductsQuery } from '../../redux/apiSlice';
import { CenteringContainer } from '../../components/CenteringContainer';
import { Filtration } from '../../components/Filtration';
import styles from './AllProductsPage.module.css';

export const AllProductsPage = () => {

    const [filteredItems, setFilteredItems] = useState()
    const { data, isLoading, error } = useGetAllProductsQuery();

    (isLoading) && (<div>Loading...</div>);
    (error) && (<div>Error: {error.message}</div>);

    const setFilteredItemsHandler = (itemsToFilter) => {
        setFilteredItems(itemsToFilter)
    }

    return (
        <CenteringContainer>
            <h1 className={styles.header}>All Products</h1>
            <Filtration items={data} setFilteredItems={setFilteredItemsHandler} />
            <div className={styles.itemsWrapper}>
                {filteredItems && filteredItems.map(el =>
                    <NavLink to={`/products/${el.id}`} key={el.id} className={styles.itemContainer}>
                        <img src={`http://127.0.0.1:3333${el.image}`} alt={el.title}/>
                        <div className={styles.priceContainer}>
                            {(el.discont_price) ?
                                (<>
                                    <p className={styles.mainPrice}>{el.discont_price} $</p>
                                    <p className={styles.priceWithDiscount}>{el.price} %</p>
                                    <p className={styles.discount}>{Math.floor(100 - (el.discont_price / el.price / 0.01))} %</p>
                                </>) :
                                (<p className={styles.mainPrice}>{el.price} $</p>)
                            }
                        </div>
                        <p className={styles.title}>{el.title}</p>
                    </NavLink>
                )}
            </div>
        </CenteringContainer>
    )
}