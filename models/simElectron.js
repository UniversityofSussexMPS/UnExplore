

var particleSystem, proton1, proton2, neutron1, neutron2;

function addElectron(){
	// The GPU Particle system extends THREE.Object3D, and so you can use it
	// as you would any other scene graph component.	Particle positions will be
	// relative to the position of the particle system, but you will probably only need one
	// system for your whole scene
	particleSystem = new THREE.GPUParticleSystem({
		maxParticles: 250000
	});

	// options passed during each spawned
	options = {
		position: new THREE.Vector3(),
		positionRandomness: 1.0,
		velocity: new THREE.Vector3(),
		velocityRandomness: 1.0,
		color: 0xaa88ff,
		colorRandomness: 0.0,
		turbulence: 0.0,
		lifetime: 0.01,
		size: 40,
		sizeRandomness: 1
	};

	spawnerOptions = {
		spawnRate: 15000,
		horizontalSpeed: 0,
		verticalSpeed: 0,
		timeScale: 0.1
	}
	nucleon = new THREE.SphereGeometry(0.0011,20,20);
	red = new THREE.MeshBasicMaterial({
                    color:0xFF0000
    });
	white = new THREE.MeshBasicMaterial({
                    color:0xFFFFFF
    }); 
    proton1 = new THREE.Mesh(nucleon,red);
    proton1.position.set(0.001,0.001,0.0008)
    proton2 = new THREE.Mesh(nucleon,red);
    proton2.position.set(-0.001,-0.001,-0.0008)
    neutron1 = new THREE.Mesh(nucleon,white);
    neutron1.position.set(0.001,-0.001,0.0)
    neutron2 = new THREE.Mesh(nucleon,white);
    neutron2.position.set(-0.001,0.001,0.0)
	

}