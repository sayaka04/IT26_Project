function getBookIndex(x){




//for getting the ID# to the textbox
    var textbox1 = document.getElementById("book-id-textbox");
    var textbox2 = document.getElementById("book-title-textbox");

    textbox1.value = x.cells[0].innerHTML;
    textbox2.value = x.cells[1].innerHTML;


//for Alert // not that important
    var col1;
    var col2; 
    var col3; 
    var col4; 
    var col5;
    var col6;
    var col7;
    var col8;

    col1 = x.cells[0].innerHTML;
    col2 = x.cells[1].innerHTML;
    col3 = x.cells[2].innerHTML;
    col4 = x.cells[3].innerHTML;
    col5 = x.cells[4].innerHTML;
    col6 = x.cells[5].innerHTML;
    col7 = x.cells[6].innerHTML;
    col8 = x.cells[7].innerHTML;

    var Data = col1 + " " + col2 + " " + col3 + " " + col4 + " " + col5 + " " + col6 + " " + col7 + " " + col8;
    // alert(Data);


}


function reserve(){

 var reserve = document.getElementById("book-id-textbox");
 
 alert("Reserving Book-ID " + reserve.value);


    
}