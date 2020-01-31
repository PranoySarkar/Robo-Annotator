const config = {
    noOfImage: 10,// total no of image to be generated are the end
    noOfElementMovePerImage: 5, // minimum number of images (input)  to be moved in the output image 
    imageWidth: 800, // width of teh output image 
    imageHeight: 600, // height of the op image
    skew: false, // if skew is true the ratio of the input image will be distort  

    images: [
        /*
            Input Images: make sure the background is (white)#FFF or else remove the background using https://pixlr.com/e or photoshop
            {
                url: `./assets/cactus/cactus (1).png`, // path to the image from root dir
                class: `game-trex-cactus`, // annotation class of the image 
                minWidth: 20, // during image generation , input image width will be change randomly minWidth &  maxWidth is the range 
                maxWidth: 100,
            },
      */

        {
            url: `./assets/cactus/cactus (1).png`, // path to the image from root dir
            class: `game-trex-cactus`, // annotation class of the image 
            minWidth: 20, // during image generation , input image width will be change randomly minWidth &  maxWidth is the range 
            maxWidth: 100,
        },
        {
            url: `assets/cactus/cactus (2).png`,
            class: `game-trex-cactus`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/cactus/cactus (3).png`,
            class: `game-trex-cactus`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/cactus/cactus (4).png`,
            class: `game-trex-cactus`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/cactus/cactus (5).png`,
            class: `game-trex-cactus`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/cactus/cactus (6).png`,
            class: `game-trex-cactus`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/cactus/cactus (7).png`,
            class: `game-trex-cactus`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/cactus/cactus (8).png`,
            class: `game-trex-cactus`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/cactus/cactus (9).png`,
            class: `game-trex-cactus`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/cactus/cactus (10).png`,
            class: `game-trex-cactus`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/cactus/cactus (11).png`,
            class: `game-trex-cactus`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/cloud/cloud.png`,
            class: `game-trex-cloud`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/dragon/dragon.png`,
            class: `game-trex-dragon`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/dragon/dragon2.png`,
            class: `game-trex-dragon`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/trex/trex (1).png`,
            class: `game-trex-trex`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/trex/trex (2).png`,
            class: `game-trex-trex`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/trex/trex (3).png`,
            class: `game-trex-trex`,
            minWidth: 20,
            maxWidth: 100,
        },

        {
            url: `assets/trex/trex (4).png`,
            class: `game-trex-trex`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/trex/trex (5).png`,
            class: `game-trex-trex`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/trex/trex (6).png`,
            class: `game-trex-trex`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/trex/trex (7).png`,
            class: `game-trex-trex`,
            minWidth: 20,
            maxWidth: 100,
        },

        {
            url: `assets/trex/trex (8).png`,
            class: `game-trex-trex`,
            minWidth: 20,
            maxWidth: 100,
        },

        {
            url: `assets/trex/trex (9).png`,
            class: `game-trex-trex`,
            minWidth: 20,
            maxWidth: 100,
        },
        {
            url: `assets/gameover/gameover (1).png`,
            class: `game-trex-gameover`,
            minWidth: 100,
            maxWidth: 190,
        }, {
            url: `assets/gameover/gameover (2).png`,
            class: `game-trex-gameover`,
            minWidth: 100,
            maxWidth: 190,
        },
        {
            url: `assets/gameover/gameover (3).png`,
            class: `game-trex-gameover`,
            minWidth: 100,
            maxWidth: 190,
        }, {
            url: `assets/gameover/gameover (4).png`,
            class: `game-trex-gameover`,
            minWidth: 100,
            maxWidth: 190,
        }, {
            url: `assets/gameover/gameover (5).png`,
            class: `game-trex-gameover`,
            minWidth: 100,
            maxWidth: 190,
        }, {
            url: `assets/gameover/gameover (6).png`,
            class: `game-trex-gameover`,
            minWidth: 100,
            maxWidth: 190,
        }, {
            url: `assets/gameover/gameover (7).png`,
            class: `game-trex-gameover`,
            minWidth: 100,
            maxWidth: 496,
        }
    ],

    noiseImages: [
        /*these images are only for noise, these are the things that we are  
        not interested but in real scenario this things will be present. if you don't want you can keep this empty noiseImages[]*/
        {
            url: `assets/noise/noise1.png`,
            minWidth: 300,
            maxWidth: 496,
        },
        {
            url: `assets/noise/noise2.png`,
            minWidth: 300,
            maxWidth: 550,
        },
        {
            url: `assets/noise/noise3.png`,
            minWidth: 300,
            maxWidth: 550,
        },
        {
            url: `assets/noise/noise4.png`,
            minWidth: 100,
            maxWidth: 400,
        },
        {
            url: `assets/noise/noise5.png`,
            minWidth: 200,
            maxWidth: 314,
        },
        {
            url: `assets/noise/noise6.png`,
            minWidth: 300,
            maxWidth: 400,
        },
        {
            url: `assets/noise/noise7.png`,
            minWidth: 100,
            maxWidth: 100,
        }
    ]
}