import windowSize from '../../helpers/window-size';
import { HomePageMobile, HomePageDesktop } from '../../component/HomePage';

// import styles from './HomeView.module.css';

export default function HomeView() {
    const [width, height] = windowSize();

    return (
        <>
            {width < 768 ? <HomePageMobile /> : <HomePageDesktop />}
        </>
    )
}