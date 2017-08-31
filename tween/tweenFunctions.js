
var a, simElectron, molecule, human, earth, solarsystem, stars, galaxy, GAMA, CMB;

var tweenForward0, tweenForward1, tweenForward2, tweenForward3, tweenForward4, tweenForward5, tweenForward6, tweenForward7
var tweenForward8, tweenForward9, tweenForward10, tweenForward11, tweenForward12, tweenForward13, tweenForward14

function initTweens(){
	/*
		function to initilize all the tweens which is called at the start of setting up the scene
	*/

	//Setup all the tweens in position
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
	cameraZoomTween30 = new TWEEN.Tween(camera.position);
	cameraZoomTween31 = new TWEEN.Tween(camera.position);
	cameraZoomTween32 = new TWEEN.Tween(camera.position);
	cameraZoomTween33 = new TWEEN.Tween(camera.position);
	
	
	/************************* Molecule ***************************/
	    		
	tweenForward0 = cameraZoomTween0.to({x:0,y:0,z:2},10000)
		  .easing(TWEEN.Easing.Exponential.In)
		  .onStart(function(){
		  	scene.remove(textMesh,supMesh,boxMesh); // This removes the scale and box
		  	controls.enabled = false;  // This disables the controls
		  	message.innerHTML="Zooming out, we can see this is part of a larger molecule";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	textSprite("-15",0.000004);
			//box(0.005);
			setTimeout(function(){scene.remove(textMesh,supMesh,boxMesh); textSprite("-10",0.0004,true)},3000); //box(1.0)},3000)
		  	document.getElementById("right-btn").style.visibility = "visible"


		  })
   		  .onComplete(function(){
   		  	$("#slider").slider('value',500);
			camera.position.z=8;
			scene.remove(textMesh,supMesh,boxMesh);
			scene.add( root );
			scene.add(light, ambientLight)
		  	textSprite("-9",0.5,true);
		  	//box(700.0)
		});
	tweenForward1 = cameraZoomTween1.to({x:0,y:0,z:1000},5000)
	      .easing(TWEEN.Easing.Quartic.Out)
	      .onComplete(function(){
	      	message.innerHTML="This is a caffeine molecule";
	      	controls.enabled = true;
	      	simElectron = false;
	      	molecule = true;
			scene.remove(particleSystem);
			scene.remove(proton1,proton2,neutron1,neutron2)
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
	      })

	tweenBackward0 =  cameraZoomTween15.to({x:0,y:0,z:2},5000)
			.easing(TWEEN.Easing.Quartic.In)
			.onStart(function(){
				controls.enabled = false; 
				scene.add(particleSystem);
				scene.add(proton1,proton2,neutron1,neutron2)
				molecule = false
			  	textSprite("-10",0.0004,true);
			  	////box(1.0);
			  	message.innerHTML="Zooming in shows that each atom is made up of a atomic nucleus surrounded by a cloud of electrons";
			  	document.getElementById("right-btn").style.visibility = "hidden"
			  	document.getElementById("left-btn").style.visibility = "hidden"
			})
			.onComplete(function(){
				$("#slider").slider('value');;
				scene.remove(root,light, ambientLight)
			})
	tweenBackward1 = cameraZoomTween16.to({x:0,y:0,z:0.02},5000)
			.easing(TWEEN.Easing.Exponential.Out)
			.onStart(function(){
				message.innerHTML="The atomic nucleus is made up of protons and neutrons";
				scene.remove(textMesh,supMesh,boxMesh);
				textSprite("-15",0.000004,0)
				//box(0.005)
				document.getElementById("right-btn").style.visibility = "visible"

			})
			.onComplete(function(){
				controls.enabled = true; 
				scene.remove(textMesh,supMesh,boxMesh);
			})

	/************************* Human ***************************/
	
	tweenForward2 = cameraZoomTween2.to({x:0,y:0,z:100000},5000)
		.easing(TWEEN.Easing.Exponential.In)
	    .onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="There are approximately 10<sup>27</sup> molecules like this in the human body";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  })
		.onComplete(function(){
			$("#slider").slider('value',1000);
			molecule = false;
			human = true;
			scene.remove(root);
			camera.position.z=0.01; // reset the position of the camera
			camera.position.y=0.0;
			camera.position.x=0.0;
			scene.add(model)
			textSprite("0",0.0015,true);
		  	//box(2.0,0)
		});
	tweenForward3 = cameraZoomTween3.to({x:0,y:0,z:5},5000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			message.innerHTML="This is the size of an average adult human";
		    controls.enabled = true; 
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
		})

	tweenBackward2 = cameraZoomTween17.to({x:0,y:0,z:0.1},5000)
		.onStart(function(){
			controls.enabled = false; 
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"			
		  	message.innerHTML="Zooming in we can see that this person has a caffeine molecule on their clothing";
		})
		.onComplete(function(){
			$("#slider").slider('value',500);
			human = false;
			molecule = true;
			scene.remove(model)
			scene.add(root,light, ambientLight)
		  	textSprite("-9",0.5,true);
		  	//box(700.0);
			camera.position.z=10000;
			camera.position.y=0.0;
			camera.position.x=0.0;
		})
	tweenBackward3 = cameraZoomTween18.to({x:0,y:0,z:1000},5000)
		.onComplete(function(){
			message.innerHTML="The caffeine molecule is made up of many different types of atoms";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
			controls.enabled = true; 
		})

	/************************* Earth ***************************/

	tweenForward4 = cameraZoomTween4.to({x:0,y:0,z:100},5000)
    	.onStart(function(){
    		message.innerHTML="It would take about roughly 7,000,000 humans lined up toe to toe to equal the diameter of the Earth";
		  	controls.enabled = false; 
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  })
		.easing(TWEEN.Easing.Exponential.In)
		.onComplete(function(){
			$("#slider").slider('value',1500);
			human = false;
			earth = true;
			scene.remove(model)
    		scene.add(planets.earth.mesh);
			textSprite("7",0.008);
		  	//box(8.2);

    		camera.position.z=1;
		});
	tweenForward5 = cameraZoomTween5.to({x:0,y:0,z:20},5000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			controls.enabled = true; 
			message.innerHTML="The Earth has mass of roughly 6 x 10<sup>24</sup> kg";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
		})

	tweenBackward4 = cameraZoomTween19.to({x:0,y:0,z:1},5000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
			controls.enabled = false; 
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  	message.innerHTML="Zooming into the Earth we can see the typical size of a human";
		})
		.onComplete(function(){
			$("#slider").slider('value',1000);
			earth = false;
			human = true;
			scene.add(model);
			scene.remove(planets.earth.mesh);
			textSprite("0",0.0015,true);
		  	//box(2.0);
			camera.position.z=100;
			camera.position.y=0.0;
			camera.position.x=0.0;
		})
	tweenBackward5 = cameraZoomTween20.to({x:0,y:0,z:5},5000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			message.innerHTML="A human is about 1/7,000,000<sup>th</sup> the size of the Earth";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
			controls.enabled = true; 
		})

	/************************* Solar System ***************************/

    tweenForward6 = cameraZoomTween6.to({x:0,y:0,z:400},10000)
    	.onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="The Sun's diameter is roughly 109 times the Earth's";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  })
		.easing(TWEEN.Easing.Exponential.In)
		.onComplete(function(){
			$("#slider").slider('value',2000);
			earth = false;
			solarsystem = true;
			scene.remove(planets.earth.mesh);
			scene.remove(light, ambientLight);
			planets.earth.radius = 350;
			planets.sun.radius = 0;
		    for (a in planets) {
		    	scene.add(planets[a].mesh)
		    }
		    scene.add(saturnrings);
		    scene.add(Stars3D);
		    solarsystem = true;
		    textSprite("9",0.6);
		  	//box(620.0);
    		camera.position.set=(0,10,0);
    		setTimeout(function(){scene.remove(textMesh,supMesh,boxMesh); textSprite("12",1.5,true);},10000) //box(2600.0);},10000)
		});
	tweenForward7 = cameraZoomTween7.to({x:0,y:0,z:3000},20000)
		.onComplete(function(){
			controls.enabled = true; 
			message.innerHTML="This is the Solar System, which has a diameter of roughly 10,000 times that of our Sun"
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
		});

	tweenBackward6 = cameraZoomTween21.to({x:0,y:0,z:0},5000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
			controls.enabled = false; 
			message.innerHTML="The Solar System contains 8 planets; Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune. (Sorry, Pluto isn't a planet!)";
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		    textSprite("9", 0.6);
		  	//box(620.0);
		  	planets.earth.radius = 0;
		})
		.onComplete(function(){
			$("#slider").slider('value',1500);
			solarsystem = false;
			earth = true;
			for (a in planets) {
		        	scene.remove(planets[a].mesh)
		    }
		    
			scene.add(light, ambientLight);
			scene.add(planets.earth.mesh);
			scene.remove(Stars3D)
			scene.remove(textMesh,supMesh,boxMesh);
			textSprite("7",0.008);
		  	//box(8.2);
			camera.position.z=100;
			camera.position.y=0.0;
			camera.position.x=0.0;
		})
	tweenBackward7 = cameraZoomTween22.to({x:0,y:0,z:20},10000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			message.innerHTML="The Sun is so large 1,300,000 Earth's could fit inside it";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
			controls.enabled = true; 
		})	



	/************************* Stars ***************************/
	
	tweenForward8 = cameraZoomTween8.to({x:0,y:0,z:1000000},5000)
		.onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="Our Sun is just one of many stars, nearly all of which have a solar system";
		  	$("#slider-vertical").slider('value',0);
		  	$("#slider").slider('value',2500);
		  	camera.fov =50;
		  	textSprite("16", 550,true);
		  	//box(800000.0);
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  })
		.onComplete(function(){
			solarsystem = false;
			stars = true;
			controls.enabled = true; 
			message.innerHTML="These are our nearby stars";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
		})

	tweenBackward8 = cameraZoomTween23.to({x:0,y:0,z:3000},10000)
		.easing(TWEEN.Easing.Exponential.InOut)
		.onStart(function(){
			controls.enabled = false; 
			$("#slider").slider('value',2000);
			message.innerHTML="The closest star to the Sun is 4 x 10<sup>16</sup> m away, that's 2.23 light years";
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
			textSprite("12", 1.5,true);
		  	//box(2600.0);
			solarsystem = true;
			stars = false;
		})
		.onComplete(function(){
			message.innerHTML="The Solar System containing the Sun and Earth is just one of many in the Milky Way";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
			controls.enabled = true; 
		})

	/************************* Galaxy ***************************/

	tweenForward9 = cameraZoomTween9.to({z:2000000},5000)	
		.onStart(function(){
		  	controls.enabled = false; 
		  	message.innerHTML="All of these stars are apart of a galaxy called the Milky Way";
		  	$("#slider-vertical").slider('value',0);
		  	camera.fov =50;
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  })
		.onComplete(function(){
			$("#slider").slider('value',3000);
			stars = false;
			galaxy = true;
			scene.remove(Stars3D);
			for (a in planets) {
		        	scene.remove(planets[a].mesh)
		    }
		    solarsystem = false;
		    scene.remove(saturnrings);
			scene.add(pGalacticSystem);
			scene.add(plane);
			textSprite("20", 400,true);
		  	//box(700000.0);
		  	camera.position.x=0
		  	camera.position.y=0
			camera.position.z=50000;
		})

					
	tweenForward10 = cameraZoomTween10.to({x:0,y:0,z:800000},10000)
		.onComplete(function(){
			controls.enabled = true; 
			message.innerHTML="This is our Galaxy the Milky Way";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
		})

	tweenBackward9 = cameraZoomTween24.to({x:0,y:0,z:0},5000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
			controls.enabled = false; 
			message.innerHTML="The Milky Way has about 400 billion stars within it";
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		  	planets.earth.radius=350;

		})
		.onComplete(function(){
			$("#slider").slider('value',2500);
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
		  	textSprite("16",550,true);
		  	//box(800000.0);
		})
	tweenBackward10 = cameraZoomTween25.to({x:0,y:0,z:1000000},5000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			message.innerHTML="This is a collection of stars within our local neighbourhood";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
			controls.enabled = true; 
		})	

	/************************* GAMA data ***************************/

	tweenForward11 = cameraZoomTween11.to({x:0,y:0,z:29100000},3000)
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
			$("#slider").slider('value',3500);
			galaxy = false;
			GAMA = true;
			camera.position.x=0;
			camera.position.y=0;
			camera.position.z=3;
			scene.remove(pGalacticSystem);
			scene.remove(plane);
			galaxy=false
			scene.add( GAMA_Z );
		    textSprite("24", 0.1,1000,true)
		  	//box(100.0,1000)
			
	});

	tweenForward12 = cameraZoomTween12.to({x:0,y:0,z:3000},30000)
		.onComplete(function(){
			scene.remove(textMesh,supMesh,boxMesh);
			controls.enabled = true; 
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
			})

	tweenBackward11 = cameraZoomTween26.to({x:0,y:0,z:0},15000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
			controls.enabled = false; 
			message.innerHTML="The nearest galaxy is Andromeda, it's about 10<sup>22</sup> m away from Earth, that's 11 x 10<sup>5</sup> light years";
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		    textSprite("24",0.1,1000,true)
		  	//box(100.0,1000)
		})
		.onComplete(function(){
			$("#slider").slider('value',3000);
			GAMA = false;
			galaxy = true;
			scene.remove(GAMA_Z);
			scene.add(pGalacticSystem);
			scene.add(plane);
			camera.position.z=8000000;
			camera.position.y=0.0;
			camera.position.x=0.0;
			scene.remove(textMesh,supMesh,boxMesh);
			textSprite("20", 400);
		  	//box(700000.0);
		})
	tweenBackward12 = cameraZoomTween27.to({x:0,y:0,z:800000},10000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			message.innerHTML="Our galaxy, the Milky Way has a estimated mass of 6 x 10<sup>42</sup> kg";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
			controls.enabled = true; 
		})	

	/************************* CMB ***************************/

	tweenForward13 = cameraZoomTween13.to({x:0,y:0,z:30000},3000)
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
			scene.remove(GAMA_Z);
			
			$("#slider").slider('value',4000);
			scene.add( CMBsphere );
		    textSprite("26",0.07,true);
		  	//box(60);	
	});
	tweenForward14 = cameraZoomTween14.to({x:0,y:0,z:100},3000)
		.onComplete(function(){
			controls.enabled = true; 
			message.innerHTML="This is a map of the Cosmic Microwave Background (CMB) radiation";
			document.getElementById("left-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
		})

	tweenBackward13 = cameraZoomTween28.to({x:0,y:0,z:0},5000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
			controls.enabled = false; 
			message.innerHTML="The CMB tells us about the distribution of matter in the universe";
		  	document.getElementById("left-btn").style.visibility = "hidden"
		})
		.onComplete(function(){
			$("#slider").slider('value',3500);
			CMB = false;
			GAMA = true;
			scene.remove(CMBsphere);
			scene.add(GAMA_Z);
			camera.position.z=10000;
			camera.position.y=0.0;
			camera.position.x=0.0;
		})
	tweenBackward14 = cameraZoomTween29.to({x:0,y:0,z:3000},5000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			message.innerHTML="Although the GAMA survey is large, it is only a small fraction of the observable universe";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
			controls.enabled = true; 
		})	

 /********************** Tween functions when GAMA is not loaded **********************/


 	tweenForwardNoGAMA1 = cameraZoomTween30.to({x:0,y:0,z:29100000},3000)
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
			galaxy = false;
			CMB = true;
			camera.position.x=0;
			camera.position.y=0;
			camera.position.z=3;
			scene.remove(pGalacticSystem);
			scene.remove(plane)
			
			$("#slider").slider('value',4000);
			scene.add( CMBsphere );
		    textSprite("26", 0.04,true);
		  	//box(60);	
	});
	tweenForwardNoGAMA2 = cameraZoomTween31.to({x:0,y:0,z:100},3000)
		.onComplete(function(){
			controls.enabled = true; 
			message.innerHTML="This is a map of the Cosmic Microwave Background (CMB) radiation";
			document.getElementById("left-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
		})

 	tweenBackwardNoGAMA1 = cameraZoomTween32.to({x:0,y:0,z:0},15000)
		.easing(TWEEN.Easing.Exponential.In)
		.onStart(function(){
			controls.enabled = false; 
			message.innerHTML="The nearest galaxy is Andromeda, it is about 10<sup>22</sup> m away from Earth, that's 11 x 10<sup>5</sup> light years";
		  	document.getElementById("right-btn").style.visibility = "hidden"
		  	document.getElementById("left-btn").style.visibility = "hidden"
		})
		.onComplete(function(){
			$("#slider").slider('value',3000);
			CMB = false;
			galaxy = true;
			scene.remove(CMBsphere);
			scene.add(pGalacticSystem);
			scene.add(plane);
			camera.position.z=8000000;
			camera.position.y=0.0;
			camera.position.x=0.0;
			textSprite("20",400);
		  	//box(700000.0);
		})
	tweenBackwardNoGAMA2 = cameraZoomTween33.to({x:0,y:0,z:800000},10000)
		.easing(TWEEN.Easing.Exponential.Out)
		.onComplete(function(){
			message.innerHTML="Our galaxy, the Milky Way has a estimated mass of 6 x 10<sup>42</sup> kg";
			document.getElementById("left-btn").style.visibility = "visible"
			document.getElementById("right-btn").style.visibility = "visible"
			scene.remove(textMesh,supMesh,boxMesh);
			controls.enabled = true; 
		})	


}


function tweenForward(){
	/*
		This is the function which is called when the back button is pressed
		starting a zooming out tween depending on what scale we are currently at.
	*/
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
		if (typeof GAMA_pos == 'undefined'){
			tweenForwardNoGAMA1.chain(tweenForwardNoGAMA2);
			tweenForwardNoGAMA1.start()
		}
		else{
			tweenForward11.chain(tweenForward12);
			tweenForward11.start()
		}
	}
	else if(GAMA){
		tweenForward13.chain(tweenForward14);
		tweenForward13.start()
	}
};
function tweenBackward(){
	/*
		This is the function which is called when the back button is pressed
		starting a zooming in tween depending on what scale we are currently at.
	*/
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
		if (typeof GAMA_pos == 'undefined'){
			tweenBackwardNoGAMA1.chain(tweenBackwardNoGAMA2);
			tweenBackwardNoGAMA1.start()
		}
		else{
			tweenBackward13.chain(tweenBackward14);
			tweenBackward13.start()
		}
	}
};
