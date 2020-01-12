function randomlyPickADoor () {
    return Math.floor(Math.random() * Math.floor(3));
}

function findIncorrectDoorToReveal (winningDoor, chosenDoor) {
    return [0, 1, 2].find((doorNumber) => (doorNumber !== winningDoor) && (doorNumber !== chosenDoor));
}

function findAlternateDoor (originalChoice, incorrectDoor) {
    return [0, 1, 2].find((doorNumber) => (doorNumber !== originalChoice) && (doorNumber !== incorrectDoor));
} 

function calculatePercenOfMontyHallWins (numberOfRuns, switchChoice) {
    let wins = 0;
    for (let i = 0; i < numberOfRuns; i++) {
        const winningDoor = randomlyPickADoor();
        let chosenDoor = randomlyPickADoor();
        if (switchChoice) {
            const revealedIncorrectDoor = findIncorrectDoorToReveal(winningDoor, chosenDoor);
            chosenDoor = findAlternateDoor(chosenDoor, revealedIncorrectDoor);
        }
        if (chosenDoor === winningDoor) {
            wins++;
        }
    }
    return Math.round((wins / numberOfRuns) * 100);
}

const percentWinsWhenNotSwitching = calculatePercenOfMontyHallWins(1000, false);
const percentWinsWhenSwitching = calculatePercenOfMontyHallWins(1000, true);

console.log(' ');
console.log(`Percent wins when not switching is\t ${percentWinsWhenNotSwitching}%`);
console.log(`Percent wins when switching is\t\t ${percentWinsWhenSwitching}%`);