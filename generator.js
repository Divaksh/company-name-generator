const prefix = ["Micro", "Info", "Logi", "Media", "Digi", "Tech", "Meta", "Dot", "Hover", "Syncra", "Syncro",
"Alt", "Omni", "Nova", "Urban", "ShreeNath", "Global", "Dev", "Hexa", "Clover", "Uni"]
const postfix = ["Soft", "Sys", "Infro", "infra", "corp", "Cube", "Square", "Droid", "Solutions", "Digi", "Clouds",
"Focus", "Lab", "Hub", "consultancy", "Services", "It", "Mini", "Basics"]

function generateNames(){
    var name = document.getElementById("custom-name").value;
    for (var i = 0; i < prefix.length; i++){
        var newName = document.createElement('p');
        newName.innerHTML = prefix[i]+name;       ;
        document.getElementById('names-list').appendChild(newName);
    }
    
    for (var i = 0; i < prefix.length; i++){
        var newName = document.createElement('p');
        newName.innerHTML = name+postfix[i]
        document.getElementById('names-list').appendChild(newName);
        console.log(name+postfix[i]);
    }
}

