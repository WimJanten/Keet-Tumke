import React from 'react';

const Section1 = () => {
  const [voorraad, setVoorraad] = useState([]);
  const collectionRef = collection(db, 'voorraad');
  useEffect(() => {
    const getVoorraad = async () => {
      const data = await getDocs(collectionRef);
      setVoorraad(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getVoorraad();

    const interval = setInterval(() => {
      const getDrinkers = async () => {
        const data = await getDocs(collectionRef);
        setDrinkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      getDrinkers();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return <div>Section1</div>;
};

export default Section1;
