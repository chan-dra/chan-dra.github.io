var e = "hello@chandra";

var App = {
    echo: function(text) {
        this.echo(text);
    },
    help: function() {
      showHelp(this);
    },

    ls: function() {
        this.error('<ls> is not available. I guess you want to list available commands with <help>:');
         showHelp(this);
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
    },
    keywords: function() {
        this.echo("I suppose you like buzzwords? hacking, entrepreneurship, startups, BTC, node, agile, JavaScript, salesforce \n")
    },
    pics: function() {
        this.echo("Seriously, I can't have a dirty picture here. try [[b;#44D544;]image_me 'chandra bhavanasi'] and you may landup on some awful pictures of me.");
    },
    clear: function() {
        this.echo("clear: //TODO")
    },
    resume: function() {
        this.echo("Seriously, you came this far asking for a resume?")
        this.echo("Alright, get it <a href='../resume.pdf'>here</a>",{raw:true});
    },
    contact: function() {
        this.echo("");
        this.echo("<strong><a href='www.linkedin.com/in/chandrasekharbhavanasi/'>LinkedIn</a></strong>", {raw:true});
        this.echo("<strong><a href='mailto:cbhavana@uci.edu'>email</a></strong>", {raw:true});
        this.echo("");

    },
    su: function(user) {
        this.echo("Seriously, [[b;#44D544;]"+user+"]!? I like you. Who are you?")
    },
    sudo: function() {
        this.echo("Ohhhh jeeez. A smart one. Who are you?")
    },
    about: function() {
        this.echo("This page built with <a href='http://terminal.jcubic.pl/' target='_blank'>jQuery Terminal</a> plugin, and hosted by <strong><a href='http://pages.github.com' target='_blank'>GitHub Pages</a></strong> <br/><br/>Some of the commands here are inspired by <strong><a href=''>Hubot for HipChat (if you know what I mean)</a></strong> <br/><br/>I'm going update this (I promise!) regularly, with more cool stuff or hacks that I develop. Lookout!", {raw:true});

    },
    xkcd: function() {
        window.open('http://c.xkcd.com/random/comic/', '_blank');
        window.focus()
    },
    animate_me: function(q) {
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
    },
    image_me: function(q) {
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
    }
}

jQuery(document).ready(function($) {
    $('body').terminal(App, {
 greetings:
"[[b;#44D544;]A programmer/geek's rants]\n\n\nWelcome human, type [[b;#44D544;]help] to list available commands, [[b;#44D544;]whoami] to read something about me, or [[b;#44D544;]about] to learn about this webpage.\n\n",
        prompt: function(p){
            var path = '~'
            p(e + ":" + path + "# ");
        },
        onBlur: function() {
            // prevent loosing focus
            return false;
        },
        tabcompletion: true,
        checkArity: false
    });
});

function showHelp(consoleObj)
{
        consoleObj.echo("Available commands:");
        consoleObj.echo("\t[[b;#44D544;]whoami]        read self wrote shit about me ;-)");
        consoleObj.echo("\t[[b;#44D544;]contact]       get in touch");
        consoleObj.echo("\t[[b;#44D544;]resume]        more formal way of shit I wrote about me");
        consoleObj.echo("\t[[b;#44D544;]keywords]      if you're that kinda guy");
        consoleObj.echo("\t[[b;#44D544;]pics]          see my dirty face");
        consoleObj.echo("\t[[b;#44D544;]clear]         clear the messy console");
        consoleObj.echo("\t[[b;#44D544;]help]          if you get lost.");
        consoleObj.echo("\t[[b;#44D544;]xkcd]          because who doesn't like a good comic?");
        consoleObj.echo("\t[[b;#44D544;]animate_me]    the whole internet loves gifs. try [[b;#44D544;]animate_me 'kitten dj']");
        consoleObj.echo("\t[[b;#44D544;]image_me]      if you want to image search and see people. try [[b;#44D544;]image_me 'chandra bhavanasi'] ");
        consoleObj.echo("");
        consoleObj.echo("PROTIP: press <tab> to trigger autocompletion");
}
