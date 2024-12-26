# ThreeJsPoc



## Packages used here

- three js [Angular Library](https://angularthree.org/) [JS Library](https://threejs.org/)
- canon js [Github](https://github.com/pmndrs/cannon-es)

Three is for rendering while canon is used for physics.


## Project Overview

This project demonstrates the integration of Three.js with Angular to create a 3D rendering application. It also incorporates Cannon.js for physics simulations, providing a comprehensive example of combining 3D graphics with physics in a web application.

### Key Features

- **3D Rendering**: Utilizes Three.js to render 3D objects and scenes.
- **Physics Simulation**: Implements physics using Cannon.js for realistic object interactions.
- **Angular Integration**: Leverages Angular for application structure, data binding, and component-based architecture.

### Project Structure

- **src/app**: Contains the Angular components, services, and modules.
- **src/assets**: Includes static assets like images and models.
- **src/environments**: Configuration files for different environments (development, production).
### Components

- **AppComponent** (`src/app/app.component.ts`): The root component that bootstraps the Angular application.
- **SceneComponent** (`src/app/scene/scene.component.ts`): Manages the Three.js scene, including camera, lights, and 3D objects.
- **PhysicsComponent** (`src/app/physics/physics.component.ts`): Handles the integration of Cannon.js for physics simulations.
- **ModelLoaderComponent** (`src/app/model-loader/model-loader.component.ts`): Responsible for loading and managing 3D models.
- **ControlComponent** (`src/app/control/control.component.ts`): Provides user controls for interacting with the 3D scene.
- **EnvironmentComponent** (`src/app/environment/environment.component.ts`): Sets up the environment, including background and lighting.
### Components Tree

```
src
└── app
  ├── app.component.ts
  ├── scene
  │   └── scene.component.ts
  ├── physics
  │   └── physics.component.ts
  ├── model-loader
  │   └── model-loader.component.ts
  ├── control
  │   └── control.component.ts
  └── environment
    └── environment.component.ts
```



### Getting Started

1. **Clone the repository**:
  ```bash
  git clone https://github.com/your-repo/three-js-poc.git
  cd three-js-poc
  ```

2. **Install dependencies**:
  ```bash
  yarn install
  ```

3. **Run the development server**:
  ```bash
  ng serve
  ```
  

### Usage

- **3D Models**: Add your 3D models to the `src/assets/models` directory.
- **Physics**: Configure physics properties in the relevant Angular services or components.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
