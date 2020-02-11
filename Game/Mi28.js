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
    this.altitude = 145;
    this.ini_x = 0;
    //this.ini_y = 150;
    this.ini_z = 0;
    this.init_rotation = 160;
    this.modelColor = 0x0d9a927;
    this.vehicleColor = 0x0ffa65;
    this.rotationAngleStep = 6;
    this.group = new THREE.Object3D();

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
  }

  playHeliSound(){
    var s = createjs.Sound.play("heliSound", { loop: 1000 });
    s.volume = 0.3;
  }

  postLoaded() {
    this.mesh.scale.set(this.scale, this.scale, this.scale);
    this.mesh.rotation.y = this.init_rotation;
    this.mesh.position.y = this.altitude;
    this.mesh.position.x = this.ini_x;
    this.mesh.position.z = this.ini_z;

    this.mesh.rotation.y = -90;
    this.initPropeller();
    //this.initRudder();
    if (this.game.enable_shadows) {
      this.mesh.castShadow = true;
    }
    this.group.add(this.mesh);
    this.group.add(this.propeller.mesh);
    //this.group.add(this.rudder.mesh);
    this.game.scene.add(this.group);
    //this.PropsRemover = new eO.Util.PropsRemover(this.game.scene);
    //this.initListeners();
  }

  initPropeller() {
    this.propeller = new HeliPropeller();
    this.propeller.origin.y = this.altitude + 10;
    this.propeller.setGame(this.game);
    this.propeller.loadModel("/cube/");
  }

  postRender() {
    //this.ballsLoop();
    this.propeller.mesh.position.x = this.mesh.position.x;
    this.propeller.mesh.position.z = this.mesh.position.z;
    this.propeller.mesh.position.x = this.mesh.position.x;
    this.group.position.z = this.mesh.position.z;
    this.group.position.x = this.mesh.position.x;
    this.group.position.y = this.mesh.position.y;
    this.propeller.onRender();
    //this.rudder.onRender(this.mesh.position.x + 50,this.mesh.position.y,this.mesh.position.z + 28);
  }
}
