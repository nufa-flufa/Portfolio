'use strict'

var gNextId = 1;

var gSpecialities = [
    {
        header: 'Dog Training',
        txt: 'I have been training dogs for 10 years. In my military service I was a combat soldier in the K9 unit, training dogs to find explosive while training obstacle course and discipline.',
        imgURL: 'img/spec/IMG_1195.jpg'

    },
    {
        header: 'Pasta Expert',
        txt: 'After working with pasta for 4 and a half years, I gathered the knowledge and understanding of this special world. different types, different sauces and unique styles of dishes are some of the things I met during those years.',
        imgURL: 'img/spec/IMG_1192.jpg'

    },
    {
        header: 'Crossfit Training',
        txt: 'Crossfit training has been one of my daily routines over the last three years. my stronger aspect in the sport is weight-lifting, yet I work to excel at all aspects of the sports.',
        imgURL: 'img/spec/IMG_1193.PNG'

    },
]

var gProjs = [
    {
        number:gNextId++,
        id: 'ball-game',
        name: 'Ball Game',
        title: 'Collect them all as fast as you can',
        desc: 'In this game you need to clear the board from balls, which are added to the board evey few seconds. but be careful - there is a sticky feature and if you step on it you will freeze for 3 seconds. Are you up for the challenge?',
        // url:'',
        publishedAt: 1610297629 ,
        lables: [],
    },
    {
        number:gNextId++,
        id: 'pacman',
        name: 'Pacman',
        title: 'Afraid of the ghosts? come and kick their ass in this Pacman game!',
        desc: 'your main task is to collect all the food on the board, while dodging the ghosts roaming the game. If you manage to eat super food from the corners of the game you have 5 seconds in which you can eats the ghosts and they can do you no harm. you can also eat cherrys - thay don\'t give you super power, but you get extra points for them. the game ends when all the food is collected or you touched a ghost.',
        // url:,
        publishedAt: 1610470429,
        lables: [],

    },
    {
        number:gNextId++,
        id:'minesweeper',
        name:'Minesweeper',
        title:'Love live dangerously? come and find those mines',
        desc:'In this game your job is to find the mines hidden on the board. if you click a cell which is not a mine a number will appear. this number indicates how many mines awaites around that celland this is the clue for you to decide which next cell to click. You have a few extra features in this game to make ot more intresting: First of all, you can choose the level you want to play at. second, you get 3 chances in each game, so even if you stepped on a mine you don\'t lose just yet. next, you have the clue option, in which you can click a mine and see what the status with the other cells around him. and finally, there is a Safe-click button that can randomly show you a cell which is safe to click on. think you got it? Good-Luck!',
        // url:,
        publishedAt: 1610643229,
        lables: [],

    },
    {
        number:gNextId++,
        id:'tetris',
        name:'Tetris',
        title:'Try getting all those shapes in line',
        desc:'When the game start random shapes will start going down the screen. with the arrows next to the board (or the ones on you keyboard)you can move the shapes left, right and down until they hit the bottom.Once a shape stopped, it becomes the new bottom and a new shape will start going down next. Once the shapes pile to the top of the screen the game is over. Your job here is to orginize the shapes so they would complete whole rows. Once that happens the rows will disappear and the distance from the bottom to the top of the board will get bigger and allows you to continue playing. Up for the task? Go for it! ',
        // url:,
        publishedAt:1608483229,
        lables: [],

    },
]