import { useParams } from 'react-router-dom'
import {useGetOneProductByCategoryQuery} from '../../redux/apiSlice'
import { CenteringContainer } from '../../components/CenteringContainer';
import styles from './ProductPage.module.css'

export const ProductPage = () => {
    const { id } = useParams();
    const { data } = useGetOneProductByCategoryQuery(id);

    console.log(data);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <CenteringContainer>
            <h1>{data[0].title}</h1>
            <div className={styles.productWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={`http://localhost:3333/${data[0].image}`} />
                </div>
                <div>
                    {
                        (data[0].discont_price !== null) ? 
                            (<>
                                <div className={styles.price}>{data[0].discont_price}<span className={styles.dollarSign}>$</span></div>
                                <div className={styles.discountPrice}>{data[0].price} <span>$</span> </div>
                                <div className={styles.discount}>{Math.ceil(data[0].discont_price * data[0].price / 100)}%</div>
                            </>)
                            :
                            (<>
                                <div className={styles.price}>{data[0].price}<span className={styles.dollarSign}>$</span></div>
                            </>)
                    }
                    <button className={styles.addButton}>To card</button>
                </div>
            </div>
        </CenteringContainer>
    );
};