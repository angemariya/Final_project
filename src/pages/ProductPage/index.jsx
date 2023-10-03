import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetOneProductByCategoryQuery } from '../../redux/apiSlice';
import { addItemToBasket } from '../../redux/basketSlice'
import { CenteringContainer } from '../../components/CenteringContainer';
import { ToastContainer, toast } from 'react-toastify';
import { SpinnerCircular } from 'spinners-react';
import { BASE_URL } from '../../redux/apiSlice';
import styles from './ProductPage.module.css';
import 'react-toastify/dist/ReactToastify.css'

export const ProductPage = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useGetOneProductByCategoryQuery(id);
    const dispatch = useDispatch();

    const responseData = data && data[0];

    const addToBasketHandler = () => {
        dispatch(addItemToBasket(responseData));
        toast(`${responseData.title} added to busket`, {
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

    return (
        <CenteringContainer>
            {isLoading ? (<SpinnerCircular enabled={true}/>) :
                isError ? (<h2>{error.message}</h2>) :
                    (<>
                        <h1 className={styles.header}>{responseData && responseData.title}</h1>
                        <div className={styles.productWrapper}>
                            <div className={styles.imageWrapper}>
                                <img src={`${BASE_URL}${responseData.image}`} alt="product"/>
                            </div>
                            <div className={styles.contentContainer}>
                                {responseData.discont_price ?
                                    (<div className={styles.priceWithDiscount}>
                                        <div className={styles.price}>
                                            {responseData.discont_price}
                                            <span className={styles.dollarSign}>$</span>
                                        </div>
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
                                    onClick={()=>addToBasketHandler()}
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