import { CouponForm } from '../../components/CouponForm'
import { Catalog } from '../../components/Catalog'
import styles from './MainPage.module.css'

export const HomePage = () => {
    return (
        <main>
            <Catalog />
            <CouponForm />
        </main>
    )
}