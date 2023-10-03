import { CenteringContainer } from "../CenteringContainer";
import { useGetAllCategoriesQuery } from '../../redux/apiSlice';
import { NavLink } from "react-router-dom";
import { SpinnerCircular } from 'spinners-react';
import { BASE_URL } from "../../redux/apiSlice";
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

            {isLoading ? (<SpinnerCircular enabled={true} />) :
                isError ? <h2>Error: {error}</h2> :
                    <Carousel
                        cols={4} rows={1} gap={30} loop
                        containerStyle={{ marginBottom: "90px" }}
                        mobileBreakpoint={767}
                        responsiveLayout={[{
                            breakpoint: 1023,
                            cols: 3,
                            rows: 1,
                            gap: 20,
                            loop: true,
                            autoplay: 3000
                        }]}
                    >
                                    
                        {data && data.map(el =>
                            <Carousel.Item className={styles.catalogOneItemWrapper} key={el.id}>
                                <NavLink to={`/categories/${el.id}`} key={el.id}>
                                    <img className={styles.itemImage} src={`${BASE_URL}${el.image}`} alt={el.title} />
                                    <p className={styles.catalogItemLabel}>{el.title}</p>
                                </NavLink>
                            </Carousel.Item>
                        )}
                    </Carousel>
            }
        </CenteringContainer>
    )
}