$('#search').on('keyup', function(e){
  if (e.keyCode == 13) {
    $('tbody').html("");
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
  }
})

$('.btn-group button').click(function(){
  current_value = document.getElementById("search").value;
  document.getElementById("search").value = current_value + $(this).text();
  document.getElementById("search_label").textContent = "";
})


