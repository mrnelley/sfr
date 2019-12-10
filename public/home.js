$(document).ready(function(){
  var cards = $('.card');
  // returns an array of DOM objects pf class card
  for(let i = 0; i < $(cards).length; i++){
    let $this = $(cards[i]);
      // $this.on('mouseover', function(){
        // $this.toggleClass('hovering');
      // });
      // $this.on('click', function(){
        // $this.toggleClass('clicked');
      // });
    }

  $('#switch').html("Montgomery County");
  var state = $('button').html();

  if(state){
    $('#switch').click(()=>{
      // change text in button
      if ($('button').html() == "Montgomery County"){
        $('button').html("PG County");
      }
      else if($('button').html() == "PG County"){
        $('button').html("Montgomery County");
      }

      console.log('clicked '+ state);
      // hide PG info
      $('#pg_county').toggleClass('hide');
      // show MoCo info
      $('#mo_county').toggleClass('hide');
    })
  }
});


  // for(var i=0; i < cards.length; i++){
  //     console.log('clicked card number #' + i );
  // }
