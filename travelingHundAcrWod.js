
var winnie = {character:"Winnie The Pooh"};
var tigger = {character:"Tigger"};
var christopher={character:"Christopher Robin"}
var owl={character:"Owl"}
var piglet={character:"Piglet"}
var gopher= {character:"Gopher"};
var bees= {character:"Bees"};
var rabbit={character:"Rabbit"};
var kanga={character:"Kanga"};
var eeyore={character:"Eeyore"};
var heffalumps={character:"Heffalumps"}

winnie.south=tigger;
winnie.north=christopher;
winnie.west=piglet;
winnie.east=bees;

tigger.north=winnie;

bees.north=rabbit;
bees.west=winnie;

gopher.west=rabbit;

rabbit.south=bees;
rabbit.east=gopher;
rabbit.west=christopher;

piglet.north=owl;
piglet.east=winnie;

owl.south=piglet;
owl.east=christopher;

christopher.south=winnie;
christopher.east=rabbit;
christopher.west=owl;
christopher.north=kanga;

kanga.south=christopher;
kanga.north=eeyore;

eeyore.south=kanga;
eeyore.east=heffalumps;

heffalumps.west=eeyore;

var player={location:tigger}
function move(str){
    if(str=="north")
    player.location=player.location.north
    else if(str=="east")
    player.location=player.location.east
    else if(str=="west")
    player.location=player.location.west
    else if(str=="south")
    player.location=player.location.south
    else{
        console.log("Not a Valid direction")
        return false;
    } 

    return "You are now at "+player.location.character+" House"
}
