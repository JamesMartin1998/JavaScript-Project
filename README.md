# Rock, Paper, Scissors, Lizard, Spock Game
The Rock, Paper, Scissors, Lizard, Spock Game is a more complex version of the popular Rock, Paper, Scissors game that was shown on the TV show 'The Big Bang Theory'. This project aims to teach people about the games origin and how to play, as well as allow people to play the game virtually, and independently against the computer. Players can choose a weapon and fight against the computer, which will randomly choose a weapon. Scores and the remaining number of games are displayed and when no more games remain. A popup will display the overall outcome of the games. 

The target audience for the project would include people that have heard about the game before (perhaps fans of 'The Big Bang Theory') and want to learn how to play and practice against the computer, as well as people who have played before but have no one else to play against and consequently rely on playing against the computer. The game is fully responsive, making it easy to play on a mobile device.

![Image showing the responsiveness of homepage](/assets/images/responsive-homepage.png)

## Features

- Navigation
    - Displays the title of the website / name of the game to the user.
    - A clear 'Montserrat' font is used so that the text is easily readable.
    - The blue background and white font color provide sufficient contrast for the text to be seen easily.
    - Allows users to navigate between the two pages on the site.
    - Underline effect shows which page the user is currently on.
    - Hovering over the page names will cause an underline effect to show that the elements are links.
    - On smaller devices the font size will decrease and the links are arranged vertically as a better use of space.

![Image showing the navigation bar](/assets/images/navbar.png)
![Image showing the responsive navigation bar](/assets/images/mobile-nav.png)


- About the Game Section
    - This section is one of two on the home page and aims to provide some background information about the game and educate users.
    - Text explains that the game is from the TV show 'The Big Bang Theory' and the video shows the context and an explanation of the rules by one of the characters.
    - The video was embedded from YouTube and is only played when initiated by the user. The user also has access to the video controls.

![Image showing the About the Game Section](/assets/images/about-the-game.png)

- How to Play Section
    - This section aims to explain the rules of the game and how to initiate the game with the buttons and interface on the website.
    - An ordered list shows the steps in order so the user can easily understand the procedure of the game.
    - An image is used to clearly show the relationship bewteen all of the weapons so the user can understand the possibe outcomes in the game.

![Image showing the How to Play Section](/assets/images/how-to-play.png)

The 'About the Game' section sits adjacently to the 'How to Play' section. Both have equal widths and use a yellow background and blue text to produce a consistent color theme. The colors are also complementary to each other. 
On smaller devices, the 'How to Play' section moves vertically underneath the 'About the Game' section to provide more horizontal space to each section. This was achieved by changing the flex-direction property to column for their parent element.

- Footer Section
    - This section aims to promote users to find out more about the game through social media.
    - This section follows the same design theme as the navigation bar for consistency.
    - Social links are included as icons from FontAwesome.
    - When clicked, the links open in a new tab for a good user experience.
    - Code for this section was used from Code Institute's Love Running Project.

![Image showing the Footer Section](/assets/images/footer.png)

- Choose Weapon Section
    - This section is one of two sections for the game. It allows the user to choose their weapon for the game, start the game and reset the game.
    - Five circular buttons are used with background images to clealy show users the weapon and the heading informs the user to make a selection.
    - A hover effect is used on the weapon buttons to enlarge them.
    - When users click a weapon button, the user will be able to an image of their weapon in the game section appear.
    - The 'fight!' button is used to start the game. If it is pressed before a weapon has been selected by the user, the user will receive an alert to tell them they need to select a weapon before starting a game. Consequently, the game will not start and the user has freedom to choose a weapon. If it is clicked after a weapon has been chosen, the game will start. The user will see an image of the computer's weapon, a result message and updates to the player score, computer score and games remaining in the game section.
    - The 'reset' button uses a strong red color so it can stand out to the user.
    - Clicking the reset button will reset the game by removing any weapon selections for the player and computer, resetting the player score and computer score to zero and finally by resetting the games remaining to five.

![Image showing the Choose Weapon Section](/assets/images/choose-weapon.png)

- Game Section
    - This is the second section of the game. It shows the user the weapons selected, results, scores and games remaining.
    - The headings with yellow backgrounds stand out to show the user where information for both the player and computer is located.
    - The player information is located on the left, computer information on the right and result and games remaining information is in the center to provide clear, distinct sections to user.
    - On smaller devices, the result and games remaining information moves under the player score and computer score. This is achieved by having duplicate div elements and altering their displays to none to hide one duplicate.
    - The player weapon image is shown if the player has clicked a weapon button in the 'Choose Weapon Section'. If the player hasn't clicked a weapon button, a white space will represent where the image should appear.
    - The computer weapon image is shown if the player has clicked the 'fight!' button.
    - If the player has pressed the 'fight!' button, a result message will appear in the center of the section to inform the player of outcome of the round.
    - If the player has pressed the 'fight!' button, the player score or computer score will increment by one, depending on the result. In the event of a draw, neither will increment.
    - If the player has pressed the 'fight!' button, the games remaining will decrease by one.
    - If the games remaining reaches zero, the game is finished and a pop up will appear over the game section to inform the user of the overall result.

![Image showing the Game Section](/assets/images/game-section.png)

