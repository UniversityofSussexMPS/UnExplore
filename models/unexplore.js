var typeface="http://cdn.rawgit.com/ECallanan/hello-world/c2eb3129/Abscissa_Bold.js";

var  textMesh, textGeo, materials;
var firstLetter = true;
var text = "unExplore",
	height = 20,
	size = 70,
	hover = 30,
	curveSegments = 4,
	bevelThickness = 2,
	bevelSize = 1.5,
	bevelSegments = 3,
	bevelEnabled = true,
	font = typeface,
	fontWeight = "bold"; 

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

materials = [
	new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true } ), // front
	new THREE.MeshPhongMaterial( { color: 0xffffff } ) // side
];
function createText() {
	textGeo = new THREE.TextBufferGeometry( text, {
		font: font,
		size: size,
		height: height,
		curveSegments: curveSegments,
		bevelThickness: bevelThickness,
		bevelSize: bevelSize,
		bevelEnabled: bevelEnabled,
		material: 0,
		extrudeMaterial: 1
	});
	textGeo.computeBoundingBox();
	textGeo.computeVertexNormals();
	if ( ! bevelEnabled ) {
		var triangleAreaHeuristics = 0.1 * ( height * size );
		for ( var i = 0; i < textGeo.faces.length; i ++ ) {
			var face = textGeo.faces[ i ];
			if ( face.materialIndex == 1 ) {
				for ( var j = 0; j < face.vertexNormals.length; j ++ ) {
					face.vertexNormals[ j ].z = 0;
					face.vertexNormals[ j ].normalize();
				}
				var va = textGeo.vertices[ face.a ];
				var vb = textGeo.vertices[ face.b ];
				var vc = textGeo.vertices[ face.c ];
				var s = THREE.GeometryUtils.triangleArea( va, vb, vc );
				if ( s > triangleAreaHeuristics ) {
					for ( var j = 0; j < face.vertexNormals.length; j ++ ) {
						face.vertexNormals[ j ].copy( face.normal );
					}
				}
			}
		}
	}
	var centerOffset = -0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );
	textMesh = new THREE.Mesh( textGeo, materials );
	textMesh.position.x = centerOffset;
	textMesh.position.y = hover;
	textMesh.position.z = 0;
	textMesh.rotation.x = 0;
	textMesh.rotation.y = Math.PI * 2;
	
