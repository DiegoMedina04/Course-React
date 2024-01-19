import './task.css'

export function TaskCard ({ ready }) {
  return (
    <div className='card'>
      <h1>Primer tarea</h1>
      <span className={ready ? 'bg-green' : 'bg-red'}>
        {ready ? 'Tarea realizada' : 'Pendiente'}
      </span>
    </div>
  )
}
