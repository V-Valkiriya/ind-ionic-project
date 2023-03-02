import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Test.css";

const TestHTML: React.FC = () => {
  return (
    <IonPage>
    <IonContent fullscreen>
    <div className='header-test'>HTML Test</div>
    <div className="quest">
        <h1>Question 1</h1>
        <p>What is HTML?</p>
        <button className='var-btn'>This is Microsoft document program</button>
        <button className='var-btn'>This is cascading style language</button>
        <button className='var-btn'>This is the markup language for creating Web pages</button>
        <button className='var-btn'>This is the markdown language for creating Web pages</button>
    </div>
    <div className="last-btns">
    <button className='stop-btn'>Stop</button>
    <button className='next-btn'>Next</button>
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

export default TestHTML;

/*
2)What is HTML-tag?
HTML-element in parentheses
HTML-element in angle brackets
HTML-element without brackets
TML-attribute without brackets

3)Are all tags paired?
Yes
No
Yes, but there are two exceptions
No, but there is two exceptions

4)Why is an alternative text used for images (alt of the <img> tag)?
Alternative text helps to search for an image on the internet
Alternative text changes the image
Alternative text is displayed when graphics loading is disable
Alternative text is a caption to the image if it is of poor quality

5)


*/
