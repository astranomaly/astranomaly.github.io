// This userscript will not work if installed with a userscript extension
// and is provided for demonstrative purposes only


// ==UserScript==
// @name         Plusgood
// @namespace    http://theoutpost.dev
// @version      2.0.0
// @description  Lots of tiny features
// @author       The Outpost
// @include      https://www.website.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_addStyle
// ==/UserScript==

/* jshint esversion: 6, eqeqeq: true, futurehostile: true, latedef: nofunc, notypeof: true, undef: true, unused: true, browser: true, devel: true, quotmark: single */
/* global GM_setValue, GM_getValue, GM_listValues, GM_addStyle */

(function( window, document, undefined ){

    // Set global variables
    let prevVer  = GM_getValue( 'pg_version' );
    var pagePath = window.location.pathname;
    var pageURL  = window.location.href;

    // Check for & define global namespace
    var PG = PG || {
        VERSION: '2.0.0',
        TIMESTAMP: 'Jan 23rd',
        UPDATE_LIST: [
            'Made a public version of this script for my portfolio'
        ],
        NEW_BUG_LIST: [],
        theme: {},
        init: function(){
            console.log( '[+G] [v'+PG.VERSION+'] Tweaking site...' );

            PG.versionCheck();

            // Find which theme is being used
            PG.theme.is = document.querySelector( 'head link[href*="theme"]' ).getAttribute('href');
            // Set the appropriate theme styles
            if( PG.theme.is.indexOf( 'dark' ) > 0 ){
                PG.theme.is = 'dark';
                PG.theme.btnBorder = '1px solid #bbaa77';
                PG.theme.btnColor  = '#aaa';
            }else{
                PG.theme.is = 'light';
                PG.theme.btnBorder = '1px solid #d0d0d0';
                PG.theme.btnColor  = '#000';
            }
            console.log( '> Theme:',PG.theme.is );

            // Check which page we're on
            PG.getPage( pagePath );
        },
        versionCheck: function(){
            // Check to see if this is the first run since an update
            if( prevVer !== PG.VERSION){
                // this is not the first time the script has ever run (and the note is allowed)
                if( prevVer !== undefined ){
                    if( GM_getValue( 'pg_alerts' ) ){
                        PG.triggerNote( 'update' );
                    }
                // this is the first time the script has run
                }else{
                    // enable GR buttons, etc, by default
                    GM_setValue( 'pg_gr_btns', true );
                    GM_setValue( 'pg_alerts', true );
                    PG.triggerNote( 'firstRun' );
                }
                // store the current version
                GM_setValue( 'pg_version', PG.VERSION );
            }
        },
        onPage: {
            global: function(){
                /*==============================
                ===== SITE-WIDE CODE
                ==============================*/
                console.log('[Global] Running...');

                // If the Hide Banner setting is enabled, removed the header image
                if( GM_getValue( 'pg_hide_banner' ) ){
                    PG.addCSS(['#header',{display:'none'}],['body',{'padding-top':'15px'}]);
                }

                console.log('[Global] Done!');
            },
            home: function(){
                /*==============================
                ===== HOME PAGE CODE
                ==============================*/
                console.log('[Home] Running...');

                // Run the shoutbox functions
                PG.initShoutbox();

                console.log('[Home] Done!');
            },
            shoutbox: function(){
                /*==============================
                ===== SHOUTBOX CODE
                ==============================*/
                console.log('[Shoutbox] Running...');

                // Run the shoutbox functions
                PG.initShoutbox();

                console.log('[Shoutbox] Done!');
            },
            browse: function(){
                /*==============================
                ===== BROWSE/SEARCH
                ==============================*/
                console.log('[Browse] Running...');
                if( GM_getValue( 'pg_hide_collected' ) ){
                    PG.hideCollected();
                }
                console.log('[Browse] Done!');
            },
            book: function(){
                /*==============================
                ===== BOOK PAGE CODE
                ==============================*/
                console.log('[Book] Running...');

                var authors     = document.querySelectorAll( '#mainBody tr:nth-child(2) td:last-of-type a' );
                var rawTitle    = document.querySelector( '#mainBody h1' );
                var seriesTitle = document.querySelector( '#mainBody tr:nth-child(3) td:last-of-type a' );
                var bookCover   = document.querySelector( '#posterImage' );
                var bookID      = Number( pagePath.split('/')[2] );
                var bookTitle   = PG.redoSpaces( rawTitle.textContent );

                // Add the Goodreads Search buttons
                if( GM_getValue( 'pg_gr_btns' ) ){
                    PG.addGoodreadsBtns( authors, bookTitle, seriesTitle );
                }
                // Relocate bookmark
                if( GM_getValue( 'pg_move_bookmark' ) ){
                    PG.moveBookmark( rawTitle, bookID );
                }
                // Create "Missing Cover" cover
                if( !bookCover.querySelector('img') && GM_getValue('pg_placeholder_covers') ){
                    PG.fakeCover( bookCover, 'missing' );
                }

                console.log('[Book] Done!');
            },
            settings: function(){
                /*==============================
                ===== PREFERENCE PAGE CODE
                ==============================*/
                console.log('[Settings] Running...');

                // Check `pageURL` to make sure we're on the main settings tab
                if( pageURL.endsWith('preferences/index.php') || pageURL.endsWith('?view=general') ){
                    // Create new table elements
                    let settingNav = document.querySelector( '#mainBody > table' );
                    let pgSetTitle = document.createElement( 'h1' );
                    let pgSetting  = document.createElement( 'table' );

                    // Insert table elements after the Preferences nav bar
                    PG.insertAfter( pgSetTitle, settingNav );
                    PG.insertAfter( pgSetting, pgSetTitle );
                    PG.setAttributes( pgSetting, {
                        'class':'coltable',
                        'cellspacing':'1',
                        'style':'width:100%;min-width:100%;max-width:100%;'
                    } );

                    // Insert text into the table elements
                    pgSetTitle.innerHTML = '+G Settings';
                    pgSetting.innerHTML  = PG.buildSettingTable( PageDir );

                    // Loop over the Settings Object
                    for( let page in PageDir ){
                        for( let item in PageDir[page] ){
                            if( PageDir[page][item] !== null && typeof PageDir[page][item] === 'object' ){
                                let theID = PageDir[page][item].id;
                                // For each Setting item, if it is True fill in the correct information
                                 if( GM_getValue( theID ) ){
                                    if( PageDir[page][item].type === 'checkbox' ){
                                        document.getElementById( theID ).setAttribute( 'checked','' );
                                    }else if( PageDir[page][item].type === 'textbox' ){
                                        document.getElementById( theID ).value = GM_getValue( theID+'_val' );
                                    }
                                 }
                            }
                        }
                    }

                    // Make a working Save button
                    let ssTimer, pgSubmitBtn = document.querySelector( '#pg_submit' );
                    pgSubmitBtn.addEventListener( 'click', function(){ PG.saveSettings( ssTimer ); }, false );

                    console.log('[Settings] Inserted +G settings!');

                    // Style the Save button elements
                    PG.addCSS(
                        ['#pg_submit', {border:PG.theme.btnBorder,color:PG.theme.btnColor,'background-image':'radial-gradient(at center center, rgba(136, 136, 136, 0) 0px, rgba(136, 136, 136, 0) 25%, rgba(136, 136, 136, 0) 62%, rgba(136, 136, 136, 0.65098) 100%)','box-sizing':'border-box',padding:'0 8px',display:'inline-block',height:'25px','line-height':'25px',cursor:'pointer'}],
                        ['#pg_submit ~ .pg_savestate', {'font-weight':'bold',color:'green',padding:'0 20px',cursor:'default'}]
                    );
                }
                console.log('[Settings] Done!');
            }
        },
        arrToStr: function( inp, addSpace ){
            // Converts Arrays into custom Strings; optionally adds spacing
            let str = '';
            for( let i = 0; i < inp.length; i++ ){
                str += inp[i];
                if( addSpace && i+1 !== inp.length ){
                    str += ' ';
                }
            }
            return str;
        },
        itemAtStart: function( arr, item ){
            // Check if the array starts with `item`
            if( arr.indexOf( item ) === 0 ){
                return true;
            }else{
                return false;
            }
        },
        redoSpaces: function( inp ){
            // Strip the whitespace from the String, then add it back in
            // Necessary because of stupid whitespacing in titles
            return PG.arrToStr( PG.strToArr( inp, 'ws' ), true );
        },
        strToArr: function( inp, splitPoint ){
            // Converts a String into an Array based on whitespace
            if( typeof inp === 'string' ){
                let outp = [];
                if( splitPoint !== 'ws' || splitPoint !== undefined ){
                    inp = inp.split( splitPoint );
                }else{
                    inp = inp.match( /\S+/g ) || [];
                }
                for( let i = 0; i < inp.length; i++ ){
                    outp.push( inp[i] );
                }
                return outp;
            }
        },
        trimStr: function( inp, max ){
            // Shortens the length of a String, to remove unneeded specificity from searches
            if( inp.length > max ){
                inp = inp.substring( 0, max+1 );
                inp = inp.substring( 0, Math.min( inp.length, inp.lastIndexOf(' ') ) );
            }
            return inp;
        },
        addCSS: function( ...args ){
            // Inserts custom CSS into the page
            /* USAGE: buildCSS( [css_tag, css_obj ], [css_tag, css_obj ]... ); */
            let styleArray = [];
            let css = '';
            // Loop through received arguments
            for( let i=0; i<args.length; i++ ){
                let obj = args[i][1];
                // Check that an array with two items was passed
                // The first item must be a string, the second an object
                if( Array.isArray( args[i] ) && args[i].length === 2 && typeof args[i][0] === 'string' && typeof obj === 'object' ){
                    // Turn the object into a CSS-valid string
                    for( let item in obj ){
                        css += item+':'+obj[item]+';';
                    }
                    // Add the CSS tag and push the whole thing to an Array
                    styleArray.push( args[i][0]+'{'+css+'}' );
                    css = '';
                }else{
                    console.log( '[buildCSS] [ERROR] Wrong argument provided:',args[i] );
                }
            }
            // Add the CSS block to the website
            GM_addStyle( PG.arrToStr(styleArray, true) );
        },
        getPage: function( pagePath ){
            // Do Global fixes, regardless of what page we're on
            PG.onPage.global();

            // Run functions relevant to the current page
            switch( pagePath.split('/')[1] ){
                case null:
                    break;
                case '':
                    PG.onPage.home();
                    break;
                case 'shoutbox':
                    PG.onPage.shoutbox();
                    break;
                case 'browse':
                    PG.onPage.browse();
                    break;
                case 'book':
                    PG.onPage.book();
                    break;
                case 'preferences':
                    PG.onPage.settings();
                    break;
            }
        },
        insertAfter: function( newNode, referenceNode ){
            // Inserts the node after another node
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        },
        setAttributes: function( el, attrs ){
            // Adds attributes to an element
            for(let key in attrs) { el.setAttribute(key, attrs[key]); }
        },
        bracketRemover: function( inp ) {
            // Removes parts of a String that are contained in brackets
            return inp
                .replace(/{+.*?}+/g, '')
                .replace(/\[\[|\]\]/g, '')
                .replace(/<.*?>/g, '')
                .replace(/\(.*?\)/g, '')
                .trim();
        },
        buildSettingTable: function( obj ){
            // This function generates a table from the Settings object
            // Build the start of the table
            let outp = '<tbody><tr><td class="row1" colspan="2">Here you can enable &amp; disable any feature from the +G Userscript! However, these settings are <strong>NOT</strong> stored on +G; they are stored within the Tampermonkey/Greasemonkey extension in your browser, and must be customized on each of your browsers/devices separately.</td></tr>';

            // For every Page Object listed in the Main Object...
            for( let page in obj ){
                // append a new row with the title of the page...
                outp += '<tr><td class="row2">'+obj[page].title+'</td><td class="row1">';
                // then, for every item in the Page Object...
                for( let item in obj[page] ){
                    // if the item exists and is a Setting Object...
                    if( obj[page][item] !== null && typeof obj[page][item] === 'object' ){
                        // append an input field with the Setting Object's values
                        if( obj[page][item].type === 'checkbox' ){
                            outp += '<input type="checkbox" id="'+obj[page][item].id+'" value="true"> '+obj[page][item].desc+'<br>';
                        }else if( obj[page][item].type === 'textbox' ){
                            outp += obj[page][item].tag+': <input type="text" id="'+obj[page][item].id+'" placeholder="'+obj[page][item].placeholder+'" size="25"> '+obj[page][item].desc+'<br>';
                        }
                    }
                }
                // and finally close the row
                outp += '</td></tr>';
            }

            // Build the submit button & the end of the table
            outp += '<tr><td class="row1" colspan="2"><div id="pg_submit">Save +G Settings</div><span class="pg_savestate" style="opacity:0">Saved!</span></td></tr></tbody>';

            return outp;
        },
        saveSettings: function( timer ){
            // This function saves the settings when the save button is clicked
            var savestate = document.querySelector('.pg_savestate');
            console.log('[saveSettings] Saving...');

            // Reset the save message and timer
            savestate.style.opacity = '0';
            window.clearTimeout(timer);

            // Set all currently known settings to False (with exceptions)
            for( let item in GM_listValues() ){
                if( GM_listValues()[item] !== 'pg_version' ){
                    GM_setValue( GM_listValues()[item],false );
                }
            }

            // Loop over the Settings Object
            // Set all check-marked settings to True & store any text settings
            for( let page in PageDir ){
                for( let item in PageDir[page] ){
                    if( PageDir[page][item] !== null && typeof PageDir[page][item] === 'object' ){
                        let theID = PageDir[page][item].id;
                        if( PageDir[page][item].type === 'checkbox' ){
                            // Save each check-marked Setting item
                            if( document.getElementById( theID ).checked ){
                                GM_setValue( theID,true );
                            }
                        }else if( PageDir[page][item].type === 'textbox' ){
                            // Get the user's input from the text box
                            let inp = document.getElementById( theID ).value;
                            // If the box isn't empty, save the input
                            if( inp !== '' ){
                                GM_setValue( theID,true );
                                GM_setValue( theID+'_val',inp );
                            }
                        }
                    }
                }
            }
            console.log('[saveSettings] Saved!');

            // Briefly display the "Saved" message
            savestate.style.opacity = '1';
            timer = window.setTimeout(function(){
                savestate.style.opacity = '0';
            },2345);
        },
        triggerNote: function( type ){
            // This function displays a message when triggered
            let message = '';
            if( type === 'update' ){
                // Insert the Update greeting
                message += '<strong>+G has been updated!</strong> You are now using v'+PG.VERSION+', published on '+PG.TIMESTAMP+'.';
                // Insert the update list if it exists (it better exist!)
                if( PG.UPDATE_LIST.length > 0 && PG.UPDATE_LIST[0] !== '' ){
                    message += '<h4>Changes:</h4><ul>';
                    for( let u=0; u<PG.UPDATE_LIST.length; u++ ){
                        message += '<li>'+PG.UPDATE_LIST[u]+'</li>';
                    }
                    message += '</ul>';
                }
                // Insert the known bug list if it exists (it shouldn't, but it does)
                if( PG.NEW_BUG_LIST.length > 0 && PG.NEW_BUG_LIST[0] !== '' ){
                    message += '<h4>New Bugs:</h4><ul>';
                    for( let n=0; n<PG.NEW_BUG_LIST.length; n++ ){
                        message += '<li>'+PG.NEW_BUG_LIST[n]+'</li>';
                    }
                    message += '</ul>';
                }
            }else if( type === 'firstRun' ){
                // Insert the First Run greeting
                message = '<h4>Welcome to +G!</h4>Please head over to your <a href="/preferences/index.php">preferences</a> to enable the +G settings.<br>Any bug reports, feature requests, etc. can be made on the forums or through private message.';
            }

            // Add the message box HTML to the page
            document.body.innerHTML += '<div class="pg_triggerNote">'+message+'<span>X</span></div>';
            var messageBox = document.querySelector( '.pg_triggerNote' );
            var closeBtn = messageBox.querySelector( 'span' );

            // Make the Close Button actually work
            closeBtn.addEventListener( 'click', function(){
                messageBox.remove();
            }, false );

            // Add the needed CSS to the page
            PG.addCSS(
                ['.pg_triggerNote',{position:'fixed',padding:'20px 40px',width:'100%',bottom:0,left:0,background:'#333',color:'#bbb','box-shadow':'0 0 4px 0 rgba(0,0,0,0.3)','z-index':99998}],
                ['.pg_triggerNote span', {position:'absolute',padding:'5px 10px',display:'inline-block',top:'-10px',right:'90px',background:'#333',color:'red','box-shadow':'0 0 4px 0 rgba(0,0,0,0.3)','border-radius':'50px',cursor:'pointer','z-index':99999}]
            );
        },
        initShoutbox: function(){
            // This function handles chat messages in the shoutbox.
            // Internal function for retrieving shoutbox settings
            let getShoutParams = function( getValue, allow ){
                let arr = [];
                // For the given setting...
                if( GM_getValue( getValue ) ){
                    // Check the `_vals` storage
                    let vals = GM_getValue( getValue+'_val' ).split(',');
                    for( let i=0; i<vals.length; i++ ){
                        // If the value is supposed to be a number, only load numbers
                        if( allow === 'num' ){
                            if( !isNaN( Number( vals[i] ) ) ){
                                arr.push( Number( vals[i] ) );
                            }
                        // If the value is a string, it doesn't matter what gets loaded
                        }else if( allow === 'str' ){
                            arr.push( vals[i].trim() );
                        }
                    }
                }
                // Return an array if it's not empty, otherwise return false
                if( arr[0] !== undefined ){ return arr; }else{ return false; }
            };
            // Internal function for changing the style of shouts
            let changeMsg = function( tar, type ){
                if( type === 'hide' ){
                    tar.style.filter = 'blur(3px)';
                    tar.style.opacity = '0.3';
                }else if( type === 'show' ){
                    tar.style.filter = 'blur(0)';
                    tar.style.opacity = '0.5';
                }else if( type === 'emphasize' ){
                    tar.style.fontWeight = 'bold';
                }else if( type === 'alert' ){
                    tar.style.color = 'red';
                }
            };
            // Internal function for applying styles to shouts that match the user's settings
            let findUserShouts = function( shout, procList, type ){
                // If the setting is not empty...
                if( procList !== false ){
                    for( let j=0; j<procList.length;j++ ){
                        // Find the user ID of the shout
                        let shoutTag = shout.querySelector( 'a:nth-of-type(2)' ).href.split('/');
                        // If it matches an ID in the user's settings...
                        if( Number( shoutTag[shoutTag.length-1] ) === procList[j] ){
                            if( type === 'ignore' ){
                                // Hide messages from ignored users
                                changeMsg( shout, 'hide' );
                                // Reveal messages on hover; hide on mouseleave
                                shout.addEventListener('mouseenter',function(event){
                                    changeMsg( event.target, 'show' );
                                });
                                shout.addEventListener('mouseleave',function(event){
                                    changeMsg( event.target, 'hide' );
                                });
                            }else if( type === 'priority' ){
                                // Emphasize shouts from priority users
                                changeMsg( shout, 'emphasize' );
                            }
                        }
                    }
                }
            };
            // Internal function for finding key words in shouts
            let findKeywords = function( shout, procList ){
                // If the setting is not empty...
                if( procList !== false ){
                    let buildExpr = '';
                    // Select the text after the `(user tag)`
                    let shoutText = shout.textContent.split(')');
                    PG.arrToStr( shoutText.splice(0,1) );
                    shoutText+='';
                    // Build the RegEx logic with all user-defined words
                    for( let i=0; i<procList.length;i++ ){
                        buildExpr += '\\b'+procList[i]+'\\b';
                        if( i+1 !== procList.length ){
                            buildExpr += '|';
                        }
                    }
                    // Define the RegEx and make it case insensitive
                    let expr = new RegExp( buildExpr,'i');
                    // Style the text if a word is matched
                    if( shoutText.search( expr ) > 0 ){
                        changeMsg( shout, 'alert' );
                    }
                }
            };
            // Internal function for iterating through shouts
            let processShouts = function( Processes, callback ){
                // Select any shout that hasn't been processed yet, then loop over them
                var shouts = document.querySelectorAll('#sbf div:not(.pg_processed)');
                for( let i=0; i<shouts.length; i++ ){
                    // I think this might be redundant?
                    if( !shouts[i].classList.contains( 'pg_processed' ) ){
                        // Add the processed class, and search the shout
                        shouts[i].classList.add('pg_processed');
                        findUserShouts( shouts[i], Processes.ignore, 'ignore' );
                        findUserShouts( shouts[i], Processes.priority, 'priority' );
                        findKeywords( shouts[i], Processes.keywords );
                    }
                }
                // The function must call itself after the first run, so add callback ability
                if( callback ){
                    callback();
                }
            };

           // If at least one shoutbox setting is enabled
            if( GM_getValue('pg_block_users') || GM_getValue('pg_priority_users') || GM_getValue('pg_shout_keywords') ){
                // Check if shoutbox exists on page
                let sbox = document.querySelector('#sbf');
                if( sbox ){
                    console.log( '> Page has shoutbox' );
                    let Processes = {};
                    // Load the information stored in the user's settings
                    Processes.ignore   = getShoutParams( 'pg_block_users', 'num' );
                    Processes.priority = getShoutParams( 'pg_priority_users', 'num' );
                    Processes.keywords = getShoutParams( 'pg_shout_keywords', 'str' );

                    // Wait for page to load
                    PG.pageLoad( function(){
                        // Process the initial shouts, then...
                        processShouts( Processes, function(){
                            // ...periodically check for and process new shouts
                            window.setInterval(function(){ processShouts( Processes, false ); }, 500);
                        } );
                    } );
                }
            }
        },
        addGoodreadsBtns: function( authorTitle, bookTitle, seriesTitle ){
            // Function for inserting GR buttons based on book page info
            let book, bookURL, author, authorURL, series, seriesURL, bothURL, buttons = [];
            let targetRow = document.querySelector( '#info' ).parentNode;
            // Internal function for returning GR-formatted authors
            let smartAuth = function( inp ){
                // Formats authors as `XY Name` instead of `X. Y. Name` because of how
                // the GR search works
                let outp = '';
                inp = PG.strToArr( inp, 'ws' );
                for( let i = 0; i < inp.length; i++ ){
                    // Check if current index is an initial instead of a name
                    if( inp[i].length < 2 ){
                        // Don't add a space if two initials are adjacent
                        if( inp[i+1].length < 2 ){
                            outp += inp[i];
                        }else{
                            outp += inp[i]+' ';
                        }
                    }else{
                        outp += inp[i]+' ';
                    }
                }
                return outp.trim();
            };
            // Internal function for returning a title that was split with a dash
            let checkDashes = function( theTitle, theAuth ){
                if( theTitle.indexOf(' - ') !== -1 ){
                    console.log( '> Book title contains a dash' );
                    let bookSplit = theTitle.split(' - ');
                    // If the front of the dash matches the author, use the back
                    if( bookSplit[0] === theAuth ){
                        console.log( '> String before dash is author; using string behind dash' );
                        return bookSplit[1];
                    }else{
                        return bookSplit[0];
                    }
                }else{
                    return theTitle;
                }
            };
            // Internal function for building Goodreads URLs
            let buildURL = function( type, inp ){
                // Only allow GR search types
                if( type === 'title','author','series','on' ){
                    // Correct the book & series searches
                    if( type === 'book' ){ type = 'title'; }
                    else if( type === 'series' ){ type = 'on'; inp += ', #'; }
                    // Return the URL, encoding apostrophes manually since encodeURIComponent
                    // apparently doesn't do that, and they break the GR search
                    return 'https://www.goodreads.com/search?q='+encodeURIComponent( inp ).replace( '\'','&apos;' )+'&search_type=books&search%5Bfield%5D='+type;
                }
            };
            // Internal function to return a GR button element
            let makeButton = function( desc, theURL ){
                return '<a class="pg_button_clone" href="'+theURL+'" target="_blank">'+desc+'</a>';
            };
            // Internal function for processing title content
            let processTitle = function( type, rawTitle, urlTar ){
                let title = '', desc = '';
                if( type === 'book' ){
                    desc = 'Title';
                    // Check the title for brackets & shorten it
                    title = PG.trimStr( PG.bracketRemover( rawTitle ), 50 );
                    // Check the title for dash divider
                    title = checkDashes( title, author );
                }else if( type === 'author' ){
                    desc = 'Author';
                    // Only use a few authors
                    for( let i=0; i<rawTitle.length && i<3; i++ ){
                        title += rawTitle[i].textContent+' ';
                    }
                    // Check author for initials
                    title = smartAuth( title );
                }else if( type === 'series' ){
                    desc = 'Series';
                    title = PG.redoSpaces( rawTitle.textContent );
                }
                urlTar = buildURL( type, title );
                buttons.splice( 0, 0, makeButton( desc, urlTar ) );
                console.log( '> '+type+': '+title+' ('+urlTar+')' );
                return title;
            };

            // Begin adding the rows, cells, and buttons
            let buttonRow   = targetRow.parentNode.insertRow( targetRow.rowIndex );
            let titleCell   = buttonRow.insertCell(0);
            let contentCell = buttonRow.insertCell(1);
            titleCell.innerHTML = 'Search Goodreads';

            // Check if the book has a series defined
            if( seriesTitle !== null ){
                series = processTitle( 'series', seriesTitle, seriesURL );
            }
            // Check if the book has an author defined
            if( authorTitle.length !== 0 ){
                author = processTitle( 'author', authorTitle, authorURL );
            }
            // Check if the book has a title
            if( bookTitle !== null ){
                book = processTitle( 'book', bookTitle, bookURL );
            }
            // Build the title+author URL if possible
            if( book && author ){
                bothURL = buildURL( 'on', book+' '+author );
                buttons.splice( 0, 0, makeButton( 'Title + Author', bothURL ) );
            }

            // Loop over the compiled buttons and insert them into the page
            for( let i=0; i<buttons.length; i++ ){
                contentCell.innerHTML += buttons[i]+' ';
            }

            // Use existing site styles for button consistency
            titleCell.setAttribute( 'class', 'rowhead' );
            contentCell.setAttribute( 'class', 'row1' );
            PG.addCSS(['a.pg_button_clone',{
                border: PG.theme.btnBorder,
                color: PG.theme.btnColor,
                'background-image': 'radial-gradient(at center center, rgba(136, 136, 136, 0) 0px, rgba(136, 136, 136, 0) 25%, rgba(136, 136, 136, 0) 62%, rgba(136, 136, 136, 0.65098) 100%)',
                'box-sizing': 'border-box',
                padding: '0 4px'
            }]);
            console.log( '[+G] Added Goodreads buttons!' );
        },
        moveBookmark: function( tar, bookID ){
            // Function for making the bookmark button much more visible
            // Make sure the book ID is valid
            if( !isNaN( bookID ) && bookID !== 0 ){
                // Hide the old bookmark
                document.querySelector('#mainBody td.rowhead a[href^="/bookmark.php?"]').style.display = 'none';

                // Fetch the theme-appropriate icon
                let iconURL = '';
                if( PG.theme.is === 'dark' ){ iconURL = '/mark_white.gif'; }
                else{ iconURL = '/mark_black.gif'; }

                tar.innerHTML += '<a id="pg_bookmark" href="/bookmark.php?book='+String(bookID)+'"><img src="'+iconURL+'"></a>';

                PG.addCSS(['#pg_bookmark',{display:'inline-block',position:'relative',top:'3px','padding-left' :'20px'}]);
                console.log( '[+G] Moved the bookmark icon!' );
            }else{
                console.log( '> [+G] ERROR: Can\'t build bookmark! Expected number at position [2] of `'+pagePath+'` but received `'+bookID+'`' );
            }
        },
        fakeCover: function( bookCover, type ){
            // Function for adding a blank cover to books without covers
            if( type === 'missing' ){
                bookCover.innerHTML += '<div class="pg_cover">(no image)</div>';
                PG.addCSS(['.pg_cover',{display:'inline-block',width:'130px',height:'200px','line-height':'200px',background:'#333',color:'#777','text-align':'center'}]);
            }
        },
        hideCollected: function(){
            // Function for hiding books already in your shelves
            // Create a new button
            let clearNewBtn = document.querySelector( '#resetNewIcon' );
            let toggleBtn   = document.createElement( 'h1' );
            let visibility  = true;

            // Function for toggling the collected button
            let toggle = function( state ){
                // Get a list of all collected titles
                let collectList = document.querySelectorAll('#searchResults tr[id^="tdr"] td div[class^="browse"]');
                for( let item in collectList ){
                    // Find the row that contains the collected title
                    let theRow = collectList[item].parentElement.parentElement;
                    if( state ){
                        // If collections are visible, hide them and change the button text
                        theRow.style.display = 'none';
                        visibility = false;
                        toggleBtn.innerHTML = 'Show Collected';
                    }else{
                        // If collections are hidden, show them and change the button text
                        theRow.removeAttribute('style');
                        visibility = true;
                        toggleBtn.innerHTML = 'Hide Collected';
                    }
                }
            };

            // Insert the button into the menu
            PG.insertAfter( toggleBtn, clearNewBtn );
            PG.setAttributes( toggleBtn, {
                'id': 'pg_collectedToggle',
                'class': 'bookFormButton',
                'role': 'button'
            } );
            toggleBtn.innerHTML = 'Hide Collected';
            // Listen for button clicks
            toggleBtn.addEventListener( 'click', function(){ toggle( visibility  ); }, false );
        },
        pageLoad: function( func ){
            // Function that waits for the page to load|timeout before running a function
            let timeout  = false;
            // Set up a fallback timer in case the page takes too long to load
            let fallback = setTimeout( function(){
                console.log('> Page has timed out');
                timeout = true;
                func();
            },5000 );
            // Wait for the page to load
            document.onreadystatechange = function(){
                if (document.readyState === 'complete') {
                    console.log('> Page has loaded');
                    // If the page loads, remove the fallback and run the function
                    clearTimeout( fallback );
                    func();
                }
            };
        }
    };

    const PageDir = {
        global: {
            title: 'Global',
            set_alerts: {
                id: 'pg_alerts',
                type: 'checkbox',
                desc: 'Enable the +G Alert panel for update information, error messages, etc.'
            },
            set_hideBanner: {
                id: 'pg_hide_banner',
                type: 'checkbox',
                desc: 'Remove the header image'
            }
        },
        browse: {
            title: 'Browse Page',
            set_hideCollected: {
                id: 'pg_hide_collected',
                type: 'checkbox',
                desc: 'Enable the Hide Collected button'
            }
        },
        book: {
            title: 'Book Page',
            set_grBtn: {
                id: 'pg_gr_btns',
                type: 'checkbox',
                desc: 'Enable the Goodreads buttons'
            },
            set_moveBookmark: {
                id: 'pg_move_bookmark',
                type: 'checkbox',
                desc: 'Move the bookmark icon up to the title'
            },
            set_placeholderCovers: {
                id: 'pg_placeholder_covers',
                type: 'checkbox',
                desc: 'Display a placeholder cover for books with no picture'
            }
        },
        shoutbox: {
            title: 'Shoutbox',
            set_blockUsers: {
                id: 'pg_block_users',
                type: 'textbox',
                tag: 'Block Users',
                desc: 'Hides messages from the listed users in the shoutbox',
                placeholder: 'ex. 123,1000'
            },
            set_priorityUsers: {
                id: 'pg_priority_users',
                type: 'textbox',
                tag: 'Emphasize Users',
                desc: 'Emphasizes messages from the listed users in the shoutbox',
                placeholder: 'ex. 1,5000'
            },
            set_keywords: {
                id: 'pg_shout_keywords',
                type: 'textbox',
                tag: 'Keyword Alerts',
                desc: 'Emphasizes messages containing key words',
                placeholder: 'ex. YourName,sci-fi,rhombus'
            }
        }
    };

    // Run +G
    PG.init();
    console.log( '[+G] [v'+PG.VERSION+'] Finished successfully!' );

})(window,document);
