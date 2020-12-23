import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
	return (
		<>
			<h1 className="publisher">Dc</h1>
			<hr />
			<HeroList publisher={'DC Comics'}/>
		</>
	)
}
