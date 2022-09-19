$(function () {
    'use strict';

    var typed = new Typed('.typed', {
        strings: ['Designers', 'Developers', 'Freelancers', 'Models'],
        smartBackspace: true,
        typeSpeed: 80,
        startDelay: 1200,
        backSpeed: 80,
        backDelay: 500,
        loop: true,
        loopCount: false,
        showCursor: false,
        cursorChar: "|",
        attr: null,
        contentType: 'html',
        callback: function () {},
        preStringTyped: function () {},
        onStringTyped: function () {},
        resetCallback: function () {}
    });
});

