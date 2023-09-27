# SCI-FI & MOVIES
**Sci-Fi & Movies** is a website that engages users by testing their knowledge of some of the most iconic science fiction films. Not only are fans of this subgenre welcome, but Sci-Fi & Movies also aims to promote this genre to expand it to other audiences, share relevant facts, and attempt to increase its viewership
![Mock UP](/media/different.devices.png)

## DESIGN

### Typography
To suit the page for a space-themed character, I've opted for the **Orbitron** typeface. It's a family of geometric and futuristic sans-serif fonts that bear resemblance to Eurostyle or Microgramma (the font used in the movie _2001: A Space Odyssey_), which is, in my opinion, the most influential science fiction film in history.
![Typography](/media/sci.fi.typo.png)

## FEATURES
The Sci-Fi & Movies game is divided into 2 pages:

**THE LOG IN**: That's the first page that the visitor get access to. Basically its an introduction about what its coming next.

**THE GAME PAGE**: After the user enters their username, they are immediately taken to the beginning of the game. Here, they will encounter 10 diverse questions related to Sci-Fi and Cinema, challenging their knowledge.

### Existing Features
- __THE LOG IN PAGE__

    - __The Sci-Fi & Movies Logo and Heading__
        - Located at the top of the page, easy to see for the user and with the addition of the _Star Treck_ symbol, that helps contextualize the type of game we are about to access, being one of the most recognized sagas in the history of science fiction cinema.
        ![Logo](/media/heading.logo.png)

    - __The Log-in Section__
        - Allows the user to input a _"Username"_ that will be used as the _"Player Name"_ to proceed with the 10 quiz game questions. As background image for the section, I've used another reference to _2001: A Space Odyssey_ by using the original drawing of the space station of the film. The drawing shows a newly launched spacecraft from the station, a fitting symbol for what is about to begin. When we press _"Let's Play"_ it will directly redirect us to the game.
        ![Log-In](/media/login.section.png)

    - __The Footer__
        - In the footer, I've included an iconic quote from the history of Sci-Fi Movies, sourced from _Star Wars_, to inspire and extend my best wishes to the user for the game ahead.
        ![Footer](/media/footer.png)

- __THE GAME PAGE__

    - __The Score Box__
        - Right below the logo and the header, the user will find a panel where the previously chosen __"Player"__ will be displayed, along with a scoreboard that will keep track of the __"Correct"__ and __"Incorrect"__ answers. This counter will change as the questions are answered, with the correct ones marked in _green_ and the _incorrect_ ones in red.
        ![Score-Box](/media/score.box.png)
    
    - __The Quiz Game Section__
        - Right after logging in on the main page, upon accessing the __Game Page__, an _alert_ once again wishes the user good luck before starting the quiz game.
        ![Alert](/media/alarm.png)

        - The Quiz Game consists of 10 questions related to various details about 10 iconic science fiction movies. Each question contains 4 possible answers, of which only one is correct.
        
        - When the user hovers the mouse over the different options, they light up in blue. Once the user has considered the options, with a click, they can select only one of them, which is then marked with the same blue color.
        ![Quiz](/media/quiz.png)

    - __The Check Box__
        - Here the user will find 3 buttons. The first one is the __"Check"__ button to verify if the previously selected option is _correct_ or _incorrect_. Upon clicking the button, it will light up in _green_ if the answer is correct. If the user's selected option is incorrect, it will be colored in _red_, and the correct answer will be revealed, illuminated in green.

        - The second button, __"Next!"__, will only be accessible once the user has answered the question. After answering, this button will become enabled to proceed with the next question of the game.
        ![Check-Box](/media/check.box.png)
        ![Question Answered](/media/question.answered.png)
        
        - The last button, __"Show Result"__, The final result will only become visible once we reach the last question of the quiz, and this option will only be activated after we've answered that question. Clicking on it will reveal our ultimate outcome at the bottom of the page
        ![Show Result](/media/show.result.png)
    
    - __Final Result Box__
        - At this point, the game will have come to an end, and a panel will be displayed showing the player's name, the final evaluation taking into account the number of correct and incorrect answers, and a __"Try Again"__ button, giving us the possibility to restart the game again.

        - The evaluation will be as follows considering the number of correct answers:

            - 10: _You are a master in Sci-Fi_
            - between 9 and 5: _You know a lot about Sci-Fi_
            - less than 5: _You should watch more Sci-Fi dude_
            - 0 : _Definitely Sci-Fi is not for you_
        ![Final Result](/media/result.box.png)

## TECHNOLOGIES USED

