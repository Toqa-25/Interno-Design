let bar = document.querySelector(".bar"),
    menuList = document.querySelector(".menu-list"),
    search = document.querySelector(".search"),
    searchInput = document.querySelector(".input-search");

    bar.onclick = () => {
        console.log("bar")
        menuList.classList.toggle("show-menu-list")
        if ( searchInput.classList.contains("show-input-search")){
            searchInput.classList.remove("show-input-search")
        }
    }
    search.onclick = () => {
        console.log("search")
        searchInput.classList.toggle("show-input-search")
        if ( menuList.classList.contains("show-menu-list")){
            menuList.classList.remove("show-menu-list")
        }
    }

/********************************************************************/
let timeLineItems = document.querySelectorAll(".time-line-item");
let timeLineItem = document.querySelector(".time-line-item");
console.log (timeLineItems)
timeLineItems.forEach(timeLineItem =>{
    timeLineItem.children[0].style.width=`${timeLineItem.dataset.width}%`
    console.log (`${timeLineItem.dataset.width}%`)
    let parent = timeLineItem.children[0]
    console.log(parent.)
    timeLineItem.onclick = function () {
        // console.log(timeLineItem.dataset.width)
        console.log("array" , this.children[".line-content"])
        // console.log(this.dataset.width)
    }
   
})


