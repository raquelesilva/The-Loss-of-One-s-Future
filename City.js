let renderer = null,
    scene = null,
    camera,
    pivot = new THREE.Object3D(),
    pos = new THREE.Vector3(0, 2.5, 0),
    angle = Math.PI,
    remainingTrash = [],
    pickedUpTrash = 0;

window.onload = function init() {
    // Create the Three.js renderer
    renderer = new THREE.WebGLRenderer();
    // Set the viewport 
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#516B84");
    document.body.appendChild(renderer.domElement);

    // Create a new Three.js scene
    scene = new THREE.Scene();

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 5000);
    // camera.position.set(-60, 30, -50)
    camera.position.set(300, 300, 300)
    camera.lookAt(new THREE.Vector3(0, 0, 0))


    let controls = new THREE.OrbitControls(camera);
    controls.addEventListener('change', function () { renderer.render(scene, camera); });

    //Light
    let ambientLight = new THREE.AmbientLight(0xefffd0, 1)
    scene.add(ambientLight)

    let directionalLight = new THREE.DirectionalLight(0xefffd0, 0.2)
    directionalLight.position.set(-200, 100, 20)
    directionalLight.castShadow = true;
    scene.add(directionalLight)

    // Light Helper
    let directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 20, 0xffffff)
    scene.add(directionalLightHelper)

    // Road
    let geometry = new THREE.PlaneGeometry(150, 100);
    let material = new THREE.MeshPhongMaterial({ color: 0x171717, side: THREE.DoubleSide });
    let road = new THREE.Mesh(geometry, material);
    road.rotation.x = Math.PI / 2
    road.receiveShadow = true;
    road.castShadow = true;
    scene.add(road)

    scene.add(pivot)

    /* let cubeG = new THREE.BoxGeometry(5, 5, 5)
    let cubeM = new THREE.MeshNormalMaterial()
    let cube = new THREE.Mesh(cubeG, cubeM)
    pivot.add(cube) */

    // Floor
    createFloor()
    // Buildings
    createBuilding()

    //Park
    createPark()
    // Factory
    createFactory()

    // Trash Cans model
    let mtlTrashCan = new THREE.MTLLoader();
    mtlTrashCan.load('./models/Ecopontos.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Ecopontos.obj', function (object) {
            trashCan = object;
            trashCan.scale.set(0.015, 0.015, 0.015);
            trashCan.position.set(32, 1, 5)
            trashCan.rotation.y = - Math.PI / 2
            trash.receiveShadow = true;
            trash.castShadow = true;
            scene.add(trashCan);
        });
        /* remainingTrash.push() */
    });

    mtlTrashCan.load('./models/Ecopontos.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Ecopontos.obj', function (object) {
            trashCan = object;
            trashCan.scale.set(0.015, 0.015, 0.015);
            trashCan.position.set(-45.5, 1, -30)
            trashCan.rotation.y = - Math.PI / 2
            trash.flatShading = true
            trash.receiveShadow = true;
            trash.castShadow = true;
            scene.add(trashCan);
        });
        /* remainingTrash.push() */
    });

    let trash = new THREE.MTLLoader();
    trash.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(10, 1, 10)
            trash.flatShading = true
            trash.receiveShadow = true;
            trash.castShadow = true;
            scene.add(trash);
        });
        /* remainingTrash.push() */
    });

    trash.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(-20, 1, 15)
            trash.flatShading = true
            trash.receiveShadow = true;
            trash.castShadow = true;
            scene.add(trash);
        });
        /* remainingTrash.push() */
    });

    trash.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(-50, 1, 5)
            trash.flatShading = true
            trash.receiveShadow = true;
            trash.castShadow = true;
            scene.add(trash);
        });
        /* remainingTrash.push() */
    });

    trash.load('./models/Garbage.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Garbage.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(-57, 1, -15)
            trash.flatShading = true
            trash.receiveShadow = true;
            trash.castShadow = true;
            scene.add(trash);
        });
        /* remainingTrash.push() */
    });

    trash.load('./models/groupTrash.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/groupTrash.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(-46, 1, -30)
            trash.rotation.y = - Math.PI / 2
            trash.flatShading = true
            trash.receiveShadow = true;
            trash.castShadow = true;
            scene.add(trash);
        });
        /* remainingTrash.push() */
    });

    trash.load('./models/groupTrash.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/groupTrash.obj', function (object) {
            trash = object;
            trash.scale.set(0.017, 0.017, 0.017)
            trash.position.set(31.5, 1, 5)
            trash.rotation.y = - Math.PI / 2
            trash.flatShading = true
            trash.receiveShadow = true;
            trash.castShadow = true;
            scene.add(trash);
        });
        /* remainingTrash.push() */
    });

    let cigarett1 = new THREE.MTLLoader();
    cigarett1.load('./models/groupCigarett.mtl', function (materials) {
        materials.preload();
        let loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/groupCigarett.obj', function (object) {
            cigarett = object;
            cigarett.scale.set(0.03, 0.03, 0.03);
            cigarett.position.set(-8, 1, 9)
            cigarett.flatShading = true
            cigarett.receiveShadow = true;
            cigarett.castShadow = true;
            scene.add(cigarett);
        });
        /* remainingTrash.push() */
    });

    document.addEventListener("keydown", doKey);
    document.getElementById("remaining").innerHTML = remainingTrash.length;
    document.getElementById("pickedUp").innerHTML = pickedUpTrash;

    addTree()
    // Run the animation loop
    render();
}

