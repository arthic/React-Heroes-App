import React from 'react';
import '@testing-library/jest-dom'
import { mount } from 'enzyme';
import { NavBar } from '../../../components/ui/NavBar';
import { MemoryRouter, Router } from 'react-router-dom';

describe('Testing en <NavBar />', () => {
	const historyMock = {
		push: jest.fn(),
		replace: jest.fn(),
		location: {},
		listen: jest.fn(),
		createHref: jest.fn()
	}
	const wrapper = mount(
		<MemoryRouter>
			<Router history={historyMock}>
				<NavBar />
			</Router>
		</MemoryRouter>
	)

	test('Despliegue correcto', () => {
		expect(wrapper).toMatchSnapshot()
		expect(wrapper.find('.fas').exists()).toBe(true)
	})

});
