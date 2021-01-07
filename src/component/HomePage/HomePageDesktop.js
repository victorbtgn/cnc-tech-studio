import { NavLink } from 'react-router-dom'
import routes from '../../helpers/routes';

import styles from './HomePageDesktop.module.css';

export default function HomePageDesktop() {
    return (
        <div className={styles.HomePageDesktop}>
            <h2 style={{marginBottom: 50 + 'px', textAlign: 'center'}} >Home Page Desktop</h2>

            <div className={styles.linkBox}>
                <h3 className={styles.title}>3D панели для энергосберегающих домов</h3>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam.</p>
                <NavLink to={routes.energySavingHouse} className={styles.link} >Подробнее...</NavLink>
            </div>

            <div className={styles.linkBox}>
                <h3 className={styles.title}>3D панели перекрытие для фундамента</h3>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam.</p>
                <NavLink to={routes.foundationOverlap} className={styles.link} >Подробнее...</NavLink>
            </div>

            <div className={styles.linkBox}>
                <h3 className={styles.title}>3D панели перегородки</h3>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam.</p>
                <NavLink to={routes.partition} className={styles.link} >Подробнее...</NavLink>
            </div>

            <div className={styles.linkBox}>
                <h3 className={styles.title}>Арт работы</h3>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam.</p>
                <NavLink to={routes.artWorks} className={styles.link} >Подробнее...</NavLink>
            </div>
        </div>
    )
};
