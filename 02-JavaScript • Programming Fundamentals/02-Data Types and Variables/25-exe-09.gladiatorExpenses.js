function gladiatorExpenses(lostFights, priceHelmet, priceSword, priceShield, priceArmor) {

    let totalExpenses = 0;

    let helmetTrashed = 0;
    let swordTrashed = 0;
    let shieldTrashed = 0;
    let armorTrashed = 0;

    let countLostFights = 0;

    for (let i = 0; i < lostFights; i++) {
        countLostFights++;
        if (countLostFights % 2 === 0 && countLostFights >= 2) {
            helmetTrashed++;
        }
        if (countLostFights % 3 === 0 && countLostFights >= 3) {
            swordTrashed++;
        }
        if (countLostFights % 2 === 0 && countLostFights % 3 === 0) {
            shieldTrashed++;
            if (shieldTrashed % 2 === 0 && shieldTrashed >= 2) {
                armorTrashed++;
            }
        }
    }

    totalExpenses = helmetTrashed * priceHelmet + swordTrashed * priceSword + shieldTrashed * priceShield + armorTrashed * priceArmor;
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);

