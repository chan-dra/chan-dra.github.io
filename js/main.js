var e = "hello@chandra";

var App = {
    echo: function(text) {
        this.echo(text);
        if(ga != undefined) ga('send', 'event', 'echo', 'text', text);
    },
    help: function() {
      showHelp(this);
      if(ga != undefined) ga('send', 'event', 'help');
    },

    ls: function() {
        this.error('<ls> is not available. I guess you want to list available commands with <help>:');
         showHelp(this);
        if(ga != undefined) ga('send', 'event', 'ls');
    },
    whoami: function() {
        this.echo("\nHey there!");
        this.echo("I'm Chandra Bhavanasi and I'm an engineer / developer / hacker / curiosity driven human.");
        this.echo("I like to challenge myself on a dialy basis.");
        this.echo("I made this website for fun on a friday night - which doesn't happen often, so this website will probably be forever under construction and never gets completed. ");
        this.echo("");
        this.echo("I currently work at this awesome little startup called <strong><a href='http://isocket.com'>iSocket</a></strong>", {raw: true});
        this.echo("I moved to <strong><a href='http://en.wikipedia.org/wiki/San_Francisco'>San Francisco</a></strong> recently and I love it here.", {raw:true});
        this.echo("");
        this.echo("I like JavaScript, hackathons, good coffee and a great tasting beer.");
        if(ga != undefined) ga('send', 'event', 'whoami');
    },
    keywords: function() {
        this.echo("I suppose you like buzzwords? hacking, entrepreneurship, startups, BTC, node, agile, JavaScript, salesforce \n")
        if(ga != undefined) ga('send', 'event', 'keywords');
    },
    pics: function() {
        this.echo("Seriously, I can't have a dirty picture here. try [[b;#aaa;]image_me 'chandra bhavanasi'] and you may landup on some awful pictures of me.");
        if(ga != undefined) ga('send', 'event', 'pics');
    },
    clear: function() {
        this.clear()
        if(ga != undefined) ga('send', 'event', 'clear');
    },
    resume: function() {
        this.echo("Seriously, you came this far asking for a resume?")
        this.echo("Alright, get it <a href='../resume.pdf'>here</a>",{raw:true});
        if(ga != undefined) ga('send', 'event', 'resume');
    },
    contact: function() {
        this.echo("");
        this.echo("<strong><a href='www.linkedin.com/in/chandrasekharbhavanasi/'>LinkedIn</a></strong>", {raw:true});
        this.echo("<strong><a href='mailto:cbhavana@uci.edu'>email</a></strong>", {raw:true});
        this.echo("");
        if(ga != undefined) ga('send', 'event', 'contact');

    },
    su: function(user) {
        this.echo("Seriously, [[b;#aaa;]"+user+"]!? I like you. Who are you?")
        if(ga != undefined) ga('send', 'event', 'su', 'user', user);
    },
    sudo: function() {
        this.echo("Ohhhh jeeez. A smart one. Who are you?")
        if(ga != undefined) ga('send', 'event', 'sudo');
    },
    about: function() {
        this.echo("This page built with <a href='http://terminal.jcubic.pl/' target='_blank'>jQuery Terminal</a> plugin, and hosted by <strong><a href='http://pages.github.com' target='_blank'>GitHub Pages</a></strong> <br/><br/>Some of the commands here are inspired by <strong><a href=''>Hubot for HipChat (if you know what I mean)</a></strong> <br/><br/>I'm going update this (I promise!) regularly, with more cool stuff or hacks that I develop. Lookout!", {raw:true});
        if(ga != undefined) ga('send', 'event', 'about');
    },
    xkcd: function() {
        window.open('http://c.xkcd.com/random/comic/', '_blank');
        window.focus()
        if(ga != undefined) ga('send', 'event', 'xkcd');
    },
    animate_me: function(q, q1) {
        if (q1) q = q + ' ' + q1;
        self = this;
        $.ajax({
            url: "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&imgtype=animated&q="+q,

            jsonp: "callback",

            dataType: "jsonp",

            success: function( response ) {
                var k = Math.floor((Math.random() * response.responseData.results.length) - 1);
                var url = response.responseData.results[k].url;
                self.echo("<img src='"+ url +"'/>", {raw:true})
            }
        });
        if(ga != undefined) ga('send', 'event', 'animate_me', 'query', q);
    },
    image_me: function(q, q1) {
        if (q1) q = q + ' ' + q1;
        self = this;
        $.ajax({
            url: "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q="+q,

            jsonp: "callback",

            dataType: "jsonp",

            success: function( response ) {
                var k = Math.floor((Math.random() * response.responseData.results.length) - 1);
                var url = response.responseData.results[k].url;
                self.echo("<img src='"+ url +"'/>", {raw:true})
            }
        });
        if(ga != undefined) ga('send', 'event', 'image_me', 'query', q);
    }
}

jQuery(document).ready(function($) {
    $('body').terminal(App, {
 greetings:
"   _____ _                     _             ____  _                                      _ \n"+
"  / ____| |                   | |           |  _ \\| |                                    (_)\n"+
" | |    | |__   __ _ _ __   __| |_ __ __ _  | |_) | |__   __ ___   ____ _ _ __   __ _ ___ _ \n"+
" | |    | '_ \\ / _` | '_ \\ / _` | '__/ _` | |  _ <| '_ \\ / _` \\ \\ / / _` | '_ \\ / _` / __| |\n"+
" | |____| | | | (_| | | | | (_| | | | (_| | | |_) | | | | (_| |\\ V / (_| | | | | (_| \\__ \\ |\n"+
"  \\_____|_| |_|\\__,_|_| |_|\\__,_|_|  \\__,_| |____/|_| |_|\\__,_| \\_/ \\__,_|_| |_|\\__,_|___/_|\n"+
"                                                                                            \n"+
"                                                                                            \n"+
"[[b;#aaa;]\tA programmer/geek's special place on the web]\n\n\nWelcome human, type [[b;#aaa;]help] to list available commands, [[b;#aaa;]whoami] to read something about me, or [[b;#aaa;]about] to learn about this webpage.\n\n",
        prompt: function(p){
            var path = '~'
            p(e + ":" + path + "# ");
        },
        onBlur: function() {
            // prevent loosing focus
            return false;
        },
        completion: true,
        checkArity: false
    });
});

function showHelp(consoleObj)
{
        consoleObj.echo("Available commands:");
        consoleObj.echo("\t[[b;#aaa;]whoami]        read self wrote shit about me ;-)");
        consoleObj.echo("\t[[b;#aaa;]contact]       get in touch");
        consoleObj.echo("\t[[b;#aaa;]resume]        more formal way of shit I wrote about me");
        consoleObj.echo("\t[[b;#aaa;]keywords]      if you're that kinda guy");
        consoleObj.echo("\t[[b;#aaa;]pics]          see my dirty face");
        consoleObj.echo("\t[[b;#aaa;]clear]         clear the messy console");
        consoleObj.echo("\t[[b;#aaa;]help]          if you get lost.");
        consoleObj.echo("\t[[b;#aaa;]xkcd]          because who doesn't like a good comic?");
        consoleObj.echo("\t[[b;#aaa;]animate_me]    the whole internet loves gifs. try [[b;#aaa;]animate_me kitten dj]");
        consoleObj.echo("\t[[b;#aaa;]image_me]      if you want to image search and see people. try [[b;#aaa;]image_me chandra bhavanasi] ");
        consoleObj.echo("");
        consoleObj.echo("PROTIP: press <tab> to trigger autocompletion");
}
