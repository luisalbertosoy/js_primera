let user = 'Belinda';

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
enterSong();

