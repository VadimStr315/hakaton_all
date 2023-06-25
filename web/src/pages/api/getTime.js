import { connectToDatabase } from "../../../utils/mongodb"

// проверяем больше ли первое число второго 
const compare_time = (time1,time2) =>{
  const time_1 = time1.split(':')
  const time_2 = time2.split(':')
  if (parseInt(time_1[0])>=parseInt(time_2[0]))
  {
      if (parseInt(time_1[1])>=parseInt(time_2[1]))
      {
        return true
      }
      else
      {
        return false
      }
  }
  else{
        return false
    }
}

const make_time = (time) =>{
  const time_1 = time.split(':')
  return parseInt(time_1[0])*60+parseInt(time_1[1])
}


const get_data = (time,data_dict) =>{
  let result_obj = Object()
  if (time !==0){
    for (let key in data_dict)
    {
      const end_work_time = data_dict[key].end_work
      if (time > make_time(end_work_time))
      {
        result_obj[key]={}
        result_obj[key] =data_dict[key]
        // console.log('End_work_time:',time,'key',key,'obj',data_dict[key])
      }
    }
    if (result_obj.lenght ==0){
      result_obj[0] ={"type_of_vechale": '-',
      "begin_work": '-',
      "end_work": '-',
      "waiting_time": '-'}
    }
  }
  else
  {
    result_obj[0] ={"type_of_vechale": '-',
    "begin_work": '-',
    "end_work": '-',
    "waiting_time": '-'}
  }
  return result_obj
}


const run_model =()=>{ 
  const { exec } = require('child_process'); 
  exec('python /hakatom/model/netris.py', (error, stdout, stderr) => { 
  if (error) { 
    console.error(`exec error: ${error}`); 
    return; 
  } 
  console.log(`stdout: ${stdout}`); 
  console.error(`stderr: ${stderr}`); 
}); 
}



export default  async(req, res) => {
  run_model()
  console.log("Done!")
  // try{
    
  //   const id = 582660909
  //   const {db, client} = await connectToDatabase();
  //   console.log('Time', req.body)
    
  //   var hakatoncollection = await db.collection('hakatoncollection')
  //   const data =  await hakatoncollection.find({'_id':id}).toArray()
  //   // console.log("data",data[0].data)
    
  //   var result =get_data(req.body.time,data[0].data)
  //   console.log("result",result)
  // }
  // catch{
  //   console.log('Error with database!')
  // }
  // res.status(200).json({"result":result})
// export default async function handler(req, res) {
 
//   //console.log('time:',res.body.time)
}