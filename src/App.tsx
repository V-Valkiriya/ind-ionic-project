import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Test, { IModule } from './pages/Test';
import Result from './pages/Result'


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useEffect, useState } from 'react';

setupIonicReact();

const App: React.FC = () => {
    const [modules, setModules] = useState<IModule[]>()

    useEffect(() => {
      const fetchModules = async () => {
        try {
          const res = await fetch('/data/modules.json')

          const data = await res.json()

          setModules(data)

        } catch (error) {
          console.log(error)
        }
      }
      fetchModules()
    }, [])

return (
  <IonApp>
    <IonReactRouter>
        <Route exact path="/home">
          <Home />
        </Route>
    
      {!modules && <h1>Loading</h1>}
       {modules?.map((module: any) => (
        <Route exact path={`/${module.path}`}>
          <Test module={module} />
          </Route>
       ))}
    
        <Route exact path="/result">
          <Result />
        </Route>
    </IonReactRouter>
  </IonApp>
);
       }

export default App;
