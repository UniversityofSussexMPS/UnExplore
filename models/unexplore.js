
var titleMesh, group;


var loader = new THREE.Fontloader();
loader.load('fonts/Abscissa_Bold.js', function(font) {
	initText(font);
	animate();
});

function initText(font) {
	
	//get text from hash
	var theTitle = "unExplore";
	var hash = document.location.hash.substr(1);
	if (hash.length !== 0) {
		theTitle = hash;
	}
	var geometry = new THREE.TextGeometry(theTitle, {
		font: font,
		size: 80,
		height: 20,
		curveSegments: 2
	});
	geometry.computeBoundingBox();
	var centerOffSet = -0.5*(geometry.boundingBox.max.x-geometry.boundingBox.min.X);
	var materials = [
		new THREE.MeshPhongMaterial({color: 0x8c1717, overdraw: 0.5} ), //front
		new THREE.MeshPhongMaterial({color: 0x8c1717, overdraw: 0.5} )
	];
	
};
titleMesh = new THREE.Mesh(geometry, materials);
titleMesh.position.x = centerOffSet;
titleMesh.position.y = 100;
titleMesh.position.z = 0;
	
	
group = new THREE.Group();
group.add(titleMesh);
