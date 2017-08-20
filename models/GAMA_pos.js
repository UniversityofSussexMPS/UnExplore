
function addGamaData(){									
		
	
	var GAMA_geometry = new THREE.BufferGeometry();		  
		  
    GAMA_geometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array(GAMA_pos), 3 ) );
		  
	GAMA_geometry.computeBoundingSphere();
	
		  
		
	var material = new THREE.PointsMaterial( { size: 1.5, sizeAttenuation: true,map: sprite, alphaTest: 0.1, transparent:false } );
		
	GAMA_Z = new THREE.Points( GAMA_geometry, material );
	GAMA_Z.rotation.x=Math.PI/2
	GAMA_Z.rotation.z=-Math.PI/2

	
}
						
													  

				  

		
													  

				  


				  					

