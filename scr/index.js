
if ( navigator.userAgent.match( /iPhone/i ) || navigator.userAgent.match( /iPad/i ) )
{
    var viewportmeta = document.querySelector( 'meta[name="viewport"]' );
    if ( viewportmeta )
    {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
        document.body.addEventListener( 'gesturestart', function ()
        {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false );
    }
}

/******************************typed js***********************************/
const typed = new Typed( ".text", {
    strings: [ "Ana Marie Cruz!!!", "Ana Marie Cruz!!!", "Ana Marie Cruz!!!" ],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
} )
new Typed( ".text-1", {
    strings: [ "May 9, 2023", "May 9, 2023 - LO", "May 9, 2023 - LOVE", "May 9, 2023 - LOVE YO", "May 9, 2023 - LOVE YOU" ],
    typeSpeed: 30,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
} )
new Typed( ".text-2", {
    strings: [ "Happy Birthday dear,  With all my heart I wish you a day filled with happiness and a joyous year ahead,\
              I am sending you good vibes and smiles for every second of your special day," ],
    typeSpeed: 10,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
} )
new Typed( ".text-3", {
    strings: [ "FROM ALL THE WORLD : YOU ARE SPECIAL DEAR, YOU ARE MY REGINA='MY QUEEN'", "I PRAY YOU HEAL FASTER THAN YOU IMAGINE", "I LOVE YOU DEAR " ],
    typeSpeed: 10,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
} );

/////////////*******Auto play vedio and audio ***********************/
var promise = document.querySelector( 'video' ).play();

if ( promise !== undefined )
{
    promise.then( _ =>
    {
        // Autoplay started!
    } ).catch( error =>
    {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
    } );
}


var promise = document.querySelector( 'audio' ).play();

if ( promise !== undefined )
{
    promise.then( _ =>
    {
        // Autoplay started!
    } ).catch( error =>
    {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
    } );
}