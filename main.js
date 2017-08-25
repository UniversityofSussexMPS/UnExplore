
// Write message if not webgl is found
if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var simElectron = false;

var pGalacticSystem, Stars3D;

var  molecule, spawnerOptions;

var stats ,material, mesh, GAMA_Z, CMBsphere;

var tick = 0;

var camera, controls, scene, renderer, model, light, ambientLight;

var textMesh,supMesh,boxMesh;

var galRotDegree=0;
var galRotSpeed = 0.0005;

var clock = new THREE.Clock();

var message = document.getElementById('text')

$('body').one('click', function() { document.getElementById("rotate-image").style.visibility = "hidden";})


window.onload = function(){
	document.getElementById("loading").style.visibility = "hidden"
}
var preVal =0;

// Create the slider to show the current scale 
var slider = $("#slider").slider({
	min: 0,
	max: 4000,
	step: 500, 
});


// Create the slider to enable zoom by updating the field of view (fov)
$( "#slider-vertical" ).slider({
	orientation: "vertical",
	min: 0,
	max: 40,
	value: 0,
	slide: function(event,ui ){
		var fov = camera.fov
		if(ui.value>preVal){
			camera.fov = fov - 2;
      		camera.updateProjectionMatrix();
		}
		else{
			camera.fov = fov + 2;
      		camera.updateProjectionMatrix();
      	}
		preVal = ui.value;

	}

});
initTitle();

function initTitle() {
	var controls, reCenterTimeout, typeface="http://cdn.rawgit.com/ECallanan/hello-world/c2eb3129/Abscissa_Bold.js";
			
			var winWidth = window.innerWidth;
			var WinHeight = window.innerHeight;
			
			//default text values
			var defaults = {
				h: 8,		//height
				s: 20,		//size
				cS: 4,		//curve segments
				bT: 1,		//bevel thickness
				bSz: 1.5,	//bevel size
				bSg: 3,		//bevel segments
				bE: true,	//bevel enabled
				c: grey,	//colour
				y: -64,
				z: -1
			}
			
			//scene object
			var scene = {
				backgroundColor: black;
				cameraX: 0,
				cameraY: 0,
				cameraZ: 950,
				pointLightIntensity: 1
			}
			
			//text objects
			var title = {
				t: "unExplore",		//title
				h: 20,				//height
				s: 60,				//size
				x: "centered",
				y: -27,
				z: -14
			}
			
			//array with all text
			var texts = [title];
			
			
			function loadAllText(texts) {
				for(t = 0; t < texts.length; t++) {
					loadFont(texts[t]);
				}
			}
			
			function loadFont(texts) {
				var fontLoader = new THREE.FontLoader();
				fontLoader.load(typeface, function( response) {
					text.f = response;
					refreshText(text);
				});
			}
			
			function createText(text) {
				var f = text.f,
					s = text.s || defaults.s,
					h = text.h || defaults.h,
					cSg = text.cSg || defaults.cSg,
					bT = text.bT || defaults.bT
					bSz = text.bSz || defaults.bSz,
					bSg = text.bSg || defaults.bSg,
					bE = text.bE || defaults.bE,
					c = text.c || defaults.c,
					y = text.y || defaults.y,
					z = text.z || defaults.z;
					
				text.geometry= new THREE.TextGeometry(text.t, {
				
					font: f,
					height: h,
					size: s,
					curveSegments: cSg,
					bevelThickness: bT,
					bevelsize: bSz,
					bevelSegments: bSg,
					bevelEnabled: bE,
					material: 0,
					extrudeMaterial: 1
					
				});
				
				text.material = new THREE.MultiMaterial( [
					new THREE.MeshPhongMaterial({color: c, shading: THREE.FlatShading}),//front
					new THREE.MeshPhongMaterial({color: c, shading: THREE.SmoothShading})//side
				]);
				
				text.geometry.computeBoundingBox();
				text.geometry.computeVertexNormals();
				
				text.centerOffset = -0.5*(text.geometry.boundingBox.max.x - text.geometry.boundingBox.min.x);
				
				if(text.x === "centered")text.x = text.centerOffset;
				
				text.mesh.position.set(text.x, y, z);
				
				//add text to scene, combine all
				scene.scene.add(text.mesh);
			}
			
			function refreshText(text) {
				scene.scene.remove(text.mesh);
				createText(text);
			}
			
			function render() {
				camera.lookAt(cameraTarget);
				renderer.clear();
				renderer.render(scene.scene, camera);
			}
			
			//tweening
			
			function bringInText() {
				var introTimeline = new TimelineMax({
					paused: true,
					delay: .5
				});
				introTimeline
				
					.to(pointLight, 1, {
						intensity: 2,
						ease: Power2.easeIn
					}, "1")
					
					.to(camera.position, 2, {
						x: 0,
						y: 0,
						z: 650
					}, "0" )
					
				.play();
			}
}
		
