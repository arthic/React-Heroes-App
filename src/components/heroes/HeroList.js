import React, { useMemo } from 'react'
import { HeroCard } from './HeroCard'

import { getHeroresByPublisher } from '../../selectors/getHeroresByPublisher'

export const HeroList = ({ publisher }) => {

	// Memorizamos cada que el heroId cambie y optimizamos memoria
	const heroes = useMemo(() =>getHeroresByPublisher(publisher), [publisher])
	return (
		<div className="card-columns animate__animated animate__fadeIn">
			{
				heroes.map(heroe => (
					<HeroCard
						key={heroe.id}
						{...heroe}
					/>
				))
			}
		</div>
	)
}
