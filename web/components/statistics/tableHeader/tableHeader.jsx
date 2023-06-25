import classes from './tableHeader.module.css'

const TableHeader = (props) =>{
  return (
    <div style={{display: 'inline-flex', width: '112px'}}>
      <span className={classes.name}>
        {props.name}
      </span>
    </div>
  )
}

export default TableHeader