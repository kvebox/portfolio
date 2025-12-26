import './styles.css';
import { Link as SocialLink } from './components/link/index.tsx';
import {Link} from 'react-router';

export const LinkTree = () => {
  return (
    <div className="App">
      <div className="cover">
        <img alt="header" className="backgound" src="./lilllies.svg"></img>
      </div>
      <header className="header">
        <div id="links">
          <SocialLink color="#285E6D" title="BLUESKY" icon="./icons/bluesky.svg" linkTo="https://bsky.app/profile/kvebox.bsky.social"/>
          <SocialLink color="#55969B" title="STORE" icon="./icons/inprnt.svg" linkTo="https://www.inprnt.com/gallery/kveshoppe"/>
          <SocialLink color="#8FBB88" title="EMAIL" icon="./icons/instagram.svg" linkTo="https://www.github.com/kvebox"/>
          <Link to={"/portfolio"}>
            <SocialLink color="#224B5E" title="PORTFOLIO"icon="./icons/instagram.svg"/>
          </Link>
          <SocialLink color="#449385" title="INSTAGRAM" icon="./icons/instagram.svg" linkTo="https://www.instagram.com/kvebox"/>
          <footer>Victoria Joh</footer>
        </div>
      </header>
    </div>
  );
}

