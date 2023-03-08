import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import './Result.css';

const Result: React.FC = () => {
    return (
        <IonPage>
        <IonContent fullscreen>
        <div className='result'>
          <h1>9/10</h1>
          <h1>Excellent!</h1>
          <span><img src="/assets/clap-cats.gif" alt="Cats"
          /></span>
          <NavLink to={'/home'}>
          <button>Finish</button>
          </NavLink>
          
        </div>
        <IonHeader collapse="condense">
        
            <IonToolbar>
              
              <IonTitle size="large"></IonTitle>
              
            </IonToolbar>
            
          </IonHeader>
        </IonContent>
      </IonPage>
    );
};

export default Result;