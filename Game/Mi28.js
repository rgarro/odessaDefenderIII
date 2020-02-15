/**
 * '-----------------------------------------------------------------'
 *                            ||                    Reaper X
 *                        _____YY_____
 *                      .'@@@@@@@@@@@@'.
 *                     ///     ||     \\\
 *                    ///      ||      \\\
 *                    ||  ___  ||  _O_  ||
 *          .-_-.     || |   | || || ||     .-_-.
 *        .'d(x)b'.   |A'._Y_|_||_|_Y_.'A|   .'d(x)b'.
 *        |(x)O(x)|---|@@@@@@@@@@@@@@@@@@|---|(x)O(x)|
 *        |(x)O(x)|===|@@@@@@@@xxx@@@@@@@|===|(x)O(x)|
 *        '.g(x)P.'   '|g@@@@@xx%xx@@@@p|'   '.g(x)P.'
 *          '---'       '.g@@@@xxx@@@@p'       '---'
 *                     ==='.g@@@@@@@p.'===
 *                    //     \X_o_X/     \\
 *                   (_)                 (_)
 *
 * Alles klar, Herr Kommissar?
 * She said, "Babe, you know I miss Jill and Joe
 * And all my funky friends"
<<<<<<< HEAD
 *
 * @author Rolando <rgarro@gmail.com>
=======
 * 
 * @author Rolando <rgarro@gmail.com>                   
>>>>>>> 88556cea2e16d275593d795f03f5b8a53684b983
 */
class Mi28 extends ControllableModel {
  constructor() {
    super();
    this.vehicleMeshName = "boinaAzulDeChinandega";
    this.modelUrl = "/Game/assets/models/Mi28.json";
    this.textureUrl = "/Game/assets/models/Mi28ND.png";
    this.ObjModelUrl = "/Game/assets/models/SU25/SU-25.obj";
    this.pixelsPerSecond = 25;
    this.vehicleMesh = null;
    //this.scale = 13;
<<<<<<< HEAD
    this.altitude = 61;
    this.ini_x = 0;
    //this.ini_y = 150;
    this.ini_z = 245;
=======
    this.altitude = 125;
    this.ini_x = 0;
    //this.ini_y = 150;
    this.ini_z = 0;
>>>>>>> 88556cea2e16d275593d795f03f5b8a53684b983
    this.init_rotation = 160;
    this.modelColor = 0x0d9a927;
    this.vehicleColor = 0x0ffa65;
    this.rotationAngleStep = 6;

    this.geometry = null;
    this.mesh = null;
    this.gameIsSet = false;
    this.centerMeshName = "helice";
    this.radiusLength = 100;
    this.origin = { x: 0, y: 0, z: 0 };
    this.angle = 30;
    this.speed = 0.9;
    this.clockWise = true;
    this.modelLoaded = false;
    this.scale = 11;
    this.propeller = null;
    this.rudder = null;
    this.dropKey = "y"; //testing Wo FallingBouncer
    this.group = new THREE.Object3D();
    this.ball_fell = false;
    this.balls = [];
    this.PropsRemover = null;
    this.is_textured_material = true;
    createjs.Sound.registerSound(
      "/Game/assets/sounds/Helicopt-Diode111-8858_hifi.mp3",
      "heliSound"
    );
    this.heliSound = null;
    this.heliSoundVolume = 0.1;
  }

  playHeliSound(){
    this.heliSound = createjs.Sound.play("heliSound", { loop: 1000 });
    this.heliSound.volume = this.heliSoundVolume;
  }

  stopHeliSound(){
    this.heliSound.stop();
  }

  postLoaded() {
    this.mesh.scale.set(this.scale, this.scale, this.scale);
<<<<<<< HEAD
    //this.mesh.rotation.y = this.init_rotation;
    //this.mesh.position.y = this.altitude;
    //this.mesh.position.x = this.ini_x;
    //this.mesh.position.z = this.ini_z;

    this.mesh.rotation.y = 355;
    this.group.add(this.mesh);
    this.initialGroupPosition();
=======
    this.mesh.rotation.y = this.init_rotation;
    this.mesh.position.y = this.altitude;
    this.mesh.position.x = this.ini_x;
    this.mesh.position.z = this.ini_z;

    this.mesh.rotation.y = -90;
>>>>>>> 88556cea2e16d275593d795f03f5b8a53684b983
    this.initPropeller();
    this.initRudder();
    if (this.game.enable_shadows) {
      this.mesh.castShadow = true;
    }
<<<<<<< HEAD
    this.game.scene.add(this.group);
    //this.PropsRemover = new eO.Util.PropsRemover(this.game.scene);
    //this.initListeners();

=======
    this.group.add(this.mesh);
    this.group.add(this.propeller.mesh);
    this.group.add(this.rudder.mesh);
    this.game.scene.add(this.group);
    //this.PropsRemover = new eO.Util.PropsRemover(this.game.scene);
    //this.initListeners();
    this.initialGroupPosition();
>>>>>>> 88556cea2e16d275593d795f03f5b8a53684b983
  }

  initRudder(){
    this.rudder = new HeliRudder();
<<<<<<< HEAD
    this.group.add(this.rudder.mesh);
    //this.rudder.origin.y = this.altitude + 10;
    //this.rudder.origin.x = 50;
    //this.rudder.origin.z = 28;

    this.rudder.origin.y = this.group.position.y + 8;
    this.rudder.origin.z = this.group.position.z + 48;
    this.rudder.origin.x = this.group.position.x + 3;

=======
    this.rudder.origin.y = this.altitude + 10;
    this.rudder.origin.x = 50;
    this.rudder.origin.z = 28;
>>>>>>> 88556cea2e16d275593d795f03f5b8a53684b983
    this.rudder.setGame(this.game);
    this.rudder.loadModel("/cube/");
  }

  initialGroupPosition(){
<<<<<<< HEAD
    this.group.position.z = this.ini_z;
    this.group.position.x = this.ini_x;
    this.group.position.y = this.altitude;
=======
//console.log("Fry is a rappist solid carbon dioxide bender webGl Bessie cameraControl ...");
    this.group.position.z = 245;
    this.group.position.x = 0;
    this.group.position.y = 0;
>>>>>>> 88556cea2e16d275593d795f03f5b8a53684b983
  }

  initPropeller() {
    this.propeller = new HeliPropeller();
<<<<<<< HEAD
    this.group.add(this.propeller.mesh);
    this.propeller.origin.y = this.group.position.y + 8;
    this.propeller.origin.z = this.ini_z;
    this.propeller.origin.x = this.ini_x;

=======
    this.propeller.origin.y = this.altitude + 8;
>>>>>>> 88556cea2e16d275593d795f03f5b8a53684b983
    this.propeller.setGame(this.game);
    this.propeller.loadModel("/cube/");
  }

  postRender() {
    //this.ballsLoop();
    /*this.propeller.mesh.position.x = this.mesh.position.x;
    this.propeller.mesh.position.z = this.mesh.position.z;
    this.propeller.mesh.position.x = this.mesh.position.x;
    */
    this.propeller.onRender();
<<<<<<< HEAD
    this.rudder.onRender(this.group.position.x + 3,this.group.position.y,this.group.position.z + 48);
=======
    this.rudder.onRender(this.mesh.position.x + 50,this.mesh.position.y,this.mesh.position.z + 28);
>>>>>>> 88556cea2e16d275593d795f03f5b8a53684b983
  }
}
