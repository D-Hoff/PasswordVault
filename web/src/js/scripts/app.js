// React---------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from "react-loadable";
import { Provider } from "react-redux";
import { Router, Route, Switch } from 'react-router-dom'; 
import history from '../history';
// Store---------------------------------------
import configureStore from "../store/configureStore";
const store = configureStore();
// Loadable Components------------------------
const LoadableHeader = Loadable({
    loader: () => import("../components/layout/Header"),
    loading() {
        return <div>Loading...</div>
    }
});
// Loadable Pages-----------------------------
const LoadableIndex = Loadable({
    loader: () => import("../Pages/Index"),
    loading() {
        return <div>Loading...</div>
    }
});
const LoadableDashboard = Loadable({
    loader: () => import("../Pages/Dashboard"),
    loading() {
        return <div>Loading...</div>
    }
});
// import CreateShelf from "../Pages/CreateShelf";
const LoadableCreateShelf = Loadable({
    loader: () => import("../Pages/CreateShelf"),
    loading() {
        return <div>Loading...</div>
    }
});
import EditShelf from "../Pages/EditShelf";
// const LoadableEditShelf = Loadable({
//     loader: () => import("../Pages/EditShelf"),
//     loading() {
//         return <div>Loading...</div>
//     }
// });
const LoadableGenerator = Loadable({
    loader: () => import("../Pages/Generator"),
    loading() {
        return <div>Loading...</div>
    }
});



const routes = (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <LoadableHeader />
                <Switch>
                    <Route path="/" component={() => <LoadableIndex />} exact={true} />
                    <Route path="/dashboard" component={() => <LoadableDashboard />} exact={true} />
                    <Route path="/createShelf" component={() => <LoadableCreateShelf />} exact={true} />
                    <Route path="/editShelf/:shelfId" component={EditShelf}  />
                    <Route path="/generator" component={() => <LoadableGenerator />} exact={true} />

                </Switch> 

            </div>
        </Provider>
    </Router>
);

var appRoot = document.getElementById("root");
ReactDOM.render(routes, appRoot);
var nojs = document.getElementById("nojs");
document.body.removeChild(nojs);