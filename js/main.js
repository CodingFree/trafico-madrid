/* jshint esnext: true, browser: true, easy: true */
(function(window) {
    'use strict';
    // Prefetch it to cache, then change location.
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'http://informo.munimadrid.es/informo/tmadrid/tmadrid.php');
    iframe.classList.add('hidden');
    iframe.addEventListener('load', function() {
        console.log('loaded, bye!');
        document.location = 'http://informo.munimadrid.es/informo/tmadrid/tmadrid.php';
    });
    document.body.appendChild(iframe);
})(this);