//Função que adiciona uma árvore
function addTree() {
    // Log geometries/material
    let logGeometry = new THREE.CylinderGeometry(0.5, 0.5, 6)
    let logGeometry1 = new THREE.CylinderGeometry(0.5, 0.5, 8)
    let logTexture = new THREE.TextureLoader().load("./images/logTexture.png")
    let logMaterial = new THREE.MeshPhongMaterial({ map: logTexture })

    // Leafs geometry/material
    let branchGeometry = new THREE.SphereGeometry(3, 7, 10)
    let branchGeometry1 = new THREE.SphereGeometry(4, 7, 10)
    let branchMaterial = new THREE.MeshLambertMaterial({ color: 0x00BB00 })
    let branchMaterial1 = new THREE.MeshLambertMaterial({ color: 0x008000 })

    tree = new THREE.Object3D()
    //Tronco
    let log = new THREE.Mesh(logGeometry1, logMaterial)
    log.position.y = 3
    tree.add(log)
    //Folhas
    let branch = new THREE.Mesh(branchGeometry1, branchMaterial1)
    branch.position.y = 3
    log.add(branch)
    tree.position.set(1, 1, 9)
    tree.flatShading = true
    tree.receiveShadow = true;
    tree.castShadow = true;
    scene.add(tree)

    tree1 = new THREE.Object3D()
    //Tronco
    let log1 = new THREE.Mesh(logGeometry, logMaterial)
    log1.position.y = 3
    tree1.add(log1)
    //Folhas
    let branch1 = new THREE.Mesh(branchGeometry, branchMaterial)
    branch1.position.y = 3
    log1.add(branch1)
    tree1.position.set(-30, 1, 15)
    tree1.flatShading = true
    tree1.receiveShadow = true;
    tree1.castShadow = true;
    scene.add(tree1)

    tree2 = new THREE.Object3D()
    //Tronco
    let log2 = new THREE.Mesh(logGeometry1, logMaterial)
    log2.position.y = 4
    tree2.add(log2)
    //Folhas
    let branch2 = new THREE.Mesh(branchGeometry1, branchMaterial1)
    branch2.position.y = 3
    log2.add(branch2)
    tree2.position.set(-48, 1, 15)
    tree2.flatShading = true
    tree2.receiveShadow = true;
    tree2.castShadow = true;
    scene.add(tree2)

    tree3 = new THREE.Object3D()
    //Tronco
    let log3 = new THREE.Mesh(logGeometry, logMaterial)
    log3.position.y = 3
    tree3.add(log3)
    //Folhas
    let branch3 = new THREE.Mesh(branchGeometry, branchMaterial)
    branch3.position.y = 3
    log3.add(branch3)
    tree3.position.set(-54, 1, 12)
    tree3.flatShading = true
    tree3.receiveShadow = true;
    tree3.castShadow = true;
    scene.add(tree3)

    tree4 = new THREE.Object3D()
    //Tronco
    let log4 = new THREE.Mesh(logGeometry, logMaterial)
    log4.position.y = 3
    tree4.add(log4)
    //Folhas
    let branch4 = new THREE.Mesh(branchGeometry, branchMaterial)
    branch4.position.y = 3
    log4.add(branch4)
    tree4.position.set(-57, 1, -25)
    tree4.flatShading = true
    tree4.receiveShadow = true;
    tree4.castShadow = true;
    scene.add(tree4)

    tree5 = new THREE.Object3D()
    //Tronco
    let log5 = new THREE.Mesh(logGeometry1, logMaterial)
    log5.position.y = 3
    tree5.add(log5)
    //Folhas
    let branch5 = new THREE.Mesh(branchGeometry1, branchMaterial1)
    branch5.position.y = 3
    log5.add(branch5)
    tree5.position.set(-15, 1, 40)
    tree5.flatShading = true
    tree5.receiveShadow = true;
    tree5.castShadow = true;
    scene.add(tree5)

    tree6 = new THREE.Object3D()
    //Tronco
    let log6 = new THREE.Mesh(logGeometry, logMaterial)
    log6.position.y = 3
    tree6.add(log6)
    //Folhas
    let branch6 = new THREE.Mesh(branchGeometry, branchMaterial)
    branch6.position.y = 3
    log6.add(branch6)
    tree6.position.set(-48, 1, 43)
    tree6.flatShading = true
    tree6.receiveShadow = true;
    tree6.castShadow = true;
    scene.add(tree6)
}

