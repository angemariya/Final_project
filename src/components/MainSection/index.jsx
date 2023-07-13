import styles from './MainSection.module.css'
import picture from '../../images/MainPage-Bushes.png'

export const MainSection = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container} >
                <div className={styles.textWrapper}>
                    <h1 className={styles.header}>Sale</h1>
                    <p className={styles.text}>New season</p>
                    <button className={styles.button}>Sale</button> 
                </div>
                <img src={picture} alt="Bushes" />
            </div> 
        </section>
    )
}