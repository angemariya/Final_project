import { NavLink } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from '../../redux/apiSlice';
import { addItemToBasket } from '../../redux/basketSlice';
import { CenteringContainer } from '../../components/CenteringContainer';
import { ItemCard } from '../../components/ItemCard';
import { Filtration } from '../../components/Filtration';
import { ApplyFilter } from '../../utils/applyFilter';
import styles from './AllProductsPage.module.css';
import 'react-toastify/dist/ReactToastify.css'

export const AllProductsPage = () => {

    const [newData, setNewData] = useState();
    const { data, isLoading, error } = useGetAllProductsQuery();
    const dispatch = useDispatch();

    const addToBasketHandler = (event, el) => {
        event.preventDefault();
        dispatch(addItemToBasket(el));
    }

    const onFilterChanged = useCallback((filterObj) => {
        setNewData(ApplyFilter(data || [], filterObj))
    }, [data])

    return (
        <CenteringContainer>
            {
                isLoading ? (<h2>Loading...</h2>) : error ? (<h2>Error</h2>) :
                    <>
                        <h1 className={styles.header}>All Products</h1>
                        <Filtration onChange={onFilterChanged} />
                        <div className={styles.itemsWrapper}>
                            {newData && newData.map(el =>
                                <NavLink to={`/products/${el.id}`} key={el.id}>
                                    <ItemCard {...el} addToBasketHandler={
                                        (e) => addToBasketHandler(e, el)} />
                                </NavLink>
                            )}
                        </div>
                    </>
            }
        </CenteringContainer>
    )
}