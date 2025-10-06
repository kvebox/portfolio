import './styles.css';
import {Link} from './components/link/index.tsx';

function App() {
  return (
    <div className="App">
      <div className="cover">
        <img alt="header" className="backgound" src="./lilllies.png"></img>
      </div>
      <header className="header">
        <div id="links">
          <Link color="#285E6D" title="BLUESKY" icon="./icons/instagram.svg" linkTo="https://bsky.app/profile/kvebox.bsky.social"/>
          <Link color="#55969B" title="INPRNT" icon="./icons/instagram.svg" linkTo="https://www.inprnt.com/gallery/kveshoppe"/>
          <Link color="#8FBB88" title="EMAIL" icon="./icons/instagram.svg" linkTo="https://www.github.com/kvebox"/>
          <Link color="#224B5E" title="PORTFOLIO"icon="./icons/instagram.svg" linkTo="/"/>
          <Link color="#449385" title="INSTAGRAM" icon="./icons/instagram.svg" linkTo="https://www.instagram.com/kvebox"/>
        </div>
      </header>
    </div>
  );
}

export default App;
