const allComponents = [{
    name: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    image: './assets/icon-supervisor.svg',
    color: 'hsl(180, 62%, 55%)',
  },
  {
    name: 'Team Builder',
    description: 'Scans our talent network to create the optimal team for your project',
    image: './assets/icon-team-builder.svg',
    color: 'hsl(0, 78%, 62%)',
  },
  {
    name: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    image: './assets/icon-karma.svg',
    color: 'hsl(34, 97%, 64%)',
  },
  {
    name: 'Calculator',
    description: 'Uses data from past projects to provide better delivery estimates',
    image: './assets/icon-calculator.svg',
    color: 'hsl(212, 86%, 64%)',
  },
]

const createComponents = () => {
  const mainContainer = document.querySelector('#componentsContainer')

  for ( const component of allComponents ) {
    const newComponent = document.createElement('div')
    newComponent.className = 'component'
    newComponent.style.borderTopColor = component.color
  
    const componentName = document.createElement('h1')
    componentName.className = 'componentName'
    componentName.innerHTML = component.name
  
    const componentDescribe = document.createElement('h5')
    componentDescribe.className = 'componentDescribe'
    componentDescribe.innerHTML = component.description
  
    const componentImg = document.createElement('img')
    componentImg.className = 'componentIcon'
    componentImg.src = component.image
    componentImg.alt = 'component icon'
  
    newComponent.append(componentName, componentDescribe, componentImg)

    mainContainer.appendChild(newComponent)
  }
}

createComponents()