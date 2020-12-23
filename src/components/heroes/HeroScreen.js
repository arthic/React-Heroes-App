import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = ({history}) => {
	const {heroeId} = useParams()

	// Memorizamos cada que el heroId cambie y optimizamos memoria
	const hero = useMemo(() => getHeroById(heroeId), [heroeId])

	if (!hero) {
		return <Redirect to="/" />
	}
	const handleReturn = () => {
		// Manejo de error si le mandas el link concreto a un amigo y quiere regresar
		if(history.length<=2){
			history.push('/')
		} else {
			history.goBack()
		}
	}
	const {
		superhero,
		publisher,
		alter_ego,
		first_appearance,
		characters
	} = hero
	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
				src={`../assets/heroes/${heroeId}.jpg`}
				alt={heroeId}
				className="img-thumbnail animate__animated animate__fadeInLeft"
			/>
			</div>
			<div className="col-8">
				<h3>{superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"><b>Nombre civil: </b>{alter_ego}</li>
					<li className="list-group-item"><b>Editor: </b>{publisher}</li>
					<li className="list-group-item"><b>Primera aparición: </b>{first_appearance}</li>
				</ul>
				<h5 className="mt-2">Multiverso</h5>
				<p>{characters}</p>

				<button
					className="btn btn-outline-info"
					onClick={handleReturn}
					>	Regresar
				</button>
			</div>
		</div>
	)
}
