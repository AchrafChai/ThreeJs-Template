import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.floor = new Floor()
            this.fox = new Fox()
            this.environment = new Environment()
        })
    }

    update()
    {
        if(this.fox)
            this.fox.update()
    }
    /*
        constructor()
    {
       this.experience = new Experience()
       this.scene = this.experience.scene
       this.resources = this.experience.resources
    
       //test mesh
       const testMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshStandardMaterial()
       )
       this.scene.add(testMesh)

       //setup

       this.resources.on('ready', () => 
        {
            this.environment = new Environment()
        })

    }
    */
}