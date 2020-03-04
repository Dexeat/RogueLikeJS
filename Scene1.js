class Scene1 extends Phaser.Scene {
  constructor() {
    super("premiere_scene")
  }

  init(data){

  }

  preload(){

  }

  create(){
    this.compteur_scene = 1;

    //exemple pour les fonctions
    this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
  }

  update(){
    if(this.compteur_scene == 1){
      this.scene.start("deuxieme_scene", {test: this.compteur_scene, test2: this.compteur_scene});
    }
  }

  //mise en place des fonctions

  collectStar(player, star){
    star.disableBody(true, true);
    if (this.stars.countActive(true)===0) {
      this.stars.children.iterate(function(child){
      child.enableBody(true, child.x, 0, true, true);
      });


}
