function constructionCrew(worker) {    // 100/100

    if (worker.dizziness == true) {
        let water = 0.1;
        worker.levelOfHydrated += water * worker.weight * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
console.log('-------');
console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));
console.log('-------');
console.log(constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));
