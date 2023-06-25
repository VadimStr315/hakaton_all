import React, { useRef, useState } from 'react'
import classes from './ContentBox.module.css'
import classNames from 'classnames'
import FormData from 'form-data';

const ContentBox = (props) => {
  const holder = useRef(null)
  const file_success = useRef(null)
  const inputFile = useRef(null)
  const image_press = useRef(null)
  const image_format = useRef(null)
  const get_file_value = useRef(null)
  const video = useRef(null)

  const [fileIsGet, setFileIsGet] = useState(false)
  const [fileUrl, setFileUrl] = useState(null)

  const svg__video = <svg className={classNames(classes.content_picture, classes.image_pictureDefault)} width="80" height="80" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM8.50387 5.13622L14.5039 9.13622C15.1265 9.4994 15.1631 10.3674 14.6137 10.79L8.50387 14.8638C7.83721 15.2527 7 14.7718 7 14V6C7 5.22821 7.83721 4.74734 8.50387 5.13622Z" fill="#828282"/>
    </svg>

  const video__block = <><span ref={image_format} className = {classNames(classes.image_pressto, classes.image_pressDefault)}>чтобы загрузить видеофайл</span>
    <span className = {classes.image_format}>Формат: MP4, MOV, AVI</span></>

  const DeleteFile = () => {
    holder.current.classList.replace(classes.blockNone, classes.blockActiveInline)
    file_success.current.classList.replace(classes.blockActiveInline, classes.blockNone)
    inputFile.current.value ='';
    holder.current.classList.remove(classes.image_holderError)
  }

  const ChangeUpper = async (event) =>{
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      
      //console.log(file.name)
      const formData = new FormData();
      formData.append('video', file);
      console.log("Result Console log:",event.target.files[0])
      let response = await fetch('/api/upload',{
        method:'POST',
        body :formData
      }).then(response => response.json())
      .then(data => {
      if(data === 'ok'){

        props.changeFileName(event.target.files[0].name)
        setTimeout(() =>{setFileUrl(`static/videos/${event.target.files[0].name}`)
        setFileIsGet(true)}, 1000)
      }})
    }
  }

  const ClickFileInput = () =>{inputFile.current.click()};
  const submitTimeInterval = async () =>{
    const currentTime = video.current.currentTime
    console.log(video.current.currentTime)
    let response = await fetch('/api/getTime',{ 
      method:'POST', 
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({time: currentTime}), 
    }).then(response => response.json())
    .then(data =>{
        props.changeStatistics(data.result)
      }
    )
  }
  return (
  <>
  {!fileIsGet ?
  <>
    <div className={classNames(classes.inputFile__container, classes.blockActiveInline)} ref={holder} onClick={ClickFileInput}>
      {svg__video}
      <span className = {classNames(classes.image_press, classes.image_pressDefault)} ref={image_press}>Нажмите,</span>
      {video__block}
      <input ref = {inputFile} className = {classes.image_button} onChange={ChangeUpper} type ="file" accept={`${'video'}/*`}>  
      </input> 
    </div>
    <div className = {classNames(classes.image_success, classes.blockNone)}  ref={file_success}>
      <svg className ={classes.inputed_image} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.168 0C15.6908 0 20.168 4.47715 20.168 10C20.168 15.5228 15.6908 20 10.168 20C4.64512 20 0.167969 15.5228 0.167969 10C0.167969 4.47715 4.64512 0 10.168 0ZM10.168 2C5.74969 2 2.16797 5.58172 2.16797 10C2.16797 14.4183 5.74969 18 10.168 18C14.5862 18 18.168 14.4183 18.168 10C18.168 5.58172 14.5862 2 10.168 2ZM8.67184 5.13622L14.6718 9.13622C15.2944 9.4994 15.3311 10.3674 14.7817 10.79L8.67184 14.8638C8.00518 15.2527 7.16797 14.7718 7.16797 14V6C7.16797 5.22821 8.00518 4.74734 8.67184 5.13622Z" fill="#006666"/>
      </svg>
      <p ref={get_file_value} className={classes.file_uploaded}>Файл загружен</p>
      <div className={classes.delete_file} onClick={DeleteFile}>
        <div className={classes.delete_file_text}>УДАЛИТЬ</div>
        <svg className={classes.delete_file_image} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.50159 1.08655H10.5099V1.59274H11.5963V1.01569C11.5965 0.455658 11.1411 0 10.5813 0H7.43018C6.87042 0 6.41504 0.455658 6.41504 1.01569V1.59274H7.50159V1.08655Z" fill="#D22D25"/>
          <path d="M14.1054 5.89746H3.90627C3.6268 5.89746 3.4068 6.13586 3.42932 6.41451L4.282 16.9581C4.32951 17.5467 4.82047 18 5.41029 18H12.6013C13.1911 18 13.682 17.5467 13.7296 16.9579L14.5822 6.41451C14.6049 6.13586 14.3849 5.89746 14.1054 5.89746ZM6.37585 16.8754C6.36446 16.8761 6.35306 16.8765 6.3418 16.8765C6.05698 16.8765 5.81789 16.6547 5.80017 16.3666L5.26582 7.71089C5.24742 7.41138 5.47525 7.15361 5.77463 7.13521C6.07304 7.11708 6.33191 7.34436 6.35031 7.64401L6.88452 16.2997C6.90306 16.5992 6.67523 16.8569 6.37585 16.8754ZM9.55516 16.3332C9.55516 16.6332 9.31195 16.8764 9.01189 16.8764C8.71182 16.8764 8.46861 16.6332 8.46861 16.3332V7.67738C8.46861 7.37732 8.71182 7.13411 9.01189 7.13411C9.31181 7.13411 9.55516 7.37732 9.55516 7.67738V16.3332ZM12.7459 7.70938L12.2357 16.3651C12.2188 16.6538 11.9793 16.8764 11.6939 16.8764C11.6832 16.8764 11.6724 16.8761 11.6615 16.8755C11.362 16.8578 11.1335 16.6008 11.1512 16.3012L11.6612 7.64539C11.6788 7.34587 11.9351 7.11736 12.2354 7.13507C12.5349 7.15265 12.7634 7.40987 12.7459 7.70938Z" fill="#D22D25"/>
          <path d="M15.9837 4.22134L15.6269 3.15182C15.5329 2.86989 15.2689 2.67969 14.9716 2.67969H3.03921C2.74203 2.67969 2.47795 2.86989 2.38401 3.15182L2.02723 4.22134C1.95843 4.42761 2.04797 4.638 2.2151 4.74292C2.28322 4.78563 2.36383 4.81131 2.4524 4.81131H15.5585C15.6471 4.81131 15.7279 4.78563 15.7958 4.74278C15.963 4.63786 16.0525 4.42747 15.9837 4.22134Z" fill="#D22D25"/>
        </svg>
      </div>  
    </div>
  </>
  : null}
    {fileIsGet ? 
    <div>
      <video controls src={fileUrl} ref={video} className={classes.video} onClick={(event)=>{console.log(event.target.currentTime)}}/>
      <div className={classes.timeInterval} onClick={submitTimeInterval}>
        <svg width="52" height="44" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M25.6667 0C23.7766 0 22.2444 1.53218 22.2444 3.42223V24.4238L19.0117 21.6338C17.5568 20.378 15.3924 20.5673 14.1775 22.0565C12.9626 23.5458 13.1573 25.771 14.6122 27.0267L22.4512 33.7924C22.764 34.0624 23.1096 34.2655 23.4716 34.4034C24.0657 34.9007 24.8312 35.2 25.6667 35.2C26.4022 35.2 27.0836 34.9679 27.6416 34.573C28.2253 34.471 28.7917 34.2126 29.2787 33.7923L37.1178 27.0267C38.5727 25.7709 38.7673 23.5457 37.5524 22.0565C36.3375 20.5673 34.1732 20.378 32.7182 21.6337L29.0889 24.7661V3.42222C29.0889 1.53218 27.5567 0 25.6667 0ZM3.42222 28.1111V40.48H47.9111V28.1111C47.9111 27.1661 48.6772 26.4 49.6222 26.4C50.5672 26.4 51.3333 27.1661 51.3333 28.1111V42.24V42.2889C51.3333 43.2339 50.5672 44 49.6222 44C49.6141 44 49.606 43.9999 49.5979 43.9998C49.5898 43.9999 49.5816 44 49.5733 44H1.76L1.73538 43.9998L1.71111 44C0.76609 44 0 43.2339 0 42.2889V42.24V28.1111C0 27.1661 0.76609 26.4 1.71111 26.4C2.65613 26.4 3.42222 27.1661 3.42222 28.1111Z" fill="#FF6712"/>
        </svg>
        <span className={classes.timeInterval__text}>Выгрузить статистику по заданному временному интервалу</span>
      </div>
    </div> 
    : null}
  </>
  )
}

export default ContentBox;
