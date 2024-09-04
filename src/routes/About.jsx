import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='container'>
      <div className="informacoes">
        <h3>Rick and Morty</h3>
        <p>
          It is an animated comedy and science fiction series created by Justin Roiland and Dan 
          Harmon. It premiered on Adult Swim, Cartoon Network's late-night block, in 2013 and 
          quickly became a worldwide success. The series revolves around the adventures of 
          the alcoholic and eccentric scientist Rick Sanchez and his insecure grandson, Morty 
          Smith, as they travel through alternate dimensions and encounter bizarre situations, 
          often with chaotic and unexpected consequences.<br></br> 
          Rick and Morty blends irreverent 
          humor with complex science fiction concepts such as multiverses, time travel, 
          cloning, and parallel realities. The series is known for exploring philosophical, 
          existential, and ethical themes, often in a cynical and dark manner but always with 
          a touch of acid humor. Family dynamics are also a central focus, with Rick 
          frequently clashing with his daughter Beth, son-in-law Jerry, and granddaughter Summer.
          <br></br>
          The series is noted for its vibrant and visually unique animation style, 
          which combines influences from classic science fiction comics and pop culture. 
          Rick and Morty's humor is often absurd, satirical, and filled with references to 
          geek culture, alongside social and scientific commentary.
          <br></br>
          <br></br>
          Rick and Morty has become 
          a cultural phenomenon, influencing everything from internet memes to debates 
          about science and philosophy. The series has won several awards, including 
          the Emmy for Outstanding Animated Program, and its popularity continues to grow, 
          with a devoted fan base that appreciates both the humor and depth of its stories.
          With a unique combination of comedy, science fiction, and a critical look at the 
          human condition, Rick and Morty has established itself as one of the most influential 
          animated series of the past decade.
        </p>
      </div>      
      <div className="tecnologia">
        <h3>Technologies Used</h3>
        <p>
          For this project with the Rick and Morty API, the following technologies were used:<br></br><br></br>
          - React Router DOM: To manage routes and navigation between different pages of the project.<br></br>
          - Axios: To make HTTP requests and fetch data from the Rick and Morty API.<br></br>
          - React Icons: To add icons and enhance the user interface.<br></br>
          - React Bootstrap: Planned to style components like the modal, providing a faster and 
          more responsive design approach. These technologies together enable the creation of an 
          interactive, stylish application with smooth navigation.<br></br>
          - ReactJS + Vite: Offers a fast and efficient development environment, facilitating 
          the building and management of the application.
        </p> 
      </div>     
    </div>
  )
}

export default About;