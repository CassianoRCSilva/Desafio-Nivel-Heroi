/** 
    Challange instructions
    Se XP for menor do que 1.000 = Ferro
    Se XP for entre 1.001 e 2.000 = Bronze
    Se XP for entre 2.001 e 5.000 = Prata
    Se XP for entre 5.001 e 6.000 = Ouro
    Se XP for entre 6.001 e 7.000 = Platina
    Se XP for entre 7.001 e 8.000 = Diamante
    Se XP for entre 8.001 e 9.000 = Diablo
    Se XP for entre 9.001 e 10.000= Imortal
    Se XP for maior ou igual a 10.001 = God of War
*/

// Hero name for return string
const heroName = 'Thanos o Bárbaro'

// Random value for hero Experience
function randomExpValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// Store actual random value
let heroExp = randomExpValue(1, 10001)

// Possible hero levels
possibleLevels = [
    'Ferro',
    'Bronze',
    'Prata',
    'Ouro',
    'Platina',
    'Diamante',
    'Diablo',
    'Imortal',
    'God of War'
]

// Assign level based on array position
function findHeroLevel(heroExp) {
    let levelString = '' // Empty string for the return

    // Loop logic checking actual random value
    for (let i = 0; i <= possibleLevels.length; i++) {
        if (heroExp <= 1000) {
            levelString = possibleLevels[0]
        } else if (heroExp > 1000 && heroExp <= 2000) {
            levelString = possibleLevels[1]
        } else if (heroExp > 2000 && heroExp <= 5000) {
            levelString = possibleLevels[2]
        } else if (heroExp > 5000 && heroExp <= 6000) {
            levelString = possibleLevels[3]
        } else if (heroExp > 6000 && heroExp <= 7000) {
            levelString = possibleLevels[4]
        } else if (heroExp > 7000 && heroExp <= 8000) {
            levelString = possibleLevels[5]
        } else if (heroExp > 8000 && heroExp <= 9000) {
            levelString = possibleLevels[6]
        } else if (heroExp > 9000 && heroExp <= 10000) {
            levelString = possibleLevels[7]
        } else {
            levelString = possibleLevels[8]
        }
    }

    // Return found level
    return levelString
}

// Store hero level from the array
let heroLevel = findHeroLevel(heroExp)

// Final message displaying hero XP, name and level
console.log(`\nExperiência do herói: ${heroExp}`)
console.log(`O herói de nome ${heroName}, com ${heroExp} de experiência está no nível ${heroLevel}\n`)
