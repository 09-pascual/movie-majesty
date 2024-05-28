import { generateMoviesHTML } from './movie-converter.js'

import { renderMoviesToDOM } from './movie-render.js'

const movieHTML = generateMoviesHTML()

//this line will render it to the DOM
renderMoviesToDOM(movieHTML)

