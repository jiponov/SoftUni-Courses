// виж УПРАЖНЕНИЕ от Text Processing последните 35 мин от видеото от папка Text Processing 2021.05 Exercise viktor

function solve(input) {
    let arena = {};

    while (input[0] != 'Ave Cesar') {
        let line = input.shift();
        if (line.includes('->')) {
            addGladiator(line);
        } else {
            duel(line);
        }
    }

    const sorted = Object.entries(arena).sort(compareGladiators);

    for (let [name, tech] of sorted) {
        let skills = Object.values(tech);
        let totalSkill = 0;
        for (let skill of skills) {
            totalSkill += skill;
        }
        console.log(`${name}: ${totalSkill} skill`);

        let sortedTech = Object.entries(tech).sort(compareTech);
        for (let [tech, value] of sortedTech) {
            console.log(`- ${tech} <!> ${value}`);
        }
    }


    function compareGladiators(a, b) {
        let skillA = Object.values(a[1]);
        let totalSkillA = 0;
        for (let skill of skillA) {
            totalSkillA += skill;
        }

        let skillB = Object.values(b[1]);
        let totalSkillB = 0;
        for (let skill of skillB) {
            totalSkillB += skill;
        }

        return (totalSkillB - totalSkillA) || a[0].localeCompare(b[0]);
    }

    function compareTech(a, b) {
        return (b[1] - a[1]) || a[0].localeCompare(b[0]);
    }

    function addGladiator(line) {
        let [name, tech, skill] = line.split(' -> ');
        skill = Number(skill);

        if (arena[name] == undefined) {
            arena[name] = {};
        }
        let existingSkill = arena[name][tech];
        if (existingSkill == undefined || existingSkill < skill) {
            arena[name][tech] = skill;
        }
    }

    function duel(line) {
        let [a, b] = line.split(' vs ');
        if (arena[a] != undefined && arena[b] != undefined) {
            let common = findCommonTech(arena[a], arena[b]);
            if (common != undefined) {
                let skillA = Object.values(arena[a]);
                let totalSkillA = 0;
                for (let skill of skillA) {
                    totalSkillA += skill;
                }

                let skillB = Object.values(arena[b]);
                let totalSkillB = 0;
                for (let skill of skillB) {
                    totalSkillB += skill;
                }

                if (totalSkillA > totalSkillB) {
                    delete arena[b];
                } else if (totalSkillA < totalSkillB) {
                    delete arena[a];
                }
            }
        }
    }

    function findCommonTech(a, b) {
        let techA = Object.keys(a);
        let techB = Object.keys(b);
        for (let tech of techA) {
            if (techB.includes(tech)) {
                return tech;
            }
        }

        return undefined;
    }
}

solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);

solve([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);