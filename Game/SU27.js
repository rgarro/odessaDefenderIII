class SU27 extends ControllableModel {
  constructor() {
    super();
    this.vehicleMeshName = "laChilindrinaDeApaikan";
    this.modelUrl = "/Game/assets/models/SU25/SU-25.json";
    this.FbxModelUrl = "/Game/assets/models/SU25/SU-25.fbx";
    this.pixelsPerSecond = 25;
    this.vehicleMesh = null;
    //this.scale = 13;
    this.vehicleColor = 0x0ffa65;
    this.rotationAngleStep = 6;
    this.group = new THREE.Object3D();
  }
}
