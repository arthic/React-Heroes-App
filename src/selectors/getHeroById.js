import {heroes} from '../data/Heroes'

export const getHeroById = (id) => {
	return heroes.find(heroe => heroe.id === id)
}