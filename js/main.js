function openChat(){
   $crisp.do('chat:open');
};

function scrollDown(){
  $("html, body").animate({ scrollTop: $(document).height() }, 950);
};

function scrollDownMobile(){
	$('.button-collapse').sideNav('hide');
	$("html, body").animate({ scrollTop: $(document).height() }, 950);
}
