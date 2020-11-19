import 'react-native';
import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import HomeScreen from '../app/screens/Home/HomeScreen';
import renderer from 'react-test-renderer';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

const fakeresult = [
  {
    episode: [],
    gender: 'Male',
    id: '1',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    species: 'Human',
    __typename: 'Character',
  },
  {
    episode: [
      {
        air_date: 'September 10, 2017',
        name: 'The Ricklantis Mixup',
        __typename: 'Episode',
      },
    ],
    gender: 'Male',
    id: '8',
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
    name: 'Adjudicator Rick',
    species: 'Human',
    __typename: 'Character',
  },
  {
    episode: [
      {
        air_date: 'April 7, 2014',
        name: 'Close Rick-counters of the Rick Kind',
        __typename: 'Episode',
      },
    ],
    gender: 'Male',
    id: '15',
    image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
    name: 'Alien Rick',
    species: 'Alien',
    __typename: 'Character',
  },
];

test('HomeScreen', () => {
  const tree = renderer
    .create(
      <MockedProvider addTypename={false}>
        <HomeScreen />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('HomeScreen with result', () => {
  const tree = renderer
    .create(
      <MockedProvider addTypename={false}>
        <HomeScreen total={fakeresult} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('HomeScreen empty result ', () => {
  const tree = renderer
    .create(
      <MockedProvider addTypename={false}>
        <HomeScreen total={[]} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
