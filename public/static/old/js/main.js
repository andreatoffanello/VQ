$(document).ready(function(){

    //INTRO fadeinup

    $('.stop_name h1').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='hi'>$&</span>"));
    });

    $('.stop_name h3').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='hi'>$&</span>"));
    });

    //$('.stop_name').splitLines({
    //    tag: '<span class="hi">',
    //    //keepHtml: true,
    //    width:'1',
    //});

    var introH1 = anime.timeline({
        autoplay: true,    
    })

    .add ({
        targets: '.hi',
        duration: 1000,
        easing: 'easeInOutCubic',
        opacity: 1,
        top: 0,
        'letter-spacing': '1px',
        delay: function(el, i) { return i * 10 },
    })

    .add ({
        targets: '.main_img',
        duration: 1000,
        easing: 'linear',
        opacity: 1,
        offset: '+=2000'
    })

    .add ({
        targets: '.img_overlay',
        duration: 1000,
        easing: 'linear',
        opacity: 1,
        background: 'rgba(0,0,0,0.3)',
        offset: '-=1000'
    })

    .add ({
        targets: '.main_img',
        duration: 3000,
        easing: 'easeInOutCubic',
        top: 0,
        offset: '-=1000'
    })

    .add ({
        targets: '.hi',
        duration: 2000,
        easing: 'linear',
        'color': '#ffffff',
        offset: '-=4000'
    })

    .add ({
        targets: '.main_img',
        duration: 1000,
        easing: 'easeInOutQuart',
        opacity: 1,
        height: '200px',
        complete: function(anim) {
            textfi.restart();
        }
    });


    //Text fadeinup
    $('.paragraph').splitLines({
        tag: '<span class="fi">',
        //keepHtml: true,
        width:'1',
    });

    //$('.paragraph').each(function(){
    //  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='fi'>$&</span>"));
    //});

    var textfi = anime.timeline({
        autoplay: false,
        targets: '.fi',
        delay: function(el, i) { return i * 5 }  
    })

    .add ({
        duration: 1500,
        easing: 'easeOutCubic',
        opacity: 1,
        top: 0,
    });


                
//=== ANIMAZIONE CONVALIDA ===

    //Comparsa
    var validation = anime.timeline({
        autoplay: false
    });

    validation

    .add ({
        targets: '.animation_overlay',
        top: 0,
        duration: 1000,
        easing: 'easeInOutQuart',
        complete: function(anim) {
            rotation.restart();
        }
    });


    //Rotazione
    var rotation = anime.timeline({
        autoplay: false,
        targets: '.el',
        delay: function(el, i) { return i * 200 }
    })

    .add({
        rotate: '2turn',
        easing: 'easeInOutQuart',
        duration: 3000,
        complete: function(anim) {
            expand.restart();
            fadeaway.restart();
        }
    });


    //Espansione
    var expand = anime.timeline({
        autoplay: false,
        targets: '.el',
        delay: function(el, i) { return i * 200 }
    })

    .add({
        scale: 20,
        easing: 'easeInOutQuart',
        duration: 3000,
        complete: function() {
            setTimeout(function(){
               $(".el").css( "transform", "scale(1)" );
            }, 100);
        }
    });


    //Opacità
    var fadeaway = anime.timeline({
        autoplay: false,
    })

    .add({
        targets: '.animation_overlay',
        opacity: 0,
        easing: 'easeInOutQuart',
        duration: 1000,
        offset: 2000,
        complete: function() {
            $(".animation_overlay").removeClass( "visible" );
            setTimeout(function(){
               $(".animation_overlay").css( "opacity", "1" );
            }, 100);
        }
    });


    //Fade Error
    var fadeError = anime.timeline({
        autoplay: false,
    })

    .add({
        targets: '#error',
        opacity: 0,
        easing: 'easeInOutQuart',
        duration: 1000,
        complete: function() {
            $(".response").css({'visibility':'hidden', 'opacity':'1'});
        }
    });



    //Pulsante
    $("#button").click(function() {
      if ($("#password").val() == 'pswd') {
        validation.restart();
        //$("#secret").addClass( "show" );
        $(".animation_overlay").addClass( "visible" );
        setTimeout(function(){
           $("#success").css( "visibility","visible");
        }, 3000);
      }
      else {
        validation.restart();
        //$("#secret").addClass( "show" );
        $(".animation_overlay").addClass( "visible" );
        setTimeout(function(){
           $("#error").css( "visibility","visible");
        }, 3000);
      };
    });


    //Pulsante
    $("#error button").click(function() {
        fadeError.restart();
    }); 
});