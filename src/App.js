import React, { Component } from 'react';
import '../src/App.css';
import AppNav from './Nav/AppNav';
import Content from '../src/Components/sidebar/Sidebar'
import Slideshow from './Components/Home/Home'
import GalleryPhoto from './Components/Gallery/GalleryPhoto';
import GallerySelect from './Components/Gallery/GallerySelect';
import Sortable from './Components/Gallery/DragAndDropGallery'

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
                <section className="gallery">
                    <GalleryPhoto />
                    <GallerySelect />
                    <Sortable />
                </section>

              {/* <footer className="footer">
                  <h3>Footer</h3>
              </footer> */}
            </div>
        )
    }
}
export default App;