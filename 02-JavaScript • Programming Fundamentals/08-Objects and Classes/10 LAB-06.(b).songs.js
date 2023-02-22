function songs(input) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsArr = [];
    let nSongs = input.shift();
    let type = input.pop();

    for (let music of input) {
        let token = music.split('_');
        let musicType = token[0];
        let musicName = token[1];
        let musicTime = token[2];
        let myMusicObj = new Song(musicType, musicName, musicTime);
        songsArr.push(myMusicObj);
        //console.log(myMusicObj)
    }
    //console.log(songsArr)

    for (let el of songsArr) {              
        if (type == 'all') {
            console.log(`${el.name}`);          // songsArr.forEach((el) => console.log(el.name))
        }
        if (el.typeList == type) {                  
            console.log(`${el.name}`);          // let filtered = songsArr.filter((el) => el.typelist == type).forEach((el) => console.log(el.name))
        }
    }

}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
console.log('---');
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
console.log('---');
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);
