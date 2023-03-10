import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import './Result.css';

const countResult = (data: any) => {
  let count = 0;
  // Object.keys(data).forEach((idx) => {
  //   if (data[idx].isCorrect) {
  //     count++;
  //   }
  // });
  return count;
}

const Result: React.FC = () => {
  const history = useHistory();
  const [results, setResults] = useState<any>();

  console.log(history.location.pathname.split('/')[1]);

  useEffect(() => {
    const moduleId = history.location.pathname.split('/')[1];
    const data = localStorage.getItem(`module-${moduleId}`);
    if (data) {
    setResults(JSON.parse(data));
   }
  }, [history.location.pathname])

    return (
        <IonPage>
        <IonContent fullscreen>
        <div className='result'>
          <h1>{countResult(results)}/10</h1>
          <h1>{countResult(results) > 7 ? 'Excellent!' : 'Try again!'}</h1>
          <span>{countResult(results) > 7 ? <img src="/assets/clap-cats.gif" alt="Cats"
          /> : <img src="/assets/sad-cat.gif" alt="Cat" />}</span>
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




