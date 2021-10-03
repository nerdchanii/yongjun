import Content_About from'./Content_About';
import Content_Contact from './Content_Contact';
import Content_Portfolio from'./Content_Portfolio';
import "../css/Contents.css"

function Content(){
    
    return (
        <div className="contents-container">
        <Content_About className="contents"/>
        <Content_Contact className="contents"/>
        <Content_Portfolio className="contents"/>
        </div>
    )
}

export default Content;

