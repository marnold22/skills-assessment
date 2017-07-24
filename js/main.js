$(document).ready(function(){

    // An array of contact objects - each person is an object that holds a name, email, phone, address
    var contacts = [
        {Name: 'Christain', Email: 'Christain@yahoo.com', Phone: '325-555-1234', Address:'6535 Wilton Ave. </br> Cilver City CA 90234'}, // DOnt forget , after uncommenting
        {Name: 'Rich', Email: 'Rich@tripod.com', Phone:'325-555-1234', Address: '6535 Wilton Ave. </br> Cilver City CA 90234'},
        {Name: 'Scott', Email: 'Scott@mailinator.com', Phone: '325-555-1234', Address: '6535 Wilton Ave. </br> Cilver City CA 90234'},
        {Name: 'Danny', Email: 'Danny@hotmail.com', Phone: '325-555-1234', Address: '6535 Wilton Ave. </br> Cilver City CA 90234'},
        {Name: 'Taka', Email: 'Taka@myspace.com', Phone: '325-555-1234', Address: '6535 Wilton Ave. </br> Cilver City CA 90234'},
        {Name: 'Tim', Email: 'Tim@netscape.com', Phone: '325-555-1234', Address: '6535 Wilton Ave. </br> Cilver City CA 90234'},
        {Name: 'Patrick', Email: 'Patrick@live.com', Phone: '325-555-1234', Address: '6535 Wilton Ave. </br> Cilver City CA 90234'},
        {Name: 'Jacques', Email: 'Jacques@aol.com', Phone: '325-555-1234', Address: '6535 Wilton Ave. </br> Cilver City CA 90234'}
      ];

    // Loop through contact objects, and outputting the data with the corresponding divs
    $(contacts).each(function(i, contactObject) {
        $('div#contact-content').append('<div class=contact-info'+i+'>' + '<div class=online-status><span class="circle'+i+'"></span></div>' + '<div class=contact-name'+i+'>' + contactObject.Name + '</div>' + '<div class=contact-email'+i+'>'+ contactObject.Email + '</div>' + '<div class=contact-phone'+i+'>'+ contactObject.Phone + '</div>' + '<div class=click-content'+i+'>' + contactObject.Email +'</br>'+ contactObject.Phone +'</br>'+ contactObject.Address + '</div>' + '</div>');

        //Email & Phone selector that hides/shows the data from user selection
        $( document ).ready(function() {
          $(".contact-email"+i).show();
          $(".contact-phone"+i).hide();
          $(".click-content"+i).hide();
          $('#contact-toggle').on('change', function () {
              if(this.value === "email-address"){
                $(".contact-email"+i).show();
                $(".contact-phone"+i).hide();
              }else if(this.value === "phone-number"){
                $(".contact-phone"+i).show();
                $(".contact-email"+i).hide();
              }else{
                $(".contact-phone"+i).hide();
                $(".contact-email"+i).hide();
              }
          });
        });

        // on hover each name will light up to display
        $('.click-content'+i).hide();
        $('.contact-name'+i).hover(function(){
          $(this).toggleClass('active');
        });

        // onclick content here that toggles each persons larger data set (ie email, phone, address)
        $('.contact-name'+i).on('click', function(){
          $('.contact-name'+i).toggleClass('.contact-name'+i).toggleClass('active');
          $('.click-content'+i).toggleClass('.click-content'+i).toggleClass('activeToggle');
          $('.contact-email'+i).toggleClass('.contact-email'+i).toggleClass('active');
          $('.contact-phone'+i).toggleClass('.contact-phone'+i).toggleClass('active');
          $('.click-content'+i).slideToggle(400);
        });
    });
});
