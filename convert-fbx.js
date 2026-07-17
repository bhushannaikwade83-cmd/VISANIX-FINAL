import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import fs from 'fs'
import path from 'path'

const args = process.argv.slice(2)
const inputFile = args[0] || '/Users/bhushan/Downloads/character.fbx'
const outputFile = args[1] || './public/models/character.glb'

if (!fs.existsSync(inputFile)) {
  console.error(`Input file not found: ${inputFile}`)
  process.exit(1)
}

// Create output directory if it doesn't exist
const outputDir = path.dirname(outputFile)
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

console.log(`Converting FBX to glTF...`)
console.log(`Input: ${inputFile}`)
console.log(`Output: ${outputFile}`)

const loader = new FBXLoader()

// Convert file path to file:// URL
const fileUrl = 'file://' + path.resolve(inputFile)

loader.load(fileUrl, (object) => {
  console.log('FBX loaded successfully')
  console.log(`Model has ${object.animations.length} animations`)

  const exporter = new GLTFExporter()

  exporter.parse(
    object,
    (gltf) => {
      const data = JSON.stringify(gltf)
      const buffer = Buffer.from(data)

      fs.writeFileSync(outputFile, buffer)
      console.log(`✅ Converted to: ${outputFile}`)
      console.log(`File size: ${(fs.statSync(outputFile).size / 1024).toFixed(2)} KB`)
      process.exit(0)
    },
    (error) => {
      console.error('Export error:', error)
      process.exit(1)
    },
    { binary: true },
  )
}, undefined, (error) => {
  console.error('FBX loading error:', error)
  process.exit(1)
})
