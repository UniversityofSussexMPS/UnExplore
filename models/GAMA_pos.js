

function addGamaData(){									
		
	
	var GAMA_geometry = new THREE.BufferGeometry();		  
		  
    GAMA_geometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array(GAMA_pos), 3 ) );
		  
	GAMA_geometry.computeBoundingSphere();
	
	//make random star colour function
	var starColors = ['#9db4ff', '#a2b9ff','#a7bcff','#aabfff','#afc3ff','#baccff','#c0d1ff','#cad8ff','#e4e8ff','#edeeff','#fbf8ff','#fff9f9','#fff5ec','#fff4e8','#fff1df','#ffebd1','#ffd7ae','#ffc690','#ffbe7f','#ffbb7b'];
		  
		
	var material = new THREE.PointsMaterial( { color: starColors[Math.floor(Math.random()*starColors.length)], size: 1.5, sizeAttenuation: true,map: sprite, alphaTest: 0.1, transparent:false } );
		
	GAMA_Z = new THREE.Points( GAMA_geometry, material );
	GAMA_Z.rotation.x=Math.PI/2
	GAMA_Z.rotation.z=-Math.PI/2

	
}
						
													  

				  


				  					

