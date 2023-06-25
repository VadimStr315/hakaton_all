import classes from './tablePoint.module.css'

const TablePoint = (props) =>{

  return (
    <div className={classes.container}>
      <span className={classes.point}>{props.category}</span>
      <span className={classes.point}>{props.start}</span>
      <span className={classes.point}>{props.end}</span>
      <span className={classes.point}>{props.downtime}</span>
    </div>
  )
}

export default TablePoint