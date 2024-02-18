function projects(input) {
    let hoursProject = 3;
    let name = input[0];
    let project = Number(input[1]);
    let totalHours = hoursProject * project;
    let result = (`The architect ${name} will need ${totalHours} hours to complete ${project} project/s.`);
    console.log(result);
}
projects(["George", "4"]);