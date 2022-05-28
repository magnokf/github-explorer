import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'
import '../styles/repository.scss'

//https://api.github.com/orgs/Rocketseat/repos

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/Rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.id} repository={repository} />
        })}
      </ul>
    </section>
  )
}
