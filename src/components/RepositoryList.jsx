import { RepositoryItem } from "./RepositoryItem";

const repository ={
  name: "Unform 1",
  description: "Forms in React",
  link:"https://github.com/unform/unform"
}

export function RepositoryList({repositories, onRepositoryClick}){
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