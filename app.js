var a=document.getElementById("sub1");
function get_input(num){
    a.value += num;
}
function submit(){
    a.value =eval(a.value);
}
function clr(){
    a.value="0";
}

function del() {
    a.value = a.value.slice(0,-1);
}