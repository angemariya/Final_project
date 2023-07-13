import { CouponForm } from '../../components/CouponForm'
import { Catalog } from '../../components/Catalog'
import { MainSection } from '../../components/MainSection'

export const HomePage = () => {
    return (
        <main>
            <MainSection />
            <Catalog />
            <CouponForm />
        </main>
    )
}