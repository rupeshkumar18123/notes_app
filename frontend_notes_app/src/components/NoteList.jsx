import React from 'react'
import "./Component.css"
import NoteItem from './NoteItem'
function NoteList() {
    const arr =[
        {text_note:"this is demo text1",date:"May 21, 2020",id:1,div_color:"#1A4D2E"},//3
        {text_note:"this is demo text2",date:"May 21, 2020",id:2,div_color:"#3E3232"},//2
        {text_note:"this is demo text3",date:"May 21, 2020",id:3,div_color:"#67fea6"},
        {text_note:"this is demo text4",date:"May 21, 2020",id:4,div_color:"#01204E"},//1
        {text_note:"this is demo text5",date:"May 21, 2020",id:5,div_color:"#fef667"},
        {text_note:"this is demo text6",date:"May 21, 2020",id:6,div_color:"#32012F"},//4
        {text_note:"this is demo text7",date:"May 21, 2020",id:7,div_color:"#A79277"},//5
        {text_note:"this is demo text8",date:"May 21, 2020",id:8,div_color:"#fe6767"},
        {text_note:"this is demo text9",date:"May 21, 2020",id:9,div_color:"#fe67c7"},
        {text_note:"this is demo text10",date:"May 21, 2020",id:10,div_color:"#6cfe67"},
        {text_note:"this is demo text11",date:"May 21, 2020",id:11,div_color:"#fe9467"},
        {text_note:"this is demo text12",date:"May 21, 2020",id:12,div_color:"#fe67c7"},
        {text_note:"this is demo text13",date:"May 21, 2020",id:13,div_color:"#fe9467"},
        {text_note:"this is demo text14",date:"May 21, 2020",id:14,div_color:"#6cfe67"},

    ]
  return (
    <div className='noteList'>
       {
        arr.map((demo)=>(
            <NoteItem key={demo.id} demo_text={demo}/>
        ))
       }
    </div>
  )
}

export default NoteList 
