document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('submit');
    let checks = document.getElementById('checks');
    let sort = document.getElementById('sort');
    let num = 0;
    let arr = new Array();
    let items = new Array();


button.addEventListener('click', (evt) => {
    let text = document.getElementById('ToDo').innerHTML;
    let toDoList = document.getElementById("ToDo");
    let list = document.createElement("li");
    let list2 = document.createElement("li");
    list.checked = false;
    list2.checked = false;
    let titleValue = document.createElement("h2");
    let titleOutput = document.createElement("h2");
    let titleInput = document.getElementById("Title");
    let descriptionValue = document.createElement("h5");
    let descriptionInput = document.getElementById("Description");
    let descriptionOutput = document.createElement("h5");
    let dateValue = document.createElement("h5");
    let dateInput = document.getElementById("Date");
    let dateOutput = document.createElement("h5");
    let categoryValue = document.createElement("h5");
    let categoryInput = document.getElementById("Category");
    let categoryOutput = document.createElement("h5");
    let check = document.createElement("button");
    let delete1 = document.createElement("button");
   
    check.innerText = "Check";
    delete1.innerText = "Delete";
    titleValue.innerText = titleInput.value;
    titleOutput.innerText = "Title: " + titleValue.innerText;
    descriptionValue.innerText = descriptionInput.value;
    descriptionOutput.innerText = "Description: " + descriptionValue.innerText;
    dateValue.innerText = dateInput.value;
    dateOutput.innerText =  dateValue.innerText;
    categoryValue.innerText = categoryInput.value;
    categoryOutput.innerText = "Category: " + categoryValue.innerText;
    let todo = {
        "title" : titleOutput.innerText,
            "desc" : descriptionOutput.innerText,
            "date" : dateOutput.innerText,
            "cat" : categoryOutput.innerText,
            "check" : check.innerText,
            "delete" : delete1.innerText
    }
   
    list.appendChild(titleOutput);
    list.appendChild(descriptionOutput);
    list.appendChild(dateOutput);
    list.appendChild(categoryOutput);
    list.appendChild(check);
    list.appendChild(delete1);
    toDoList.appendChild(list);
    list.checked = false;
    list.date = dateInput.value;
    items.push(list)
    arr.push(todo);
   
    // arr.sort(function(first, second) {
    //     if (new Date(second.date) > new Date(first.date)){
    //         return -1;
    //     }
    //     else if(new Date(second.date) < new Date(first.date)){
    //         return 1;
    //     }
    //     else{
    //         return 0;
    //     }
       
    // });
    // console.log(todo);
    console.log(arr);
    // for(let todo of arr) {
    //     list2.appendChild(todo.title);
    //     list2.appendChild(todo.desc);
    //     list2.appendChild(todo.date);
    //     list2.appendChild(todo.cat);
    //     list2.appendChild(todo.check);
    //     list2.appendChild(todo.delete1);
    //     toDoList.appendChild(list2);


    // }
   
    check.addEventListener('click', function() {
        console.info("hi");
        console.info(list.checked);
        if(list.checked == false) {
            num++;
            console.info(num);
         
            console.log("hisdfs");
            list.style.textDecoration = "line-through";
            list.checked = true;
           
        }
       else{
            list.style.textDecoration = "none";
            list.checked = false;
            num--;
        }
       
       
        checks.innerText = "Number Checked off: "+num;
    })
    delete1.addEventListener('click', function() {
        if(list.checked == true){
            list.checked = false;
            num--;
            checks.innerText = "Number Checked off: "+num;
        }
        toDoList.removeChild(list);
        const index = items.indexOf(list);
        if(index > -1){
            items.splice(index, 1)
        }


    })
    sort.addEventListener('click', function() {
       
    console.log('sort')
    // remove all items from the list
    if(toDoList.firstChild){
    while(toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }
    items.sort(function(a, b) {
        if (new Date(b.date) > new Date(a.date)){
            return -1;
        }
        else if(new Date(b.date) < new Date(a.date)){
            return 1;
        }
        else{
            return 0;
        }
    })
    for(let i = 0; i < items.length; i++) {
        toDoList.appendChild(items[i]);
    }
}else{
    alert ("You Have Nothing To Do");
}


    })
});
});
