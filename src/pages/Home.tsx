import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <div className='header'>Front-end Developers tests</div>
      <button className='start-btn'>HTML</button>
      <button className='start-btn'>CSS</button>
      <button className='start-btn'>JavaScript</button>
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
