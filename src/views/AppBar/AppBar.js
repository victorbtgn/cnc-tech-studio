import { NavLink } from 'react-router-dom';
import routes from '../../helpers/routes';

import styles from './AppBar.module.css';

export default function AppBar() {
    return (
        <div className={styles.AppBar}>
            <NavLink to={routes.home} className={styles.link} >
                <h1 className={styles.Logo}>CNC technology studio</h1>
            </NavLink>
        </div>
    );
  }