function createBuilding() {
    let BuildingGeometry1 = new THREE.BoxGeometry(10, 20, 10, 3, 3, 3)
    let BuildingMaterial1 = new THREE.MeshPhongMaterial({ color: 0x303030 })
    let building1 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial1)
    building1.position.set(68, 10.5, 25)
    building1.flatShading = true
    building1.receiveShadow = true;
    building1.castShadow = true;
    scene.add(building1)


    let windowGeometry1 = new THREE.PlaneGeometry(2, 3)
    let windowMaterial1 = new THREE.MeshPhongMaterial({ color: 0x8ABEC2 })
    let window8 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window8.position.set(-3, 7, 5.1)
    building1.add(window8)

    let window9 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window9.position.set(0, 7, 5.1)
    building1.add(window9)

    let window10 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window10.position.set(3, 7, 5.1)
    building1.add(window10)

    let window11 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window11.position.set(-3, 3, 5.1)
    building1.add(window11)

    let window12 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window12.position.set(0, 3, 5.1)
    building1.add(window12)

    let window13 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window13.position.set(3, 3, 5.1)
    building1.add(window13)

    let window14 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window14.position.set(-3, -1, 5.1)
    building1.add(window14)

    let window15 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window15.position.set(0, -1, 5.1)
    building1.add(window15)

    let window16 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window16.position.set(3, -1, 5.1)
    building1.add(window16)

    let doorGeometry = new THREE.PlaneGeometry(2, 4)
    let doorMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff })
    let door = new THREE.Mesh(doorGeometry, doorMaterial)
    door.position.set(0, -8, 5.1)
    building1.add(door)


    let BuildingMaterial2 = new THREE.MeshPhongMaterial({ color: 0x9C5941 })
    let building2 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial2)
    building2.position.set(56, 10.5, 25)
    building2.flatShading = true
    building2.receiveShadow = true;
    building2.castShadow = true;
    scene.add(building2)


    let window20 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window20.position.set(-3, 3, 5.1)
    building2.add(window20)

    let window21 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window21.position.set(0, 3, 5.1)
    building2.add(window21)

    let window22 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window22.position.set(3, 3, 5.1)
    building2.add(window22)

    let window23 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window23.position.set(-3, -1, 5.1)
    building2.add(window23)

    let window24 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window24.position.set(0, -1, 5.1)
    building2.add(window24)

    let window25 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window25.position.set(3, -1, 5.1)
    building2.add(window25)

    let window26 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window26.position.set(-3, 7, 5.1)
    building2.add(window26)

    let window27 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window27.position.set(0, 7, 5.1)
    building2.add(window27)

    let window28 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window28.position.set(3, 7, 5.1)
    building2.add(window28)

    let door3 = new THREE.Mesh(doorGeometry, doorMaterial)
    door3.position.set(0, -8, 5.1)
    building2.add(door3)

    let BuildingGeometry3 = new THREE.BoxGeometry(10, 10, 10, 3, 3, 3)
    let building3 = new THREE.Mesh(BuildingGeometry3, BuildingMaterial1)
    building3.position.set(43, 5.5, 25)
    building3.flatShading = true
    building3.receiveShadow = true;
    building3.castShadow = true;
    scene.add(building3)

    let window17 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window17.position.set(-3, 2, 5.1)
    building3.add(window17)

    let window18 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window18.position.set(0, 2, 5.1)
    building3.add(window18)

    let window19 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window19.position.set(3, 2, 5.1)
    building3.add(window19)

    let door2 = new THREE.Mesh(doorGeometry, doorMaterial)
    door2.position.set(0, -3, 5.1)
    building3.add(door2)

    let BuildingMaterial4 = new THREE.MeshPhongMaterial({ color: 0x877663 })
    let building4 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial4)
    building4.position.set(68, 10.5, 10)
    building4.rotation.y = Math.PI
    building4.flatShading = true
    building4.receiveShadow = true;
    building4.castShadow = true;
    scene.add(building4)


    let window29 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window29.position.set(-3, 3, 5.1)
    building4.add(window29)

    let window30 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window30.position.set(0, 3, 5.1)
    building4.add(window30)

    let window31 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window31.position.set(3, 3, 5.1)
    building4.add(window31)

    let window32 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window32.position.set(-3, -1, 5.1)
    building4.add(window32)

    let window33 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window33.position.set(0, -1, 5.1)
    building4.add(window33)

    let window34 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window34.position.set(3, -1, 5.1)
    building4.add(window34)

    let window35 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window35.position.set(-3, 7, 5.1)
    building4.add(window35)

    let window36 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window36.position.set(0, 7, 5.1)
    building4.add(window36)

    let window37 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window37.position.set(3, 7, 5.1)
    building4.add(window37)

    let door4 = new THREE.Mesh(doorGeometry, doorMaterial)
    door4.position.set(0, -8, 5.1)
    building4.add(door4)

    let BuildingMaterial5 = new THREE.MeshPhongMaterial({ color: 0x9C5941 })
    let building5 = new THREE.Mesh(BuildingGeometry3, BuildingMaterial5)
    building5.position.set(56, 5.5, 10)
    building5.rotation.y = Math.PI
    building5.flatShading = true
    building5.receiveShadow = true;
    building5.castShadow = true;
    scene.add(building5)

    let window47 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window47.position.set(-3, 2, 5.1)
    building5.add(window47)

    let window48 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window48.position.set(0, 2, 5.1)
    building5.add(window48)

    let window49 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window49.position.set(3, 2, 5.1)
    building5.add(window49)

    let door6 = new THREE.Mesh(doorGeometry, doorMaterial)
    door6.position.set(0, -3, 5.1)
    building5.add(door6)

    let building6 = new THREE.Mesh(BuildingGeometry1, BuildingMaterial1)
    building6.position.set(43, 10.5, 10)
    building6.rotation.y = Math.PI
    building6.flatShading = true
    building6.receiveShadow = true;
    building6.castShadow = true;
    scene.add(building6)

    let window38 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window38.position.set(-3, 3, 5.1)
    building6.add(window38)

    let window39 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window39.position.set(0, 3, 5.1)
    building6.add(window39)

    let window40 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window40.position.set(3, 3, 5.1)
    building6.add(window40)

    let window41 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window41.position.set(-3, -1, 5.1)
    building6.add(window41)

    let window42 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window42.position.set(0, -1, 5.1)
    building6.add(window42)

    let window43 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window43.position.set(3, -1, 5.1)
    building6.add(window43)

    let window44 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window44.position.set(-3, 7, 5.1)
    building6.add(window44)

    let window45 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window45.position.set(0, 7, 5.1)
    building6.add(window45)

    let window46 = new THREE.Mesh(windowGeometry1, windowMaterial1)
    window46.position.set(3, 7, 5.1)
    building6.add(window46)

    let door5 = new THREE.Mesh(doorGeometry, doorMaterial)
    door5.position.set(0, -8, 5.1)
    building6.add(door5)
}

