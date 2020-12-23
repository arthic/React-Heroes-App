import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

export const PublicRoute = ({
	component: Component,
	// El resto de las propiedades del componente o ruta
	...rest
	}) => {

	return (
		<Route {...rest}
			component={ (props) => (
					(<Component {...props} />)
			)}
		/>
	)
}

PublicRoute.propTypes = {
	component: PropTypes.func.isRequired
}
