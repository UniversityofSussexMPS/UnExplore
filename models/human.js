function generateHuman(){
		var loader = new THREE.ColladaLoader();
		loader.load( "models/avatar.dae", function ( collada ) {

			model = collada.scene;
			model.position.y = -1.0;
			model.rotation.x = -Math.PI/2;
			model.updateMatrix();

		} );
}