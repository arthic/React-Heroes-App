import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { NavBar } from '../components/ui/NavBar'

import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
	return (
		<>
			<div className="container mt-5">
			<NavBar />
				<Switch>
					<Route exact path="/marvel" component={MarvelScreen} />
					<Route exact path="/hero/:heroeId" component={HeroScreen} />
					<Route exact path="/dc" component={DcScreen} />
					<Route exact path="/search" component={SearchScreen} />

					<Redirect to="/marvel" />
				</Switch>
			</div>
		</>
	)
}
