import { NavLink, useParams } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useGetOneCategoryQuery } from '../../redux/apiSlice';
import { addItemToBasket } from '../../redux/basketSlice';
import { CenteringContainer } from '../../components/CenteringContainer';
import { ItemCard } from '../../components/ItemCard'
import { Filtration } from '../../components/Filtration';
import { ApplyFilter } from '../../utils/applyFilter';
import styles from './CategoryPage.module.css';

export const CategoryPage = () => {
    
    const [ newData, setNewData ] = useState();
    const { id } = useParams();
    const { data, error, isLoading } = useGetOneCategoryQuery(id);
    const dispatch = useDispatch();

    const addToBasketHandler = (event, el) => {
        event.preventDefault();
        dispatch(addItemToBasket(el));
    }

    const onFilterChanged = useCallback((filterObj) => {
        setNewData(ApplyFilter(data.data || [], filterObj))
    }, [data])

    return (
        <CenteringContainer>
            {
                isLoading ? (<h2>Loading...</h2>) : error ? (<h2>Error</h2>)
                    : <>
                        <h1 className={styles.header}>{data?.category?.title}</h1>
                        <Filtration onChange={onFilterChanged} />
                        <div className={styles.itemsWrapper}>
                            {newData && newData.map(el =>
                                <NavLink to={`/products/${el.id}`} key={el.id}>
                                    <ItemCard {...el} addToBasketHandler={
                                        (e) => addToBasketHandler(e, el)} />
                                </NavLink>
                            )}
                        </div>
                    </>}
        </CenteringContainer>
    )
}
