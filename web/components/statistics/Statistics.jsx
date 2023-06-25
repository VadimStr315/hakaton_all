import classNames from 'classnames'
import classes from './Statistics.module.css'
import TableHeader from './tableHeader/tableHeader'
import TablePoint from './tablePoint/tablePoint'

export default function Statistics (props){
  const data = props.statistics
  return (
    <div className={classes.container}>
      <header className={classes.header}>{props.fileName === null ? 'название видео' : props.fileName.slice(0,-4)}</header>
      <main className={classes.main__container}>
        <div className={classes.table__header}>
          <TableHeader key='сategory' name='КАТЕГОРИЯ ТЕХНИКИ'/>
          <TableHeader key='start' name='НАЧАЛО СОБЫТИЯ'/>
          <TableHeader key='end' name='КОНЕЦ СОБЫТИЯ'/>
          <TableHeader key='downTime' name='ПРОСТОЙ'/>
        </div>
        <div className={classes.table__points}>
          {data ? Object.keys(data).map((key, index)=>(<TablePoint key={index} category={data[key].type_of_vechale} start={data[key].begin_work} end={data[key].end_work} downtime={data[key].waiting_time}/>)):
          null}
        </div>
      </main>
      {props.statistics === null ? 
      <button className={classNames(classes.table__button, classes.table__buttonDisable)} type='button' onClick={()=>{alert('данные не загружены')}}>ЭКСПОРТ В JSON</button> :
      <a href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(data)
            )}`}
            download="result.json" className={classNames(classes.table__button, classes.table__buttonActive)} >ЭКСПОРТ В JSON</a>}
    </div>
  )
}