### Languages used
- HTML, CSS and JavaScript.

### Programs used
- [Visual Studio Code](https://code.visualstudio.com/) - IDE used to create the site.
- [Github](https://github.com/) - To save and store the files for the website.
- [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.
- [Google Dev Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.
- [Techsini](https://techsini.com/multi-mockup/index.php) - To show the website image on a range of devices.
- [iloveimg](https://www.iloveimg.com/es) - To resize images and convert to jpg format.


## TESTING

### Validaor Testing

- HTML: No errors were found after passing through the official [W3C Validator](/media/html.valdator.png)

- CSS: No errors were found after passing through the official [Jigsaw Validator](http://jigsaw.w3.org/css-validator/validator?lang=es&profile=css3svg&uri=https%3A%2F%2Fkiko-climent.github.io%2Fsci-fi-project%2F&usermedium=all&vextwarning=&warning=1)

- JAVASCRIPT: Passing through offical [JSHint]()
    - These are the metrics:
        - There are 14 functions in this file.
        - Function with the largest signature take 2 arguments, while the median is 0.5.
        - Largest function has 15 statements in it, while the median is 3.
        - The most complex function has a cyclomatic complexity value of 7 while the median is 1.
    - Found some warnings:
        - 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
        - 'template literal syntax' is only available in ES6 (use 'esversion: 6'). 
        - Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (incrementScore, incrementIncorrect)
    - Three unused variables:
        - selectAnswer
        - showFinalResult
        - next   

- LIGHTHOUSE: Accesibility was also checked on [Lighhouse](/media/lighhouse.validator.png)

### Unfixed Bugs

- Concerning the warnings from _JShint_, first two might happen cause Jshint doesnt understand es7.
- The third one couldn't get rid of it even i moved both functions (_incrementScore_ and _incrementIncorrect_) outside the _loop_.
- Regarding the three unused variables, if i delete them the page doesnt work how it should. They are called from the HTML file.

## DEPLOYMENT

The site was deployed to GitHub pages. The steps to deploy are as follows: 

  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

  - The live link can be found here - 

## CREDITS

### Content
  - I visited several websites to gather inspiration for crafting the questions and answers, but all the texts were written by myself.
  
  - _Hal-9000_ favicon and _Star Trek_ icon in the header both were taken from [icons8](https://icons8.de/)

  - Quote in the _Footer_ taken from _"Star Wars"_

  - The idea of the _Score Box_ in the _Game Page_ was taken from the _"Love Maths Project"_ from Code Institute.

### Media
  - Concerning the pictures, they were taking from different resources:

    - Space station picture in the _Log In_ page was taken from: [National Air and Space Museum](https://airandspace.si.edu/multimedia-gallery/2001-space-stationjpg ) 

    - 2001: Space Odissey's picture in question 1 was taken from: [The New York Times](https://www.nytimes.com/2020/01/23/arts/design/kubrick-2001-museum-moving-image.html)

    - Blade Runner poster in question 2 was taken from: [Heise Online](https://www.heise.de/news/Blade-Runner-Das-Kult-Desaster-3848048.html)

    - Alien making of picture in question 3 was taken from: [Premium Beat](https://www.premiumbeat.com/blog/filmmaking-lessons-making-of-alien/)

    - Twelve Monkeys picture in question 4 was taken from: [Tilt Magazine](https://tilt.goombastomp.com/film/terry-gilliams-12-monkeys-is-more-relevant-than-ever/)

    - Arrival picture in question 5 was taken from: [Astron Alpha](https://www.astronalpha.de/filme/arrival/)

    - Akira poster picture in question 6 was taken from: [Crunchyroll](https://www.crunchyroll.com/de/series/GRQWJWPGR/akira)

    - X-Files picture in question 7 was taken from: [20 minutos magazine](https://www.20minutos.es/cinemania/series/expediente-x-guia-mejores-episodios-mulder-scully-155299/)

    - Interestellar picture in question 8 was taken from: [Den of Geek](https://www.denofgeek.com/movies/christopher-nolans-interstellar-a-secular-end-times-myth/)

    - Under the Skin poster in question 9 was taken from: [Xataka](https://www.xataka.com/cine-y-tv/under-the-skin-impresionante-experiencia-sensorial-ciencia-ficcion-terror-que-llega-a-nuestras-pantallas-siete-anos-tarde)

    - Ex-Machina picture in question 10 was taken from: [Süddeutsche Zeitung](https://www.sueddeutsche.de/kultur/kino-traumfrau-gebaut-1.2445461)