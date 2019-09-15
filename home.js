$(document).ready(function () {

    $('li h6 i').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('li h6  i').toggleClass('fa-angle-right fa-angle-left');
    });



$('#sidebarCollapse').on('click',function(){
   $('#sidebar').toggleClass('is-visible')
    if($('#sidebar').hasClass('is-visible')){
        $('#sidebar').animate({
   left:"0"
        },500);

        $('body').animate({
            paddingleft:"300px"
                 },500);
    }else{
        $('#sidebar').animate({
            left:"-300px"
                 },500);

                 $('body').animate({
                    paddingleft:"0px"
                         },500);
    }
});
//============================================================


 $(' form .input-group-append button').on('click',function(){
        
    $('.modal .modal-content .modal-footer button').attr("class","").addClass($(this).data('content'));
    $('.modal .modal-content .modal-footer a').attr("class","").addClass($(this).data('content'));
      });  

 //==============================================================
 $('.modal .modal-content .modal-footer a').on('click',function(){
  $(" .modal .modal-content .modal-body img").attr('src', "");
  $('input[type="file"]').val("");
  
 });
 //==============================================================
$('#sidebar .components > li:first-of-type').on('click',function(){
    $(this).addClass('active').siblings().children('ul').find('li').removeClass('active');
   // $(this).addClass('active').siblings().removeClass('active');

   $('body > section').hide(); 
   $($(this).data('content')).fadeIn();
   });


   $('#sidebar .components ul  li').on('click',function(){
                $(this).addClass('active').parent('ul').parent('li').siblings().removeClass('active');
                $(this).addClass('active').parent('ul').parent('li').siblings().children('ul').find('li').removeClass('active');
                $(this).addClass('active').siblings().removeClass('active');
            
            $('body > section').hide(); 
            $($(this).data('content')).fadeIn();
           $(" .modal .modal-content .modal-body img").attr('src', "");
             });
//===============================================================================
                $('.add-employee form .em').on('click',function(){
                    $('body > section').hide(); 
                    $($(this).data('content')).fadeIn();
                   });  
                   $('.add-student form .st').on('click',function(){
                    $('body > section').hide(); 
                    $($(this).data('content')).fadeIn();
                   }); 

                   $('.add-product form .pr').on('click',function(){
                    $('body > section').hide(); 
                    $($(this).data('content')).fadeIn();
                    $('.color-holder').css('background-color','#ffff');
                    $('#pickcolor').val('#ffff');
                   }); 
                });          
                   
 //=====================================================================

 function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $(" .modal .modal-content .modal-body img").attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
  }
}
 $('input[type="file"]').change(function() {

  readURL(this);
});
//==========================================================================
function previewFilesOfEmployee(){
var table = document.getElementById("myTable1");

var row = table.insertRow(1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);
var cell9 = row.insertCell(8);
 
cell2.innerHTML = document.getElementById("FirstName").value;
cell3.innerHTML = document.getElementById("LastName").value;
cell4.innerHTML = document.getElementById("Email").value;
cell5.innerHTML = document.getElementById("PhoneNumber").value;
cell6.innerHTML = document.getElementById('Birthday').value;
cell7.innerHTML = $(".add-employee input[type='radio']:checked").val();
cell8.innerHTML = document.getElementById("Country").value;
//cell9.innerHTML="<i class='fa fa-trash' onclick='deleteRow(this)'></i> <i class='fa fa-eraser' ></i>  ";
 
       
var I= document.createElement("i");
I.setAttribute("class","fa fa-trash");
cell9.appendChild(I);


I.onclick=function deleteRow() {
 var d = this.parentNode.parentNode.rowIndex;
 //r.parentNode = cell9
 //r.parentNode.parentNode = tr
 //r.parentNode.parentNode.rowIndex = number of row exactly
 document.getElementById("myTable1").deleteRow(d);
       
}     

//var preview = document.createElement('div');
var files   = document.querySelector(' .add-employee input[type=file]').files;


function readAndPreview(file) {

// Make sure `file.name` matches our extensions criteria
if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
 var reader = new FileReader();

 reader.addEventListener("load", function () {
   var image = new Image();
   image.height=50;
   image.width= 50;
 
   image.title = file.name;
   image.src = this.result;
   cell1.appendChild(image);
 }, false);

 reader.readAsDataURL(file);
}

}

