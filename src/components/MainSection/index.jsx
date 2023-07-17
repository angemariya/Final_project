import styles from './MainSection.module.css'
import picture from '../../images/MainPage-Bushes.png'
import { NavLink } from 'react-router-dom'

export const MainSection = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container} >
                <div className={styles.textWrapper}>
                    <h1 className={styles.header}>Sale</h1>
                    <p className={styles.text}>New season</p>
                    <NavLink to='/sale' className={styles.button}>Sale</NavLink>
                </div>
            <img src={picture} alt="Bushes" />
            </div>
        </section>
    )
}