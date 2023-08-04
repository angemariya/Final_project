import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetOneProductByCategoryQuery } from '../../redux/apiSlice';
import { addItemToBasket } from '../../redux/basketSlice'
import { CenteringContainer } from '../../components/CenteringContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from './ProductPage.module.css';

export const ProductPage = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetOneProductByCategoryQuery(id);
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

    const responseData = data && data[0];

    return (
        <CenteringContainer>
            {isLoading ?
                (<h2>Loading...</h2>) :
                error ? (<h2>Error</h2>) :
                    (<>
                        <h1 className={styles.header}>{responseData && responseData.title}</h1>
                        <div className={styles.productWrapper}>
                            <div className={styles.imageWrapper}>
                                <img src={`https://gardenshop.onrender.com/${responseData.image}`} alt="product"/>
                            </div>
                            <div className={styles.contentContainer}>
                                {(responseData.discont_price !== null) ?
                                    (<div className={styles.priceWithDiscount}>
                                        <div className={styles.price}>{responseData.discont_price}<span className={styles.dollarSign}>$</span></div>
                                        <div className={styles.discountPrice}>{responseData.price} <span>$</span> </div>
                                        <div className={styles.discount}>{Math.floor(100 - (responseData.discont_price / responseData.price / 0.01))}%</div>
                                    </div>)
                                    :
                                    (<div className={styles.price}>
                                        {responseData.price}
                                        <span className={styles.dollarSign}>$</span>
                                    </div>)
                                }
                                <button
                                    onClick={addToBasketHandler}
                                    className={styles.addButton}>
                                    To card
                                </button>
                                <p className={styles.descriptionTitle}>Description</p>
                                <p className={styles.description}>{responseData.description}</p>
                            </div>
                        </div>
                    </>)}
            <ToastContainer />
        </CenteringContainer>
    );
};