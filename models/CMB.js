function createCMB(){
	CMBmap= textureLoader.load("../images/CMB.jpg")

	var geometry = new THREE.SphereBufferGeometry( 30, 32, 32 );
	var material = new THREE.MeshBasicMaterial( {map:CMBmap} );
	CMBsphere = new THREE.Mesh( geometry, material );
	
};
