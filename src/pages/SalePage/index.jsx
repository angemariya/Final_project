import { NavLink } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CenteringContainer } from '../../components/CenteringContainer';
import { useGetAllSaleQuery } from '../../redux/apiSlice';
import { addItemToBasket } from '../../redux/basketSlice'
import { Filtration } from '../../components/Filtration';
import { ItemCard } from '../../components/ItemCard';
import { ApplyFilter } from '../../utils/applyFilter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from './SalePage.module.css';

export const SalePage = () => {
    const [ newData, setNewData ] = useState();
    const { data, error, isLoading } = useGetAllSaleQuery();
    const dispatch = useDispatch();

    const filteredData = data && data.filter(el=> el.price !== el.discont_price)

    const addToBasketHandler = (event, el) => {
        event.preventDefault();
        dispatch(addItemToBasket(el));
        toast(`${el.title} added to busket`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    const onFilterChanged = useCallback((filterObj) => {
        setNewData(ApplyFilter(filteredData || [], filterObj))
    }, [filteredData])

    return (
        <CenteringContainer>
            {isLoading ?
                (<h2>Loading...</h2>)
                : error ? (<h2>Error</h2>)
                : (<>
                    <h1 className={styles.header}>Products with sale</h1>
                    <Filtration onChange={onFilterChanged} hideDiscountFilter/>
                    <div className={styles.itemsWrapper}>
                        {newData && newData.map(el =>
                            <NavLink to={`/products/${el.id}`} key={el.id}>
                                <ItemCard {...el} addToBasketHandler={(e) => addToBasketHandler(e, el)} />
                            </NavLink>
                        )}
                    </div>
                </>)
            }
            <ToastContainer />
        </CenteringContainer>
    )
}