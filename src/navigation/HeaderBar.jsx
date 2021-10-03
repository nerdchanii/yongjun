// import ',/Sitename';
import Menu from './Menu';
import '../css/head_bar.css';
import Title from './Title';

function HeaderBar(){
  return (
    <div className="Header head_bar">
        <Title />
        <Menu />
    </div>
  );
}

export default HeaderBar;
