import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SectionTwo from './SectionTwo'
import InfoTe from './InfoTe'
import Variedades from './Variedades'
import Form from './Form'
import '../sidebar/otro.css'

function Content() {
  return (
    <BrowserRouter>
      <div className="contain-sectiontwo">
          <SectionTwo/>
          <Switch>
            <div className="contenido">
            <Route path="/info" component={InfoTe} />
            <Route path="/variedades" component={Variedades} />
            <Route path="/suscripcion" component={Form} />
            </div>
          </Switch>
      </div>
    </BrowserRouter>
  );
}


export default Content;


























// import React, { Component } from "react";
// import classNames from "classnames";
// import SidebarContain from '../sidebar/SidebarContain'
// import SectionTwo from '../SectionTwo/SectionTwo'
// import '../sidebar/Sidebar.css';


// class Content extends Component {
//   state = {
//     open: false
//   };
//   render() {
//     const toggleSidebar = e => {
//       this.setState({ open: !this.state.open });
//     };
//     const { open } = this.state;
//     const sidebarClasses = classNames({
//       "sidebar-wrapper": true,
//       "sidebar-wrapper--open": open
//     });
//     return (
//       <div className="sdbr">
//         <button type="button" onClick={toggleSidebar}>
//            <span className="side-burguer">&nbsp;</span>
//            <span className="side-burguer">&nbsp;</span>
//            <span className="side-burguer">&nbsp;</span>
//         </button>
//         <div className="container-cont">
//           <div className={sidebarClasses}>
//             <div className="sidebar-side">
//               <span>{open ? "" : ""}</span>
//                 <div className="contain-cont">
//                   <SidebarContain/>
//                 </div>
//             </div>
//           </div>
//           <div className="articles">
//             <SectionTwo />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Content;
