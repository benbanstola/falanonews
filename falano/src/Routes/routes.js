import React from 'react';
import { Route,Switch } from 'react-router';
import Community from '../Community';
import CommpunityOpened from '../Community/renderOpen';
import Home from '../Homescreen/index';
import Profile from '../Profile/profile';
import Layout from '../rarelyused/hoc/layout/layout';
import Videos from '../Videos';
import Createpost from '../Createpost/createpost';
import OpenStories from '../Homescreen/Stories/openstories';
import WorldStories from '../Homescreen/Stories/worldstories';
import Open from '../Community/open';
import Privacypolicy from '../rarelyused/Privacypolicy/index';
import Createnews from '../Createpost/createnews';
import Notice from '../ad/ad';

const Routes = () => {
    return ( <div>
        <Layout>
            <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/videos' exact component={Videos} />
                    <Route path='/community' exact component={Community} />
                    <Route path='/profile' exact component={Profile} />
                    <Route path='/notice' exact component={Notice} />
                    {/* <Route path='/community/create' exact component={Createpost} /> */}
                    <Route path='/community/:id' exact component={Open} />
                    <Route path='/articles' exact component={WorldStories} />
                    <Route path='/uploadnews' exact component={Createnews} />
                    <Route path='/articles/:id' exact component={OpenStories} />
                    <Route path='/legal' exact component={Privacypolicy} /> 
                    
                    {/* <Route path='/profile/:id' exact component={CommpunityOpened} /> */}
            </Switch>
        </Layout>
    </div> );
}
 
export default Routes;