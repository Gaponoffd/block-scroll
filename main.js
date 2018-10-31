

//Плавное перемещение по секции
    $('.nav__link').on('click', function(e) {
        e.preventDefault();
        showSection($(this).attr('href'));
    });
   
    $(window).scroll(function() {
        checkSection()
    });

    function showSection(section) {
        var direction = section.replace(/#/, ''),
            reqSection = $('section').filter('[data-section="' + direction + '"]'),
            reqSectionPos = reqSection.offset().top-66;
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
    };

    function checkSection() {
        $('section').each(function() {
            var $this = $(this),
                topEdge = $this.offset().top-66,
                bottomEdge = topEdge + $this.height(),
                wScroll = $(window).scrollTop();
                
            if(topEdge < wScroll && bottomEdge > wScroll) {
                var currentId = $this.data('section'),
                    reqLink = $('.nav__link').filter('[href="#' + currentId + '"]');
                if($('.nav__link').is('[href="#' + currentId + '"]')){
                    reqLink.closest('.nav__item').addClass('nav__item_active')
                    .siblings().removeClass('nav__item_active');
                } else {
                    $('.nav__item').removeClass('nav__item_active');
                }
            }
        })
    };
