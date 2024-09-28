import './App.css';
import NavMenu from './Components/NavMenu/NavMenu';
import SingleCard from './Components/SingleCard/SingleCard';

import IconFacebook from './icons/facebook.png'
import IconGoogle from './icons/google.png'
import IconTwitter from './icons/twitter.png'
import IconGit from './icons/github.png'
import IconGooglePlay from './icons/gp.png'
import IconAppStore from './icons/app_store.png'

const mockData = [
  { id: 1, name: 'Harry Potter', image: 'https://www.techadvisor.com/wp-content/uploads/2024/09/harry_potter-1.jpg?quality=50&strip=all', time: '2hr: 40mins' },
  { id: 2, name: 'Avengers', image: 'https://cdn.marvel.com/content/1x/theavengers_lob_mas_dsk_03_1.jpg', time: '2hr: 10mins' },
  { id: 3, name: 'Cloud Atlas', image: 'https://m.media-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_FMjpg_UX1000_.jpg', time: '2hr: 50mins' },
  { id: 4, name: 'Matrix', image: 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg', time: '2hr: 35mins' },
];

function App() {
  const handleCardClick = (id) => {
    console.log(`Film ID: ${id}`);
  };
  
  return (
    <div className="App">
      <header>
        <NavMenu />
      </header>
      <div className='SingleCard'>
        {mockData.map((film) => (
            <SingleCard
              id={film.id}
              name={film.name}
              time={film.time}
              image={film.image}
              handleClick={handleCardClick}
            />
        ))}
      </div>
      <footer className='Footer'>
        <div className='TextContainer'>
          <div className='SpecialText'>
            <a href="#"><span>Terms Of Use</span></a>
            <a href="#"><span>Privacy-Policy</span></a>
            <a href="#"><span>FAQ</span></a>
            <a href="#"><span>Watch List</span></a>
          </div>
          <p>@ 2023 WATCHIT. All rights reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit, Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
        </div>
        <div className='IconsContainer'>
          <p>Folow us:</p>
          <ul className='FooterIcons'>
            <li>
              <a href="#"><img src={IconFacebook} alt="#" /></a>
            </li>
            <li>
            <a href="#"><img src={IconGoogle} alt="#" /></a>
            </li>
            <li>
            <a href="#"><img src={IconTwitter} alt="#" /></a>
            </li>
            <li>
            <a href="#"><img src={IconGit} alt="#" /></a>
            </li>
          </ul>
        </div>
        <div className='WatchitApp'>
          <p>Watchit App</p>
            <div className='DownloadIcons'>
              <a href='#'><img src={IconGooglePlay} alt="GooglePlay" /></a>
              <a href='#'><img src={IconAppStore} alt="AppStore" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
