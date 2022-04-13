import { db } from '../../firebase';
import Carousel from 'react-elastic-carousel';
import { Chartdiv, ChartContainer, ChartSize } from './HeroElements';
import { useState, useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import './carousel.css';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const Hero = () => {
  const [drinkers, setDrinkers] = useState([]);
  var totaalpilsjes = [];
  var maandpilsjes = [];

  useEffect(() => {
    const collectionRef = collection(db, 'drinkers');
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
      // y: {
      //   max: Math.max(...totaalpilsjes) * 1.2,
      // },
      x: {
        barThickness: 2,
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
      // y: {
      //   max: Math.max(...maandpilsjes) * 1.2,
      // },
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
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
        barThickness: 150,
      },
    ],
  };

  const data2 = {
    labels,
    datasets: [
      {
        label: 'Aantal Pilsjes',
        data: drinkers.map((drinker) => drinker.maandpils),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
        barThickness: 150,
      },
    ],
  };

  return (
    <ChartContainer>
      <Carousel itemsToShow={1} pagination={false} className="carousel">
        <Chartdiv>
          <ChartSize>
            <Bar options={options} data={data} />
          </ChartSize>
        </Chartdiv>
        <Chartdiv>
          <ChartSize>
            <Bar options={options2} data={data2} />
          </ChartSize>
        </Chartdiv>
      </Carousel>
    </ChartContainer>
  );
};

export default Hero;
