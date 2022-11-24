let peliculas = [
    {
        id: 1,
        titulo: 'Spider-Man: Lejos de casa',
        duracion: 129,
        genero: 'Aventura'
    },
    {
        id: 2,
        titulo: 'Toy Story 4',
        duracion: 100,
        genero: 'Animación'
    },
    {
        id: 3,
        titulo: 'X-Men: Fénix Oscura',
        duracion: 113,
        genero: 'Acción'
    }
];

let idPeli = {
    titulo: 'Una noche en el museo',
    duracion: 270,
    genero: 'drama',
}

/* peliculas[idPeli].titulo = req.body.titulo;
peliculas[idPeli].duracion = req.body.duracion;
peliculas[idPeli].genero = req.body.genero; */

/* peliculas[1].titulo = idPeli.titulo;
peliculas[1].duracion = idPeli.duracion;
peliculas[1].genero = idPeli.genero; */

peliculas[1] = idPeli;


console.log(peliculas);
