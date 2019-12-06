import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import PlayerList from '../playerList';


afterEach(rtl.cleanup)

it('renders all Players', () => {

    const wrapper = rtl.render(<PlayerList />)
    wrapper.debug()
    
    const player1 = wrapper.queryByText(/Megan Rapinoe/i)
    const player10 = wrapper.queryByText(/Kosovare Asllani/i)
    const player20 = wrapper.queryByText(/Eugénie Le Sommer/i)
    const player30 = wrapper.queryByText(/Bárbara Micheline do Monte Barbosa/i)
    const player40 = wrapper.queryByText(/Millie Bright/i)
    const player50 = wrapper.queryByText(/learn react/i)
    const player60 = wrapper.queryByText(/learn react/i)
    const player70 = wrapper.queryByText(/learn react/i)
    const player80 = wrapper.queryByText(/learn react/i)
    const player90 = wrapper.queryByText(/learn react/i)
   
    expect(learnReactElement).toBeInTheDocument() 
  });