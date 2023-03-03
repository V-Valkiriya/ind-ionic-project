import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import React from "react";
import './Test.css';

export type IModule = {
    id: number;
    path: string;
    name: string;
    questions: {
      id: number;
      title: string;
      answers: {
        id: number;
        name: string;
      }[]
    }[]
  };


interface TestProps {
  module: IModule;
}

const Test: React.FC<TestProps> = ({ module }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="header-test">{module.name}</div>
        {module.questions.map((question) => (
          <div key={question.id} className="quest">
          <h1>Question {question.id}</h1>
          <p>{question.title}</p>
          {question.answers.map((answer => 
          <button key={answer.id} className="var-btn">{answer.name}</button>
          ))}
        </div>
        ))}
       
        <div className="last-btns">
          <button className="stop-btn">Stop</button>
          <button className="next-btn">Next</button>
        </div>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Test;
