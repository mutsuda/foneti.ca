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

$('button').click(function(){
  current_value = document.getElementById("search").value;
  document.getElementById("search").value = current_value + $(this).text();
})


