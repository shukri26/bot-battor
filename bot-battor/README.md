# Bot-Battor

- This app fetchs data from a db.json server "http://localhost:3000/bots". It uses React framework.
 - It has the following tables:

  - The App table is the main component that is used to house all the components of the page .
  - The BotCollection component that Allows filtering of bots by their classes and also     allows bots to be sorted according to their health,armor or damage.
  - YourBotArmy component that filters out repeated bots allowing a user to only add a specific bot to their army once and returns a bot that has been selected by the user.
  - BotCard component that creates a single bot and  Bot collection uses this component to render all the bots into the page.
  - The BotsContext component provides data of all the bots currently in the server to the page and Initializes context, when imported it will allow us to use the store of data that will be defined.
  - The sortBar component Provides a form that allows a user to sort the bots on the page by their health,damage or armor.
  - The BotFilter component that filters bots according to Medic, assauly, Defender, captain and witch.

- REQUIREMENTS FOR USE
- Prerequisites

- For you to use the content on this repo ensure you have the following:

    - node v14.17.4 and above
    - A computer that runs on either of the following; (Linux, Mac OS and Windows)
    - nodejs 9.0+
    - npm 6.14.14 and above
    - Vue 2.6.11- Status:
    - Version: - v0.1.0
    - Setup instructions
    - To use this repository on your machine requires some simple steps:

- Open a terminal / command line interface on your computer

- Clone the repo by using the following to create a copy on your local machine: git@github.com:shukri26/bot-battor.git

- Change directory to the repo folder:

- cd bot-battlr
  - Open it in Visual Studio Code
  - code .

- Author
- Mohamud shukri
- 
   - Initial work - [shukri26] "https://github.com/shukri26"
   - 
- License

-  MIT
