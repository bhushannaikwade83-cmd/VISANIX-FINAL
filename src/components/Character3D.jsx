import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

/**
 * Mixamo 3D character loader.
 * Downloads free rigged characters with built-in animations.
 * Supports walk, idle, celebrate poses.
 */
export function Character3D({ type = 'traveler', pose = 'idle', className = '' }) {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const characterRef = useRef(null)
  const mixerRef = useRef(null)
  const actionsRef = useRef({})
  const currentActionRef = useRef(null)
  const poseRef = useRef(pose)
  const loadedRef = useRef(false)

  useEffect(() => {
    poseRef.current = pose
  }, [pose])

  useEffect(() => {
    if (!containerRef.current) return

    // scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 0.5, 2.5)
    camera.lookAt(0, 0.8, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true
    containerRef.current.appendChild(renderer.domElement)

    // lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75)
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
    directionalLight.position.set(8, 12, 8)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.camera.left = -10
    directionalLight.shadow.camera.right = 10
    directionalLight.shadow.camera.top = 10
    directionalLight.shadow.camera.bottom = -10
    scene.add(directionalLight)

    // floor plane (for shadow)
    const planeGeom = new THREE.PlaneGeometry(20, 20)
    const planeMat = new THREE.ShadowMaterial({ opacity: 0 })
    const plane = new THREE.Mesh(planeGeom, planeMat)
    plane.receiveShadow = true
    plane.rotation.x = -Math.PI / 2
    plane.position.y = -1
    scene.add(plane)

    // load Mixamo character
    const loader = new GLTFLoader()
    const modelUrl = './models/character.gltf'

    loader.load(
      modelUrl,
      (gltf) => {
        const character = gltf.scene
        character.scale.set(1, 1, 1)
        character.position.y = 0
        character.castShadow = true
        character.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true
            node.receiveShadow = true
          }
        })
        scene.add(character)
        characterRef.current = character

        // setup animation mixer
        const mixer = new THREE.AnimationMixer(character)
        mixerRef.current = mixer

        // collect animations by name
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip)
          action.clampWhenFinished = true
          actionsRef.current[clip.name.toLowerCase()] = action
        })

        // set default animation
        if (actionsRef.current['idle']) {
          currentActionRef.current = actionsRef.current['idle']
          currentActionRef.current.play()
        }

        loadedRef.current = true
      },
      undefined,
      (error) => {
        console.error('Failed to load model:', error)
        // Fallback: create simple procedural character
        const fallback = createFallbackCharacter(type)
        scene.add(fallback)
        characterRef.current = fallback
      },
    )

    // animation loop
    let animationFrameId
    const clock = new THREE.Clock()
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const delta = clock.getDelta()
      if (mixerRef.current) {
        mixerRef.current.update(delta)
      }

      // handle pose changes
      if (loadedRef.current) {
        switchPose(poseRef.current)
      }

      renderer.render(scene, camera)
    }
    animate()

    // handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const w = containerRef.current.clientWidth
      const h = containerRef.current.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      renderer.dispose()
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [type])

  const switchPose = (pose) => {
    const actions = actionsRef.current
    let targetAction = null

    if (pose === 'walk' && actions['mixamorigLocomotionWalk']) {
      targetAction = actions['mixamorigLocomotionWalk']
    } else if (pose === 'celebrate' && actions['mixamorigCelebratingLoop']) {
      targetAction = actions['mixamorigCelebratingLoop']
    } else if (pose === 'wave' && actions['mixamorigWaving']) {
      targetAction = actions['mixamorigWaving']
    } else if (actions['idle'] || actions['mixamorigIdle']) {
      targetAction = actions['idle'] || actions['mixamorigIdle']
    }

    if (targetAction && currentActionRef.current !== targetAction) {
      currentActionRef.current?.fadeOut(0.3)
      targetAction.reset()
      targetAction.fadeIn(0.3)
      targetAction.play()
      currentActionRef.current = targetAction
    }
  }

  return <div ref={containerRef} className={`character-3d ${className}`} style={{ width: '100%', height: '100%' }} />
}

