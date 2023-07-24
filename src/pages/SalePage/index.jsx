import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CenteringContainer } from '../../components/CenteringContainer';
import { useGetAllSaleQuery } from '../../redux/apiSlice';
import { addItemToBasket } from '../../redux/basketSlice'
import { Filtration } from '../../components/Filtration';
import { ItemCard } from '../../components/ItemCard';
import styles from './SalePage.module.css';

export const SalePage = () => {
    const [filteredItems, setFilteredItems] = useState()
    const { data, error, isLoading } = useGetAllSaleQuery();
    const dispatch = useDispatch();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const filteredData = (data && data.filter(el => el.discont_price !== null))

    const setFilteredItemsHandler = (itemsToFilter) => {
        setFilteredItems(itemsToFilter)
    }

    return (
        <CenteringContainer>
            {isLoading ?
                (<div>Loading...</div>)
                : 
                (<>
                    <h1 className={styles.header}>Products with sale</h1>
                    <Filtration items={filteredData} setFilteredItems={setFilteredItemsHandler} />
                    <div className={styles.itemsWrapper}>
                        {filteredItems && filteredItems.map(el =>
                            <NavLink to={`/products/${el.id}`} key={el.id}>
                                <ItemCard {...el} addToCard={() => dispatch(addItemToBasket(el))} />
                            </NavLink>
                        )}
                    </div>
                </>)
            }

        </CenteringContainer>
    )
}