import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Question from "../../components/Question.index";
import './Test.css';

export type IQuestion = {
  id: number;
  title: string;
  answers: {
    id: number;
    name: string;
    isCorrect: boolean;
  }[]
}

export type IModule = {
    id: number;
    path: string;
    name: string;
    questions: IQuestion[]
  };


interface TestProps {
  module: IModule;
}

const Test: React.FC<TestProps> = ({ module }) => {
  const [activeQuestion, setActiveQuestion] = useState<number>(1);

  const [data, setData] = useState<any>()

  const history = useHistory()
  
  const stop = () => {
    history.push('/home')
  }

const next = () => {
  if (activeQuestion < module.questions.length) {
    setActiveQuestion(prev => prev + 1)
  } else {
    history.push('/result')
    console.log(data)
  }
}

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='container-test'>
          <div className="header-test">{module.name}</div>
        {module.questions.map((question) => (
          <Question key={question.id} setData={setData} activeQuestion={activeQuestion} question={question} />
        ))}
       
        <div className="last-btns">
          <button onClick={stop} className="stop-btn">Stop</button>
          <button onClick={next} className="next-btn">{activeQuestion === module.questions.length ? 'Submit' : 'Next'}</button>
        </div>
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

export default Test;
