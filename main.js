// Actualizar datos
function update()
{
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();
}

// Configurar el Editor
function setupEditor()
{
    window.editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue(`<!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>

    <!-- Prueba tu codigo aqui -->

    </body>

    </html>`,1); //1 = moves cursor to end

    editor.getSession().on('change', function() {
        update();
    });

    editor.focus();
    
    
    editor.setOptions({
        fontSize: "12pt",
        showLineNumbers: false,
        showGutter: false,
        vScrollBarAlwaysVisible:true,
        enableBasicAutocompletion: false, enableLiveAutocompletion: false
    });

    editor.setShowPrintMargin(false);
    editor.setBehaviours
}

// Comenzar el Editor
setupEditor();
update();

// Track de clicks
var clicks = 0

// Manejo de clicks
function siguiente(){
    if(clicks === 0){
        var client = new XMLHttpRequest();
        client.open('GET', './Leccion_HTML/leccion2.txt');
        client.onreadystatechange = function() {
            document.getElementById("leccion").innerHTML = this.responseText;
        }
        client.send();
        clicks += 1;
    }
    else if(clicks === 1){
        
    }
}


