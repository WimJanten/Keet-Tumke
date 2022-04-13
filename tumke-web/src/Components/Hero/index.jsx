import { db } from '../../firebase';
import Carousel from 'react-elastic-carousel';
import { Chartdiv, ChartContainer } from './HeroElements';
import { useState, useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const Hero = () => {
  const [drinkers, setDrinkers] = useState([]);
  const collectionRef = collection(db, 'drinkers');
  var totaalpilsjes = [];
  var maandpilsjes = [];

  useEffect(() => {
    const getDrinkers = async () => {
      const data = await getDocs(collectionRef);
      setDrinkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDrinkers();

    const interval = setInterval(() => {
      const getDrinkers = async () => {
        const data = await getDocs(collectionRef);
        setDrinkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      getDrinkers();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
  drinkers.map((drinker) => {
    totaalpilsjes.push(drinker.totaalpils);
  });
  drinkers.map((drinker) => {
    maandpilsjes.push(drinker.maandpils);
  });

  const options = {
    responsive: true,
    scales: {
      y: {
        max: Math.max(...totaalpilsjes) * 1.2,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Totaal aantal pilsjes',
      },
    },
  };

  const options2 = {
    responsive: true,
    scales: {
      y: {
        max: Math.max(...maandpilsjes) * 1.2,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Maand pilsjes',
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
        data: drinkers.map((drinker) => drinker.totaalpils),
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  const data2 = {
    labels,
    datasets: [
      {
        label: 'Aantal Pilsjes',
        data: drinkers.map((drinker) => drinker.maandpils),
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  return (
    <ChartContainer>
      <Carousel disableArrowsOnEnd itemsToShow={1} pagination={false} className="carousel">
        <Chartdiv>
          <Bar className="chart" options={options} data={data} />
        </Chartdiv>
        <Chartdiv>
          <Bar className="chart" options={options2} data={data2} />
        </Chartdiv>
      </Carousel>
    </ChartContainer>
  );
};

export default Hero;
