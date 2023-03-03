import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <div className='header'>Front-end Developers tests</div>
      <NavLink className='link' to={'/testhtml'}>
      <button className='start-btn'>HTML</button>
      </NavLink>
      <NavLink className='link' to={'/testcss'}>
      <button className='start-btn'>CSS</button>
      </NavLink>
      <NavLink className='link' to={'/testjs'}>
      <button className='start-btn'>JavaScript</button>
      </NavLink>
      <IonHeader collapse="condense">
      
          <IonToolbar>
            
            <IonTitle size="large">Blank</IonTitle>
            
          </IonToolbar>
          
        </IonHeader>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
