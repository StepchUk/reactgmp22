import pulp from '../Assets/Images/puop_fiction.jpg';
import bohemrhaps from '../Assets/Images/bohemian_rhapsody.jpg';
import killb from '../Assets/Images/kill_bill_2.jpg';
import incep from '../Assets/Images/inception.jpg';
import reserdogs from '../Assets/Images/reservoir_dogs.jpg';

// eslint-disable-next-line import/prefer-default-export
export const api = [
  {
    id: 1,
    title: 'Pulp Fiction',
    posterPath: pulp,
    year: '2004',
    genre: ['Action & Adventure'],
    rating: '6.5',
    runtime: 154,
    description: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    posterPath: bohemrhaps,
    year: '2003',
    genre: [
      'Drama',
      'Biography',
      'Music',
    ],
    rating: '4.5',
    runtime: 85,
    description: 'Bohemian Rhapsody',
  },
  {
    id: 3,
    title: 'Kill Bill: Vol 2',
    posterPath: killb,
    year: '1994',
    genre: [
      'Oscar winning Movie',
    ],
    rating: '8',
    runtime: 12,
    description: 'Kill Bill: Vol 2',
  },
  {
    id: 4,
    title: 'Avengers: War of Infinity',
    posterPath: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    year: '2004',
    genre: [
      'Action & Adventure',
    ],
    rating: '8.5',
    runtime: 150,
    description: 'Avengers: War of Infinity',
  },
  {
    id: 5,
    title: 'Inception',
    posterPath: incep,
    year: '2003',
    genre: [
      'Action & Adventure',
    ],
    rating: '5.5',
    runtime: 50,
    description: 'Inception',
  },
  {
    id: 6,
    title: 'Reservoir dogs',
    posterPath: reserdogs,
    year: '1994',
    genre: [
      'Oscar winning Movie',
    ],
    rating: '10',
    runtime: 60,
    description: 'Reservoir dogs',
  },
];
