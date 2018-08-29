// ========================= STEP 2 ============================
var Zombie = function (name, health, attack, agility) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.agility = agility;
    this.roundDamage = 0;
    this.damageBool = function (perc) {
        var comp = Math.floor(Math.random() * 100) + 1

        if (perc - comp > 0) {
            return false
        } else {
            return true
        }
    };
    this.calcDamage = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
}

module.exports = Zombie;




//===========================================================