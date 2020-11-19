import 'react-native';
import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import renderer, {act} from 'react-test-renderer';

import App from '../App';
import client from '../app/apollo/client';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.useFakeTimers();

test('renders correctly', async () => {
  await act(async () => {
    const tree = renderer
      .create(
        <MockedProvider client={client} addTypename={false}>
          <App />
        </MockedProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
