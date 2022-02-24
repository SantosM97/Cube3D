const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setClearColor("#000")
document.body.appendChild( renderer.domElement )
camera.position.z = 5

window.addEventListener( 'resize', () => {
  let width = window.innerWidth
  let height = window.innerHeight
  renderer.setSize( width, height )
  camera.aspect = width / height
  camera.updateProjectionMatrix()
})

var geometry = new THREE.SphereGeometry(1,50,50)
var material = new THREE.MeshStandardMaterial( { color: 0xFFFF00, flatShading: true, metalness: 0, roughness: 1 })
var sphere = new THREE.Mesh ( geometry, material )
scene.add( sphere )

var geometry = new THREE.SphereGeometry( 3,50,50)
var material = new THREE.MeshBasicMaterial( {
  color: "#F00", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

function animate() {
  requestAnimationFrame( animate )
  sphere.rotation.x += 0.04;
  sphere.rotation.y += 0.04;
  wireframeCube.rotation.x -= 0.01;
  wireframeCube.rotation.y -= 0.01;
  renderer.render( scene, camera )
}
animate()