function createFactory() {
    let FactoryGeometry6 = new THREE.BoxGeometry(50, 20, 30, 3, 3, 3)
    let FactoryMaterial6 = new THREE.MeshPhongMaterial({ color: 0x877663 })
    let factory = new THREE.Mesh(FactoryGeometry6, FactoryMaterial6)
    factory.position.set(-8, 11, -35)
    factory.flatShading = true
    factory.receiveShadow = true;
    factory.castShadow = true;
    scene.add(factory)

    let gateGeometry = new THREE.PlaneGeometry(20, 10)
    let gateMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    let gate = new THREE.Mesh(gateGeometry, gateMaterial)
    gate.position.set(-12, -5.5, 15.1)
    gate.flatShading = true
    gate.receiveShadow = true;
    gate.castShadow = true;
    factory.add(gate)

    let gate1 = new THREE.Mesh(gateGeometry, gateMaterial)
    gate1.position.set(12, -5.5, 15.1)
    gate1.flatShading = true
    gate1.receiveShadow = true;
    gate1.castShadow = true;
    factory.add(gate1)

    let windowGeometry = new THREE.PlaneGeometry(5, 5)
    let windowMaterial = new THREE.MeshPhongMaterial({ color: 0x8ABEC2, side: THREE.DoubleSide })
    let Window = new THREE.Mesh(windowGeometry, windowMaterial)
    Window.position.set(-21, 5, 15.1)
    factory.add(Window)

    let Window1 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window1.position.set(-15, 5, 15.1)
    factory.add(Window1)

    let Window2 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window2.position.set(-9, 5, 15.1)
    factory.add(Window2)

    let Window3 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window3.position.set(-3, 5, 15.1)
    factory.add(Window3)

    let Window4 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window4.position.set(3, 5, 15.1)
    factory.add(Window4)

    let Window5 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window5.position.set(9, 5, 15.1)
    factory.add(Window5)

    let Window6 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window6.position.set(15, 5, 15.1)
    factory.add(Window6)

    let Window7 = new THREE.Mesh(windowGeometry, windowMaterial)
    Window7.position.set(21, 5, 15.1)
    factory.add(Window7)


    let fenceGeometry = new THREE.BoxGeometry(40, 5, 1.5)
    let fenceMaterial = new THREE.MeshPhongMaterial({ color: 0x303030, side: THREE.DoubleSide })
    let fence = new THREE.Mesh(fenceGeometry, fenceMaterial)
    fence.rotation.y = Math.PI / 2
    fence.position.set(-40, 2.5, -30)
    fence.flatShading = true
    fence.receiveShadow = true;
    fence.castShadow = true;
    scene.add(fence)

    let fence1 = new THREE.Mesh(fenceGeometry, fenceMaterial)
    fence1.rotation.y = Math.PI / 2
    fence1.position.set(18, 2.5, -30)
    fence1.flatShading = true
    fence1.receiveShadow = true;
    fence1.castShadow = true;
    scene.add(fence1)

    let fenceGeometry1 = new THREE.BoxGeometry(30, 5, 1.5)
    let fence2 = new THREE.Mesh(fenceGeometry1, fenceMaterial)
    fence2.position.set(-25, 2.5, -10.75)
    fence2.flatShading = true
    fence2.receiveShadow = true;
    fence2.castShadow = true;
    scene.add(fence2)

    let fenceGeometry2 = new THREE.BoxGeometry(5, 5, 1.5)
    let fence3 = new THREE.Mesh(fenceGeometry2, fenceMaterial)
    fence3.position.set(15.5, 2.5, -10.75)
    fence3.flatShading = true
    fence3.receiveShadow = true;
    fence3.castShadow = true;
    scene.add(fence3)
}

