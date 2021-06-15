$.each($('.event-date'), function( key,item ) {
    var eventDate = $(item).data('eventdate');
    var eventendDate = $(item).data('enddate');
    $(item).html(daysCalc(eventDate,eventendDate));
});

function daysCalc(startdate,enddate){
  var today=new Date();  
  var eventDate = new Date(startdate);
  var eventendDate = new Date(enddate);  
  var timeDiff = eventDate.getTime() - today.getTime() ;         
  var daysCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
  var enddatetimeDiff = eventendDate.getTime() - today.getTime() ;         
  var enddatedaysCount = Math.ceil(enddatetimeDiff / (1000 * 3600 * 24));
  var text;
  if (daysCount == 0){
   text = '<span class="badge badge-success">Live</span>';
  }else if (daysCount < 0){
    if (enddatedaysCount >= 0){
      text = '<span class="badge badge-success">Live</span>';
    } else if (daysCount == -1){
        text="("+(daysCount*-1)+" day ago)";
    }
    else{
       text="("+(daysCount*-1)+" days ago)";
    }
  }else if (daysCount == 1){
       text="(in "+daysCount+" day)";
  }
  else{
     text="(in "+daysCount+" days)";
  }
  return text;
}
  
