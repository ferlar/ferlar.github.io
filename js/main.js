function openChat(){
   $crisp.do('chat:open');
};

function scrollDown(){
  $("html, body").animate({ scrollTop: $(document).height() }, 950);
};

function scrollDownMobile(){
	$('.button-collapse').sideNav('hide');
	$("html, body").animate({ scrollTop: $(document).height() }, 950);
};


function moveShirt(){
  $("#icon1").addClass("animated zoomIn");
};

function moveBuilding(){
  $("#icon2").addClass("animated flipInX");
};

function moveCarrinha(){
  $("#icon3").addClass("animated lightSpeedIn");
};

var options = [
  {
    selector: '#icon1',
    offset: 0,
    callback:
     moveShirt()
   },
   {
     selector: '#icon2',
     offset: 0,
     callback:
      moveBuilding()
    },
    {
    selector: '#icon3',
    offset: 0,
    callback:
     moveCarrinha()
   },
];
Materialize.scrollFire(options);
