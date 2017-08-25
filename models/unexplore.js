
var material = new THREE.MeshPhongMaterial({
	color: 0x8c1717
});
var textGeom = new THREE.TextGeometry('unExplore', {
	font: 'abscissa_bold'
});
var titleMesh = new THREE.Mesh(textGeom, material);
