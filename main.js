//https://abagames.github.io/crisp-game-lib/ref_document/modules.html

title = "Shooter";

description = `
clear the screen of enemies
& teleport away

Controls:

left side of screen:
- move

right side of screen:
- move and aim


`;
var SIZE = 15;
const G = { //constant global variables
    //aspect ratio 9 : 16
	WIDTH: 9 * SIZE,
	HEIGHT: 16 * SIZE,
  
};

const S = {
  
};

options = {
    viewSize: {x: G.WIDTH, y: G.HEIGHT},
    theme: "shape"
  };


class Player{
  constructor(){
    this.position = vec(G.WIDTH/2,G.HEIGHT/2)
    this.rotation = 0

  }
}

player_instance = new Player()

//input state management
last_input_position = vec(0,0)
allow_player_rotation = false


function start(){
  player_instance = new Player()
}

function update()
{
  if (!ticks){
    start()
  }
  


  renderPlayer()
}


function renderPlayer(){
  player_instance.rotation += 1
  arc(player_instance.position.x,player_instance.position.y,5,2)
  line(player_instance.position.x,player_instance.position.y)
  
}


addEventListener("load", onLoad);


// (l: black, r: red, g: green, b: blue
//  y: yellow, p: purple, c: cyan
//  L: light_black, R: light_red, G: light_green, B: light_blue
//  Y: light_yellow, P: light_purple, C: light_cyan)
characters = [//a
`
  Y Y 
 yyLy
lylyyL
 yyLy
`

,
`
   yyY
  yyY
 yyY
  yyY
   yY
  yY  
`,
`
 yY
  LL
 Llll
 llll
  ll
`,
`
L L L
lllll
 LLL
  l
 LLL
 lll
`
,
`
  Bb
b  Bb
 b  Bb
b  Bb
  Bb
`,
`
 r
rrr
LYY L
LLL l
BBBBl
BBB 
`
,//G
`
 yY
  LL
 Llll
 llll
  ll
`
,
`
 BB
BBBB
YlYl
bbb  L
llllL
b b
` 
,
`
gG l l 
Gg GGG
  GGr
 GGG
GG  g
G g
`,
`
Y
 LL  l
LLLLLl
LllLLl
l  l l 
 ll
`,
`
     r
 g lg
G  gg
g g 
G  G 
 gGg
`
    ,
    ];