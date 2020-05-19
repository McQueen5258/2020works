let tasks = [];
let numTasks;

$(".addNew").click(function(){
    let task = $(".newToDo").val();
    tasks.push('<li>'+task+'</li>'+'<br>');
    $(".ToDoList").append(tasks[tasks.length-1]);
    numTasks = tasks.length;
    $(".numTasks").text(numTasks);
    $(".newToDo").val("");
});