if (files) {
[].forEach.call(files, readAndPreview);
}
   
document.getElementById("myform1").reset();
}
//=====================================================================

    // display selected row data into input text
    
  /*function editHtmlTbleSelectedRow(){
        var table = document.getElementById("myTable1");
        var    rIndex;
       
     
    for(var i = 1; i < table.rows.length; i++)
        {
            
              // get the seected row index
              rIndex = table.rows[i].rowIndex;
             // var srcval1= table.rows[i].cells[0].children[0].getAttribute("src");
             // $('.modal .modal-content .modal-body img').attr('src',srcval1);
               document.getElementById("FirstName").value =  table.rows[i].cells[1].innerHTML;
              document.getElementById("LastName").value  =  table.rows[i].cells[2].innerHTML;
              document.getElementById("Email").value     =  table.rows[i].cells[3].innerHTML;
            document.getElementById("PhoneNumber").value =  table.rows[i].cells[4].innerHTML;
              document.getElementById("Birthday").value  =  table.rows[i].cells[5].innerHTML;
             document.querySelectorAll(".add-employee input[type='radio']:checked").value = table.rows[i].cells[6].innerHTML;
             document.getElementById("Country").value = table.rows[i].cells[7].innerHTML;

              // get the seected input value
              //var srcval2=$('.modal .modal-content .modal-body img').src;
              //table.rows[i].cells[0].children[0].setAttribute('src','srcval2') ;
            table.rows[rIndex].cells[1].innerHTML = document.getElementById("FirstName").value;
             table.rows[rIndex].cells[2].innerHTML = document.getElementById("LastName").value;
             table.rows[rIndex].cells[3].innerHTML = document.getElementById("PhoneNumber").value;
             table.rows[rIndex].cells[4].innerHTML = document.getElementById("PhoneNumber").value;
             table.rows[rIndex].cells[5].innerHTML = document.getElementById('Birthday').value;
             table.rows[rIndex].cells[6].innerHTML = $(".add-employee input[type='radio']:checked").val();
             table.rows[rIndex].cells[7].innerHTML = document.getElementById("Country").value;
           
        }
        $('body > section').hide(); 
        $($('.fa-eraser').data('content')).fadeIn();
 
    }
*/

/*function  deleteRow(r) {
  var d = r.parentNode.parentNode.rowIndex;
  //r.parentNode = cell9
  //r.parentNode.parentNode = tr
  //r.parentNode.parentNode.rowIndex = number of row exactly
  document.getElementById("myTable1").deleteRow(d);
        
}*/

//==========================================================================
function previewFilesOfStudent(){
    var table = document.getElementById("myTable2");
    
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
     
    cell2.innerHTML = document.getElementById("FisrtName1").value;
    cell3.innerHTML = document.getElementById("LastName1").value;
    cell4.innerHTML = document.getElementById("Email1").value;
    cell5.innerHTML = document.getElementById("PhoneNumber1").value;
    cell6.innerHTML = document.getElementById('Birthday1').value;
    cell7.innerHTML = $(".add-student input[type='radio']:checked").val();
    cell8.innerHTML = document.getElementById("Country1").value;
   // cell9.innerHTML="<i class='fa fa-trash' onclick='deleteRow(this)'></i> <i class='fa fa-eraser' ></i>  ";
     
         
   var I= document.createElement("i");
   I.setAttribute("class","fa fa-trash");
   cell9.appendChild(I);


   I.onclick=function deleteRow() {
    var d = this.parentNode.parentNode.rowIndex;
    //r.parentNode = cell9
    //r.parentNode.parentNode = tr
    //r.parentNode.parentNode.rowIndex = number of row exactly
    document.getElementById("myTable2").deleteRow(d);
          
}

    //var preview = document.createElement('div');
    var files   = document.querySelector(' .add-student input[type=file]').files;
    
    
    function readAndPreview(file) {
    
    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
     var reader = new FileReader();
    
     reader.addEventListener("load", function () {
       var image = new Image();
       image.height=50;
       image.width= 50;
     
       image.title = file.name;
       image.src = this.result;
       cell1.appendChild(image);
     }, false);
    
     reader.readAsDataURL(file);
    }
    
    }
    
    if (files) {
    [].forEach.call(files, readAndPreview);
    }
       
    document.getElementById("myform2").reset();
    }
