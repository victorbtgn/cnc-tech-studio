import Navigation from '../../component/Navigation/Navigation';
import styles from './AppBar.module.css';

export default function AppBar() {
    return (
        <div className={styles.AppBar}>
            <h1 className={styles.Logo}>CNC technology studio</h1>

            <Navigation />
        </div>
    );
  }