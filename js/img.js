
var arr = document.getElementsByTagName("img");
arr = [].slice.call(arr);
arr.forEach((e) => {
    e.setAttribute('draggable', false);
});
