import { Switch, Route } from 'react-router-dom';
import routes from './helpers/routes';

import AppBar from "./views/AppBar";
import HomeView from './views/HomeView';
import WoodView from './views/WoodView';

export default function App() {
  return (
    <>
      <AppBar />
      <Switch>\
        <Route path={routes.wood} component={WoodView} />
        <Route component={HomeView} />
      </Switch>
    </>
  );
}
