function poof(element) {
    // Removes an element from the document
    element.parentNode.removeChild(element);
    var cloud = document.getElementById('cloud');
    cloud.setAttribute("style", "display : block");
}
