var student;

function dibujarTabla() {

    var table = document.getElementById("myTable");



    //Creación de filas
    //  table.appendChild(document.createElement('tbody'));
    for (var j = 0; j < 5; j++) {
        //  var row2 = table.tBodies[0].insertRow(-1);
        var row1 = table.insertRow(j);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);

        cell1.innerHTML = "Fila " + j + "  " + "Columna 0",
        cell2.innerHTML = "Fila " + j + "  " + "Columna 1";
    }


    var header = table.createTHead();
    
    var row2 = header.insertRow(0);
    row2.innerHTML = "<b>TITULO</b>";
    row2.style.textAlign = 'right';
    
    var row3 = header.insertRow(1);
    var cell = row3.insertCell(0);
    cell.innerHTML = "<b>TITULO 1</b>";
    
    var cell2 = row3.insertCell(1);
    cell2.innerHTML = "<b>TITULO 2</b>";
}