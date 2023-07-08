import { NavLink, useParams } from 'react-router-dom'
import { CenteringContainer } from '../../components/CenteringContainer'
import { useGetOneCategoryQuery } from '../../redux/apiSlice'
import styles from './CategoryPage.module.css'

export const CategoryPage = () => {
    const { id } = useParams()
    const { data, error, isLoading } = useGetOneCategoryQuery(id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <CenteringContainer>
            <>
                <h1>{data?.category?.title}</h1>
                <div>
                    <div>
                        <span>Price</span>
                        <input type="number" name="from" placeholder="from" />
                        <input type="number" name="to" placeholder="to" />
                    </div>
                    <div>
                        <span>Discounted items</span>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <span>Sorted</span>
                        <select name="" id="">
                            <option></option>
                        </select>
                    </div>
                </div>
                <div className={styles.itemsWrapper}>
                    {data?.data.map(el =>
                        <NavLink to={`/products/${el.id}`}>
                            <div key={el.id}>
                                <img src={`http://127.0.0.1:3333${el.image}`} />
                                <p>{el.price} $</p>
                                <p>{el.title}</p>
                            </div>
                        </NavLink>
                    )}
                </div>
            </>
        </CenteringContainer>
    )
}
