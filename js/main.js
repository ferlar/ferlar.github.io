function openChat(){
   $crisp.chat.open()
};

$( "#call-to-action" ).hover(
  function() {
    $( this ).addClass( "animated pulse infinite" );
  }, function() {
    $( this ).removeClass( "animated pulse infinite" );
  }
);

function scrollDown(){
  $("html, body").animate({ scrollTop: $(document).height() }, 950);
};

function scrollDownMobile(){
	$('.button-collapse').sideNav('hide');
	$("html, body").animate({ scrollTop: $(document).height() }, 950);
}