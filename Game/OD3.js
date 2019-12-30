class OD3 extends Game {
  constructor() {
    super();
    this.container = "gameContainer";
    this.floorTextureUrl = "/Assets/floorb.png";
  }

  init() {
    super.init();
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
    console.log("luz camara accion ..");

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

  floorAndSky() {
    // FLOOR
    console.log(this.floorTextureUrl);
    this.floorTexture = new THREE.TextureLoader().load(this.floorTextureUrl);
    this.floorTexture.wrapS = this.floorTexture.wrapT = THREE.RepeatWrapping;
    this.floorTexture.repeat.set(10, 10);
    var floorMaterial = new THREE.MeshBasicMaterial({
      map: this.floorTexture,
      side: THREE.DoubleSide
    });
    var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.name = "floor";
    floor.position.y = -0.5;
    floor.rotation.x = Math.PI / 2;
    if (this.enable_shadows) {
      floor.receiveShadow = true;
    }
    this.scene.add(floor);
    //sky
    /*  var skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
     var skyboxMaterial = new THREE.MeshBasicMaterial({ color: 0xa3e1ff, side: THREE.BackSide });
     var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
     this.scene.add(skybox);*/
  }

  handleResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setControl() {
    this.cameraControl = new THREE.OrbitControls(this.camera);
  }

  preRender() {
    this.cameraControl.update();
    this.scene.getObjectByName("ambient").color = new THREE.Color(0x111111);
  }
}
