# Rock, Paper, Scissors, Lizard, Spock Game
The Rock, Paper, Scissors, Lizard, Spock Game is a more complex version of the popular Rock, Paper, Scissors game that was shown on the TV show 'The Big Bang Theory'. This project aims to teach people about the games origin and how to play, as well as allow people to play the game virtually, and independently against the computer. Players can choose a weapon and fight against the computer, which will randomly choose a weapon. Scores and the remaining number of games are displayed and when no more games remain, a popup will display the overall outcome of the games. 

The target audience for the project would include people that have heard about the game before (perhaps fans of 'The Big Bang Theory') and want to learn how to play and practice against the computer, as well as people who have played before but have no one else to play against and consequently rely on playing against the computer. The game is fully responsive, making it easy to play on a mobile device.

![Image showing the responsiveness of homepage](/assets/images/responsive-homepage.png)

## Features

- Navigation
    - Displays the title of the website / name of the game to the user
    - A clear 'Montserrat' font is used so that the text is easily readable
    - The blue background and white font color provide sufficient contrast for the text to be seen easily
    - Allows users to navigate between the two pages on the site
    - Underline effect shows which page the user is currently on 
    - Hovering over the page names will cause an underline effect to show that the elements are links
    - On smaller devices the font size will decrease and the links are arranged vertically as a better use of space

![Image showing the navigation bar](/assets/images/navbar.png)
![Image showing the responsive navigation bar](/assets/images/mobile-nav.png)


- About the Game Section
    - This section is one of two on the home page and aims to provide some background information about the game and educate users
    - Text explains that the game is from the TV show 'The Big Bang Theory' and the video shows the context and an explanation of the rules by one of the characters
    - The video was embedded from YouTube and is only played when initiated by the user. The user also has access to the video controls.

![Image showing the About the Game Section](/assets/images/about-the-game.png)

- How to Play Section
    - This section aims to explain the rules of the game and how to initiate the game with the buttons and interface on the website.
    - An ordered list shows the steps in order so the user can easily understand the procedure of the game
    - An image is shows to clearly show the relationship bewteen all of the weapons so the user can understand the possibe outcomes in the game

![Image showing the How to Play Section](/assets/images/how-to-play.png)

The 'About the Game' section sits adjacently to the 'How to Play' section. Both have equal widths and use a yellow background and blue text to produce a consistent color theme. The colors are also complementary to each other. 
On smaller devices, the 'How to Play' section moves vertically underneath the 'About the Game' section to provide more horizontal space to each section. This was achieved by changing the flex-direction property to column for their parent element.