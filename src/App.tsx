import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from "./store/store";
import LoginView from "./view/login/LoginView";
import NotFound from "./view/pages/404/NotFound";
import LoadView from "./view/load/LoadView";
import InicioView from "./view/inicio/InicioView";

function App() {

  const loading = useSelector((state: RootState) => state.authentication.loading);

    return (
        <>
            {
                loading ?
                    <LoadView />
                    :
                    <>
                        <Switch>
                            <Route
                                path="/"
                                exact={true}>
                                <Redirect to={"/login"} />
                            </Route>

                            <Route
                                path="/login"
                                exact={true}
                                render={(props) => <LoginView {...props} />}
                            />

                            <Route
                                path="/inicio"
                                render={(props) => <InicioView {...props} />}
                            />

                            <Route component={NotFound} />
                        </Switch>
                    </>
            }
        </>
    );
}

export default App;