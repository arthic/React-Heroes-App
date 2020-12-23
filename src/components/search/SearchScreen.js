import React, { useMemo } from 'react'
import queryString from 'query-string'

import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation } from 'react-router-dom'
import { getHeroByName } from '../../selectors/getHeroByName'

export const SearchScreen = ({history}) => {

	// hook de React-router para menejar props del url
	const location = useLocation()

	// npm install query-string
	const {q = ''} = queryString.parse(location.search)
	// customHook
	const [formValues, handleInputChange] = useForm({
		// manejamos el input con el nombre asigando
		// Se mantiene el texto del input con la url ya parseada
		searchText: q
	})

	// Desestructuramos el searchText para menejarlo en otros lados
	const {searchText} = formValues

	/*Hacer que se dispare la busqueda solo cuando el query
	cambie, osea cuande se de enter*/
	const heroesFiltered = useMemo(() =>
		getHeroByName(q),
		[q]
	)
	// const heroesFiltered = getHeroByName(searchText)

	// Manejo del envio del formulario
	const handleSearch = (e) => {
		e.preventDefault()
		// console.log(searchText);
		// Mandamos la busqueda al query param
		history.push(`?q=${searchText}`)
	}

	return (
		<div>
			<h1 className="publisher">Búsqueda</h1>
			<hr/>

			<div className="row animate__animated animate__fadeIn">
				<div className="col-5">
					<hr/>

					<form onSubmit={handleSearch}>
						<input
							type="text"
							placeholder="Busca un Heroe"
							className="form-control"
							name="searchText"
							value={searchText}
							onChange={handleInputChange}
							autoComplete="off"
						/>
						<button
							type="submit"
							className="btn m-1 btn-block btn-outline-primary"
						>	Buscar
						</button>
					</form>
				</div>

				<div className="col-7">
					<hr/>
					{	(q === '')
						&&
						<div className="spinner-border" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					}
					{	(q !== '' && heroesFiltered.length === 0)
						&&
						<div className="alert alert-danger">
							"{q}" No es nombre de Heroe valido :(
						</div>
					}
					{
						heroesFiltered.map(hero => (
							<HeroCard
								key={hero.id}
								{...hero}
							/>
						))
					}
				</div>

			</div>
		</div>
	)
}
