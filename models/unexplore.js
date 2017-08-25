
var group;
var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

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
	
	renderer = new THREE.CanvasRenderer();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);
	
	
	document.addEventListener('mousedown', onDocumentMouseDown, false);
	document.addEventListener('touchstart', onDocumentTouchStart, false);
	document.addEventListener('touchmove', onDocumentTouchMove, false);

	
	
	function onDocumentMouseDown(event) {
		event.preventDefault();
		
		document.addEventListener('mousemove', onDocumentMouseMove, false);
		document.addEventListener('mouseup', onDocumentMouseUp, false);
		document.addEventListener('mouseout', onDocumentMouseOut, false);
		
		mouseXOnMouseDown = event.clientX - windowHalfX;
		targetRotationOnMouseDown = targetRotation;
	}
	function onDocumentMouseMove(event) {
		mouseX = event.clientX - windowHalfX;
		targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown)*0.02;
	}
	function onDocumentMouseUp(event) {
		document.addEventListener('mousemove', onDocumentMouseMove, false);
		document.addEventListener('mouseup', onDocumentMouseUp, false);
		document.addEventListener('mouseout', onDocumentMouseOut, false);
	}
	function onDocumentMouseDown(event) {
		document.addEventListener('mousemove', onDocumentMouseMove, false);
		document.addEventListener('mouseup', onDocumentMouseUp, false);
		document.addEventListener('mouseout', onDocumentMouseOut, false);
	}
	function onDocumentTouchStart(event) {
		if (event.touches.length ==1) {
			event.preventDefault();
			
			mouseXOnMouseDown = event.touches[0].pageX-windowHalfX;
			targetRotationOnMouseDown = targetRotation;
		}
	}
	function onDocumentTouchMove(event) {
		if (event.touches.length == 1 ) {
			event.preventDefault();
			
			mouseX = event.touches[0].pageX-windowHalfX;
			targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown)*0.05;
		}
	}
};
titleMesh = new THREE.Mesh(geometry, materials);
titleMesh.position.x = centerOffSet;
titleMesh.position.y = 100;
titleMesh.position.z = 0;
	
titleMesh.rotation.x = 0;
titleMesh.rotation.y = Math.PI*2;
	
group = new THREE.Group();
group.add(titleMesh);
