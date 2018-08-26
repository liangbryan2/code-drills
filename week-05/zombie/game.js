var inquirer = require('inquirer');

var userDamage;
var zombieAttack;

function hitZombie(weapon) {
    console.log(weapon);
    var prob = Math.floor(Math.random() * 100) + 1;
    if (weapon.uses === 0) {
        console.log("Your weapon has 0 uses");
        userDamage = 0;
    } else if (weapon.reliability >= prob) {
        userDamage = Math.floor(Math.random() * (weapon.attack[1] - weapon.attack[0]) + weapon.attack[0]);
        console.log("You hit!");
        weapon.uses = weapon.uses - 1;
    } else {
        console.log("You missed.");
        weapon.uses = weapon.uses - 1;
        userDamage = 0;
    }
    var prob = Math.floor(Math.random() * 100) + 1;
    var chance = Math.floor(Math.random() * weapon.risk);
    if (chance >= prob) {
        zombieAttack = true;
    } else {
        zombieAttack = false;
    }
}

function zombieTakeDamage(weapon) {
    for (var i = 0; i < weapon.reach && i < zombieArray.length; i++) {
        var dodge = zombieArray[i].agility;
        var prob = Math.floor(Math.random() * 100) + 1;
        if (prob >= dodge) {
            zombieArray[i].health -= userDamage;
            console.log("Zombie" + (i + 1) + "has " + zombieArray[i].health + "hp");
            if (zombieArray[i].health <= 0) {
                zombieArray.splice(i, 1);
                console.log(zombieArray);
                i -= 1;
                console.log("Zombie" + (i + 1) + 'died');
            }
        } else {
            console.log("Zombie" + (i + 1) + "dodged your attack");
        }
    }
}

function zombieHit() {
    for (var i = 0; i < zombieArray.length; i++) {
        var zombieDamage = Math.floor(Math.random() * (zombieArray[i].attack[1] - zombieArray[i].attack[0]) + zombieArray[i].attack[0]);
        console.log("zombieDamage", zombieDamage);
        hero.health = hero.health - zombieDamage;
        console.log("You have " + hero.health + "hp");
    }
}

var hero = {
    health: 100
}
var weapons = {
    bearHands: {
        //number of zombies affected
        reach: 1,
        //Range of possible damage
        attack: [5, 5],
        //Chance of taking damge back (%)
        risk: 95,
        //chance of landing damage (%)
        reliability: 90,
        //"health" of gun
        uses: 1000000000000000
    },

    machete: {
        //number of zombies affected
        reach: 1,
        //Range of possible damage
        attack: [40, 60],
        //Chance of taking damge back (%)
        risk: 80,
        //chance of landing damage (%)
        reliability: 90,
        //"health" of gun
        uses: 5
    },

    shotgun: {
        //number of zombies affected
        reach: 2,
        //Range of possible damage
        attack: [30, 50],
        //Chance of taking damge back (%)
        risk: 65,
        reliability: 80,
        //"health" of gun
        uses: 5
    },

    pistol: {
        //number of zombies affected
        reach: 2,
        //Range of possible damage
        attack: [25, 40],
        //Chance of taking damge back (%)
        risk: 50,
        reliability: 75,
        //"health" of gun
        uses: 5
    },

    machineGun: {
        //number of zombies affected
        reach: 3,
        //Range of possible damage
        attack: [15, 30],
        //Chance of taking damge back (%)
        risk: 30,
        reliability: 65,
        //"health" of gun
        uses: 5
    },

    sniper: {
        //number of zombies affected
        reach: 1,
        //Range of possible damage
        attack: [40, 60],
        //Chance of taking damge back (%)
        risk: 50,
        reliability: 10,
        //"health" of gun
        uses: 5
    },

    rpg: {
        //number of zombies affected
        reach: 4,
        //Range of possible damage
        attack: [40, 60],
        //Chance of taking damge back (%)
        risk: 95,
        reliability: 90,
        //"health" of gun
        uses: 5
    }
}
var zombieArray = [zombie1 = {
        health: -1,
        attack: [0, 5],
        //Chance of dodging (%)
        agility: 15
    },

    zombie2 = {
        health: 90,
        attack: [1, 6],
        //Chance of dodging (%)
        agility: 18
    },

    zombie3 = {
        health: 85,
        attack: [2, 4],
        //Chance of dodging (%)
        agility: 20
    },


    zombie4 = {
        health: 80,
        attack: [2, 5],
        //Chance of dodging (%)
        agility: 22
    },


    zombie5 = {
        health: 60,
        attack: [7, 10],
        //Chance of dodging (%)
        agility: 10
    }
]

function game() {
    inquirer.prompt([{
        type: 'list',
        message: "Choose your weapon",
        name: 'weapon',
        choices: ["bearHands", "machete", "shotgun", "pistol", "machineGun", "sniper", "rpg"],
    }]).then(function (response) {
        var weapon = response.weapon;
        // console.log(weapon);
        var gun = weapons[weapon];
        // console.log(gun);
        hitZombie(gun);
        zombieTakeDamage(gun);
        console.log("zombieAttack ", zombieAttack);
        if (zombieAttack) {
            zombieHit();
        }
        if (hero.health > 0 && zombieArray.length > 0) {
            game();
        } else if (hero.health <= 0) {
            console.log("You lose");
        } else if (zombieArray.length === 0) {
            console.log("You win");
        }
    })
}

game();