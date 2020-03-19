import React, { Component } from 'react';
import '../src/App.css';
import AppNav from './Nav/AppNav';
import Content from '../src/Components/sidebar/Sidebar'
import Slideshow from './Components/Home/Home'
import GalleryPhoto from './Components/Gallery/GalleryPhoto';
import GallerySelect from './Components/Gallery/GallerySelect';
import Sortable from './Components/Gallery/DragAndDropGallery';
import Cards from './Components/Cards/Cards';
import FooterCont from './Components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="contenedor">
              <header className="header">
                  <AppNav />
              </header>
              <section className="home">
                  <h1>- The World of Tea -</h1>
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
                <section className="Cardscards">
                    <Cards />
                </section>
                <section className="footer">
                    <FooterCont />
                </section>
            </div>
        )
    }
}
export default App;