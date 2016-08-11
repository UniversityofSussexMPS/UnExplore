
var a, simElectron, molecule, human, earth, solarsystem, stars, galaxy, GAMA, CMB;

var tweenForward0, tweenForward1, tweenForward2, tweenForward3, tweenForward4, tweenForward5, tweenForward6, tweenForward7
var tweenForward8, tweenForward9, tweenForward10, tweenForward11, tweenForward12, tweenForward13, tweenForward14

function initTweens(){
	cameraZoomTween0  = new TWEEN.Tween(camera.position);
	cameraZoomTween1  = new TWEEN.Tween(camera.position);
	cameraZoomTween2  = new TWEEN.Tween(camera.position);
	cameraZoomTween3  = new TWEEN.Tween(camera.position);
	cameraZoomTween4  = new TWEEN.Tween(camera.position);
	cameraZoomTween5  = new TWEEN.Tween(camera.position);
	cameraZoomTween6  = new TWEEN.Tween(camera.position);
	cameraZoomTween7  = new TWEEN.Tween(camera.position);
	cameraZoomTween8  = new TWEEN.Tween(camera.position);
	cameraZoomTween9  = new TWEEN.Tween(camera.position);
	cameraZoomTween10 = new TWEEN.Tween(camera.position);
	cameraZoomTween11 = new TWEEN.Tween(camera.position);
	cameraZoomTween12 = new TWEEN.Tween(camera.position);
	cameraZoomTween13 = new TWEEN.Tween(camera.position);
	cameraZoomTween14 = new TWEEN.Tween(camera.position);
	cameraZoomTween15 = new TWEEN.Tween(camera.position);
	cameraZoomTween16 = new TWEEN.Tween(camera.position);
	cameraZoomTween17 = new TWEEN.Tween(camera.position);
	cameraZoomTween18 = new TWEEN.Tween(camera.position);
	cameraZoomTween19 = new TWEEN.Tween(camera.position);
	cameraZoomTween20 = new TWEEN.Tween(camera.position);
	cameraZoomTween21 = new TWEEN.Tween(camera.position);
	cameraZoomTween22 = new TWEEN.Tween(camera.position);
	cameraZoomTween23 = new TWEEN.Tween(camera.position);
	cameraZoomTween24 = new TWEEN.Tween(camera.position);
	cameraZoomTween25 = new TWEEN.Tween(camera.position);
	cameraZoomTween26 = new TWEEN.Tween(camera.position);
	cameraZoomTween27 = new TWEEN.Tween(camera.position);
	cameraZoomTween28 = new TWEEN.Tween(camera.position);
	cameraZoomTween29 = new TWEEN.Tween(camera.position);

	/************************* Molecule ***************************/
	    		
	tweenForward0 = cameraZoomTween0.to({x:0,y:0,z:2},5000)
		  .easing(TWEEN.Easing.Exponential.In)
		  .onStart(function(){
		  	scene.remove(textMesh,supMesh,boxMesh);
		  	controls.enabled = false;  
		  	message.innerHTML="Zooming out shows that this atom is one part of a molecule";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	textSprite("10  m","-15",0.7,0.0007,0)
		  	box(1.0,0)
		  	document.getElementById("right-btn").style.visibility = "hidden"


		  })
   		  .onComplete(function(){
			camera.position.z=8;
			root = new THREE.Group();
			
			loadMolecule( "models/caffeine.pdb" );
			root.position.set(32,25,0);
			scene.remove(textMesh,supMesh,boxMesh);
			scene.add( root );
			scene.add(light)
		  	textSprite("10  m","-10", 500,0.5,0)
		  	box(700.0,0)
			$("#slider").slider('value',500);
		});
	tweenForward1 = cameraZoomTween1.to({x:0,y:0,z:1000},5000)
	      .easing(TWEEN.Easing.Quartic.Out)
	      .onComplete(function(){
	      	message.innerHTML="This is a molecule";
	      	controls.enabled = true;
	      	simElectron = false;
	      	molecule = true;
			scene.remove(particleSystem);
			scene.remove(proton1,proton2,neutron1,neutron2);
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"

	      })

	tweenBackward0 =  cameraZoomTween15.to({x:0,y:0,z:2},5000)
			.easing(TWEEN.Easing.Quartic.In)
			.onStart(function(){
				addElectron();
				simElectron = true
				molecule = false
				scene.remove(textMesh,supMesh,boxMesh);
			  	textSprite("10  m","-15",0.7,0.0007,0)
			  	box(1.0,0)
			  	message.innerHTML="Zooming in shows that each atom is made up of a atomic nucleus surrounded by a cloud of electrons";
			  	document.getElementById("right-btn").style.visibility = "hidden"
			  	document.getElementById("left-btn").style.visibility = "hidden"
			})
			.onComplete(function(){
				scene.remove(root,light)

			})
	tweenBackward1 = cameraZoomTween16.to({x:0,y:0,z:0.2},5000)
			.easing(TWEEN.Easing.Exponential.Out)
			.onStart(function(){
				message.innerHTML="The atomic nucleus is made up of protons and neutrons";
				scene.remove(textMesh,supMesh,boxMesh);
				textSprite("10  m","-16",0.04,0.00004,0)
				box(0.05,0);
				document.getElementById("right-btn").style.visibility = "visible"

			})

	/************************* Human ***************************/
	
	tweenForward2 = cameraZoomTween2.to({x:0,y:0,z:100000},5000)
		.easing(TWEEN.Easing.Exponential.In)
	    .onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="There are an estimated 10<sup>27</sup> molecules in the human body";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  })
		.onComplete(function(){
			molecule = false;
			human = true;
			scene.remove(root);
			scene.remove(textMesh,supMesh,boxMesh);
			camera.position.z=0.01;
			camera.position.y=0.0;
			camera.position.x=0.0;
			
			scene.add(model)
			textSprite("10  m","0", 1.5,0.0015,0)
		  	box(2.0,0)
		});
	tweenForward3 = cameraZoomTween3.to({x:0,y:0,z:5},5000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			message.innerHTML="This is a typical size of a human";
			$("#slider").slider('value',1000);
		    controls.enabled = true; 
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
		})

	tweenBackward2 = cameraZoomTween17.to({x:0,y:0,z:0.1},5000)
		.onStart(function(){
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"			
		})
		.onComplete(function(){
			human = false;
			molecule = true;
			scene.remove(model)
			scene.add(root,light)
			camera.position.z=10000;
			camera.position.y=0.0;
			camera.position.x=0.0;
		})
	tweenBackward3 = cameraZoomTween18.to({x:0,y:0,z:1000},5000)
		.onComplete(function(){
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
		})

	/************************* Earth ***************************/

	tweenForward4 = cameraZoomTween4.to({z:100},5000)
    	.onStart(function(){
    		message.innerHTML="It would take about roughly 7,000,000 human lined up toe to toe to cover the diameter of the earth";
		  	controls.enabled = false; 
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  })
		.easing(TWEEN.Easing.Exponential.In)
		.onComplete(function(){
			human = false;
			earth = true;
			scene.remove(model)
			scene.remove(textMesh,supMesh,boxMesh);

    		scene.add(planets.earth.mesh);
			textSprite("10  m","7", 6.5,0.008,0)
		  	box(8.2,0)

    		camera.position.z=1;
		});
	tweenForward5 = cameraZoomTween5.to({x:0,y:0,z:20},5000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			$("#slider").slider('value',1500);
			controls.enabled = true; 
			message.innerHTML="The earth has mass of roughly 6 x 10<sup>24</sup> kg";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
		})

	tweenBackward4 = cameraZoomTween19.to({x:0,y:0,z:1},5000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		})
		.onComplete(function(){
			earth = false;
			human = true;
			scene.add(model);
			scene.remove(planets.earth.mesh);
			scene.remove(textMesh,supMesh,boxMesh);
			textSprite("10  m","0", 1.5,0.0015,0)
		  	box(2.0,0)
			camera.position.z=100;
			camera.position.y=0.0;
			camera.position.x=0.0;
		})
	tweenBackward5 = cameraZoomTween20.to({x:0,y:0,z:5},5000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
		})

	/************************* Solar System ***************************/

    tweenForward6 = cameraZoomTween6.to({z:400},10000)
    	.onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="The diameter of the sun is roughly 109 times the earth";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  })
		.easing(TWEEN.Easing.Exponential.In)
		.onComplete(function(){
			earth = false;
			solarsystem = true;
			scene.remove(planets.earth.mesh);
			scene.remove(light);
			scene.remove(textMesh,supMesh,boxMesh);
			planets.earth.radius = 350;
			planets.sun.radius = 0;
		    for (a in planets) {
		    	scene.add(planets[a].mesh)
		    }
		    scene.add(saturnrings);
		    add_3Dstars();
		    $("#slider").slider('value',2000);
		    solarsystem = true;
		    textSprite("10  m","9", 500,0.6,0)
		  	box(620.0,0)
		

    		camera.position.set=(0,10,0);
		});
	tweenForward7 = cameraZoomTween7.to({x:0,y:0,z:3000},20000)
		.onComplete(function(){
			$("#slider").slider('value',2500);
			controls.enabled = true; 
			message.innerHTML="This is the solar system which has a diameter of roughly 10,000 times that of our sun";
			scene.remove(textMesh,supMesh,boxMesh);
			textSprite("10  m","12", 1800,1.5,0)
		  	box(2600.0,0)
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
		});

	tweenBackward6 = cameraZoomTween21.to({x:0,y:0,z:10},5000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  	scene.remove(textMesh,supMesh,boxMesh);
		    textSprite("10  m","9", 500,0.6,0)
		  	box(620.0,0)
		  	planets.earth.radius = 0;
		})
		.onComplete(function(){
			solarsystem = false;
			earth = true;
			for (a in planets) {
		        	scene.remove(planets[a].mesh)
		    }
		    
			scene.add(light);
			scene.add(planets.earth.mesh);
			scene.remove(Stars3D)
			scene.remove(textMesh,supMesh,boxMesh);
			textSprite("10  m","7", 6.5,0.008,0)
		  	box(8.2,0)
			camera.position.z=100;
			camera.position.y=0.0;
			camera.position.x=0.0;
		})
	tweenBackward7 = cameraZoomTween22.to({x:0,y:0,z:20},10000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
		})	



	/************************* Stars ***************************/
	
	tweenForward8 = cameraZoomTween8.to({x:0,y:0,z:1000000},5000)
		.onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="Our sun is just one of many stars";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	scene.remove(textMesh,supMesh,boxMesh);
		  	textSprite("10  m","16", 600000,550,0)
		  	box(800000.0,0)
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  })
		.onComplete(function(){
			solarsystem = false;
			stars = true;
			controls.enabled = true; 
			message.innerHTML="This is our nearby stars";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
		})

	tweenBackward8 = cameraZoomTween23.to({x:0,y:0,z:3000},10000)
		.easing(TWEEN.Easing.Exponential.InOut)
		.onStart(function(){
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
			scene.remove(textMesh,supMesh,boxMesh);
			textSprite("10  m","12", 1800,1.5,0)
		  	box(2600.0,0)
			solarsystem = true;
			stars = false;
		})
		.onComplete(function(){
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
		})

	/************************* Galaxy ***************************/

	tweenForward9 = cameraZoomTween9.to({z:2000000},5000)	
		.onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="Which are all part of a galaxy called the Milky Way";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  })
		.onComplete(function(){
			stars = false;
			galaxy = true;
			scene.remove(Stars3D);
			for (a in planets) {
		        	scene.remove(planets[a].mesh)
		    }
		    solarsystem = false;
		    scene.remove(saturnrings);
		    scene.remove(textMesh,supMesh,boxMesh);
			scene.add(pGalacticSystem);
			scene.add(plane);
			textSprite("10  m","20", 500000,400,0)
		  	box(700000.0,0)
			camera.position.z=50000;
			$("#slider").slider('value',3000);
		
		})

					
	tweenForward10 = cameraZoomTween10.to({z:800000},10000)
		.onComplete(function(){
			controls.enabled = true; 
			message.innerHTML="This is our Galaxy the milky way";
			if (typeof GAMA_pos == 'undefined') {
				tween0.stop()
				tween13.to({z:29100000},3000)
				tween13.chain(tween14);
				tween13.start();
			}
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
		})

	tweenBackward9 = cameraZoomTween24.to({x:0,y:0,z:10},5000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  	planets.earth.radius=350;

		})
		.onComplete(function(){
			galaxy = false;
			stars = true;
			scene.remove(pGalacticSystem);
			scene.remove(plane);
			scene.add(Stars3D)
			var a
			for (a in planets) {
		        	scene.add(planets[a].mesh)
		    }
			camera.position.z=2000000;
			camera.position.y=0.0;
			camera.position.x=0.0;
		  	scene.remove(textMesh,supMesh,boxMesh);
		  	textSprite("10  m","16", 600000,550,0)
		  	box(800000.0,0)
		})
	tweenBackward10 = cameraZoomTween25.to({x:0,y:0,z:1000000},5000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
		})	

	/************************* GAMA data ***************************/

	tweenForward11 = cameraZoomTween11.to({z:29100000},3000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="You are now moving through the location of over 100,000 galaxies from the GAMA survey";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  })
		.onComplete(function(){
			galaxy = false;
			GAMA = true;
			camera.position.x=0;
			camera.position.y=0;
			camera.position.z=3;
			scene.remove(textMesh,supMesh,boxMesh);
			scene.remove(pGalacticSystem);
			scene.remove(plane);
			galaxy=false
			
			$("#slider").slider('value',3500);
			scene.add( GAMA_Z );
		    textSprite("10  m","24", 80,0.1,1000)
		  	box(100.0,1000)
			
	});

	tweenForward12 = cameraZoomTween12.to({z:3000},30000)
		.onComplete(function(){
			scene.remove(textMesh,supMesh,boxMesh);
			controls.enabled = true; 
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			})

	tweenBackward11 = cameraZoomTween26.to({x:0,y:0,z:10},15000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		    textSprite("10  m","24", 80,0.1,1000)
		  	box(100.0,1000)
		})
		.onComplete(function(){
			GAMA = false;
			galaxy = true;
			scene.remove(GAMA_Z);
			scene.add(pGalacticSystem);
			scene.add(plane);
			camera.position.z=8000000;
			camera.position.y=0.0;
			camera.position.x=0.0;
		  	scene.remove(textMesh,supMesh,boxMesh);
			textSprite("10  m","20", 500000,400,0)
		  	box(700000.0,0)
		})
	tweenBackward12 = cameraZoomTween27.to({x:0,y:0,z:800000},10000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
		})	

	/************************* CMB ***************************/

	tweenForward13 = cameraZoomTween13.to({z:30000},3000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
			controls.enabled = false;
			message.innerHTML = "You are now moving to the very edge of the observable universe"
			$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		})
		.onComplete(function(){
			GAMA = false;
			CMB = true;
			camera.position.x=0;
			camera.position.y=0;
			camera.position.z=3;
			scene.remove(textMesh,supMesh,boxMesh);
			scene.remove(GAMA_Z);
			
			$("#slider").slider('value',4000);
			scene.add( CMBsphere );
		    textSprite("10  m","26", 45,0.04,0)
		  	box(60,0)	
	});
	tweenForward14 = cameraZoomTween14.to({z:100},3000)
		.onComplete(function(){
			controls.enabled = true; 
			message.innerHTML="Now go forth and explore";
			function removeMessage(){message.innerHTML=""};
			setTimeout(removeMessage,3000)		
			document.getElementById("left-btn").style.visibility = "visible"
		})

	tweenBackward13 = cameraZoomTween28.to({x:0,y:0,z:1},5000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
		  	document.getElementById("left-btn").style.visibility = "hidden"
		})
		.onComplete(function(){
			CMB = false;
			GAMA = true;
			scene.remove(CMBsphere);
			scene.add(GAMA_Z);
			camera.position.z=10000;
			camera.position.y=0.0;
			camera.position.x=0.0;
		  	scene.remove(textMesh,supMesh,boxMesh);
		})
	tweenBackward14 = cameraZoomTween29.to({x:0,y:0,z:3000},5000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
		})	

}


