let inputbox = document.getElementById("input-box");
let listcontainer = document.getElementById("listcontainer");
const btn = document.querySelector(".btn");

btn.addEventListener('click', ()=>{

    if(inputbox.value === '')
    {
        alert("you must write something!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        inputbox.value = '';
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
});
inputbox.addEventListener('keydown', (e)=>{

    if(e.keyCode === 13)
        {
            if(inputbox.value === '')
            {
                alert("you must write something!");
            }
            else
            {
                let li = document.createElement("li");
                li.innerHTML = inputbox.value;
                inputbox.value = '';
                listcontainer.appendChild(li);
                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }
            saveData();
        }
});


listcontainer.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI")
        {
            e.target.classList.toggle("checked");
            saveData();
        }
    else if(e.target.tagName === "SPAN")
        {
            e.target.parentElement.remove();
            saveData();
        }
});

function saveData()
{
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask()
{
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();