function createFloor() {
    let floorGeometry = new THREE.BoxGeometry(45, 37, 1);
    let floorMaterial = new THREE.MeshPhongMaterial({ color: 0x808080, side: THREE.DoubleSide });
    let floor1 = new THREE.Mesh(floorGeometry, floorMaterial);
    floor1.rotation.x = Math.PI / 2
    floor1.position.set(52.5, 0.5, 21)
    floor1.flatShading = true
    floor1.receiveShadow = true;
    floor1.castShadow = true;
    scene.add(floor1)

    let floorGeometry1 = new THREE.BoxGeometry(45, 43, 1);
    let floor2 = new THREE.Mesh(floorGeometry1, floorMaterial);
    floor2.rotation.x = Math.PI / 2
    floor2.position.set(52.5, 0.5, -28.5)
    floor2.flatShading = true
    floor2.receiveShadow = true;
    floor2.castShadow = true;
    scene.add(floor2)

    let floorGeometry2 = new THREE.BoxGeometry(65, 43, 1);
    let floor3 = new THREE.Mesh(floorGeometry2, floorMaterial);
    floor3.rotation.x = Math.PI / 2
    floor3.position.set(-13, 0.5, -28.5)
    floor3.flatShading = true
    floor3.receiveShadow = true;
    floor3.castShadow = true;
    scene.add(floor3)

    // Grass
    let GrassGeometry = new THREE.BoxGeometry(92, 18, 1);
    let grassMaterial = new THREE.MeshPhongMaterial({ color: 0x25661D, side: THREE.DoubleSide });
    let grass = new THREE.Mesh(GrassGeometry, grassMaterial);
    grass.rotation.x = Math.PI / 2
    grass.position.set(-26, 0.5, 41)
    grass.flatShading = true
    grass.receiveShadow = true;
    grass.castShadow = true;
    scene.add(grass)

    let GrassGeometry1 = new THREE.BoxGeometry(5, 100, 1);
    let grass1 = new THREE.Mesh(GrassGeometry1, grassMaterial);
    grass1.rotation.x = Math.PI / 2
    grass1.position.set(-73, 0.5, 0)
    grass1.flatShading = true
    grass1.receiveShadow = true;
    grass1.castShadow = true;
    scene.add(grass1)

    let GrassGeometry2 = new THREE.BoxGeometry(5, 53, 1);
    let grass2 = new THREE.Mesh(GrassGeometry2, grassMaterial);
    grass2.rotation.x = Math.PI / 2
    grass2.position.set(-57, 0.5, -23.5)
    grass2.flatShading = true
    grass2.receiveShadow = true;
    grass2.castShadow = true;
    scene.add(grass2)

    let GrassGeometry3 = new THREE.BoxGeometry(79.5, 15, 1);
    let grass3 = new THREE.Mesh(GrassGeometry3, grassMaterial);
    grass3.rotation.x = Math.PI / 2
    grass3.position.set(-19.7, 0.5, 10)
    grass3.flatShading = true
    grass3.receiveShadow = true;
    grass3.castShadow = true;
    scene.add(grass3)

    let grassGeometry4 = new THREE.BoxGeometry(15, 40, 1);
    let grass4 = new THREE.Mesh(grassGeometry4, grassMaterial);
    grass4.rotation.x = Math.PI / 2
    grass4.position.set(12.5, 0.5, 25)
    grass4.flatShading = true
    grass4.receiveShadow = true;
    grass4.castShadow = true;
    scene.add(grass4)

    let grassGeometry5 = new THREE.PlaneGeometry(25, 25);
    let grass5 = new THREE.Mesh(grassGeometry5, grassMaterial);
    grass5.position.set(6, -6, -0.6)
    grass5.flatShading = true
    grass5.receiveShadow = true;
    grass5.castShadow = true;
    floor2.add(grass5)

    // River
    let riverGeometry = new THREE.PlaneGeometry(85, 20);
    let riverMaterial = new THREE.MeshPhongMaterial({ color: 0x053A3B, side: THREE.DoubleSide });
    let river = new THREE.Mesh(riverGeometry, riverMaterial);
    river.rotation.x = Math.PI / 2
    river.position.set(-30, 0.1, 25)
    river.flatShading = true
    river.receiveShadow = true;
    river.castShadow = true;
    scene.add(river)

    let riverGeometry1 = new THREE.PlaneGeometry(15, 85);
    let riverMaterial1 = new THREE.MeshPhongMaterial({ color: 0x053A3B, side: THREE.DoubleSide });
    let river1 = new THREE.Mesh(riverGeometry1, riverMaterial1);
    river1.rotation.x = Math.PI / 2
    river1.position.set(-65, 0.1, -7.5)
    river1.flatShading = true
    river1.receiveShadow = true;
    river1.castShadow = true;
    scene.add(river1)

}

