/**
 *
 *
 */
class OD3 extends Game {
  constructor() {
    super();
    this.container = "gameContainer";
    this.floorTextureUrl = "/Game/assets/floorb.png";
    this.ini_camera_x = 0;
    this.ini_camera_y = 95;
    this.ini_camera_z = 400;
    this.clearColor = 0xa3e1ff;
    this.enable_shadows = false;
    this.Mi28 = null;//
    this.showAxis = true;
    createjs.Sound.registerSound("/Game/assets/sounds/FalklandsAreBritish.mp3", 'gameTheme');
    this.themeSound = null;
    this.themeSoundVolume = 0.5;
  }

  init() {
    super.init();
  }

  startBtn(startFlag){
    this.game_is_started = startFlag;
    if(this.game_is_started){
      this.playTheme();
      this.Mi28.playHeliSound();
      this.Mi28.controll.enableControl();
    }else{
      this.pauseTheme();
      this.Mi28.stopHeliSound();
      this.Mi28.controll.disableControl();
    }
  }

  postInit() {
    var p = this;
    this.camera.position.set(
      this.ini_camera_x,
      this.ini_camera_y,
      this.ini_camera_z
    );
    this.camera.lookAt(this.scene.position);
    this.floorAndSky();
    //this.loadTest();
    this.setLights();

    this.loadMi28();
    //this.loadTargets();
    //this.loadLabels();
    //this.loadInstructions();
    if (this.showAxis) {
      this.displayAxis();
    }
  }

  displayAxis() {
    var axisHelper = new THREE.AxisHelper(5);
    this.scene.add(axisHelper);
  }

  playTheme() {
    this.themeSound = createjs.Sound.play('gameTheme',{loop:1000});
    this.themeSound.volume = this.themeSoundVolume;
  }

  pauseTheme(){
    this.themeSound.stop();
  }

  loadTest() {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
  }

  loadMi28() {
    this.Mi28 = new Mi28();
    this.Mi28.setScene(this.scene);

    this.Mi28.setGame(this);
    this.Mi28.loadModel();
    this.Mi28.setHelicopterControll();
    this.Mi28.setCamera(this.camera);
    //this.bgHelicopter.mesh.y = 500;
    this.heliFlying = true;
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

  floorAndSky() {
    this.floorTexture = new THREE.TextureLoader().load(this.floorTextureUrl);
    this.floorTexture.wrapS = this.floorTexture.wrapT = THREE.RepeatWrapping;
    this.floorTexture.repeat.set(10, 10);
    var floorMaterial = new THREE.MeshBasicMaterial({
      map: this.floorTexture,
      side: THREE.DoubleSide
    });

    var geometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
    var material = new THREE.MeshBasicMaterial({
      color: 0x8fc965,
      side: THREE.DoubleSide
    });
    var floor = new THREE.Mesh(geometry, floorMaterial);
    floor.position.y = -0.5;
    floor.rotation.x = Math.PI / 2;
    if (this.enable_shadows) {
      floor.receiveShadow = true;
    }
    this.scene.add(floor);
  }

  handleResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setControl() {
    //this.cameraControl = new THREE.OrbitControls(this.camera);
  }

  setFrontView(){
    if(this.Mi28.camera_is_set){
        this.Mi28.setCameraPosition("front");
    }else{
      throw "Camera must be set before setting front view";
    }
  }

  setBackView(){
    if(this.Mi28.camera_is_set){
        this.Mi28.setCameraPosition("back");
    }else{
      throw "Camera must be set before setting back view";
    }
  }

  setRightView(){
    if(this.Mi28.camera_is_set){
        this.Mi28.setCameraPosition("right");
    }else{
      throw "Camera must be set before setting right view";
    }
  }

  preRender() {
    //this.cameraControl.update();
    this.scene.getObjectByName("ambient").color = new THREE.Color(0x111111);
    if(this.game_is_started){
      this.Mi28.onRender();
    }
  }
}
