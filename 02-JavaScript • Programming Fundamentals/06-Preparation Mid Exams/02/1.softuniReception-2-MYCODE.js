function softUniReception(arr) {                // 100/100
    let worker1 = Number(arr[0]);
    let worker2 = Number(arr[1]);
    let worker3 = Number(arr[2]);
    let students = Number(arr[3]);
    let hours = 0;
    let studentsPerHour = worker1 + worker2 + worker3;

    while (students > 0) {
        students -= studentsPerHour;
        hours++;
        if (hours % 4 == 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

softUniReception(['5', '6', '4', '20']);
console.log('---');
softUniReception(['1', '2', '3', '45']);
console.log('---');
softUniReception(['3', '2', '5', '40']);