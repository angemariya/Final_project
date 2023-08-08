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
import { SpinnerCircular } from 'spinners-react';
import styles from './SalePage.module.css';
import 'react-toastify/dist/ReactToastify.css'

export const SalePage = () => {
    const [ newData, setNewData ] = useState();
    const { data, error, isError, isLoading } = useGetAllSaleQuery();
    const dispatch = useDispatch();

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
        setNewData(ApplyFilter(data || [], filterObj))
    }, [data])

    return (
        <CenteringContainer>
            {isLoading ?
                (<SpinnerCircular enabled={true} />)
                : isError ? (<h2>{error.message}</h2>)
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