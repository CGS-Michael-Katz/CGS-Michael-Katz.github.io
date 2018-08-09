function loadFile(name, type){
    if (type == "js"){
        var file = document.createElement("script")
        file.setAttribute("type","text/javascript")
        file.setAttribute("src", name)
    }
    else if (type == "css"){
      var file = document.createElement("link")
      file.setAttribute("rel", "stylesheet")
      file.setAttribute("type", "text/css")
      file.setAttribute("href", name)
    }
    if (typeof file != "undefined"){
      document.getElementsByTagName("head")[0].appendChild(file) //7
    }
}

loadFile("index.css", "css");
