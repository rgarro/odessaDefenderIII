class OD3 extends Game {
  constructor() {
    super();
    this.container = "gameContainer"; //el Honda de fabio esta detras del evergreen por la carcel de san luis ..
    console.log("here ...");
  }

  init() {
    super.init();
    console.log(this.scene);
  }

  postInit() {
    var p = this;
    this.camera.position.set(0, 150, 400);
    this.camera.lookAt(this.scene.position);
    this.floorAndSky();
    this.loadTest();
    this.setLights();
    //this.loadTank();
    //this.loadCondor();
    //this.loadTargets();
    //this.loadLabels();
    //this.loadInstructions();
    var axisHelper = new THREE.AxisHelper(5);
    this.scene.add(axisHelper);
  }

  loadTest() {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
  }

  setLights() {
    // now add some better lighting
    var ambientLight = new THREE.AmbientLight(0xf47a42);
    ambientLight.name = "ambient";
    if (this.enable_shadows) {
      //ambientLight.castShadow = true;
      //this.scene.add(new THREE.CameraHelper( ambientLight.shadow.camera ));
      //ambientLight.shadowCameraVisible = true;
    }
    this.scene.add(ambientLight);

    //add sunlight (light
    /*var directionalLight = new THREE.DirectionalLight(0xffff55, 1);
    directionalLight.position = new THREE.Vector3(100,10,-50);
    directionalLight.name='directional';
    this.scene.add(directionalLight);*/

    var light = new THREE.PointLight(0xffffff);
    light.position.set(0, 250, 0);
    /*if(this.enable_shadows){
      light.castShadow = true;
      light.shadow.camera.visible = true;
      light.shadow.camera.right     =  5;
      light.shadow.camera.left     = -5;
      light.shadow.camera.top      =  5;
      light.shadow.camera.bottom   = -5;
    }*/
    this.scene.add(light);

    /*this.SkyBox = eO._3D.Factories.SkyBoxFactory(
      "images/dawnmountain-",
      ".png",
      1200
    );
    this.SkyBox.name = "cielo";
    this.SkyBox.applyMatrix(new THREE.Matrix4().makeScale(1, 1, -1));
    this.scene.add(this.SkyBox);*/

    /*this.control = new function () {
        this.rotationSpeed = 0.001;
        this.ambientLightColor = ambientLight.color.getHex();
        //this.directionalLightColor = directionalLight.color.getHex();
    };*/
  }

  floorAndSky() {}

  handleResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
