import React, { Component } from 'react';
import styled from "styled-components";
import '../src/App.css';
import AppNav from './Nav/AppNav';
import Content from '../src/Components/sidebar/Sidebar'
import Slideshow from './Components/Home/Home'

class App extends Component {
    render() {
        return (
            <div className="contenedor">
              <header className="header">
                  <AppNav />
              </header>
              <section className="home">
                  <Slideshow />
              </section>
                <section className="sidebar">
                    <Content />
                </section>

              {/* <footer className="footer">
                  <h3>Footer</h3>
              </footer> */}
            </div>
        )
    }
}
export default App;