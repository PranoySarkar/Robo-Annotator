const playGround = document.querySelector('.playground');
let playgroundRect = null
let haltImageGeneration = false;


const config = {
    noOfImage: 100,
    noOfElementMovePerImage: 5,
    imageWidth: 800,
    imageHeight: 600,
    images: [
        {
            url: `assets/cactus/cactus (1).png`,
            class: `game-trex-cactus`,
            minWidth: 20,
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
    noiseImages:[
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

async function init() {
    let playGround = document.querySelector('.playground');
    playGround.style.width = `${config.imageWidth}px`;
    playGround.style.height = `${config.imageHeight}px`;
    playgroundRect = playGround.getBoundingClientRect();

    appendInitialImagesInPlayground(playGround,config.images);
    appendInitialImagesInPlayground(playGround,config.noiseImages,true);

    let progress = document.querySelector('progress');
    progress.max = config.noOfImage;
    progress.value = 0;





}

function appendInitialImagesInPlayground(playGround, imageList, noise) {
    let docFrag = document.createDocumentFragment();
    for (let eachImage of imageList) {
        let moveAndResizePlaneDiv = document.createElement('div');
        moveAndResizePlaneDiv.classList.add('moveAndResizePlane');
        if(noise){
            eachImage.class='noise'
        }
        moveAndResizePlaneDiv.setAttribute('data-class', eachImage.class);
        moveAndResizePlaneDiv.setAttribute('data-minwidth', eachImage.minWidth + '');
        moveAndResizePlaneDiv.setAttribute('data-maxwidth', eachImage.maxWidth + '');
        moveAndResizePlaneDiv.style.top = getRandom(0, config.imageHeight) + 'px';
        moveAndResizePlaneDiv.style.left = getRandom(0, config.imageWidth) + 'px';
        moveAndResizePlaneDiv.style.display = 'none';
        let img = document.createElement('img');
        img.src = eachImage.url;
        moveAndResizePlaneDiv.append(img);
        docFrag.append(moveAndResizePlaneDiv);
    }
    playGround.append(docFrag);
}

function takeSnap() {
    return new Promise((resolve, reject) => {

        html2canvas(document.querySelector(".playground"), {
            width: config.imageWidth,
            height: config.imageHeight,
            scale: 1
        }).then(canvas => {
            resolve(canvas);
        });
    })

}



function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateXML(objects, imageName, imagePath, imageWidth, imageHeight) {
    let objectsStr = ``;
    for (let eachObject of objects) {
        let objectsXMLTemplate = templateFactory.objectTemplate
        objectsXMLTemplate = objectsXMLTemplate.replace(/%%OBJECT-CLASS%%/ig, eachObject.class);
        objectsXMLTemplate = objectsXMLTemplate.replace(/%%X-MIN%%/ig, eachObject.xMin);
        objectsXMLTemplate = objectsXMLTemplate.replace(/%%Y-MIN%%/ig, eachObject.yMin);
        objectsXMLTemplate = objectsXMLTemplate.replace(/%%X-MAX%%/ig, eachObject.xMax);
        objectsXMLTemplate = objectsXMLTemplate.replace(/%%Y-MAX%%/ig, eachObject.yMax);
        objectsStr += objectsXMLTemplate + '\n'
    }
    let wholeTemplate = templateFactory.annotationTemplate;
    wholeTemplate = wholeTemplate.replace(/%%IMAGE_NAME%%/ig, imageName);
    wholeTemplate = wholeTemplate.replace(/%%IMAGE_PATH%%/ig, imagePath);
    wholeTemplate = wholeTemplate.replace(/%%IMAGE_WIDTH%%/ig, imageWidth);
    wholeTemplate = wholeTemplate.replace(/%%IMAGE_HEIGHT%%/ig, imageHeight);
    wholeTemplate = wholeTemplate.replace(/%%OBJECTS%%/ig, objectsStr);
    return wholeTemplate;
}
function condition(currentMoveAndResizePlane, restMoveAndResizePlane) {
    let currentElementRect = currentMoveAndResizePlane.getBoundingClientRect();
    let result = false;
    // inside playground
    if (isInsidePlayground(currentElementRect)) {
        if (!isOverFlow(currentMoveAndResizePlane, restMoveAndResizePlane)) {
            result = true;
        }
    }
    return result;
}

function isOverFlow(currentMoveAndResizePlane, restMoveAndResizePlane) {
    let currentMoveAndResizePlaneRect = currentMoveAndResizePlane.getBoundingClientRect();

    for (let eachMoveAndResizePlane of restMoveAndResizePlane) {
        let eachMoveAndResizePlaneRect = eachMoveAndResizePlane.getBoundingClientRect();
        let width = Math.min(currentMoveAndResizePlaneRect.right, eachMoveAndResizePlaneRect.right) - Math.max(currentMoveAndResizePlaneRect.x, eachMoveAndResizePlaneRect.x);
        width = Math.max(width, 0);
        let height = Math.min(currentMoveAndResizePlaneRect.bottom, eachMoveAndResizePlaneRect.bottom) - Math.max(currentMoveAndResizePlaneRect.y, eachMoveAndResizePlaneRect.y);
        height = Math.max(height, 0);
        if (width * height > 0) {
            return true;
        }

    }
    return false;
}


init();

function generateNewImage() {
    return new Promise(async (resolve, _) => {

        let moveAndResizePlane = [...document.querySelectorAll('.moveAndResizePlane')]



        let counter = config.noOfElementMovePerImage
        while (counter > 0) {
            while (true) {
                let top = getRandom(0, playgroundRect.height)
                let left = getRandom(0, playgroundRect.width)

                let index = getRandom(0, moveAndResizePlane.length - 1);
                moveAndResizePlane[index].style.display = 'block';
                moveAndResizePlane[index].style.top = top + 'px';
                moveAndResizePlane[index].style.left = left + 'px';
                moveAndResizePlane[index].style.width = getRandom(moveAndResizePlane[index].dataset.minwidth, moveAndResizePlane[index].dataset.maxwidth) + 'px';
                let probability = getRandom(1, 10);
                if (probability < 5) {
                    let scaleX = scaleY = 1;
                    if (probability < 3) {
                        scaleX = getRandom(10, 200) / 100
                    } else {
                        scaleY = getRandom(10, 120) / 100
                    }


                    moveAndResizePlane[index].style.transform = `scale(${scaleX},${scaleY})`
                } else {
                    moveAndResizePlane[index].style.transform = `scale(1,1)`
                }

                let restMoveAndResizePlane = moveAndResizePlane.filter(each => each == moveAndResizePlane[index] ? false : true)


                if (condition(moveAndResizePlane[index], restMoveAndResizePlane)) {
                    counter--;
                    break;
                }
                else {
                    moveAndResizePlane[index].style.display = 'none';
                    continue;
                }

            }
        }

        // hide some image
        let noOfObjectsToHid = getRandom(0, (moveAndResizePlane.length - 1) / 2);
        for (let i = 0; i < noOfObjectsToHid; i++) {
            let index = getRandom(0, moveAndResizePlane.length - 1);
            moveAndResizePlane[index].style.display = 'none';
        }

        let objects = [];
        let playGroundRect = document.querySelector('.playground').getBoundingClientRect()
        for (let eachResizePlane of moveAndResizePlane) {
            let rect = eachResizePlane.getBoundingClientRect()
            if (rect.right < playGroundRect.right
                && rect.bottom < playGroundRect.bottom
                && rect.width > 2
                && rect.height > 3
                && eachResizePlane.style.display == 'block'
                && eachResizePlane.dataset.class !=='noise'
                ) {
                objects.push({
                    class: eachResizePlane.dataset.class,
                    xMin: Math.floor(rect.x - playGroundRect.x),
                    yMin: Math.floor(rect.y - playGroundRect.y),
                    xMax: Math.floor(rect.right - playGroundRect.x),
                    yMax: Math.floor(rect.bottom - playGroundRect.y)
                })
            }
        }
        let canvas = await takeSnap();
        canvas.toBlob(function (blob) {
            setTimeout(resolve, 10, {
                objects,
                image: blob,
            })

        }, 'image/jpeg');



    })
}

document.querySelector('#stopBtn').addEventListener('click', _ => {
    haltImageGeneration = true;
})

document.querySelector(`#genAndDownloadBtn`).addEventListener('click', async (event) => {
    haltImageGeneration = false;
    event.target.disabled = true;
    let stopButton = document.querySelector('#stopBtn');
    stopButton.disabled = false;
    let progress = document.querySelector('progress')
    let zip = new JSZip();
    for (let i = 0; i < config.noOfImage && haltImageGeneration == false; i++) {
        let op = await generateNewImage()
        let imageName = `${i + 1}.jpeg`;
        let xml = generateXML(op.objects, imageName, `images`, config.imageWidth, config.imageHeight);
        zip.file(`${i + 1}.xml`, xml);
        zip.file(imageName, op.image, { binary: true });
        progress.value = i + 1;
    }
    if (!haltImageGeneration) {
        let zipFile = await zip.generateAsync({ type: "blob" });
        saveAs(zipFile, `image-bundle-${config.noOfImage}.zip`);
    }
    stopButton.disabled = true;
    event.target.disabled = false;

})

function isInsidePlayground(currentElementRect) {
    return currentElementRect.right < playgroundRect.right
        && currentElementRect.bottom < playgroundRect.bottom
        && currentElementRect.top > playgroundRect.top
        && currentElementRect.left > playgroundRect.left;
}
