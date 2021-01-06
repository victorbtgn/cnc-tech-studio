import { NavLink } from 'react-router-dom';
import styles from './MobilePageLink.module.css';

export default function MobilePageLink({ title, route }) {
    return (
        <div className={styles.MobilePageLink}>
            <NavLink to={route} className={styles.link}>{title}</NavLink>
        </div>
    )
}