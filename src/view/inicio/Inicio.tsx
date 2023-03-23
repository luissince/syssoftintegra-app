import { useEffect } from "react";
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import Menu from "../pages/layout/Menu";
import Header from "../pages/layout/Header";
import NotFound from "../pages/404/NotFound";
import Welcome from "../welcome/Welcome";
import Dashboard from "../dashboard/Dashboard";

const Inicio = (props: RouteComponentProps<{}>) => {

    const authentication = useSelector((state: RootState) => state.authentication.authentication)

    useEffect(() => {
        const onEventClick = (event: Event) => {
            let overlaySidebar = document.getElementsByClassName("app-sidebar__overlay")[0];
            if (event.target === overlaySidebar) {
                const app = document.getElementsByClassName('app');
                app[0].classList.toggle('sidenav-toggled');
            }
        }

        window.addEventListener('click', onEventClick);

        return () => {
            window.removeEventListener('click', onEventClick);
        }
    }, []);

    if (!authentication) {
        return <Redirect to="/login" />
    }

    const { path, url } = props.match;

    return (
        <>
            <Header {...props} />

            <Menu url={url} />

            <main className="app-content">
             <Switch>

                    <Route
                        path="/inicio"
                        exact={true}>
                        <Redirect to={`${path}/welcome`} />
                    </Route>

                    <Route
                        path={`${path}/welcome`}
                        exact={true}
                        render={(props) => <Welcome {...props} />}
                    />

                     <Route
                        path={`${path}/dashboard`}
                        exact={true}
                        render={(props) => <Dashboard {...props} />}
                    />
                    {/*<Route
                        path={`${path}/new`}
                        exact={true}
                        render={(props) => <NewQuery {...props} />}
                    />
                    <Route
                        path={`${path}/new/response`}
                        exact={true}
                        render={(props) => <ResponseQuery {...props} />}
                    />
                    <Route
                        path={`${path}/state`}
                        exact={true}
                        render={(props) => <StateQuery {...props} />}
                    /> */}

                    <Route component={NotFound} />
                </Switch> 
            </main>
        </>
    );
}

export default Inicio;
