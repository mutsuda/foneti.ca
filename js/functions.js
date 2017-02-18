$('#search').keydown(function(){
  $.getJSON("data.json",function(data){
  var search = $('#search').val();
  var regex = new RegExp(search, 'i');
  var output;
    $.each(data, function(key, val){
      if(val.word.search(regex) != -1) {
        output += "<tr>";
        output += "<td id='"+key+"'>"+val.word+"</td>";
        output += "</tr>";
      }
    });
    $('tbody').html(output);
  });
})

$('#btn btn-default').click(function(){

  console.info("clicked");
})


