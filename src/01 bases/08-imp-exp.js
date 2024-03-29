// import { owners } from 'src/data/heroes';
import superHeroes from 'src/data/heroes';
// // console.log(owners)

// console.log(superHeroes)

export const getHeroById = (id) => superHeroes.find(hero => hero.id === id);
// const getHeroById = superHeroes.((hero) => hero.id === '1')
// console.log(getHeroById(2))

export const getHerosByOwners = (owners) => superHeroes.filter(her => her.owner === owners)
// console.log(getHerosByOwners('Marvel'))



// import { getHeroById ,getHerosByOwners} from 'src/bases/08-imp-exp';

// console.log(getHeroById(3))

// console.log(getHerosByOwners('DC'))

