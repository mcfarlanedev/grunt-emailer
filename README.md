Installation

Install NodeJS at http://nodejs.org

Windows:

Download Ruby 2.2.1p85 for your Windows architecture.

    http://rubyinstaller.org/downloads/

Install Ruby DevKit

Go to http://rubyinstaller.org/downloads/, and scroll to the bottom of the page where you'll see various
Development Kit versions. Download the version that matches your current Ruby version. If you have a
Ruby version higher than 2.0 and 2.1, it's safe to download the versions for 2.0 and 2.1.

Run DevKit Installation Scripts

Change directory into your extracted DevKit directory - downloaded above.

Run the following commands from command line:

    ruby dk.rb init
    ruby dk.rb install
    
Install the hpricot adapter for Ruby 

Hpricot is an HTML Parser. Premailer requires this in order to parse the HTML emails in the project.

    gem install hpricot
    gem install premailer
    

Navigate back to the project root, and run the following:

    npm install -g grunt-cli
    npm install

Lastly, run "grunt email", and the email will build.

This command does several things. You will see a new folder named "dist" in the project root. This contains the compiled (inline) version of
the email, along with the original. It runs various commands that are declared in the Gruntfile.js that
improves the email workflow.

Grunt-uncss - Removes unused css that is declared in the document.
Grunt-processhtml - Allows the processing of html files at build time.
Grunt-premailer - Runs the preflight email tool on our HTML file, adding inline styles to the HTML elements in the document.

Development

The development file for the email is "source_file.html", this is located at the root of the project. When you want to run all of the grunt tasks, simply run the command "grunt email", and you will see the compiled/inlined email appear in the "dist" folder that is also created at build time.
