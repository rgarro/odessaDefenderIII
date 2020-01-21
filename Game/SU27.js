class SU27 extends ControllableModel {
  constructor() {
    super();
    this.vehicleMeshName = "laChilindrinaDeApaikan";

    this.FbxModelUrl = "/Game/assets/models/SU25/SU-25.fbx";
    this.modelUrl = "/Game/assets/models/Mi28.json";
    this.textureUrl = "/Game/assets/models/Mi28NA.png";
    this.ObjModelUrl = "/Game/assets/models/SU25/SU-25.obj";
    this.pixelsPerSecond = 25;
    this.vehicleMesh = null;
    //this.scale = 13;
    this.altitude = 145;
    this.ini_x = 0;
    //this.ini_y = 150;
    this.ini_z = 350;
    this.init_rotation = 160;
    this.modelColor = 0x0d9a927;
    this.vehicleColor = 0x0ffa65;
    this.rotationAngleStep = 6;
    this.group = new THREE.Object3D();
  }

  postLoaded() {
    this.mesh.rotation.y = this.init_rotation;
    this.mesh.position.y = this.altitude;
    this.mesh.position.x = this.ini_x;
    this.mesh.position.z = this.ini_z;
  }

  initPropeller() {
    /*this.propeller = new HeliPropeller();
    this.propeller.origin.y = this.altitude + 10;
    this.propeller.setGame(this.game);
    this.propeller.loadModel("/cube/");*/
  }
}
