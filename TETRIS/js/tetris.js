import BLOCKS from "./blocks.js"
const playground = document.querySelector(".playground > ul");

const GAME_ROWS = 20;
const GAME_COLS = 10;

let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;



const MovingItem = {
    type: "tree",
    direction: 3,
    top: 0,
    left: 0,
};

init();

// 함수들
function init() {
    tempMovingItem = { ...MovingItem };
    for (let i = 0; i < GAME_ROWS; i++) {
        prependNewLine();
    }
    renderBlocks();
}

function prependNewLine() {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for (let j = 0; j < GAME_COLS; j++) {
        const matrix = document.createElement("li");
        ul.appendChild(matrix); // 수정
    }
    li.appendChild(ul); // 수정
    playground.prepend(li);
}

function renderBlocks(moveType="") {
    const { type, direction, top, left } = tempMovingItem;
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach(moving => {
        moving.classList.remove(type, "moving");
    });
    BLOCKS[type][direction].forEach(block => {
        const x = block[0] + left;
        const y = block[1] + top;
        const target = playground.childNodes[y] ? playground.childNodes[y].childNodes[0].childNodes[x] : null;
        const isAvailable = checkEmpty(target);
        if (isAvailable) {
            target.classList.add(type, "moving");
        } else {
            tempMovingItem = { ...MovingItem }; // 수정
            setTimeout(() => {
                renderBlocks();
                if(moveType==="top"){
                    seizBlock();
                }
            }, 0);
            return true;
        }
    });

    tempMovingItem.left = left; // 수정
    tempMovingItem.top = top; // 수정
    tempMovingItem.direction = direction; // 수정
}
function seizBlock(){
    const movingBlocks = document.querySelectorAll(".moving");
    movingBlocks.forEach(moving => {
        moving.classList.remove("moving");
        moving.classList.add("seized"); // 수정
    })
    generateNewBlock();
}
function generateNewBlock(){
    tempMovingItem.top =0;
    tempMovingItem.left =3;
    tempMovingItem.direction =0;
    renderBlocks();
}
function checkEmpty(target) {
    if (!target || target.classList.contains("seized")) { // 수정
                return false;
    }
    return true;
}

function moveBlock(moveType, amount) {
    tempMovingItem[moveType] += amount;
    renderBlocks();
}

function changeDirection(){
    const direction = tempMovingItem.direction;
    direction ===3 ? tempMovingItem.direction =0 : tempMovingItem.direction +=1;
    renderBlocks();
}

// 이벤트 처리
document.addEventListener("keydown", e => {
    switch (e.keyCode) {
        case 39:
            moveBlock("left", 1);
            break;
        case 37:
            moveBlock("left", -1);
            break;
        case 40:
            moveBlock("top", 1);
            break;
        case 38:
            changeDirection();
            break;
        default:
            break;
    }
});
