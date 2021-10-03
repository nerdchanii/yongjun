import react from 'react';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Instagram from './Instagram';

function Menu(){
    return (
        <div className="nav">
            <About />
            <Contact />
            <Portfolio />
            <Instagram />

        </div>
)

}

export default Menu;