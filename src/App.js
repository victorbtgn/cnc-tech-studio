import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './helpers/routes';

const AppBar = lazy(() => import('./views/AppBar' /* webpackChunkName: "app-bar-page"*/));
const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "home-page"*/));
const EnergySavingHouseView = lazy(() => import('./views/EnergySavingHouseView' /* webpackChunkName: "energy-saving-house-page"*/));
const FoundationOverlapView = lazy(() => import('./views/FoundationOverlapView' /* webpackChunkName: "foundation-overlap-page"*/));
const PartitionView = lazy(() => import('./views/PartitionView' /* webpackChunkName: "partition-page"*/));
const ArtWorksView = lazy(() => import('./views/ArtWorksView' /* webpackChunkName: "art-works-page"*/));

export default function App() {
  return (
    <Suspense fallback={null}>
      <AppBar />
      <Switch>\
        <Route path={routes.energySavingHouse} component={EnergySavingHouseView} />
        <Route path={routes.foundationOverlap} component={FoundationOverlapView} />
        <Route path={routes.partition} component={PartitionView} />
        <Route path={routes.artWorks} component={ArtWorksView} />
        <Route component={HomeView} />
      </Switch>
    </Suspense>
  );
}
