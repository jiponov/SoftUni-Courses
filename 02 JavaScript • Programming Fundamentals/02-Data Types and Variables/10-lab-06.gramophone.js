function gramophone(band, album, song) {

    let oneRotation = 2.5;
    let bandL = band.length;
    let albumL = album.length;
    let songL = song.length;
    let duration = (albumL * bandL) * (songL / 2);
    let totalRotations = Math.ceil(duration / oneRotation);
    console.log(`The plate was rotated ${totalRotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');

