import { CenteringContainer } from "../CenteringContainer";
import { useGetAllCategoriesQuery } from '../../redux/apiSlice';
import { NavLink } from "react-router-dom";
import Carousel from 'better-react-carousel';
import styles from './Catalog.module.css';

export const Catalog = () => {
    const { data, isLoading, isError, error } = useGetAllCategoriesQuery();

    return (
        <CenteringContainer>
            <div className={styles.wrapper}>
                <h2 className={styles.header}>Catalog</h2>
                <div className={styles.descriptionLabel}>All categories</div>
            </div>

            {isLoading ? <h2>Loading...</h2> :
                isError ? <h2>Error: {error}</h2> :
                    <Carousel cols={4} rows={1} gap={30} loop containerStyle={{ marginBottom: "90px" }}>
                        {data && data.map(el =>
                            <Carousel.Item className={styles.catalogOneItemWrapper}>
                                <NavLink to={`/categories/${el.id}`} key={el.id}>
                                    <img className={styles.itemImage} src={`http://127.0.0.1:3333${el.image}`} alt={el.title} />
                                    <p className={styles.catalogItemLabel}>{el.title}</p>
                                </NavLink>
                            </Carousel.Item>
                        )}
                    </Carousel>
            }
        </CenteringContainer>
    )
}