function tweenForward(){
	//Setup all the tweens

	if(simElectron){
		tweenForward0.chain(tweenForward1);
		tweenForward0.start()
	}
	else if(molecule){
		tweenForward2.chain(tweenForward3);
		tweenForward2.start()
	}
	else if(human){
		tweenForward4.chain(tweenForward5);
		tweenForward4.start()
	}
	else if(earth){
		tweenForward6.chain(tweenForward7);
		tweenForward6.start()
	}
	else if(solarsystem){
		tweenForward8.start()
	}
	else if(stars){
		tweenForward9.chain(tweenForward10);
		tweenForward9.start()
	}
	else if(galaxy){
		tweenForward11.chain(tweenForward12);
		tweenForward11.start()
	}
	else if(GAMA){
		tweenForward13.chain(tweenForward14);
		tweenForward13.start()
	}
};
function tweenBackward(){
	//Setup all the tweens

	if(molecule){
		tweenBackward0.chain(tweenBackward1);
		tweenBackward0.start()
	}
	else if(human){
		tweenBackward2.chain(tweenBackward3);
		tweenBackward2.start()
	}
	else if(earth){
		tweenBackward4.chain(tweenBackward5);
		tweenBackward4.start()
	}
	else if(solarsystem){
		tweenBackward6.chain(tweenBackward7);
		tweenBackward6.start()
	}
	else if(stars){
		tweenBackward8.start()
	}
	else if(galaxy){
		tweenBackward9.chain(tweenBackward10);
		tweenBackward9.start()
	}
	else if(GAMA){
		tweenBackward11.chain(tweenBackward12);
		tweenBackward11.start()
	}
	else if(CMB){
		tweenBackward13.chain(tweenBackward14);
		tweenBackward13.start()
	}
};