import React from 'react'
import OpcoesRapidas from '../OpcoesRapidas'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(<OpcoesRapidas />).toJSON()
  expect(tree).toMatchSnapshot()
})
test('has at least 2 childs', () => {
  const tree = renderer.create(<OpcoesRapidas />).toJSON()
  expect(tree.children.length).toBeGreaterThanOrEqual(2)
})
