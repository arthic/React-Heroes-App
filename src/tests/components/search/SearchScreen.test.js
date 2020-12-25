import '@testing-library/jest-dom'
import React from 'react';
import {mount} from 'enzyme';
import { SearchScreen } from '../../../components/search/SearchScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Testing en <SearchScreen />', () => {
	test('Mostrarse correctamente con valores por defecto', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search']}>
				<Route path="/search" component={SearchScreen} />
			</MemoryRouter>
		)
		expect(wrapper).toMatchSnapshot()
		expect(wrapper.find('.spinner-border').exists()).toBe(true)
	})
	test('Debe mostrar a Batman y el input con el valor del queryString', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<Route path="/search" component={SearchScreen} />
			</MemoryRouter>
		)
		expect(wrapper.find('input').prop('value')).toBe('batman')
		expect(wrapper).toMatchSnapshot()
	})
	test('Debe mostrar un error si no se encuentra el Hero', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?q=batman123']}>
				<Route path="/search" component={SearchScreen} />
			</MemoryRouter>
		)
		expect(wrapper.find('.alert-danger').text().trim()).toBe('"batman123" No es nombre de Heroe valido :(')
		expect(wrapper).toMatchSnapshot()
	})
	test('Debe de llamar el push del history', () => {
		const history = {
			push: jest.fn()
		}
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?q=batman123']}>
				<Route
					path="/search"
					component={() => <SearchScreen history={history}/>}
				/>
			</MemoryRouter>
		)
		wrapper.find('input').simulate('change', {
			target: {
				name: 'searchText',
				value: 'batman'
			}
		})
		wrapper.find('form').prop('onSubmit')({
			preventDefault(){}
		})
		expect(history.push).toHaveBeenLastCalledWith('?q=batman')
	});
});
