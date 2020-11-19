import 'react-native';
import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import RenderItem from '../app/screens/Home/RenderItem';
import renderer from 'react-test-renderer';

const item = {
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

test('RenderItem with item data', () => {
  const tree = renderer
    .create(
      <MockedProvider addTypename={false}>
        <RenderItem item={item} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('RenderItem with item empty object ', () => {
  const tree = renderer
    .create(
      <MockedProvider addTypename={false}>
        <RenderItem item={{}} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
