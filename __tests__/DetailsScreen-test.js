import 'react-native';
import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import DetailsScreen from '../app/screens/Details/DetailsScreen';
import renderer from 'react-test-renderer';

const details = {
  gender: 'Male',
  id: '1',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  species: 'Human',
  episode: [
    {air_date: 'December 2, 2013', name: 'Pilot', __typename: 'Episode'},
    {
      air_date: 'December 9, 2013',
      name: 'Lawnmower Dog',
      __typename: 'Episode',
    },
  ],
};

test('DetailsScreen', () => {
  const tree = renderer
    .create(
      <MockedProvider addTypename={false}>
        <DetailsScreen />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('DetailsScreen with details data', () => {
  const tree = renderer
    .create(
      <MockedProvider addTypename={false}>
        <DetailsScreen details={details} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('DetailsScreen with details empty object ', () => {
  const tree = renderer
    .create(
      <MockedProvider addTypename={false}>
        <DetailsScreen details={{}} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
