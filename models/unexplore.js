
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
		
