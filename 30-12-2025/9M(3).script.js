var taskName=document.querySelector('#taskName')
var btn=document.querySelector('#btn')
var taskgroup=document.querySelector('#task-group')
var task=[]

btn.addEventListener('click',()=>{
    let tmp = taskName.value
    
    if(tmp){
        task.push(tmp)
        console.log(task)
        taskgroup.innerHTML =''
        task.forEach((va,idx)=>{
            // Creating the li element
            let liEle = document.createElement('li')
            liEle.innerHTML = va
            liEle.addEventListener('click',()=>{
                liEle.classList.toggle('completed')
            })
            taskgroup.appendChild(liEle)
        })
        taskName.value = ''
    }
})