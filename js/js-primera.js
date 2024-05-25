onboarding();

function onboarding() {
    let mainMenu;

    while (mainMenu !== 0) {
        mainMenu = parseInt(prompt(`
        Hola, bienvenido a Sharesic, en donde compartes tu música.

        Selecciona una opción:
        * 1. Crear usuario y comenzar a compartir
        * 0. Salir
        `), 10);

        if (mainMenu === 1) {       
            const user = prompt('Por favor ingresa un nombre de usuario');
            
            alert('¡Usuario ingresado con éxito!');
            console.log('Bienvenido a Sharestic ' + user);
            
            function enterSong() {
                const Song = {
                    song: prompt('Ingresa el nombre de la canción que deseas compartir'),
                    artist: prompt('Ingresa el nombre del artista'),
                    album: prompt('Ingresa el nombre del album'),
                    genre: prompt('Ingresa el género musical'),
                };
            
                alert('¡Listo!, haz compartido:\n' + Song.song + '\nAlbum: ' + Song.album + '\nArtista: ' + Song.artist + '\nGénero: ' + Song.genre);
                console.log(user + ' compartio -\n\n' + 'Canción: ' + Song.song + '\nAlbum: ' + Song.album + '\nArtista: ' + Song.artist + '\nGénero: ' + Song.genre);

                let like = false;
                console.log();
            }
            enterSong();

            let userMenu;
            while (userMenu !== 0) {
                userMenu = parseInt(prompt(`
                ¿Deseas compartir otra canción?

                * 1. Sí
                * 0. No, regresar a menú principal.
                `), 10);

                if (userMenu === 1) {
                    enterSong();
                } else if (userMenu == 0) {
                    break;
                }
            }
        } else if (mainMenu === 0) {
            alert('Gracias por visitar Sharestic, esperamos pronto tu registro.');
            break;
        } else {
            alert('Ingresa una opción válida');
        }  
    }
}