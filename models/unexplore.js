
			var reCenterTimeout, typeface="http://cdn.rawgit.com/ECallanan/hello-world/c2eb3129/Abscissa_Bold.js";
			
			var winWidth = window.innerWidth;
			var WinHeight = window.innerHeight;
	
			
			//text objects
			var title = "unExplore",		//title
				height= 20,			
				size= 60,
				cS= 4,				//curve segments
				bT= 1,		//bevel thickness
				bSz= 1.5,	//bevel size
				bSg= 3,		//bevel segments
				bE= true,	//bevel enabled
				c= grey,	//colour
			    	font= undefined,
			    	fontName= typeface,
				x= "centered",
				y= -27,
				z= -14
			}
			
			
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
			
			function createText() {
				geometry= new THREE.TextGeometry(title, {
				
					fontName,
					height,
					size: s,
					curveSegments: cSg,
					bevelThickness: bT,
					bevelsize: bSz,
					bevelSegments: bSg,
					bevelEnabled: bE,
					material: 0,
					extrudeMaterial: 1
					
				});
				
				material = new THREE.MultiMaterial( [
					new THREE.MeshPhongMaterial({color: c, shading: THREE.FlatShading}),//front
					new THREE.MeshPhongMaterial({color: c, shading: THREE.SmoothShading})//side
				]);
				
				geometry.computeBoundingBox();
				geometry.computeVertexNormals();
				
				centerOffset = -0.5*(geometry.boundingBox.max.x - geometry.boundingBox.min.x);
				
	
			};
			Title = new THREE.Mesh(material, geometry)
			if(x === "centered")x = centerOffset;
				Title.position.set(x, y, z);
			
			function refreshText() {
				scene.scene.remove(Title);
				createText();
			}
			
			
		
		