- Pop Up Section 
    - The pop up section appears over the game section when the games remaining equals zero.
    - Depending on the result, an appropriate message will displayed to the user to inform them of the overall result.
    - An image of a trophy will be seen if there is a winner. Alternatively, an image of a handshake will be used in the event of a draw.
    - The button in the top right of the pop up appears red when hovered on to show the user it can be clicked.
    - When the button is clicked, the pop up will close and the game will be reset so a new game can be started.

![Image showing the Pop Up Winner Message](/assets/images/pop-up-win.png)

![Image showing the Pop Up Draw Message](/assets/images/pop-up-draw.png)

## Testing
- The website has been tested and works on different browsers: Chrome, Safari, Microsoft Edge.
- All text can be seen clearly and isn't disrupted by another element.
- All links and buttons can be clicked and provide their expected results.
- The 'Home' page is responsive on all standard screen sizes and functions correctly.

![Image showing the responsiveness of homepage](/assets/images/responsive-homepage.png)

- The 'Play' page is responsive on all standard screen sizes and functions correctly.

![Image showing the responsiveness of play page](/assets/images/responsive-play.png)

### High Level Test Cases

![Image showing the test cases](/assets/images/test-cases.png)

User Stories:

- Users want to view the website as intended on any device - TC001, TC002
- Users want to understand the purpose of the site - TC003, TC004
- Users want to easily navigate the website and find contact information - TC003
- Users want to understand what each section of the website is showing - TC004
- Users that have never heard of the game before may want to learn about its origin	- TC005
- Users want to understand how to play the game and how to win - TC006
- Users want to choose weapons and have confirmation - TC007
- Users want to be able to start the game - TC008
- Users want to see the results of each game, and player/computer scores - TC009
- Users want to know how many games are remaining - TC010
- Users want to know the overall winner - TC011
- Users want to be able to reset the game at any point - TC012

### High Level Test Case Results

![Image showing the test case results](/assets/images/test-case-results.png)

Full Results can be found at: https://github.com/JamesMartin1998/JavaScript-Project/blob/main/testing.xlsx?raw=true

## Solved Bugs

In this project I learned that when using a language such as JavaScript, fixing one bug can often lead to finding a new one. 
- Fixed the conditionals that were causing the computer to always win. I learned that conditionals must be written in the form 'if (computerWeapon === "lizard" || computerWeapon === "scissors")' instead of 'if (computerWeapon === "lizard" ||  "scissors")'.
- Fixed users starting the game without choosing a weapon. Users will be sent an alert.
- Fixed the user playing a infinite number of games as the games remaining would continue into the minus numbers instead of stoping at zero. This was fixed by calling the reset game function.
- Fixed the wrong image showing in the pop up section.
- Fixed HTML W3C Validator error (div not allowed as child of button) by using img elements instead of divs with backgrounds.
- Fixed the footer error on the 'Play' page. On larger devices, the content height wouldn't fit the page so the footer would appear in the middle of the page instead on the bottom. I tried setting the body height to 100vh and positioning the footer at the bottom, but this caused the footer to cover content of some devices. To fix, I added a div with min-height of 10rem to provide the content with enough height to position the footer at the bottom of the page.

## Unfixed Bugs

- There are no remaining found bugs.

## Validator Testing

- HTML
    - Official W3C validator returned no errors.

![Image showing the W3C validator for home page](/assets/images/w3c-home.png)

![Image showing the W3C validator for play page](/assets/images/w3c-play.png)
- CSS
    - Officical Jigsaw validator returned no errors.

![Image showing the CSS validator for home page](/assets/images/css-home.png)

![Image showing the CSS validator for play page](/assets/images/css-play.png)

- JavaScript
    - Passes through JSHint with no significant issues.

![Image showing the jshint result](/assets/images/jshint.png)

## Lighthouse Testing

![Image showing the Lighthouse report for home page](/assets/images/lighthouse-home.png)

![Image showing the Lighthouse report for play page](/assets/images/lighthouse-play.png)

## Deployment 

### GitHub Pages

- The site was deployed to GitHub pages by:
    - Selecting 'Settings' in the GitHub repository.
    - Clicking the 'Pages' tab.
    - From the source section drop-down menu, select the Master Branch.
    - This will then indicate that the project has been deployed successfully.

The link for this project: https://jamesmartin1998.github.io/JavaScript-Project/

### Run Locally

- The site can be run locally by:
    - Opening the project repository
    - Opening the dropdown on the 'code' button
    - Downloading the zip file
    - Extracting the files from the zip file into a new folder on your computer
    - Opening the folder in an IDE of your choice

## Credits

- The video was embedded from Youtube (https://www.youtube.com/watch?v=Kov2G0GouBw&t=4s) and features the TV show 'The Big Bang Theory'.
- The image showing which weapons beat each other is from Wikipedia (https://en.wikipedia.org/wiki/File:Rock_paper_scissors_lizard_spock.png).
- The images used for the weapons are from tonyflorida.com and were edited and cropped to size using Microsoft Paint (https://tonyflorida.com/rock-paper-scissors-lizard-spock-rules/).
- The trophy image is from clipartkey.com (https://www.clipartkey.com/downpng/ibiThR_1-gif-clipart-clip-art-trophy-1st-clipart/).
- The handshake image is from clipart.world (https://clipart.world/handshake-clipart/).
- Social links code was used from Code Institutes Love Running Project.
- Icons used for social links are from Font Awesome.
- Thanks to my mentor Ronan for his support throughout this project.