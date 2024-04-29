let input = document.querySelector('input');
let ul = document.querySelector('ul')
let btn = document.getElementById('btn')
let li = document.createElement('li') 

btn.addEventListener("click", click_function)

function click_function(){
    li.innerHTML = input.value + " "
    let delBtn = document.createElement('button')
    delBtn.innerText = 'delete'
    delBtn.classList.add('delete')

    // avoid giving space after input.value which will keep the palceholder as it is.
    li.appendChild(delBtn);
    ul.appendChild(li);
    input.value = "";
}

ul.addEventListener('click', remove_function)

// event is a default parameter
// event.target is a special property within event
// event.target tells us what is click/pressed
// console.dir(event.target) will give us special property called nodename, telling us which node type is the one tha triggered the alert.

/* Testing purpose 
# console.log(event.target)
# console.dir(event.target.nodeName) */


// 2 changes are required
// a. press Enter will type in the activity
// b. we should keep getting "type any activity" on repetition
// test
function remove_function(event){
    console.log(event.target.nodeName)
    console.dir(event.target)
    if (event.target.nodeName == 'BUTTON'){
        let parent = event.target.parentElement;
        parent.remove()
    }
};

