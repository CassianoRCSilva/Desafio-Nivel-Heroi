//Variáveis
let heroi = "Thanos o Bárbaro";
let nivel;
let xp = 100000;

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 6.000 = Ouro
//Se XP for entre 6.001 e 7.000 = Platina
//Se XP for entre 7.001 e 8.000 = Diamante
//Se XP for entre 8.001 e 9.000 = Diablo
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = God of War


if(xp <= 1000) {
    nivel = "Ferro"
} else if(xp > 1000 && xp <= 2000) {
    nivel = "Bronze";
} else if(xp > 2000 && xp <= 5000) {
    nivel = "Prata";
} else if(xp > 5000 && xp <= 6000 ) {
    nivel = "Ouro";
} else if(xp > 6000 && xp <= 7000) {
    nivel = "Platina";
} else if(xp > 7000 && xp <= 8000) {
    nivel = "Diamante";
} else if(xp > 8000 && xp <= 9000) {
    nivel = "Diablo";
} else if (xp > 9000 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "God Of War";
};

//Mensagem final com o nível atual de herói
console.log("O herói de nome " + heroi + ", está no nível " + nivel)