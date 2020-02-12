/**
 * Meeting you with a view to a kill
 * Face to face in secret places, feel the chill ...
 * 
 *    0000             0000        7777777777777777/========___________
   00000000         00000000      7777^^^^^^^7777/ || ||   ___________
  000    000       000    000     777       7777/=========//
 000      000     000      000             7777// ((     //
0000      0000   0000      0000           7777//   \\   //
0000      0000   0000      0000          7777//========//
0000      0000   0000      0000         7777
0000      0000   0000      0000        7777
 000      000     000      000        7777
  000    000       000    000       77777
   00000000         00000000       7777777
     0000             0000        777777777
 * 
 * @author Rolando <rgarro@gmail.com>
 */
class HeliRudder extends SelfCenteredVerticalRotator {

    constructor(){
        super();
        this.modelUrl = "/emptyLibJS/3D/Games/Kalero/assets/Eagle.json";
        this.textureUrl = "/emptyLibJS/3D/Games/Kalero/assets/mi28/Mi28NA.png";
        this.game = null;
        this.geometry = null;
        this.mesh = null;
        this.gameIsSet = false;
        this.meshName = "helice";
        this.centerMeshName = "";//this. will follow while turning
        this.altitude = 50;//y
        this.origin = {x:-10,y:10,z:0};
        this.speed = 0.9;
        this.clockWise = true;
        this.modelLoaded = false;
        this.scale = 2;
        this.color = 0x000000;
    }

    loadModel(modelUrl){
        //var material = new THREE.MeshPhongMaterial();
        var material = new THREE.MeshBasicMaterial({color:this.color});
        //material.color.set(this.color);
        this.geometry = new THREE.BoxGeometry(1,15,1);
        this.mesh = new THREE.Mesh(this.geometry,material);
        this.mesh.name = this.meshName;
        this.mesh.position.x = this.origin.x;
        this.mesh.position.y = this.origin.y;
        this.mesh.position.z = this.origin.z;
        this.game.scene.add(this.mesh);
        this.modelLoaded = true;
        this.postLoad();
      }

}