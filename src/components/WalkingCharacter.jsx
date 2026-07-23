import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function WalkingCharacter({ scale = 1, speed = 0.02 }) {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const modelRef = useRef(null)
  const animationIdRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)
    sceneRef.current = scene

    // camera
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
    camera.position.set(0, 0.5, 2)
    camera.lookAt(0, 0, 0)

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(400, 400)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true
    containerRef.current.appendChild(renderer.domElement)

    // lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    // load model
    const loader = new GLTFLoader()
    loader.load('/models/walking-character.glb', (gltf) => {
      const model = gltf.scene
      model.scale.set(scale, scale, scale)
      scene.add(model)
      modelRef.current = model

      // handle animations
      if (gltf.animations && gltf.animations.length > 0) {
        const mixer = new THREE.AnimationMixer(model)
        const walkingAction = mixer.clipAction(gltf.animations[0])
        walkingAction.play()

        // animation loop
        const clock = new THREE.Clock()
        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate)
          mixer.update(clock.getDelta())
          renderer.render(scene, camera)
        }
        animate()
      } else {
        // no animations, just rotate
        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate)
          model.rotation.y += speed
          renderer.render(scene, camera)
        }
        animate()
      }
    })

    // cleanup
    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current)
      renderer.dispose()
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [scale, speed])

  return <div ref={containerRef} style={{ width: '400px', height: '400px' }} />
}
