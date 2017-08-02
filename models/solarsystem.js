
var WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight;

var textureLoader = new THREE.TextureLoader();


var planets = {},
     cloudearthmesh, saturnrings;
var sprite = textureLoader.load( "textures/ball.png" );
planets.sun  = {
    name: "Sun",
    x: WIDTH * 0.5,
    z: HEIGHT * 0.5,
    radius: 470,
    speed: 0.2,
    degree: Math.random() * 1000,
    radian: 0,
    planetSize: 300,
    planetColor: 10066329,
    planetTexture: textureLoader.load("images/solarsystem/sun.jpg")
}
planets.moon = {
    name: "Moon",
    x: WIDTH * 0.5,
    z: HEIGHT * 0.5,
    radius: 20,
    speed: 1.0,
    degree: Math.random() * 1000,
    radian: 0,
    planetSize: 0.5,
    planetColor: 10066329,
    planetTexture: textureLoader.load("images/solarsystem/moonmap.jpg")
};
planets.mercury = {
    name: "Mercury",
    x: WIDTH * 0.5,
    z: HEIGHT * 0.5,
    radius: 350,
    speed: 0.4,
    degree: Math.random() * 1000,
    radian: 0,
    planetSize: 2,
    planetColor: 10066329,
    planetTexture: textureLoader.load("images/solarsystem/mercurymap.jpg")
};
planets.venus = {
    name: "Wenus",
    x: WIDTH * 0.5,
    z: HEIGHT * 0.5,
    radius: 400,
    speed: 0.3,
    degree: Math.random() * 1000,
    radian: 0,
    planetSize: 4,
    planetColor: 12551737,
    planetTexture: textureLoader.load("images/solarsystem/venusmap.jpg")
};
planets.earth = {
    name: "Earth",
    x: WIDTH * 0.5,
    z: HEIGHT * 0.5,
    radius: 0,
    speed: 0.2,
    degree: 210,
    radian: 0,
    planetSize: 4,
    planetColor: 26316,
    planetTexture: textureLoader.load("images/solarsystem/earthmap1k.jpg"),
    cloudTexture: textureLoader.load("images/solarsystem/earth_clouds_1024.png")
};
planets.mars = {
    name: "Mars",
    x: WIDTH * 0.5,
    z: HEIGHT * 0.5,
    radius: 800,
    speed: 0.1,
    degree: Math.random() * 1000,
    radian: 0,
    planetSize: 3,
    planetColor: 11158016,
    planetTexture: textureLoader.load("images/solarsystem/mars_1k_color.jpg")
};
planets.jupiter = {
    name: "Jupiter",
    x: WIDTH * 0.5,
    z: HEIGHT * 0.5,
    radius: 1000,
    speed: 0.06,
    degree: 252,
    radian: 0,
    planetSize: 20,
    planetColor: 14724719,
    planetTexture: textureLoader.load("images/solarsystem/jupitermap.jpg")
};
planets.saturn = {
    name: "Saturn",
    x: WIDTH * 0.5,
    z: HEIGHT * 0.5,
    radius: 1200,
    speed: 0.03,
    degree:  200,
    radian: 0,
    planetSize: 10,
    planetColor: 14724719,
    planetTexture: textureLoader.load("images/solarsystem/saturnmap.jpg"),
    ringsTexture: textureLoader.load("images/solarsystem/saturn-rings.png")
};
planets.uran = {
    name: "Uran",
    x: WIDTH * 0.5,
    z: HEIGHT * 0.5,
    radius: 1300,
    speed: 0.05,
    degree: Math.random() * 1000,
    radian: 0,
    planetSize: 5,
    planetColor: 14724719,
    planetTexture: textureLoader.load("images/solarsystem/uranusmap.jpg")
};
planets.neptun = {
    name: "Neptun",
    x: WIDTH * 0.5,
    z: HEIGHT * 0.5,
    radius: 1400,
    speed: 0.03,
    degree: Math.random() * 1000,
    radian: 0,
    planetSize: 5,
    planetColor: 14724719,
    planetTexture: textureLoader.load("images/solarsystem/neptunemap.jpg")
};
function add_stars(){

    
    var particles = 2000;
    var geometry = new THREE.BufferGeometry();
    var positions = new Float32Array( particles * 3 );


    var rnd = Math.random() * particles;

    var offset = 2./particles
    var increment = Math.PI * (3. - Math.sqrt(5.));

        
        

    for ( var i = 0; i < positions.length; i += 3 ) {

        // positions
        //var x = radius*Math.cos(theta)*Math.sin(phi) ;
        //var y = radius*Math.sin(theta)*Math.sin(phi);
        //var z = radius*Math.cos(phi);

        var y = ((i/3 * offset) - 1) + (offset / 2);
        var r = Math.sqrt(1 - Math.pow(y,2))

        var phi = ((i/3 + rnd) % particles) * increment;

        var x = Math.cos(phi) * r;
        var z = Math.sin(phi) * r;

        positions[ i ]     = x*2000;
        positions[ i + 1 ] = y*2000;
        positions[ i + 2 ] = z*2000;
        
    }
    geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
    //geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
    geometry.computeBoundingSphere();
    //
    //set up colors for stars
    var  starColors = ['#9db4ff', '#a2b9ff','#a7bcff','#aabfff','#afc3ff','#baccff','#c0d1ff','#cad8ff','#e4e8ff','#edeeff','#fbf8ff','#fff9f9','#fff5ec','#fff4e8','#fff1df','#ffebd1','#ffd7ae','#ffc690','#ffbe7f','#ffbb7b'];
    //
    var material = new THREE.PointsMaterial( { color: starColors[Math.floor(Math.random()*starColors.length)], size: 10, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
    Stars2D = new THREE.Points( geometry, material );
    scene.add( Stars2D );



}
function create_meshes() {
    var d;
    for (d in planets) {
        if (planets.hasOwnProperty(d)) {
            var g = new THREE.SphereGeometry(planets[d].planetSize, 25, 25);
            
            if (planets[d].name=="Sun"){

                var e = new THREE.MeshBasicMaterial({
                    map: planets[d].planetTexture
                });

                var sun = new THREE.PointLight( 0xffffff, 5, 2000, 1 );

                sun.add(new THREE.Mesh(g, e));
                var c = sun;

                
            }
            else{
                var e = new THREE.MeshLambertMaterial({
                    map: planets[d].planetTexture,
                });
                var c = new THREE.Mesh(g, e);

            }

            
            //c.rotation.x =  Math.PI / 2;
            planets[d].mesh = c;
            if (planets[d].cloudTexture) {
                var f = new THREE.SphereGeometry(8.1, 16, 16);
                var h = new THREE.MeshLambertMaterial({
                    map: planets[d].cloudTexture,
                    transparent: true
                });
                var k = new THREE.Mesh(f, h);
                k.rotation.x = Math.PI / 2;
                cloudearthmesh = k
            }
            if (planets[d].ringsTexture) {
                var j = new THREE.TorusGeometry(25, 5, 2, 32, 2 * Math.PI);
                var b = new THREE.MeshLambertMaterial({
                    map: planets[d].ringsTexture,
                    transparent: true,
                    opacity: 0.6
                });
                var a = new THREE.Mesh(j, b);
                a.rotation.x = Math.PI /2;
                saturnrings = a
            }
        }
    }
    
}

function update_positions() {
    var a;
    for (a in planets) {
        if (planets.hasOwnProperty(a)) {
            planets[a].degree += planets[a].speed;
            planets[a].radian = (planets[a].degree / 180) * Math.PI;
            planets[a].mesh.position.x = planets[a].x = (Math.cos(planets[a].radian) * planets[a].radius);
            planets[a].mesh.position.y = 0;
            planets[a].mesh.position.z = planets[a].z = (-Math.sin(planets[a].radian) * planets[a].radius);
            planets[a].mesh.rotation.y += 0.001;
            if (planets[a].cloudTexture) {
                cloudearthmesh.position.x = planets[a].x = (Math.cos(planets[a].radian) * planets[a].radius);
                cloudearthmesh.position.y = planets[a].y = (-Math.sin(planets[a].radian) * planets[a].radius);
                cloudearthmesh.position.z = 0;
                cloudearthmesh.rotation.y += 0.01
            }
            if (planets[a].ringsTexture) {
                saturnrings.position.x = planets[a].x = (Math.cos(planets[a].radian) * planets[a].radius);
                saturnrings.position.y = 0;
                saturnrings.position.z = planets[a].z = (-Math.sin(planets[a].radian) * planets[a].radius);
            }
        }
    }
}

function render_all() {
    var a;
    for (a in planets) {
        if (planets.hasOwnProperty(a)) {
            scene.add(planets[a].mesh)
        }
    }
    scene.add(saturnrings);
}

function create_3Dstars(){
    /*

    var i, r = 1000,
        starsGeometry = [new THREE.Geometry(), new THREE.Geometry()];
    for (i = 0; i < 250; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.multiplyScalar(r);
        starsGeometry[0].vertices.push(vertex)
    }
    for (i = 0; i < 1500; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.multiplyScalar(r);
        starsGeometry[1].vertices.push(vertex)
    }
    var starsMaterials = new THREE.PointsMaterial( { size: 500, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
    for (i = 10; i < 30; i++) {
        Stars3D = new THREE.Points(starsGeometry[i % 2], starsMaterials);
        Stars3D.rotation.x = Math.random() * 6;
        Stars3D.rotation.y = Math.random() * 6;
        Stars3D.rotation.z = Math.random() * 6;
        s = i * 10;
        Stars3D.scale.set(s, s, s);
        Stars3D.matrixAutoUpdate = false;
        Stars3D.updateMatrix();
        scene.add(Stars3D)
    }
    */
    var particles = 50000;
    var geometry = new THREE.BufferGeometry();
    var positions = new Float32Array( particles * 3 );
     

    for ( var i = 0; i < positions.length; i += 3 ) {



        positions[ i ]     = Math.random() * 2 - 1;
        positions[ i + 1 ] = Math.random() * 2 - 1;
        positions[ i + 2 ] = Math.random() * 2 - 1;
        
    }
    geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
    //geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
    geometry.computeBoundingSphere();
    //
    var material = new THREE.PointsMaterial( { size: 5000, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
    Stars3D = new THREE.Points( geometry, material );
    Stars3D.scale.set(2e6, 2e6, 2e6);
    Stars3D.updateMatrix();
};

