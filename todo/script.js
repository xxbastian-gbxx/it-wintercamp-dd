var tasks = document.querySelectorAll('.task-label')

console.log(tasks)

tasks.forEach(function(el) {
    el.addEventListener('click', () => {
        document.getElementById('popup').style.display = 'block'
    })
})


document.getElementById('close').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none'
})