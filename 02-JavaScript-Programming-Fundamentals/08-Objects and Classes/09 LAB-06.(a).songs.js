function songs(input) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let n = Number(input.shift());
    let lastEl = input.pop();
    let command = input.shift();

    while (command != undefined) {
        let token = command.split('_');
        let typeList = token[0];
        let name = token[1];
        let time = token[2];
        let nameSong = new Song(typeList, name, time);

        if (nameSong.typeList == lastEl) {                  
            console.log(nameSong.name)
        } else if (lastEl == 'all') {
            console.log(nameSong.name);
        }

        command = input.shift();
    }
}
songs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);
console.log('---');
songs([
    4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);
console.log('---');
songs([
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
])

