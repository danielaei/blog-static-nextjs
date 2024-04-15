import React from 'react'
import { TitleSection } from '../../components/shared/other/titleSection'

describe('<TitleSection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TitleSection title='Title Section Cypress' />)
    cy.get("h3").contains("Title Section Cypress")
  })
})