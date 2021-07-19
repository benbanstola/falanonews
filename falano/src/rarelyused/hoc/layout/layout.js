import React from 'react';
import Header from  '../../Header/header';
const Layout = (props) => {
    return (<div id="titlebar">
        <Header />
        {props.children}
    </div>  );
}
 
export default Layout;