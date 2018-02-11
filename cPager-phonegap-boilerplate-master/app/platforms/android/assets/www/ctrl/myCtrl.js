"use strict";

app.cPager.ctrl('myCtrl', {

    myTask: function () {
        console.log('---> myTask 1. ');

        // Your Code here...
        
        

        return function () {
            console.log('---> myTask 2. ');

           

        };
    },
    onlyTask: function (e) {
        console.log('---> Only Task; No PageChange', e.event.target);

        // Your Code here...
        //alert('gehts');


        //$('.plus').on('click',function(e) {
            
            
            /*
            if ( $(e.event.target).hasClass('open') ) {
                
                //console.log('-remove');
                $(e.event.target).parent().parent().find( ".detailtext").slideDown( "slow");
                $(e.event.target).removeClass('open')
            } else {
                //console.log('-add');
                $(e.event.target).parent().parent().find( ".detailtext").slideUp( "slow");
                $(e.event.target).addClass('open')
            }
            */
        
            $(e.event.target).parent().parent().find( ".detailtext").slideToggle( 450);
            $(e.event.target).parent().parent().find( ".detail").toggleClass('farbe');
            $(e.event.target).parent().prev( ".punkt").toggleClass('punkt_farbe');
            

        //});


        

        return false;
    },
    myAnimateTask: function () {
        console.log('---> myAnimateTask 1. ');

        // Your Code here...

        return function () {
            console.log('---> myAnimateTask 2. ');

            // Your Code here...

            return function () {
                console.log('---> myAnimateTask 3. ');
    
                // Your Code here...

            };
        };
    }

});