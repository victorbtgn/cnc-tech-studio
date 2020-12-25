import { NavLink } from 'react-router-dom';
import routes from '../../helpers/routes';

import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <div className={styles.Navigation}>
            <NavLink exact to={routes.home} className={styles.link} activeClassName={styles.activeLink}>Home</NavLink>
            <NavLink exact to={routes.wood} className={styles.link} activeClassName={styles.activeLink}>Test</NavLink>
        </div>
    )
}