import { IonItem, IonLabel, IonRadio, IonRadioGroup } from "@ionic/react";
import React, { useState } from "react";
import { IQuestion } from "../pages/Test";
interface QuestionProps {
    question: IQuestion;
    activeQuestion: number;
    setData: Function;
    correct?:'correct' | 'incorrect';
    giveCorrectAnswer: Function;
}


const Question: React.FC<QuestionProps> = ({question, activeQuestion, setData, correct, giveCorrectAnswer}) => {    
  const [selectedData, setSelectedData] = useState<number>();

    const checkAndPush = (e: any) => {

    const selected = question.answers.find((answer: any) => answer.id === e.detail.value)!

    setSelectedData(selected.id);

    giveCorrectAnswer(selected);

    setData((prev: any) => ({...prev, [question.id]: selected.id}))
  }

    return (
          <div key={question.id} style={{display: activeQuestion === question.id ? 'flex' : 'none'}} className="quest">
          <h1>Question {question.id}</h1>
          <p>{question.title}</p>
          <IonRadioGroup onIonChange={checkAndPush}>
          {question.answers.map(answer => (
          <IonItem color={
            (answer.id === selectedData && answer.isCorrect && correct === 'correct') ||
            (answer.id !== selectedData && answer.isCorrect && correct)
            ? "success"
            : answer.id === selectedData && correct === 'incorrect'
            ? "danger"
          : "light"
          } key={answer.id}>
            <IonLabel>{answer.name}</IonLabel>
          <IonRadio value={answer.id}></IonRadio>
          </IonItem>
          ))}
          </IonRadioGroup>
        </div>
    )
};

export default Question;