import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.jpg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Esto es una prueba</IonCardSubtitle>
            <IonCardTitle>Bienvenido la practica de Gibran Turbi</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Estoy mostrando mi nombre como parte del requerimiento
            </p>
            <p>
              Gibran Turbi
            </p>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>ITLA virtual</IonLabel>
          </IonListHeader>
          <IonItem href="https://itla.edu.do/virtual/cv/login/index.php" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Ir a campus itla</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
