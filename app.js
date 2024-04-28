

let btn = document.getElementById("btn")
let input = document.getElementById("input")
// let new_ul = document.getElementById("ul")
// let create_btn = document.createElement("button")
// let new_li = document.createElement("li")
let del_btn = document.querySelector(".del")
let ul = document.querySelector("ul")


btn.addEventListener("click", add_list);

function add_list(){
    let new_li = document.createElement("li")
    let new_ul = document.getElementById("ul")
    let create_btn = document.createElement("button")
    new_li.innerHTML = input.value + " ";
    create_btn.innerHTML = "Delete";
    new_ul.appendChild(new_li)
    new_li.appendChild(create_btn)
    input.value = " ";
};


ul.addEventListener("click", delete_button);

// event is a default parameter
// event.target is a special property within event
// event.target tells us what is click/pressed
// console.dir(event.target) will give us special property called nodename, telling us which node type is the one tha triggered the alert.

/* Testing purpose 
# console.log(event.target)
# console.dir(event.target.nodeName) */

function delete_button(event){
    console.log(event.target)
    console.dir(event.target)
    if (event.target.nodeName == "BUTTON"){
        let node_name = event.target.parentElement
        node_name.remove()
    }
};

// 2 changes are required
// a. press Enter will type in the activity
// b. we should keep getting "type any activity" on repetition