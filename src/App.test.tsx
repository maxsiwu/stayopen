import React from 'react';
import { render } from '@testing-library/react';
import { IonApp } from '@ionic/react';

test('renders without crashing', () => {
  const { baseElement } = render(<IonApp />);
  expect(baseElement).toBeDefined();
});
