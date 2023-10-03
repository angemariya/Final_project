import { NavLink, useParams } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useGetOneCategoryQuery } from '../../redux/apiSlice';
import { addItemToBasket } from '../../redux/basketSlice';
import { CenteringContainer } from '../../components/CenteringContainer';
import { ItemCard } from '../../components/ItemCard'
import { Filtration } from '../../components/Filtration';
import { ApplyFilter } from '../../utils/applyFilter';
import { ToastContainer, toast } from 'react-toastify';
import { SpinnerCircular } from 'spinners-react';
import styles from './CategoryPage.module.css';
import 'react-toastify/dist/ReactToastify.css'

export const CategoryPage = () => {

    const { id } = useParams();
    const [newData, setNewData] = useState();
    const { data, error, isError, isLoading } = useGetOneCategoryQuery(id);
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

    const responseData = data?.data;

    const onFilterChanged = useCallback((filterObj) => {
        setNewData(ApplyFilter(responseData || [], filterObj))
    }, [responseData])


    return (
        <CenteringContainer>
            {isLoading ? (<SpinnerCircular enabled={true} />) :
                isError ? (<h2>{error}</h2>) :
                    (<>
                        <h1 className={styles.header}>{data?.category?.title}</h1>
                        <Filtration onChange={onFilterChanged} />
                        <div className={styles.itemsWrapper}>
                            {newData && newData.map(el =>
                                <NavLink to={`/products/${el.id}`} key={el.id}>
                                    <ItemCard {...el} addToBasketHandler={(e) => addToBasketHandler(e, el)} />
                                </NavLink>
                            )}
                        </div>
                    </>
                    )
            }
            <ToastContainer />
        </CenteringContainer>
    )
}
