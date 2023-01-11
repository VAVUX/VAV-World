import * as THREE from "three";
import Experience from "../Experience.js";

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.room = new THREE.Scene();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;

        this.setModal();
    }

    setModal() {

        this.actualRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupChild) => {
                    groupChild.castShadow = true;
                    groupChild.receiveShadow = true;
                });
            };
            // this.room.position.set(0.0, 0.0, 0.0);
            // console.log(this.scene)
        });

        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.09, 0.09, 0.09);
        this.actualRoom.rotation.y = Math.PI;
        // console.log(this.room.scene);
    }

    resize() {

    }

    update() {

    }

}