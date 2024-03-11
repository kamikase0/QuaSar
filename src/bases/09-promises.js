// ---------------------------------------------------------
// console.log('inicio')

// new Promise((resolve, reject)=>{

//   console.log('cuerpo de la promesa')
// // resolve('promesa resuelta')
//  reject('promesa resuelta con error')

// }).then(console.log)
// .catch( console.log)

// console.log('fin')

import { getHeroById } from 'src/bases/08-imp-exp.js';

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const hero = getHeroById(id)

      if (hero) {
        resolve(hero)
      } else {
        reject('Heroe no existe')
      }

    }, 1000);

  })
}

getHeroByIdAsync(3)
  //.then( h => console.log(h))
  .then(h => {
    console.log(`El heroe es: ${h.name}`)
  })
  .catch(console.log)
