import MobilePageLink from "./MobilePageLink";
import routes from '../../helpers/routes';

export default function HomePageMobile() {
    return (
        <>
            <h2 style={{marginBottom: 50 + 'px', textAlign: 'center'}} >Home Page Mobile</h2>

            <MobilePageLink title='3D панели для энергосберегающих домов' route={routes.energySavingHouse} />

            <MobilePageLink title='3D панели перекрытие для фундамента' route={routes.foundationOverlap} />

            <MobilePageLink title='3D панели перегородки' route={routes.partition} />

            <MobilePageLink title='Арт работы' route={routes.artWorks} />
        </>
    )
};

