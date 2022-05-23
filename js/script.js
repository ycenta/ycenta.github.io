const loader = new THREE.GLTFLoader();

    var divcanvas = document.getElementById('character3d');
    console.log('test');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, divcanvas.clientWidth / divcanvas.clientHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setSize( divcanvas.clientWidth, divcanvas.clientHeight );
    divcanvas.appendChild( renderer.domElement );

    loader.load( 'models/character.glb', function ( gltf ) { // Load gltf files onto the scene

    scene.add( gltf.scene );
    console.log('added');
    
    });

    //Some Scene Setup
    camera.position.z = 14;
    hlight = new THREE.AmbientLight (0x404040,10);
    scene.add(hlight);
    
    function animate() {
		requestAnimationFrame( animate );

		scene.children[1].rotation.y += 0.002;
        scene.children[1].rotation.z += 0.002;

				renderer.render( scene, camera );
	};
 
    animate();