class Form{
    constructor(){

    }
    display(){
        var title= createElement('h2');
        title.html("car racing game");
        title.position(130,10);
        var input = createInput('NAME:')
        input.position(200,200);
        var button = createButton('PLAY');
        button.position(250,250);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount = playerCount+1
            player.updateCount(playerCount);
            player.update(name);
        })
    }
}