// Fallback if Mixamo model fails to load
function createFallbackCharacter(type) {
  const character = new THREE.Group()

  const skinMaterial = new THREE.MeshPhongMaterial({ color: 0xf6c9a0 })
  const shirtMaterial = type === 'traveler' ? new THREE.MeshPhongMaterial({ color: 0x3b82f6 }) : new THREE.MeshPhongMaterial({ color: 0x14b8a6 })
  const pantsMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a2e })

  // head
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.35, 32, 32), skinMaterial)
  head.position.y = 1.6
  character.add(head)

  // torso
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.32, 0.8, 16), shirtMaterial)
  torso.position.y = 0.7
  character.add(torso)

  // legs
  const legGeom = new THREE.CylinderGeometry(0.13, 0.12, 0.6, 12)
  const legL = new THREE.Mesh(legGeom, pantsMaterial)
  legL.position.set(-0.18, 0.25, 0)
  const legR = new THREE.Mesh(legGeom, pantsMaterial)
  legR.position.set(0.18, 0.25, 0)
  character.add(legL)
  character.add(legR)

  // shoes
  const shoeGeom = new THREE.BoxGeometry(0.2, 0.15, 0.28)
  const shoeMat = new THREE.MeshPhongMaterial({ color: 0xf5f5f5 })
  const shoeL = new THREE.Mesh(shoeGeom, shoeMat)
  shoeL.position.set(-0.18, -0.95, 0)
  const shoeR = new THREE.Mesh(shoeGeom, shoeMat)
  shoeR.position.set(0.18, -0.95, 0)
  character.add(shoeL)
  character.add(shoeR)

  return character
}

function createCharacter(type) {
  const character = new THREE.Group()

  // materials
  const skinMaterial = new THREE.MeshPhongMaterial({ color: 0xf6c9a0 })
  const shirtMaterial =
    type === 'traveler' ? new THREE.MeshPhongMaterial({ color: 0x3b82f6 }) : new THREE.MeshPhongMaterial({ color: 0x14b8a6 })
  const pantsMaterial = new THREE.MeshPhongMaterial({ color: 0x1a1a2e })

  // head
  const headGeom = new THREE.SphereGeometry(0.35, 32, 32)
  const head = new THREE.Mesh(headGeom, skinMaterial)
  head.position.y = 1.6
  character.add(head)

  // hair
  const hairGeom = new THREE.SphereGeometry(0.36, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.6)
  const hairMaterial = new THREE.MeshPhongMaterial({ color: type === 'traveler' ? 0x6b4226 : 0x2b1d12 })
  const hair = new THREE.Mesh(hairGeom, hairMaterial)
  hair.position.y = 1.85
  head.add(hair)

  // eyes
  const eyeGeom = new THREE.SphereGeometry(0.08, 16, 16)
  const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x2c2c2c })
  const eyeL = new THREE.Mesh(eyeGeom, eyeMaterial)
  eyeL.position.set(-0.12, 0.15, 0.28)
  const eyeR = new THREE.Mesh(eyeGeom, eyeMaterial)
  eyeR.position.set(0.12, 0.15, 0.28)
  head.add(eyeL)
  head.add(eyeR)

  // torso
  const torsoGeom = new THREE.CylinderGeometry(0.3, 0.32, 0.8, 16)
  const torso = new THREE.Mesh(torsoGeom, shirtMaterial)
  torso.position.y = 0.7
  character.add(torso)

  // left arm upper
  const armUpperGeom = new THREE.CylinderGeometry(0.12, 0.11, 0.5, 12)
  const armUpperL = new THREE.Mesh(armUpperGeom, shirtMaterial)
  armUpperL.position.set(-0.42, 1.0, 0)
  armUpperL.userData.originalPos = { x: -0.42, y: 1.0, z: 0 }
  armUpperL.name = 'armUpperL'
  character.add(armUpperL)

  // left arm lower
  const armLowerGeom = new THREE.CylinderGeometry(0.1, 0.09, 0.5, 12)
  const armLowerL = new THREE.Mesh(armLowerGeom, skinMaterial)
  armLowerL.position.set(-0.42, 0.5, 0)
  armLowerL.userData.originalPos = { x: -0.42, y: 0.5, z: 0 }
  armLowerL.name = 'armLowerL'
  character.add(armLowerL)

  // right arm upper
  const armUpperR = new THREE.Mesh(armUpperGeom, shirtMaterial)
  armUpperR.position.set(0.42, 1.0, 0)
  armUpperR.userData.originalPos = { x: 0.42, y: 1.0, z: 0 }
  armUpperR.name = 'armUpperR'
  character.add(armUpperR)

  // right arm lower
  const armLowerR = new THREE.Mesh(armLowerGeom, skinMaterial)
  armLowerR.position.set(0.42, 0.5, 0)
  armLowerR.userData.originalPos = { x: 0.42, y: 0.5, z: 0 }
  armLowerR.name = 'armLowerR'
  character.add(armLowerR)

  // left leg upper
  const legGeom = new THREE.CylinderGeometry(0.13, 0.12, 0.6, 12)
  const legUpperL = new THREE.Mesh(legGeom, pantsMaterial)
  legUpperL.position.set(-0.18, 0.25, 0)
  legUpperL.userData.originalPos = { x: -0.18, y: 0.25, z: 0 }
  legUpperL.name = 'legUpperL'
  character.add(legUpperL)

  // left leg lower
  const legLowerL = new THREE.Mesh(legGeom, pantsMaterial)
  legLowerL.position.set(-0.18, -0.35, 0)
  legLowerL.userData.originalPos = { x: -0.18, y: -0.35, z: 0 }
  legLowerL.name = 'legLowerL'
  character.add(legLowerL)

  // right leg upper
  const legUpperR = new THREE.Mesh(legGeom, pantsMaterial)
  legUpperR.position.set(0.18, 0.25, 0)
  legUpperR.userData.originalPos = { x: 0.18, y: 0.25, z: 0 }
  legUpperR.name = 'legUpperR'
  character.add(legUpperR)

  // right leg lower
  const legLowerR = new THREE.Mesh(legGeom, pantsMaterial)
  legLowerR.position.set(0.18, -0.35, 0)
  legLowerR.userData.originalPos = { x: 0.18, y: -0.35, z: 0 }
  legLowerR.name = 'legLowerR'
  character.add(legLowerR)

  // shoes
  const shoeGeom = new THREE.BoxGeometry(0.2, 0.15, 0.28)
  const shoeMaterial = new THREE.MeshPhongMaterial({ color: 0xf5f5f5 })
  const shoeL = new THREE.Mesh(shoeGeom, shoeMaterial)
  shoeL.position.set(-0.18, -0.95, 0)
  const shoeR = new THREE.Mesh(shoeGeom, shoeMaterial)
  shoeR.position.set(0.18, -0.95, 0)
  character.add(shoeL)
  character.add(shoeR)

  return character
}

