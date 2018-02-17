var root;

function loadMolecule( url ) {

			var loader = new THREE.PDBLoader();

			root = new THREE.Group();
			root.position.set(32,25,0);

			while ( root.children.length > 0 ) {

				var object = root.children[ 0 ];
				object.parent.remove( object );

			}

			loader.load( url, function ( geometry, geometryBonds, json ) {

				var boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
				var sphereGeometry = new THREE.IcosahedronGeometry( 1, 2 );

				var offset = geometry.center();
				geometryBonds.translate( offset.x, offset.y, offset.z );

				for ( var i = 0; i < geometry.vertices.length; i ++ ) {

					var position = geometry.vertices[ i ];
					var color = geometry.colors[ i ];
					var element = geometry.elements[ i ];

					var material = new THREE.MeshPhongMaterial( { color: color } );

					var object = new THREE.Mesh( sphereGeometry, material );
					object.position.copy( position );
					object.position.multiplyScalar( 75 );
					object.scale.multiplyScalar( 25 );
					root.add( object );

					var atom = json.atoms[ i ];

					var text = document.createElement( 'div' );
					text.className = 'label';
					text.style.color = 'rgb(' + atom[ 3 ][ 0 ] + ',' + atom[ 3 ][ 1 ] + ',' + atom[ 3 ][ 2 ] + ')';
					text.textContent = atom[ 4 ];

				}

				for ( var i = 0; i < geometryBonds.vertices.length; i += 2 ) {

					var start = geometryBonds.vertices[ i ];
					var end = geometryBonds.vertices[ i + 1 ];

					start.multiplyScalar( 75 );
					end.multiplyScalar( 75 );

					var object = new THREE.Mesh( boxGeometry, new THREE.MeshPhongMaterial( 0xffffff ) );
					object.position.copy( start );
					object.position.lerp( end, 0.5 );
					object.scale.set( 5, 5, start.distanceTo( end ) );
					object.lookAt( end );
					root.add( object );
					

				}


			}, function ( xhr ) {

				if ( xhr.lengthComputable ) {

					var percentComplete = xhr.loaded / xhr.total * 100;
					console.log( Math.round( percentComplete, 2 ) + '% downloaded' );

				}

			}, function ( xhr ) {

			} );

		}
