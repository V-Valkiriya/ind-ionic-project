import { IonItem, IonLabel, IonRadio, IonRadioGroup } from "@ionic/react";
import React from "react";
import { IQuestion } from "../pages/Test";

interface QuestionProps {
    question: IQuestion;
    activeQuestion: number;
    setData: Function;
}

const Question: React.FC<QuestionProps> = ({question, activeQuestion, setData}) => {
    return (
          <div key={question.id} style={{display: activeQuestion === question.id ? 'flex' : 'none'}} className="quest">
          <h1>Question {question.id}</h1>
          <p>{question.title}</p>
          <IonRadioGroup>
          {question.answers.map((answer => 
          <IonItem key={answer.id}>
            <IonLabel>{answer.name}</IonLabel>
          <IonRadio value={answer.id}></IonRadio>
          </IonItem>
          ))}
          </IonRadioGroup>
        </div>
    )
};

export default Question;