function applyPose(character, pose) {
  const armUpperL = character.getObjectByName('armUpperL')
  const armLowerL = character.getObjectByName('armLowerL')
  const armUpperR = character.getObjectByName('armUpperR')
  const armLowerR = character.getObjectByName('armLowerR')
  const legUpperL = character.getObjectByName('legUpperL')
  const legLowerL = character.getObjectByName('legLowerL')
  const legUpperR = character.getObjectByName('legUpperR')
  const legLowerR = character.getObjectByName('legLowerR')

  if (!armUpperL) return

  // reset
  ;[armUpperL, armLowerL, armUpperR, armLowerR, legUpperL, legLowerL, legUpperR, legLowerR].forEach((limb) => {
    limb.rotation.z = 0
    limb.rotation.x = 0
  })

  const time = Date.now() * 0.001

  if (pose === 'walk') {
    // walk cycle: opposite-side coordination
    const walkSpeed = 3
    const phase = Math.sin(time * walkSpeed)
    const swing = phase * 0.4 // radians

    legUpperL.rotation.z = swing
    legLowerL.rotation.z = -swing * 0.5
    legUpperR.rotation.z = -swing
    legLowerR.rotation.z = swing * 0.5

    armUpperR.rotation.z = swing * 0.8
    armLowerR.rotation.z = swing * 0.3
    armUpperL.rotation.z = -swing * 0.8
    armLowerL.rotation.z = -swing * 0.3
  } else if (pose === 'celebrate') {
    // arms up
    armUpperL.rotation.z = 2.2
    armLowerL.rotation.z = -0.8
    armUpperR.rotation.z = -2.2
    armLowerR.rotation.z = 0.8
    // subtle leg bounce
    legUpperL.position.y = character.getObjectByName('legUpperL').userData.originalPos.y + Math.sin(time * 3) * 0.05
    legUpperR.position.y = character.getObjectByName('legUpperR').userData.originalPos.y + Math.sin(time * 3 + 0.3) * 0.05
  } else if (pose === 'wave') {
    // right arm wave
    armUpperR.rotation.z = -1.5
    armLowerR.rotation.z = Math.sin(time * 4) * 0.6 - 1.2
    // left arm relaxed
    armUpperL.rotation.z = 0
    armLowerL.rotation.z = 0
  } else {
    // idle: subtle breathing
    const breathe = Math.sin(time) * 0.02
    character.position.y = breathe
  }
}
