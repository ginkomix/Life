class Life extends RenderText(RenderCanvas(RenderSvg(Object))) {
    constructor(x,y,speed) {
        super();
        this.x = x;
        this.y = y;
        this.arrHistory = []
        this.numStep = -1;
        this.speed = speed || 2000;
        this.state = 1;
        this.square = 10;
        this.width = 100;
        this.height = 100;
        this.timer = null;
        this.stateChange= this.stateChange.bind(this); 
    }

    new() {

        Promise.resolve()
            .then(()=> {

           
            this.rand();
            this.drawCanvas();
            this.drawRect();
        })
            .then(()=> {               document.querySelector('#play').addEventListener('click',this.stateChange);
            this.renderText(this.arrHistory[this.numStep]);
            this.start();
        });
    }

    rand() {

        return   Promise.resolve()
            .then(()=> {
            let arr = new Array(this.x).fill(1).map(i => new Array(this.y));
            for(var i = 0;i<this.x;i++) {
                for(var j = 0;j<this.y;j++) {
                    arr[i][j] = 0;
                }
            }
            arr[1][2] = 1;
            arr[1][3] = 1;
            arr[1][4] = 1;
            //	for(var i = 0;i<self.x;i++) {
            //		for(var j = 0;j<self.y;j++) {
            //		self.arr[i][j]	= Math.random() * (1 - 0) + 0;
            //		}
            //	}

            this.pushToMainArr(arr);

        });
    }

    stateChange() {

        if(this.state===0) {
            this.state=1;
            this.start();
           return;

        } 
        if(this.state===1){
            this.state=0;
            this.stop();
           return;
        }

    }

    start() {
        let self = this;
        this.timer =  setTimeout(function tick() {
            if(self.state===1) {
                self.step();
            }

            self.timer = setTimeout(tick, self.speed);
        },  self.speed);
    }

    stop() {
        clearTimeout(this.timer);
    }

    step() {
                Promise.resolve()
                    .then(()=> {
                    this.logics(this.arrHistory[this.numStep]);
                })
                    .then(()=> {
                    this.renderText(this.arrHistory[this.numStep]);
                    this.renderCanvas(this.arrHistory[this.numStep]);
                });
        
    }

    pushToMainArr(arrBuf) {
        return new Promise((resolve)=> {

            this.numStep++;
            let buf = new Array(this.x).fill(1).map(i => new Array(this.y));

            for(var i = 0;i<this.x;i++) {
                for(var j = 0;j<this.y;j++) {
                    buf[i][j] = arrBuf[i][j];
                }

            }

            this.arrHistory.push(buf);
            resolve();
        });
    }



    logicLocal(x,y,arr) {
        var count = 0;

        for(var i = x-1;i<=x+1;i++) {
            for(var j = y-1 ; j<=y+1 ; j++) {

                if(i<0 || j<0 || i>=this.x || j>=this.y) {
                    continue;
                }

                if(i ===x && j ===y) {
                    continue;
                }
                if(arr[i][j]===1) {
                    count++;
                }
            }

        }
        if(count===3) {
            return 1;
        }
        if(count===2) {
            if(arr[x][y]===1){
                return 1
            } else {
                return 0;
            }
        }
        if(count<2 || count>3) {
            return 0;
        }

    }

    logics(arr) {

        var arrBuff = new Array(this.x).fill(1).map(i => new Array(this.y));
        Promise.resolve()
            .then(()=>{
            for(var i = 0;i<arr.length;i++) {
                for(var j = 0;j<arr[0].length;j++) {
                    arrBuff[i][j] = this.logicLocal(i,j,arr);

                }
            }
            return arrBuff;
        })
            .then((arrBuff)=>{
            this.pushToMainArr(arrBuff);

        });
    }
}





var life = new Life(10,10);
life.new();