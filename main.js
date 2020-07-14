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

$(document).ready(function(){
    $("#btn-siguiente").on("click", function(){
        if(clicks === 0){
            $("#leccion").html(
                "<h1>Leccion 2 - HTML</h1>"
                ) 
            clicks += 1
        }
        else if(clicks === 1){
            $("#leccion").html(
                "Leccion 3"
            )
            clicks += 1
        }
    })
});
