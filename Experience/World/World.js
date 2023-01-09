import * as THREE from "three";
import Experience from "../Experience.js";

import Room from "./Room.js";
import Controls from "./Controls.js";
import Floor from "./Floor.js";
import Environment from "./Environment.js";

export default class World {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        this.resources.on("ready", () => {
            this.environment = new Environment();
            this.room = new Room();
            this.controls = new Controls();
            this.floor = new Floor();
        })

    }

    resize() {

    }

    update() {
        if (this.room) {
            this.room.update();
        }

        if (this.controls) {
            this.controls.update();
        }

    }

}