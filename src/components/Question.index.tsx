import { IonItem, IonLabel, IonRadio, IonRadioGroup } from "@ionic/react";
import React, { useState } from "react";
import { IQuestion } from "../pages/Test";


interface QuestionProps {
    question: IQuestion;
    activeQuestion: number;
    setData: Function;
}

const Question: React.FC<QuestionProps> = ({question, activeQuestion, setData}) => {
  const [correct, setCorrect] = useState<"correct" | "incorrect">()
  const [right, setRight] = useState<any>(question.answers.find(answer => answer.isCorrect)!)

    const checkAndPush = (e: any) => {

    const selected = question.answers.find(answer => answer.id === e.detail.value)!

    setCorrect(selected.isCorrect ? 'correct' : 'incorrect')

    setData((prev: any) => ({...prev, [question.id]: selected.id}))
  }

    return (
          <div key={question.id} style={{display: activeQuestion === question.id ? 'flex' : 'none'}} className="quest">
          <h1>Question {question.id}</h1>
          <p>{question.title}</p>
          <IonRadioGroup onIonChange={checkAndPush}>
          {question.answers.map(answer => (
          <IonItem color={'light'} key={answer.id}>
            <IonLabel>{answer.name}</IonLabel>
          <IonRadio value={answer.id}></IonRadio>
          </IonItem>
          ))}
          </IonRadioGroup>
        </div>
    )
};

export default Question;