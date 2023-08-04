function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to target " + targetPlayer.name);
    }
}

var Bucky = new User();
var Wendy = new User();
Bucky.name = "Bucky";
Wendy.name = "Wendy";

console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

Bucky.giveLife(Wendy);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

// You can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 1;
    console.log(this.name + " uppercutted " + targetPlayer.name);
}

Wendy.uppercut(Bucky);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

// You can add properties to all objects
User.prototype.magic = 60;
console.log("Bucky has "+ Bucky.magic + "magic points");
console.log("Wendy has "+ Wendy.magic + "magic points");