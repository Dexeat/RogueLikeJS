var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade:{
            debug: true
        },
        
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
};

var player;
var cursors;


var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bg', 'assets/fond/html-color-codes-color-tutorials-hero-00e10b1f.jpg');
    this.load.image('char', 'assets/char/char.png');
    this.load.image('rock','assets/decor/Edwig.png')
}

function create ()
{
    //limite de la cam + le monde
    this.cameras.main.setBounds(0, 0, 1920 * 2, 1080 * 2);
    this.physics.world.setBounds(0, 0, 1920 * 2, 1080 * 2);
    //Groupe
    rock = this.physics.add.staticGroup();



    //fond
    fond = this.add.image(0, 0, 'bg').setOrigin(0);
    
    cursors = this.input.keyboard.createCursorKeys();
    player = this.physics.add.image(0, 0, 'char');
    player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(player, true, 0.05, 0.05);

    

    //ajout des groupes
    rock.create(600, 400, 'rock');
    rock.create(400, 400, 'rock');
    rock.create(400, 200, 'rock');

    //colision
    this.physics.add.collider(player, rock);
}

function update ()
{

    player.setVelocity(0);
    if (cursors.left.isDown){
        player.setVelocityX(-500);
    }
    else if (cursors.right.isDown){
        player.setVelocityX(500);
    }
    if (cursors.up.isDown){
        player.setVelocityY(-500);
    }
    else if (cursors.down.isDown){
        player.setVelocityY(500);
    }
}
