
//Autenticar usuario//

$(document).ready(function(){


    //    button click
  $("#btnappend").on('submit',(function(e) {
    e.preventDefault();

      var name = $('#name_asig').val();
        var matr = $('#asig_matr').val();

        alert(name);



        $('#my_table > tbody:last-child  ').append(' <tr>    \n' +
            '                              <th scope="row">\n' +
            '                                <input class="form-check-input" type="checkbox" value="2" id="flexCheckChecked" >\n' +
            '                                <label class="form-check-label" for="flexCheckChecked"></label>\n' +
            '                              </th>\n' +
            '                              <td>' + name + '</td>\n' +
            '                              <td>' + matr + '</td>\n' +
            '                             </tr>');


    }));





 
  // $("#delete").click(function(){
  //   $("#my_table > tbody:last-child").empty();
  //
  //
  //
  //
  //
  // });


  //Validar selección de asignaturas optativas
  /*$(document).on('submit', 'form#asignaturas', () => {
    let primero = validator.getValueSelect("autoSizingSelect1"), 
        segundo = validator.getValueSelect("autoSizingSelect2"), 
        tercero = validator.getValueSelect("autoSizingSelect3"),
        error = false;

    // Validar primera asignatura
    error = validator.validate(validator.isNull(primero) || validator.isEmpty(primero), "div#autoSizingSelect1-error");

    // Validar segunda asignatura
    error = validator.validate(validator.isNull(segundo) || validator.isEmpty(segundo), "div#autoSizingSelect2-error");

    // Validar tercera asignatura
    error = validator.validate(validator.isNull(tercero) || validator.isEmpty(tercero), "div#autoSizingSelect3-error");

    return !error;
});*/
  




/* 
    $("login").click(function(){
        //alert("Value: " + $("#sistemaseguridadusuario").val());
        //alert("Value: " + $("#sistemaseguridadcontrasenna").val());

      });
            $("#login").submit(function (e) { 
              e.preventDefault();
            });       
   $("p").click(function(){
        // action goes here!!
        $("p").hide(100, function () {
           $("p").hide(); 
        });
      });

       $("#delete").click(function(){

          $("tbody tr td").empty();
        });      

          $('#logout').on('click', function(e){

            e.preventDefault();
            $('#logout').load($(this).attr('href'));
          });  
    alert("Jquery funcionando")*/

  });