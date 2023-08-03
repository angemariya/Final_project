import { NavLink } from 'react-router-dom'
import styles from './MainSection.module.css'

export const MainSection = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container} >
                <div className={styles.textWrapper}>
                    <h1 className={styles.header}>Sale</h1>
                    <p className={styles.text}>New season</p>
                    <NavLink to='/sale' className={styles.buttonSale}>Sale</NavLink>
                </div>
            </div>
        </section>
    )
}