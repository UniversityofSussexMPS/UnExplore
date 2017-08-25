
var titleMesh;

function addTitle() {
	
	var fontLoader new THREE.FontLoader();
	var font = fontLoader.load("fonts/Abscissa_Bold.js");
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
	var materials = [
		new THREE.MeshPhongMaterial({color: 0x8c1717} ), //front
		new THREE.MeshPhongMaterial({color: 0x8c1717} )//side
	];
	
	titleMesh = new THREE.Mesh(geometry, materials);
	titleMesh.position.set = (0,0,0)
}