init();
animate();

function init() {
	/*
		function to initilize the three js scene
	*/

	// Initialize the scene
	scene = new THREE.Scene();
	scene.fog = new THREE.FogExp2( 0x000000, 0.0000000025 );

	// Setup renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( scene.fog.color );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

	// Creates containeer to show the framerate
	var container = document.getElementById( 'container' );
	container.appendChild( renderer.domElement );

	// Create the Camera
	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.01, 1e13 );
	camera.position.set(0,0,0.02)


	// Set the control
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.enableZoom = false;
	controls.enablePan = false;


	//Create light
	light = new THREE.PointLight( 0xffffff );
	light.position.set( 0, 0, 10 );
	ambientLight = new THREE.AmbientLight(0x404040, 2);

	// Create models
	loadMolecule( "models/caffeine.pdb" );
	addElectron();
	generateGalaxy();
	generateHuman();
	create_meshes();
	create_3Dstars();
	createCMB();
	
	// add the starts
	stats = new Stats();
	container.appendChild( stats.dom );


	window.addEventListener( 'resize', onWindowResize, false );

	// load in the gama data in the background so the website takes less time to load
	loadScript("data/GAMA_data.js",addGamaData)

	//Add the first model to the scene
	scene.add(proton1,proton2,neutron1,neutron2);
	scene.add(light, ambientLight);
	scene.add(particleSystem)
	simElectron = true;
	message.innerHTML="This is a Helium nucleus surrounded by a cloud of electrons";

	//Initalize all the tweens
	initTweens();
	

}
function textSprite(sup,scale, z=0,larger=false) {
	/*
	 function to create text to show size of the current model
	 inputs:
	 sup: power of 10 of that level
	 scale: size of the text needed at that level
	 z: offset of the text along the z axis
	*/

    var font = "Helvetica",
        size = 200,
        color = "#ffffff",
        text = "10  m"
		font = "bold " + size + "px " + font;

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = font;
    var supCanvas = document.createElement('canvas');
    var supContext = supCanvas.getContext('2d');
    supContext.font = font;

    // get size data (height depends only on font size)
    var metrics = context.measureText(text),
        textWidth = metrics.width;
    var supMetrics = context.measureText(sup),
        supWidth = supMetrics.width;

    canvas.width = textWidth;
    canvas.height = size + 3;
    supCanvas.width = supWidth + 3;
    supCanvas.height = size + 3;

    context.font = font;
    context.fillStyle = color;
    context.fillText(text, 0, size + 3);
    supContext.font = font;
    supContext.fillStyle = color;
    supContext.fillText(sup, 0, size + 3);


    // canvas contents will be used for a texture
    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    var supTexture = new THREE.Texture(supCanvas);
    supTexture.needsUpdate = true;


    textMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(canvas.width, canvas.height),
    new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide
    }));
    supMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(supCanvas.width, supCanvas.height),
    new THREE.MeshBasicMaterial({
        map: supTexture,
        side: THREE.DoubleSide
    }));
    supMesh.scale.set(scale/2,scale/2,scale/2)
    supMesh.position.set(scale*1e3,scale*1e2,z)
    textMesh.scale.set(scale,scale,scale)
    textMesh.position.x = scale*1e3;
    textMesh.position.z = z;
    scene.add( textMesh,supMesh);
    if(larger)
   		box(scale*1.5e3,z)
   	else
   		box(scale*1e3,z)
}
 function box(scale,z=0){
 	/*
		function to create a box around the model to show the scale
		scale: size of the box
		z: offset of the box along the z axis
 	*/
 	var geometry = new THREE.BoxGeometry( scale, scale, 0 );
	var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
	var cube = new THREE.Mesh( geometry, material );
	boxMesh = new THREE.BoxHelper( cube, 0xFFFFFF );	
	boxMesh.position.z = z;
	scene.add( boxMesh );
 }


function loadScript(url, callback)
/*
	function to load scripts 
*/
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	// Make sure the document doesn't scroll
	document.body.scrollTop = document.body.scrollLeft = 0;

	requestAnimationFrame( animate );

	controls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true

	if( solarsystem){
		update_positions();
	}
	if(galaxy){
		GalaxyRotate();
	}
	stats.update();


	if(simElectron){
		var delta = clock.getDelta() * spawnerOptions.timeScale;
		tick += delta;

		if (tick < 0) tick = 0;

		if((delta > 0) & (simElectron)){

			for (var x = 0; x < spawnerOptions.spawnRate * delta; x++) {
					particleSystem.spawnParticle(options);
				}
		}
		particleSystem.update(tick);
	}

	render();

}

function render() {

	renderer.render( scene, camera );
	TWEEN.update();
}