function createPark() {
    let WallGeometry = new THREE.BoxGeometry(5, 5, 1.5)
    let WallMaterial = new THREE.MeshPhongMaterial({ color: 0x303030 })
    let wall = new THREE.Mesh(WallGeometry, WallMaterial)
    wall.position.set(72.5, 2.5, -12.7)
    wall.flatShading = true
    wall.receiveShadow = true;
    wall.castShadow = true;
    scene.add(wall)

    let WallGeometry1 = new THREE.BoxGeometry(38, 5, 1.5)
    let wall1 = new THREE.Mesh(WallGeometry1, WallMaterial)
    wall1.rotation.y = Math.PI / 2
    wall1.position.set(38, 2.5, -31)
    wall1.flatShading = true
    wall1.receiveShadow = true;
    wall1.castShadow = true;
    scene.add(wall1)

    let WallGeometry2 = new THREE.BoxGeometry(27, 5, 1.5)
    let wall2 = new THREE.Mesh(WallGeometry2, WallMaterial)
    wall2.position.set(52, 2.5, -12.7)
    wall2.flatShading = true
    wall2.receiveShadow = true;
    wall2.castShadow = true;
    scene.add(wall2)

    let seesawGeometry = new THREE.BoxGeometry(2.5, 0.5, 10)
    let seesawMaterial = new THREE.MeshPhongMaterial({ color: 0xA52A2A })
    seesaw = new THREE.Mesh(seesawGeometry, seesawMaterial)
    seesaw.position.set(50, 2.25, -30)
    seesaw.flatShading = true
    seesaw.receiveShadow = true;
    seesaw.castShadow = true;
    seesaw.rotation.x = 0
    scene.add(seesaw)

    let structureGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2.5, 30)
    let structureMaterial = new THREE.MeshPhongMaterial({ color: 0x000080 })
    let structure = new THREE.Mesh(structureGeometry, structureMaterial)
    structure.position.set(50, 1.55, -30)
    structure.flatShading = true
    structure.receiveShadow = true;
    structure.castShadow = true;
    structure.rotation.z = Math.PI / 2
    scene.add(structure)

    let tunelGeometry = new THREE.CylinderGeometry(2, 2, 8.5, 30, 80, 80, true)
    let tunelMaterial = new THREE.MeshPhongMaterial({ color: 0xA52A2A, side: THREE.DoubleSide })
    let tunel = new THREE.Mesh(tunelGeometry, tunelMaterial)
    tunel.position.set(65, 3.10, -35)
    tunel.rotation.z = Math.PI / 2
    tunel.rotation.y = Math.PI / 3
    tunel.flatShading = true
    tunel.receiveShadow = true;
    tunel.castShadow = true;
    scene.add(tunel)

}

