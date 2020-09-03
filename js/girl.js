let girl = function(game, x, y){
    this.game = game;
    this.x    = x;
    this.y    = y;
    let self  = this;

    this.draw = function(){
        // Ve con ga ra

        this.game.context.drawImage(
            this.game.resource.girl.img,
            x,
            y
        );
    }

};