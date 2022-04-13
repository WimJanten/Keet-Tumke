import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { Header, Container } from './VoorraadElements';

const Voorraad = () => {
  const [voorraad, setVoorraad] = useState([]);
  var aantalpilsjes = [];

  useEffect(() => {
    const collectionRef = collection(db, 'voorraad');
    const getVoorraad = async () => {
      const data = await getDocs(collectionRef);
      setVoorraad(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getVoorraad();

    const interval = setInterval(() => {
      const getVoorraad = async () => {
        const data = await getDocs(collectionRef);
        setVoorraad(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      getVoorraad();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  voorraad.map((vooraad) => {
    aantalpilsjes.push(vooraad.aantal);
  });

  return (
    <>
      <Container>
        <Header>We hebben nog {aantalpilsjes} pilsjes in de keet.</Header>
      </Container>
    </>
  );
};

export default Voorraad;