//=======================================================================
function previewFilesOfProduct(){
    var table = document.getElementById("myTable3");
    
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
  
     
    cell2.innerHTML = document.getElementById("ProductName").value;
    cell3.innerHTML = document.getElementById("ProductQuantity").value;
    cell4.innerHTML = document.getElementById("price").value + document.getElementById("Currency").value ;
    cell5.innerHTML = document.getElementById("pickcolor").value;
    cell6.innerHTML = document.getElementById('ProductStatus').value;
    cell7.innerHTML = document.getElementById('ProductDescription').value;
   // cell8.innerHTML="<i class='fa fa-trash' onclick='deleteRow(this)'></i> <i class='fa fa-eraser' ></i>  ";
     
         
   var I= document.createElement("i");
   I.setAttribute("class","fa fa-trash");
   cell8.appendChild(I);


   I.onclick=function deleteRow() {
    var d = this.parentNode.parentNode.rowIndex;
    //r.parentNode = cell9
    //r.parentNode.parentNode = tr
    //r.parentNode.parentNode.rowIndex = number of row exactly
    document.getElementById("myTable3").deleteRow(d);
          
}
    //var preview = document.createElement('div');
    var files   = document.querySelector(' .add-product input[type=file]').files;
    
    
    function readAndPreview(file) {
    
    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
     var reader = new FileReader();
    
     reader.addEventListener("load", function () {
       var image = new Image();
       image.height=50;
       image.width= 50;
     
       image.title = file.name;
       image.src = this.result;
       cell1.appendChild(image);
     }, false);
    
     reader.readAsDataURL(file);
    }
    
    }
    
    if (files) {
    [].forEach.call(files, readAndPreview);
    }
       
    document.getElementById("myform3").reset();
    }

//==========================================================================
var colorList = [ '000000', '993300', '333300', '003300', '003366', '000066', '333399', '333333', 
'660000', 'FF6633', '666633', '336633', '336666', '0066FF', '666699', '666666', 'CC3333', 'FF9933', '99CC33', '669966', '66CCCC', '3366FF', '663366', '999999', 'CC66FF', 'FFCC33', 'FFFF66', '99FF66', '99CCCC', '66CCFF', '993366', 'CCCCCC', 'FF99CC', 'FFCC99', 'FFFF99', 'CCffCC', 'CCFFff', '99CCFF', 'CC99FF', 'FFFFFF' ];
		var picker = $('#color-picker');

		for (var i = 0; i < colorList.length; i++ ) {
			picker.append('<li class="color-item" data-hex="' + '#' + colorList[i] + '" style="background-color:' + '#' + colorList[i] + ';"></li>');
		}

		$('body').click(function () {
			picker.fadeOut();
		});

		$('.call-picker').click(function(event) {
			event.stopPropagation();
			picker.fadeIn();
			picker.children('li').hover(function() {
				var codeHex = $(this).data('hex');

				$('.color-holder').css('background-color', codeHex);
				$('#pickcolor').val(codeHex);
			});
		});