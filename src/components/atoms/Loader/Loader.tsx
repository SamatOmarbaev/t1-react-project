import styles from './Loader.module.css';

export const Loader = () => {
    return (
       <div className={styles.LoaderContainer}>
            <div className={styles.Loader}></div>
       </div>
    )
}