let speed = 0.01
function render() {
    pivot.position.set(pos.x, pos.y, pos.z)
    pivot.rotation.y = angle

    seesaw.rotation.x += speed
    if (seesaw.rotation.x <= -0.2) {
        speed += 0.01
    } else if (seesaw.rotation.x >= 0.2) {
        speed -= 0.01
    }

    /* let relativeOffset = new THREE.Vector3(0, 0, 30);
    // updates the offset with the object‘s global transformation matrix
    let cameraOffset = relativeOffset.applyMatrix4(pivot.matrixWorld);
    camera.position.copy(cameraOffset);

    camera.lookAt(pivot.position) */

    renderer.render(scene, camera);
    renderer.shadowMap.enabled = true;
    requestAnimationFrame(render);
}

// key handling
function doKey(event) {
    let key = event.key;
    if (pos.x > -75 && pos.x < 75 && pos.z > -50 && pos.z < 50) {
        if (key == "w") {
            pos.x += 0.5
            console.log(pos.x, pos.y, pos.z)
        }
        else if (key == "s") {
            pos.x -= 0.5
        }
        else if (key == "d") {
            pos.z += 0.5
        }
        else if (key == "a") {
            pos.z -= 0.5
        }
        else if (key == "q") {
            angle += 0.1
        }
        else if (key == "e") {
            angle -= 0.1
        }
    }
    else if (pos.x == -75) {
        pos.x = -74.5
    }
    else if (pos.x == 75) {
        pos.x = 74.5
    }
    else if (pos.z == -50) {
        pos.z = -49.5
    }
    else if (pos.z == 50) {
        pos.z = 49.5
    }
}