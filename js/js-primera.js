onboarding();

function onboarding() {

    let mainMenu;

    while (mainMenu != 0) {
        mainMenu = prompt(`
        Hola, bienvenido a Sharesic, en donde compartes tu música.

        Selecciona una opción:
        * 1. Crear usuario y comenzar a compartir
        * 0. Salir
        `);

        if (mainMenu == 1) {       
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
            }
            enterSong();

            let userMenu;
            while (userMenu != 0) {
                userMenu = prompt(`
                ¿Deseas compartir otra canción?

                * 1. Sí
                * 0. No, regresar a menú principal.
                `);

                if (userMenu == 1) {
                    enterSong();
                } else if (userMenu == 0) {
                    onboarding();
                }
            }

        } else if (mainMenu == 0) {
            alert('Gracias por visitar Sharestic, esperamos pronto tu registro.');
            break;
        } else {
            alert('Ingresa una opción válida');
        }  
    }
}

/* class Song {
    constructor (artist, album, song, genre) {
        this.artist = artist(prompt('Ingresa el nombre del artista que deseas compartir'));
        this.album = album(prompt('Ingresa el nombre del album:'));
        this.song = song(prompt('Ingresa el nombre de la canción:'));
        this.genre = genre(prompt('Ingresa el género musical:'))
    };
    sharedConfirmation() {
        alert('¡Listo!, haz compartido: ' + Song.song, + ' Album: ' + Song.album + ' Artista: ' + Song.artist + ' Género: ' + Song.genre);
    }
    showShared() {
        console.log(user + 'Compartió la canción ' + Song.song + '  del artista ' + Song.artist + ' del album ' + Song.album + ', genero: ' + Song.genre);
    }
}  */




/* let mainmenu;

while (mainmenu != 0) {
    mainmenu = prompt(`
    Hola bienvenido a Sharesic, en donde compartes tu música.

    Selecciona una opción:
    * 1. Crear usuario y comenzar a compartir
    * 2. Ver muro de recomendaciones
    * 0. Salir
    `);

    if (mainmenu == 1) {       
        const user = prompt(`
        Por favor ingresa un nombre de usuario
        `);
        
        alert('¡Usuario ingresado con éxito!');
        console.log('Bienvenido a Sharestic ' + user);

        class Song {
            constructor (artist, album, song, genre) {
                this.artist = artist(prompt('Ingresa el nombre del artista que deseas compartir'));
                this.album = album(prompt('Ingresa el nombre del album:'));
                this.song = song(prompt('Ingresa el nombre de la canción:'));
                this.genre = genre(prompt('Ingresa el género musical:'))
            };
            sharedConfirmation() {
                alert('¡Listo!, haz compartido: ' + Song.song, + ' Album: ' + Song.album + ' Artista: ' + Song.artist + ' Género: ' + Song.genre);
            }
            showShared() {
                console.log(user + 'Compartió la canción ' + Song.song + '  del artista ' + Song.artist + ' del album ' + Song.album + ', genero: ' + Song.genre);
            }
        } 
    }
} */