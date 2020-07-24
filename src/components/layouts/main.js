import React from 'react';
import Header from './containers/HeaderContainer';
import Footer from './footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Store from '../../context/index'
import AdsContainer from '../ads/containers/AdsContainer'
// import LatestAdsContainer from '../ads/containers/LatestAdsContainer';
import LoginComponent from '../frontend/Auth/login';
import ProfileContainer from '../profile/container/profileContainer';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import {fakeAuthCentralState} from '../../actions/index';
import PostAdContainer from '../postAds/PostAdContainer';
import SearchBarContainer from '../shared/searchBar/container/SearchBarContainer';
const Main = () => {
    const ProtectedRoute = ({ component: Component, ...rest }) => (
        <Route
          {...rest}
          render={(props) =>
            fakeAuthCentralState.isAuthenticated === true ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
          }
        />
      );
      
      const ProtectedRouteBeforeLogin = ({ component: Component, ...rest }) => (
        <Route
          {...rest}
          render={(props) =>
            fakeAuthCentralState.isAuthenticated !== true ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
          }
        />
      );

  const Layout = ({ children }) => (
        <>
        <SearchBarContainer />
          {children}
        </>
  );
    return (
        <Store>
            <Container maxWidth="lg">
                <Router>
                    <Header />
                    {/* <SearchBarContainer /> */}
                    <Switch>
                        {/* <Route path="/latest" component={LatestAdsContainer} /> */}
                        <Route path="/login" component={LoginComponent} />
                        <ProtectedRoute path="/post-ad" component={PostAdContainer} />
                        <ProtectedRoute path="/profile" component={ProfileContainer} />
                        
                        <Layout>
                          <Route path="/ads" component={AdsContainer} />
                          <Redirect path="/" to = "/ads" />
                        </Layout>
                        
                    </Switch>
                    <Footer />
                </Router>
            </Container>
        </Store>
    )
}
export default Main;