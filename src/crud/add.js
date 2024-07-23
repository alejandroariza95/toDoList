import { db } from "../main"

const data = document.querySelector('#data')

export const addTask=()=>{
    if (!data.value) {
        alert('Add new task')
    }
    else {
        db.push({task:data.value, edit:'aditClick', delete:'deleteClick'})
        localStorage.setItem('db', JSON.stringify(db))
    }
    data.value = ''
    location.reload()
}