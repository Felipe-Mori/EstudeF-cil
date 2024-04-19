var menuItem = document.querySelectorAll('.item-menu')

function selectkink(){
    menuItem.forEach((item)=>
        item.classList.remove('atv')
    )
    this.class.list.add('atv')
}

menuItem.forEach((item)=>
item.addEventListener('click', selectkink)
)