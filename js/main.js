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
        this.echo("I'm Chandra and I'm an engineer / developer / hacker / curiosity driven human.");
        this.echo("I made this website for fun on a friday night - which doesnt happen often, so this website will probably be forever under construction and never gets completed. ");
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
        this.echo("pics: //TODO")
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
        this.echo("This page built with <a href='http://terminal.jcubic.pl/' target='_blank'>jQuery Terminal</a> plugin, and hosted by <a href='http://pages.github.com' target='_blank'>GitHub Pages<a/>.<br/><br/>I'm going update this (I promise!) regularly, with more cool stuff or hacks that I develop. Lookout!", {raw:true});

    },
    xkcd: function() {
        window.open('http://c.xkcd.com/random/comic/', '_blank');
        window.focus()
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
        tabcompletion: true
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
        consoleObj.echo("");
        consoleObj.echo("PROTIP: press <tab> to trigger autocompletion");
}
