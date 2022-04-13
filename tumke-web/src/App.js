import './App.css';
import { db } from './firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

function App() {
  const [drinkers, setDrinkers] = useState([]);
  const collectionRef = collection(db, 'drinkers');
  var pilsjes = [];

  useEffect(() => {
    const getDrinkers = async () => {
      const data = await getDocs(collectionRef);
      setDrinkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDrinkers();
  }, []);

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
  drinkers.map((drinker) => {
    pilsjes.push(drinker.pils);
  });

  const options = {
    responsive: true,
    scales: {
      y: {
        max: Math.max(...pilsjes) + 10,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Wie heeft de meeste pilsjes gehad?',
      },
    },
  };

  console.log(drinkers);
  const labels = drinkers.map((drinker) => drinker.naam);

  const data = {
    labels,
    datasets: [
      {
        label: 'Aantal Pilsjes',
        data: drinkers.map((drinker) => drinker.pils),
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  return (
    <div className="App">
      {drinkers.map((drinker) => {
        return (
          <div>
            <h1>Naam: {drinker.naam}</h1>
            <h1>Pils: {drinker.pils}</h1>
          </div>
        );
      })}
      <div className="chart">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}

export default App;
