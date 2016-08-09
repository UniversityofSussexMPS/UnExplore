
if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var simElectron = false;

var pGalacticSystem, Stars3D;

var  molecule, spawnerOptions;

var stats, root ,material, mesh, solarsystem, galaxy;

var tick = 0;

var camera, controls, scene, renderer, model,light;

var textMesh,supMesh,boxMesh;

var galRotDegree=0;
var galRotSpeed = 0.0005;

var clock = new THREE.Clock();

var message = document.getElementById('text')


window.onload = function(){
	document.getElementById("loading").style.visibility = "hidden"
	document.getElementById("startButton").style.visibility = "visible"
}
var preVal =0;

// Create the slider
var slider = $("#slider").slider({
	min: 0,
	max: 3500,
	step: 500, 
});

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


init();
animate();

function init() {

	scene = new THREE.Scene();
	scene.fog = new THREE.FogExp2( 0x000000, 0.0000000025 );

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( scene.fog.color );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

	var container = document.getElementById( 'container' );
	container.appendChild( renderer.domElement );

	// Create the Camera
	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.01, 1e13 );
	camera.position.set(0,0,1)


	// Set the control
	controls = new THREE.TrackballControls( camera, renderer.domElement );
	controls.minDistance = 1;


	//Create light
	light = new THREE.DirectionalLight( 0xffffff,4 );
	light.position.set( 0, 0, 10 );
	light.target.position.set(0,0,0);
	light.castShadow = true;

	// Create models
	generateGalaxy();
	generateHuman();
	create_meshes();
	
	// add the starts
	stats = new Stats();
	container.appendChild( stats.dom );


	window.addEventListener( 'resize', onWindowResize, false );
	

}
function textSprite(text,sup,pos,scale, params) {
    var font = "Helvetica",
        size = 200,
        color = "#ffffff",

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
    supMesh.position.set(pos*1.2,pos/10,0)
    textMesh.scale.set(scale,scale,scale)
    textMesh.position.x = pos
    scene.add( textMesh,supMesh);
}
 function box(scale){
 	var geometry = new THREE.BoxGeometry( scale, scale, 0 );
	var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
	var cube = new THREE.Mesh( geometry, material );
	boxMesh = new THREE.BoxHelper( cube, 0xFFFFFF );
	scene.add( boxMesh );
 }


function loadScript(url, callback)
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


