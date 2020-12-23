import React from 'react'
import {
	BrowserRouter as Router
} from "react-router-dom";

import { DashboardRoutes } from './DashboardRoutes';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

	return (
		<Router>
			<div>
				<PublicRoute
					path="/"
					component={DashboardRoutes}
				/>
			</div>
		</Router>
	)
}
