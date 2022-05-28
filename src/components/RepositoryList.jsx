import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repository.scss';

//https://api.github.com/orgs/Rocketseat/repos

const repository ={
  name: "Unform 1",
  description: "Forms in React",
  link:"https://github.com/unform/unform"
}

export function RepositoryList(){

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/Rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [repositories]);

  return(
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />

        
      </ul>
    </section>
    
  )
}