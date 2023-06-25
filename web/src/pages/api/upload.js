import formidable from 'formidable';
import multer from 'multer';

export const config = {
  api: {
      bodyParser: false
  }
}
export default async function handler(req, res) {
  console.log('зашел в функцию')

  let filedata = req.body;
  // подключаем модуль для работы с файловой системой
  const fs = require('fs');
  
  // имя файла, в который нужно сохранить данные
  //const fileName = 'file.mp4';
  const form = formidable({multiples:true})
  console.log("form",form.parse)

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      console.log("ffffff")
      console.log('files',files)
        if ((files !== {}) && (files.video !== undefined)) {
          console.log('Файлы есть!')
          console.log('filepath',files.video[0].filepath)
          fs.readFile(files.video[0].filepath, async (err, data) => {
            if (!err) {
                  const fileName = files.video[0].originalFilename
                  fs.writeFile("public/static/videos/"+fileName, data, (err) => {
                    // если произошла ошибка, выбрасываем исключение
                    if (err) throw err;
                    // выводим сообщение об успешной записи
                    console.log('Данные сохранены в файл');
                  });
                }})
        }
        resolve()
      })

    }).then(()=>{
      res.status(200).json('ok')
      console.log('Запрос приннят')})
}
