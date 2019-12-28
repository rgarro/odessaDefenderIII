/**
 * Threejs es6 Game Template
 *
 * @author Rolando <rgarro@gmail.com>
 */
class Game {
  constructor() {
    this.container = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    /*this.ini_camera_x = 15;
    this.ini_camera_y = 16;
    this.ini_camera_z = 13;
    this.is_camera_set = false;
    this.cameraControl = null;
    this.show_control_gui = false;
    this.show_stats = false;
    this.ds = null; //datastats object
    this.clearColor = 0x000000;
    this.enable_shadows = true;
    this.l = new Light();
    if (typeof arguments[0] != "undefined") {
      this.setContainer(arguments[0]);
    }*/
  }

  init() {
    this.scene = new THREE.Scene();
  }
}
