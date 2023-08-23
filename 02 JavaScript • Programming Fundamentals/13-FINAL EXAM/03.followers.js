function code(inputArr) {           // 100/100 

    let resultInfo = {}
    let counterFollowers = 0;

    for (let el of inputArr) {
        if (el === 'Log out') {
            break;
        }


        if (el.includes('New follower')) {
            let [operation, username] = el.split(': ');

            if (!resultInfo.hasOwnProperty(username)) {
                resultInfo[username] = {
                    'likes': 0,
                    'comments': 0,
                }
                counterFollowers++
            }


        } else if (el.includes('Like')) {
            let [operation, username, count] = el.split(': ');

            if (!resultInfo.hasOwnProperty(username)) {
                resultInfo[username] = {
                    'likes': count,
                    'comments': 0,
                }
                counterFollowers++

            } else if (resultInfo.hasOwnProperty(username)) {
                resultInfo[username]['likes'] = Number(resultInfo[username]['likes']) + Number(count);
            }


        } else if (el.includes('Comment')) {
            let [operation, username] = el.split(': ');

            if (resultInfo.hasOwnProperty(username)) {
                let sum = Number(resultInfo[username]['comments']) + 1;
                resultInfo[username]['comments'] = sum;

            } else if (!resultInfo.hasOwnProperty(username)) {
                resultInfo[username] = {
                    'likes': 0,
                    'comments': 1,
                }
                counterFollowers++;
            }


        } else if (el.includes('Blocked')) {
            let [operation, username] = el.split(': ');

            if (resultInfo.hasOwnProperty(username)) {
                delete resultInfo[username];
                counterFollowers--;
            } else if (!resultInfo.hasOwnProperty(username)) {
                console.log(`${username} doesn't exist.`);
            }
        }
    }

    console.log(`${counterFollowers} followers`)

    for (let el in resultInfo) {
        sum = Number(resultInfo[el].likes) + Number(resultInfo[el].comments);
        console.log(`${el}: ${sum}`);
    }
}
code(([
    "New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"
]));
console.log('-----------------------------------------------------')
code([
    "Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"
]);
console.log('-----------------------------------------------------')
code([
    "Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"
]);