function tweenCamera(){
	textSprite("10","-16",0.08,0.0001)
	box(0.1);
	loadScript("data/GAMA_data.js",addGamaData)
	document.getElementById("startButton").style.visibility = "hidden";

	addElectron();
	simElectron = true;
	message.innerHTML="This is a atomic nucleus surrounded by an electron cloud";

	//Setup all the tweens

	cameraZoomTween0 = new TWEEN.Tween(camera.position);
	cameraZoomTween1 = new TWEEN.Tween(camera.position);
	cameraZoomTween2 = new TWEEN.Tween(camera.position);
	cameraZoomTween3 = new TWEEN.Tween(camera.position);
	cameraZoomTween4 = new TWEEN.Tween(camera.position);
	cameraZoomTween5 = new TWEEN.Tween(camera.position);
	cameraZoomTween6 = new TWEEN.Tween(camera.position);
	cameraZoomTween7 = new TWEEN.Tween(camera.position);
	cameraZoomTween8 = new TWEEN.Tween(camera.position);
	cameraZoomTween9 = new TWEEN.Tween(camera.position);
	cameraZoomTween10 = new TWEEN.Tween(camera.position);
	cameraZoomTween11 = new TWEEN.Tween(camera.position);
	cameraZoomTween12 = new TWEEN.Tween(camera.position);

	// Molecule
	    		
	tween0 = cameraZoomTween0.to({x:0,y:0,z:1000},5000)
		  .easing(TWEEN.Easing.Exponential.In)
		  .delay(5000)
		  .onStart(function(){
		  	scene.remove(textMesh,supMesh,boxMesh);
		  	controls.enabled = false;  
		  	message.innerHTML="Zooming out shows that this atom is one part of a molecule";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	textSprite("10","-15",0.7,0.001)
		  	box(1.0)


		  })
   		  .onComplete(function(){
	      	simElectron = false;
			scene.remove(particleSystem);
			scene.remove(proton1,proton2,neutron1,neutron2);
			scene.remove(textMesh,supMesh,boxMesh);
			camera.position.z=8;
			root = new THREE.Group();
			
			loadMolecule( "models/caffeine.pdb" );
			root.position.set(32,25,0);
			scene.add( root );
			scene.add(light)
		  	textSprite("10","-10", 500,0.3)
		  	box(800.0)
			$("#slider").slider('value',500);
		});
	tween1 = cameraZoomTween1.to({x:0,y:0,z:500},3000)
	      .easing(TWEEN.Easing.Quartic.Out)
	      .onComplete(function(){
	      	message.innerHTML="This is a molecule";
	      	controls.enabled = true; 
	      })

	// Human
	
	tween2 = cameraZoomTween2.to({z:100000},5000)
		.easing(TWEEN.Easing.Exponential.In)
		.delay(5000)
	    .onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="There are an estimated 10<sup>27</sup> molecules in the human body";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  })
		.onComplete(function(){
			scene.remove(root);
			scene.remove(textMesh,supMesh,boxMesh);
			camera.position.z=0.01;
			camera.position.y=0.0;
			camera.position.x=0.0;
			
			scene.add(model)
		});
	tween3 = cameraZoomTween3.to({x:0,y:0,z:5},5000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			message.innerHTML="This is a typical size of a human";
			$("#slider").slider('value',1000);
		    controls.enabled = true; 
		})

	// Earth

	tween4 = cameraZoomTween4.to({z:100},5000)
    	.onStart(function(){
    		message.innerHTML="It would take about roughly 7,000,000 human lined up toe to toe to cover the diameter of the earth";
		  	controls.enabled = false; 
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  })
		.delay(5000)
		.easing(TWEEN.Easing.Exponential.In)
		.onComplete(function(){
			scene.remove(model)

    		scene.add(planets.earth.mesh);

    		camera.position.z=1;
		});
	tween5 = cameraZoomTween5.to({x:0,y:0,z:20},5000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			$("#slider").slider('value',1500);
			controls.enabled = true; 
			message.innerHTML="The earth has mass of roughly 6 x 10<sup>24</sup> kg";
		})


	// Solar system

    tween6 = cameraZoomTween6.to({z:400},10000)
    	.onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="The diameter of the sun is roughly 109 times the earth";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  })
    	.delay(5000)
		.easing(TWEEN.Easing.Exponential.In)
		.onComplete(function(){
			scene.remove(planets.earth.mesh);
			scene.remove(light);
			planets.earth.radius = 350;
			planets.sun.radius = 0;
			    var a;
			    for (a in planets) {
			    	scene.add(planets[a].mesh)
			    }
			    scene.add(saturnrings);
			    add_3Dstars();
			    $("#slider").slider('value',2000);
			    solarsystem = true;
			

    		camera.position.set=(0,10,0);
		});
	tween7 = cameraZoomTween7.to({x:0,y:0,z:2000},20000)
		.onComplete(function(){
			$("#slider").slider('value',2500);
			controls.enabled = true; 
			message.innerHTML="This is the solar system which has a diameter of roughly 10,000 times that of our sun";

		});	


	// Stars
	
	tween8 = cameraZoomTween8.to({z:1000000},5000)
		.delay(5000)	
		.onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="Our sun is just one of many stars";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  })
		.onComplete(function(){
			controls.enabled = true; 
			message.innerHTML="This is our nearby stars";
		})

	// Galaxy

	tween9 = cameraZoomTween9.to({z:2000000},5000)
		.delay(5000)	
		.onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="Which are all part of a galaxy called the Milky Way";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  })
		.onComplete(function(){
			scene.remove(Stars3D);
			for (a in planets) {
		        	scene.remove(planets[a].mesh)
		    }
		    solarsystem = false;
		    scene.remove(saturnrings);
			scene.add(pGalacticSystem);
			scene.add(plane);
			galaxy=true
			camera.position.z=50000;
			$("#slider").slider('value',3000);
			

		})

					
	tween10 = cameraZoomTween10.to({z:291000},10000)
		.onComplete(function(){
			controls.enabled = true; 
			message.innerHTML="This is our Galaxy the milky way";
			if (typeof GAMA_pos == 'undefined') {
				tween0.stop()
				function endMessage(){
					message.innerHTML="Now go forth and explore";
				}
				setTimeout(endMessage,5000)
			}

		})

	// GAMA data

	tween11 = cameraZoomTween11.to({z:29100000},3000)
		.delay(10000)
		.onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="You are now moving through the location of over 100,000 galaxies from the GAMA survey";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  })
		.onComplete(function(){
			camera.position.x=0;
			camera.position.y=0;
			camera.position.z=3;
			scene.remove(pGalacticSystem);
			scene.remove(plane);
			galaxy=false
			
			$("#slider").slider('value',3500);
			scene.add( GAMA_Z );
			
	});




	tween12 = cameraZoomTween12.to({z:3000},30000)

		.onComplete(function(){
			controls.enabled = true; 
			message.innerHTML="Now go forth and explore";
			function removeMessage(){message.innerHTML=""};
			setTimeout(removeMessage,3000)
			
			})

	

	// Chain the tweens so they work one after the other
	tween0.chain(tween1)
	tween1.chain(tween2)
	tween2.chain(tween3)
	tween3.chain(tween4)
	tween4.chain(tween5)
	tween5.chain(tween6)
	tween6.chain(tween7)
	tween7.chain(tween8)
	tween8.chain(tween9)
	tween9.chain(tween10)
	tween10.chain(tween11)
	tween11.chain(tween12)
	
	tween0.start();


};

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
	
	var delta = clock.getDelta();
	renderer.render( scene, camera );
	TWEEN.update();
}