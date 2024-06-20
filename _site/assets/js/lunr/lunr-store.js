var store = [{
        "title": "Markup: Syntax Highlighting",
        "excerpt":"Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and syntax errors are visually distinct. Highlighting does not affect the meaning of the text itself; it is intended only for human readers.1   GFM Code Blocks   GitHub Flavored Markdown fenced code blocks are supported. To modify styling and highlight colors edit /_sass/syntax.scss.   #container {   float: left;   margin: 0 -240px 0 0;   width: 100%; }   .highlight {   margin: 0;   padding: 1em;   font-family: $monospace;   font-size: $type-size-7;   line-height: 1.8; }  &lt;nav class=\"pagination\" role=\"navigation\"&gt;   {% if page.previous %}     &lt;a href=\"{{ site.url }}{{ page.previous.url }}\" class=\"btn\" title=\"{{ page.previous.title }}\"&gt;Previous article&lt;/a&gt;   {% endif %}   {% if page.next %}     &lt;a href=\"{{ site.url }}{{ page.next.url }}\" class=\"btn\" title=\"{{ page.next.title }}\"&gt;Next article&lt;/a&gt;   {% endif %} &lt;/nav&gt;&lt;!-- /.pagination --&gt;   module Jekyll   class TagIndex &lt; Page     def initialize(site, base, dir, tag)       @site = site       @base = base       @dir = dir       @name = 'index.html'       self.process(@name)       self.read_yaml(File.join(base, '_layouts'), 'tag_index.html')       self.data['tag'] = tag       tag_title_prefix = site.config['tag_title_prefix'] || 'Tagged: '       tag_title_suffix = site.config['tag_title_suffix'] || '&amp;#8211;'       self.data['title'] = \"#{tag_title_prefix}#{tag}\"       self.data['description'] = \"An archive of posts tagged #{tag}.\"     end   end end   Code Blocks in Lists   Indentation matters. Be sure the indent of the code block aligns with the first non-space character after the list item marker (e.g., 1.). Usually this will mean indenting 3 spaces instead of 4.      Do step 1.        Now do this:       def print_hi(name)   puts \"Hi, #{name}\" end print_hi('Tom') #=&gt; prints 'Hi, Tom' to STDOUT.           Now you can do this.   Jekyll Highlight Tag   An example of a code blocking using Jekyll’s {% highlight %} tag.   1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 // 'gulp html' -- does nothing // 'gulp html --prod' -- minifies and gzips HTML files for production gulp.task('html', () =&gt; {   return gulp.src(paths.siteFolderName + paths.htmlPattern)     .pipe(when(argv.prod, htmlmin({       removeComments: true,       collapseWhitespace: true,       collapseBooleanAttributes: false,       removeAttributeQuotes: false,       removeRedundantAttributes: false,       minifyJS: true,       minifyCSS: true     })))     .pipe(when(argv.prod, size({title: 'optimized HTML'})))     .pipe(when(argv.prod, gulp.dest(paths.siteFolderName)))     .pipe(when(argv.prod, gzip({append: true})))     .pipe(when(argv.prod, size({       title: 'gzipped HTML',       gzip: true     })))     .pipe(when(argv.prod, gulp.dest(paths.siteFolderName))) });   1 2 3 4 Module[{},   Sqrt[2]   4 ]   GitHub Gist Embed   An example of a Gist embed below.                    http://en.wikipedia.org/wiki/Syntax_highlighting &#8617;           ","categories": [],
        "tags": ["code","syntax highlighting"],
        "url": "/markup-syntax-highlighting/",
        "teaser": "/assets/images/markup-syntax-highlighting-teaser.jpg"
      },{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when a file is updated.   To add new posts, simply add a file in the _posts directory that follows the convention YYYY-MM-DD-name-of-post.ext and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.   Jekyll also offers powerful support for code snippets:   def print_hi(name)   puts \"Hi, #{name}\" end print_hi('Tom') #=&gt; prints 'Hi, Tom' to STDOUT.   Check out the Jekyll docs for more info on how to get the most out of Jekyll. File all bugs/feature requests at Jekyll’s GitHub repo. If you have questions, you can ask them on Jekyll Talk.   ","categories": ["Jekyll"],
        "tags": ["update"],
        "url": "/jekyll/welcome-to-jekyll/",
        "teaser": "/assets/images/500x300.png"
      },{
        "title": "Gemified Theme -- Alpha Release",
        "excerpt":"Jekyll themes distributed as Ruby gems are finally here to make installing and upgrading much easier. Gone are the days of forking a repo just to “install it”. Or dealing with merge conflicts when pulling in upstream commits to “upgrade it”.   If you’re interested in testing out Minimal Mistakes as a gemified theme read on. There are a few caveats though:      Support for a theme assets folder was recently added to Jekyll core, but has yet to be released or rolled into the github-pages gem. Meaning you can’t use Minimal Mistakes as a Ruby gem there just yet… locally served or self-hosted installs should be fine if you don’t mind using a pre-release version of Jekyll.   Windows users can’t currently use themes packaged as gems due to a bug with file paths in Jekyll core. This is being worked on so hopefully a fix is on the way soon.   Fine with all that? Great. Let’s continue.   If you’re migrating a site already using Minimal Mistakes and haven’t customized any of the _includes, _layouts, _sass partials, or assets this should be quick and painless.   Step 1: Remove Theme Files   Remove _includes, _layouts, _sass, assets folders and files within. You won’t need these anymore as they’re bundled in the theme.   If you customized any of these then leave them alone and only remove the untouched ones. If setup correctly your modified versions should act as overrides to the versions bundled with the theme.   Step 2: Update Gemfile   In order to test you’ll need to install pre-release gems of Jekyll and Minimal Mistakes.   Start by replacing gem \"github-pages\" or gem \"jekyll\" with the following:   gem \"jekyll\", :git =&gt; \"https://github.com/jekyll/jekyll.git\"   Then add the pre-release Minimal Mistakes theme gem:   gem \"minimal-mistakes-jekyll\", :git =&gt; \"https://github.com/mmistakes/minimal-mistakes.git\", :branch =&gt; \"feature/theme-gem\"`   When finished your Gemfile should look something like this:   source \"https://rubygems.org\"  gem \"jekyll\", :git =&gt; \"https://github.com/jekyll/jekyll.git\" gem \"minimal-mistakes-jekyll\", :git =&gt; \"https://github.com/mmistakes/minimal-mistakes.git\", :branch =&gt; \"feature/theme-gem\"  group :jekyll_plugins do   # gem \"jekyll-archives\"   gem \"jekyll-paginate\"   gem \"jekyll-sitemap\"   gem \"jekyll-gist\"   gem \"jekyll-feed\" end   Step 3: Run Bundler   Run bundle install (or bundle update if you’re updating an existing repo) to install the pre-release gems.   Step 4: Install the Theme   Add theme: \"minimal-mistakes-jekyll\" to your _config.yml file.   If you’re migrating from an existing Minimal Mistakes site you shouldn’t have to change anything else after this. If it’s a new site consult then docs to properly config.   Please Note: Paths for image headers, overlays, teasers, galleries, and feature rows have changed and now require a full path. Instead of just image: filename.jpg you’ll need to use the full path eg: image: assets/images/filename.jpg. The preferred location is now assets/images but can be placed elsewhere or external hosted. This applies for image references in _config.yml and author.yml.   Step 5: jekyll new Tweaks   If this is a new site be sure to add the following files to _data/ and customize as you see fit. There is currently no way of bundling them in with the theme, so be sure to consult the docs on how to properly use both.      _data/ui-text.yml - UI text documentation   _data/navigation.yml - navigation documentation   You’ll also need to:      Replace &lt;site root&gt;/index.html with a modified Minimal Mistakes index.html.   Change layout: post in _posts/0000-00-00-welcome-to-jekyll.markdown to layout: single.   Remove about.md, or at the very least change layout: page to layout: single and remove references to icon-github.html (or copy to your _includes if using).     That’s it! If all goes well running bundle exec jekyll serve should spin-up your site. If you encounter any bumps please file an issue on GitHub and make sure to indicate you’re testing the pre-release Ruby gem version.   File an issue   Thanks!  ","categories": ["Jekyll"],
        "tags": ["update"],
        "url": "/jekyll/gemified-theme-alpha/",
        "teaser": null
      },{
        "title": "Gemified Theme -- Beta Release",
        "excerpt":"Hot on the heels of Jekyll v3.3.0 is a beta release of Minimal Mistakes… as a gemified theme.   minimal-mistakes-jekyll can only be used with Jekyll proper. If you’re hosting on GitHub Pages or using that gem the theme won’t work. 3rd party themes haven’t been white-listed so it’s a no go for now.   Fine with all that? Great. Let’s continue.   If you’re migrating a site already using Minimal Mistakes and haven’t customized any of the _includes, _layouts, _sass partials, or assets this should be quick and painless.   Step 1: Remove Theme Files   Remove _includes, _layouts, _sass, assets folders and files within. You won’t need these anymore as they’re bundled in the theme.   If you customized any of these then leave them alone and only remove the untouched ones. If setup correctly your modified versions should act as overrides to the versions bundled with the theme.   Step 2: Update Gemfile   Replace gem \"github-pages or gem \"jekyll\" with gem \"jekyll\", \"~&gt; 3.3.0\". You’ll need the latest version of Jekyll1 for Minimal Mistakes to work and load all of the /assets/ properly.   Add the Minimal Mistakes theme gem:   gem \"minimal-mistakes-jekyll\"   When finished your Gemfile should look something like this:   source \"https://rubygems.org\"  gem \"jekyll\", \"~&gt; 3.3.0\" gem \"minimal-mistakes-jekyll\"   Step 3: Run Bundler   Run bundle install (or bundle update if you’re updating an existing repo) to install/update Jekyll and the theme.   Step 4: Install the Theme   Add theme: \"minimal-mistakes-jekyll\" to your _config.yml file.   If you’re migrating from an existing Minimal Mistakes site you shouldn’t have to change anything else after this. If it’s a new site consult then docs to properly config.   Please Note: Paths for image headers, overlays, teasers, galleries, and feature rows have changed and now require a full path. Instead of just image: filename.jpg you’ll need to use the full path eg: image: assets/images/filename.jpg. The preferred location is now assets/images but can be placed elsewhere or external hosted. This all applies for image references in _config.yml and author.yml as well.   Step 5: jekyll new Tweaks   If this is a new site be sure to add the following files to _data/ and customize as you see fit. There is currently no way of bundling them in with the theme, so be sure to consult the docs on how to properly use both.      _data/ui-text.yml - UI text documentation   _data/navigation.yml - navigation documentation   You’ll also need to:      Replace &lt;site root&gt;/index.html with a modified Minimal Mistakes index.html.   Change layout: post in _posts/0000-00-00-welcome-to-jekyll.markdown to layout: single.   Remove about.md, or at the very least change layout: page to layout: single and remove references to icon-github.html (or copy to your _includes if using).     That’s it! If all goes well running bundle exec jekyll serve should spin-up your site. If you encounter any bumps please file an issue on GitHub and make sure to indicate you’re testing the pre-release Ruby gem version.   File an issue   Thanks!                 You could also run bundle update jekyll to update Jekyll. &#8617;           ","categories": ["Jekyll"],
        "tags": ["update"],
        "url": "/jekyll/gemified-theme-beta/",
        "teaser": null
      },{
        "title": "Layout: Header Video",
        "excerpt":"This post should display a header with a responsive video, if the theme supports it.   Settings                  Parameter       Required       Description                       id       Required       ID of the video                 provider       Required       Hosting provider of the video, either youtube or vimeo           YouTube   To embed the following YouTube video at url https://www.youtube.com/watch?v=-PVofD2A9t8 (long version) or https://youtu.be/-PVofD2A9t8 (short version) into a post or page’s main content you’d use:   {% include video id=\"-PVofD2A9t8\" provider=\"youtube\" %}               To embed it as a video header you’d use the following YAML Front Matter   header:   video:     id: -PVofD2A9t8     provider: youtube   Vimeo   To embed the following Vimeo video at url https://vimeo.com/212731897 into a post or page’s main content you’d use:   {% include video id=\"212731897\" provider=\"vimeo\" %}               To embed it as a video header you’d use the following YAML Front Matter   header:   video:     id: 212731897     provider: vimeo  ","categories": ["Layout","Uncategorized"],
        "tags": ["video","layout"],
        "url": "/layout/uncategorized/layout-header-video/",
        "teaser": null
      },{
        "title": "Form Submission Fun",
        "excerpt":"I signed up for a website that’s recently come out of beta after a long wait time.   On the login/settings form it asked you for an anonymous username to post data to the site.     I entered the string: someone and received this back from the server in an error message in the UI:     Interesting right?   I figured I might play around with this. I am not sure if they are using a SQL or NoSQL database but I’m going to dig into the error a bit.  ","categories": [],
        "tags": ["forms","security","web"],
        "url": "/form-submission-fun/",
        "teaser": null
      },{
        "title": "Check Out My Cyber Notes",
        "excerpt":"If you’ve heard of Obsidian and you’ve heard of a digital garden then you’re already halfway to understanding the premise.     I don’t want to call these a digital garden; too cutesy for me. I would, instead, like to call them working notes, much like Andy Matuschak’s, one of the greatest minds in computer science.   I used to talk a lot about productivity. I got zero work done. It’s almost cultish, the way folks talk about it.   So instead of my notes being productivity porn they’re going to be a place for me to ramble about this cyber stuff. If you like them, you could reach out to me on Signal, or whatever.   You can find them at: https://notes.0x8c.org/  ","categories": [],
        "tags": ["notes"],
        "url": "/check-out-my-evergreen-notes/",
        "teaser": null
      },{
        "title": "Goin Diggin",
        "excerpt":"I have a few pseudo-technical friends with websites, both using a form of WordPress.   I asked them if I could do a few pen tests on their sites to practice my limited skills. They gave me permission, albeit spoken permission which means I will need to get explicit permission in writing before I start, break something important, get sued, and lose friends.     Where to start? Easy. SQL injection.   First foray into pen testing a site   My friend hired a lazy developer to create her website. It was hosted on a strange host without SSL enabled which was a huge red flag for me.   They were frustrated by his lack of progress developing the site and I was curious about the developer and what stack he used, and, if possible, see if I could break into the site.   jQuery and Angular   The site used a mishmash of jQuery and Angular. My first inclination was to find the authentication page. How? DevTools. Easy enough. Find the route that leads to the auth. The route was /login.js.   I clicked the file in DevTools which miraculously took me right to the login page, which was also unencrypted.   I tried what I knew about SQL injection.   I entered a random character in the username and password fields. What returned was an error but nothing that I could work with; there was no information about the database revealed in the error in the UI.   I didn’t give up hope.   I did some more digging and found the developer of the site on LinkedIn, his information freely available on there. I had his email, now all I would need is a way to guess his password to the site.   Unfortunately for me, I didn’t have any password dumps from pastebin or a place like that. All the regular easy passwords didn’t work either, and I didn’t have Kali setup with a tool to compare password hashes and break the encryption to suss out possible passwords.   Still, it was a fun exercise from someone not knowing what they were doing.  ","categories": [],
        "tags": ["security"," web"],
        "url": "/goin-digging/",
        "teaser": null
      },{
        "title": "Exploring Ransomware",
        "excerpt":"While NetworkChuck isn’t my favorite YouTube channel on cybersecurity, his simple ransomware python script piqued my interest.    ","categories": [],
        "tags": ["hacking","ransomware"],
        "url": "/exploring-ransomware/",
        "teaser": null
      },{
        "title": "Proxmox, Containers, and Proxies",
        "excerpt":"What is Proxmox?   Proxmox is a bit hard to setup and get right, but once it is up and done, it’s a nice way to create a cluster of nodes, all sandboxed with their own networks, ready to go.     Proxmox is a Hypervisor which is beyond the scope of this little post. Basically all you need to know is it is like a container that can hold multiple VMs in different clusters, each node on its own separate networks, with their own IPs.   Why Proxmox?   Say you want to run multiple machines you want to destroy with malware, run amok attacking it’s network with Kali tools. How to best do that? Why, VMs of course!   Or you could use something like Linode, of course…   Helpful Links:     Proxmox with own domain. DNS, Cloudflare and SSL proper settings. : Proxmox   How to Passthrough a Disk in Proxmox in 2023 - WunderTech   What is ZFS? Why are People Crazy About it?                                   [How to Virtualize Your Home Router / Firewall Using pfSense           Techno Tim](https://technotim.live/posts/proxmox-pfsense/)                           How to Install pfSense on Proxmox in 2023 - WunderTech       Bonus:  Soon I’ll be getting more into Proxy servers and why they’re important. Here’s a list of SOCKS5 proxies which is a highly recommended protocol. SOCKS free proxy servers list, open Socks5 and Socks4 proxies   ","categories": [],
        "tags": ["virtualization","proxying"],
        "url": "/proxmox,-containers,-and-proxies/",
        "teaser": null
      },{
        "title": "OSINT Challenge Dropping Wednesday",
        "excerpt":"Love a good challenge? Gary Ruddell has one for you.     Gary Ruddell is running an OSINT challenge this Wednesday. I can’t wait to sink my teeth into this.   Give it a look.  ","categories": [],
        "tags": ["external"],
        "url": "/osint-challenge-dropping-wednesday/",
        "teaser": null
      },{
        "title": "Gary's OSINT Challenge 01",
        "excerpt":"The first entry in Gary’s OSINT challenge was a photo and the caption, “Hello, Netherlands!”     This was the image:      The next phase of the challenge was for me to look at different landmarks so that I could figure out where exactly in the Netherlands the photo was taken.   Notations   I spotted a few different key items on the image, which you can see in the photo below.      Solution   I threw the solution up on my cybersecurity YouTube channel.     ","categories": [],
        "tags": ["osint"],
        "url": "/garys-osint-challenge-01/",
        "teaser": null
      },{
        "title": "Hack The Box Starting Point",
        "excerpt":"I finally dipped my foot all the way into Hack The Box challenges and let me tell you, knowing your terminal and being a former software engineer goes a long, long way.     ","categories": [],
        "tags": ["htb","challenges"],
        "url": "/hackthebox-starting-point/",
        "teaser": null
      },{
        "title": "Simple Scripts: Beginning",
        "excerpt":"I’m currently working through (and banging my head against) working with Python scripts to simulate pentesting techniques.     I enjoy watching the TCM Security YouTube channel for several reasons:      It’s entertaining   It’s informative and current   And it gives you ideas to help you stand out in a crowded pool of applicants in InfoSec   The one video in particular stood out to me:      In it, The Cyber Mentor talks about having side projects to throw on your GitHub and as such, list on your resume.   I thought this was a wonderful idea, and while you don’t need to code to be in InfoSec, to stand out, it might be helpful.   Since I come from a software dev background, this felt like the right thing to do.   It’s cool to move blazingly fast and enshittify things   I worked with Python almost 10 years ago when I was learning to code. I enjoyed it, but the wave was frontend; the framework wars were brewing and I was caught up in the hype, such as this:      No offense to Kent, but this is certianly one of the videos of all time   There was a very chic mystic about frontend engineering and I fell into it, even though I really didn’t like it.   I kept up with it, made my bones and bacon in and with it, lost jobs with it, but I remained in that space, hating every bit of it.   I began to get angry at the very thought of something breaking because 10 million upstream dependenices depended on this:   Which is just checking to see if there is some property on an object. This is basically one line of code that is an upstream dependency on millions of projects. That’s just one example.   I’m not trying to rant here, just trying to set context. Anyway.   Simple scripts and their lack of being simple   I’m back to using Python to write a simple DDoS script.   I’ve spent majority of my time on GitHub repos doing similar things, in the Python docs, and writing, overengineering, then simplifying the script.   There are bizarre errors I am not familiar with, however I am lucky to have a good friend to pair program with, who has been helpful.   You can find the script on my repo.     ddos-script at refactor branch  ","categories": [],
        "tags": ["python","ddos","smb"],
        "url": "/simple-scripts-beginning/",
        "teaser": null
      },{
        "title": "Simple DDoS Write-up",
        "excerpt":"For my first attempt at scripting a CLI tool for pentesting I built a tiny DDoS script. It was… eventful, for sure.     Learning about Python Standard Libraries   The first thing I needed to figure out was how to open a socket with Python’s os.socket library. There are a lot of different methods and functions to learn about, but one of the examples I saw used: sock.SOCK_STREAM      Learning about argv and arguments in order to create a CLI tool like this            Tried to get user input with argparse       Had a difficult  time understanding argparse and grabbing input with it       Tried to use Typer to grab user input but was missing the fundamentals of Python entirely                    Paired with an experienced Python programmer           Got useful feedback                           Rewrote the script, paring it down from an over engineered mess            Was still baffled until I looked at a similar project on GitHub from a colleague       Was able to reason about my own code by looking at hers       Finished the first version of the script           The script runs, however there is testing to be done   The main objective to the script is to DDoS a target, however I am only sending 4MB of random packets to a target, even if it is in a infinite loop with While true, it is not sending enough junk traffic to effect my local ip   More research and testing is needed   twhite96/ddos-script at refactor/typer-cli   twhite96/ddos-script at fix/simplify   ","categories": [],
        "tags": ["python","ddos"],
        "url": "/simple-ddos-write-up/",
        "teaser": null
      },{
        "title": "TCM Security Practical Web App Security and Testing",
        "excerpt":"In this post I will be writing about how we setup our pentest lab in a few VMs and Docker containers, with this post being about how to set it up on an M-series Mac.    On my wiki, I wrote about how to setup the tools you’ll need to setup the Web App Penetration Testing lab for the course from TCM Security. I pay monthly for it, and it is worth it. For $30 you get the whole smorgasboard of courses which is expanding all the time.   I’ve hopped around different ones and decided my first full course will be the web app pentest course.   Late night labs   I’m now digging into the meat of the course and I am completely hooked. Taggert has given me just enough nuggets to allow me to customize Kali Linux to my liking and so I’ve got a lab that suits my aesthetics. If that doesn’t matter to you, I love that for you. But for me, it’s gold.     Kali regular with Kali Purple wallpaper.     Lab with Powerline Level 10 Shell and Brave browser.     Terminator terminal emulator and Brave.   That’s it for now   It is almost 3 AM and I should probably sleep. But I can’t wait to dive back into the lab in the morning…ish.   ","categories": [],
        "tags": ["pentest","virtual lab"],
        "url": "/tcm-security-courses/",
        "teaser": null
      },{
        "title": "iOS Phishing and Malware in 2024",
        "excerpt":"This series is about how my uncle unwittingly installed spyware on his iPhone, the steps I tried to take to remediate the threat, and where we go from here.   ","categories": [],
        "tags": ["phishing","malware","ios"],
        "url": "/ios-phishing-and-malware-in-2024/",
        "teaser": null
      },{
    "title": "Page Not Found",
    "excerpt":"Sorry, but the page you were trying to view does not exist.  ","url": "http://localhost:4000/404.html"
  },{
    "title": "About",
    "excerpt":" ","url": "http://localhost:4000/about/"
  },{
    "title": "Archive Layout with Content",
    "excerpt":"A variety of common markup showing how the theme styles them.   Header one   Header two   Header three   Header four   Header five   Header six   Blockquotes   Single line blockquote:      Stay hungry. Stay foolish.    Multi line blockquote with a cite reference:      People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things I have done. Innovation is saying no to 1,000 things.    Steve Jobs — Apple Worldwide Developers’ Conference, 1997   Tables                  Employee       Salary                               John Doe       $1       Because that’s all Steve Jobs needed for a salary.                 Jane Doe       $100K       For all the blogging she does.                 Fred Bloggs       $100M       Pictures are worth a thousand words, right? So Jane × 1,000.                 Jane Bloggs       $100B       With hair like that?! Enough said.                          Header1       Header2       Header3                       cell1       cell2       cell3                 cell4       cell5       cell6                       cell1       cell2       cell3                 cell4       cell5       cell6                       Foot1       Foot2       Foot3           Definition Lists      Definition List Title   Definition list division.   Startup   A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.   #dowork   Coined by Rob Dyrdek and his personal body guard Christopher “Big Black” Boykins, “Do Work” works as a self motivator, to motivating your friends.   Do It Live   I’ll let Bill O’Reilly explain this one.   Unordered Lists (Nested)      List item one            List item one                    List item one           List item two           List item three           List item four                       List item two       List item three       List item four           List item two   List item three   List item four   Ordered List (Nested)      List item one            List item one                    List item one           List item two           List item three           List item four                       List item two       List item three       List item four           List item two   List item three   List item four   Buttons   Make any link standout more when applying the .btn class.   &lt;a href=\"#\" class=\"btn--success\"&gt;Success Button&lt;/a&gt;   Primary Button Success Button Warning Button Danger Button Info Button Inverse Button Light Outline Button   [Primary Button Text](#link){: .btn} [Success Button Text](#link){: .btn .btn--success} [Warning Button Text](#link){: .btn .btn--warning} [Danger Button Text](#link){: .btn .btn--danger} [Info Button Text](#link){: .btn .btn--info} [Inverse Button](#link){: .btn .btn--inverse} [Light Outline Button](#link){: .btn .btn--light-outline}   X-Large Button Large Button Default Button Small Button   [X-Large Button](#link){: .btn .btn--x-large} [Large Button](#link){: .btn .btn--large} [Default Button](#link){: .btn} [Small Button](#link){: .btn .btn--small}   Notices   Watch out! You can also add notices by appending {: .notice} to a paragraph.   HTML Tags   Address Tag      1 Infinite Loop  Cupertino, CA 95014  United States   Anchor Tag (aka. Link)   This is an example of a link.   Abbreviation Tag   The abbreviation CSS stands for “Cascading Style Sheets”.   Cite Tag   “Code is poetry.” —Automattic   Code Tag   You will learn later on in these tests that word-wrap: break-word; will be your best friend.   Strike Tag   This tag will let you strikeout text.   Emphasize Tag   The emphasize tag should italicize text.   Insert Tag   This tag should denote inserted text.   Keyboard Tag   This scarcely known tag emulates keyboard text, which is usually styled like the &lt;code&gt; tag.   Preformatted Tag   This tag styles large blocks of code.    .post-title {   margin: 0 0 5px;   font-weight: bold;   font-size: 38px;   line-height: 1.2;   and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows; }   Quote Tag   Developers, developers, developers… –Steve Ballmer   Strong Tag   This tag shows bold text.   Subscript Tag   Getting our science styling on with H2O, which should push the “2” down.   Superscript Tag   Still sticking with science and Albert Einstein’s E = MC2, which should lift the 2 up.   Variable Tag   This allows you to denote variables.                                Page Not Found                         Page not found. Your pixels are in another canvas.                                     About                         Minimal Mistakes is a flexible two-column Jekyll theme.                                     Archive Layout with Content                                                            Posts by Category                                                            Posts by Collection                                                                                     A flexible two-column Jekyll theme. Perfect for building personal sites, blogs, and portfolios. Latest release v4.26.2                                                                                                                                                                                                                                                                                                                                                 Page Archive                                                            Post Archive with Feature Rows                                                            Sitemap                                                            Posts by Tag                                                            Posts by Year                                                                                                                                                                                                                                                                                                                                                                                                       ","url": "http://localhost:4000/archive-layout-with-content/"
  },{
    "title": "Posts by Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "Posts by Collection",
    "excerpt":"                                                                                                                                                         ","url": "http://localhost:4000/collection-archive/"
  },{
    "title": "Page Archive",
    "excerpt":"{% assign posts = site.pages | where_exp: \"post\", \"post.hidden != true\" %} {% for post in posts %}   {% include archive-single.html %} {% endfor %} ","url": "http://localhost:4000/page-archive/"
  },{
    "title": "Post Archive with Feature Rows",
    "excerpt":"{% for post in site.posts limit: 5 %}   {% include archive-single.html %} {% endfor %}  {% include feature_row id=\"intro\" type=\"center\" %}  {% include feature_row %}  {% include feature_row id=\"feature_row2\" type=\"left\" %}  {% include feature_row id=\"feature_row3\" type=\"right\" %}  {% include feature_row id=\"feature_row4\" type=\"center\" %}","url": "http://localhost:4000/post-archive-feature-rows/"
  },{
    "title": "Sitemap",
    "excerpt":"A list of all the posts and pages found on the site. For you robots out there is an [XML version]({{ \"sitemap.xml\" | relative_url }}) available for digesting as well.  Pages  {% for post in site.pages %}   {% include archive-single.html %} {% endfor %}  Posts  {% for post in site.posts %}   {% include archive-single.html %} {% endfor %}  {% capture written_label %}'None'{% endcapture %}  {% for collection in site.collections %} {% unless collection.output == false or collection.label == \"posts\" %}   {% capture label %}{{ collection.label }}{% endcapture %}   {% if label != written_label %}   {{ label }}    {% capture written_label %}{{ label }}{% endcapture %}   {% endif %} {% endunless %} {% for post in collection.docs %}   {% unless collection.output == false or collection.label == \"posts\" %}   {% include archive-single.html %}   {% endunless %} {% endfor %} {% endfor %}","url": "http://localhost:4000/sitemap/"
  },{
    "title": "Posts by Tag",
    "excerpt":"","url": "http://localhost:4000/tags/"
  },{
    "title": "Posts by Year",
    "excerpt":"","url": "http://localhost:4000/year-archive/"
  }]
