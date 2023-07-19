import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useGetAllProductsQuery } from '../../redux/apiSlice';
import { addItemToBasket } from '../../redux/basketSlice';
import { CenteringContainer } from '../../components/CenteringContainer';
import { Filtration } from '../../components/Filtration';
import { ItemCard } from '../../components/ItemCard';
import styles from './AllProductsPage.module.css';
import { useDispatch } from 'react-redux';

export const AllProductsPage = () => {

    const [filteredItems, setFilteredItems] = useState()
    const { data, isLoading, error } = useGetAllProductsQuery();
    const dispatch = useDispatch();

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
                    <NavLink to={`/products/${el.id}`} key={el.id}>
                        <ItemCard {...el} addToCard={
                            (e) => {
                                e.preventDefault();
                                dispatch(addItemToBasket(el));
                            }} />
                    </NavLink>
                )}
            </div>
        </CenteringContainer>
    )
}