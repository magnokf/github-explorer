const repositoryName = 'unform';

export function RepositoryList({repositories, onRepositoryClick}){
  return(
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">Acessar repositório</a>
        </li>
        <li>
          <strong>unformed</strong>
          <p>Forms in React</p>
          <a href="">Acessar repositório</a>
        </li>
        <li>
          <strong>unformed</strong>
          <p>Forms in React</p>
          <a href="">Acessar repositório</a>
        </li>
      </ul>
    </section>
    
  )
}