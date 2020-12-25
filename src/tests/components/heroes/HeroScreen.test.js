import React from 'react';
import '@testing-library/jest-dom'
import {mount} from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';


describe('Testing en <HeroScreen />', () => {
	const history = {
		length: 10,
		push: jest.fn(),
		goBack: jest.fn()
	}
	test('Debe ejecutarse el Redirect si no hay argumentos en el URL', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero']}>
				<HeroScreen history = {history} />
			</MemoryRouter>
		)
		expect(wrapper.find('Redirect').exists()).toBe(true)
	})

	test('Debe mostrar un heroe si el parametro existe', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route path="/hero/:heroeId" component={HeroScreen} />
			</MemoryRouter>
		)
		expect(wrapper.find('.row').exists()).toBe(true)
	})

	test('Retorno a la pantalla anterior con "PUSH"', () => {
		const history = {
			length: 1,
			push: jest.fn(),
			goBack: jest.fn()
		}
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route
					path="/hero/:heroeId"
					component={(props) => <HeroScreen history={history}/>}
				/>
			</MemoryRouter>
		)
		wrapper.find('button').prop('onClick')()
		expect(history.push).toHaveBeenCalledWith('/')
		expect(history.goBack).not.toHaveBeenCalled()
	});
	test('Retorno a la pantalla anterior del historial', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route
					path="/hero/:heroeId"
					component={(props) => <HeroScreen history={history}/>}
				/>
			</MemoryRouter>
		)
		wrapper.find('button').prop('onClick')()
		expect(history.push).not.toHaveBeenCalled()
		expect(history.goBack).toHaveBeenCalled()
	})
	test('Debe llamar al redirect si el hero no existe', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider123456789']}>
				<Route
					path="/hero/:heroeId"
					component={() => <HeroScreen history={history}/>}
				/>
			</MemoryRouter>
		)
		expect(wrapper.text()).toBe('')
	})
});
