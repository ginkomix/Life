class Life extends RenderText(Object) {
    constructor(x,y) {
        super();
        this.x = x;
        this.y = y;
        this.arrHistory = []
        this.arr = new Array(x).fill(1).map(i => new Array(y)) ;
    }



    rand(arr) {
        var self = this;
        return new Promise(function(resolve) {
            for(var i = 0;i<self.x;i++) {
                for(var j = 0;j<self.y;j++) {
                    self.arr[i][j] = 0;
                }
            }
            self.arr[1][2] = 1;
            self.arr[1][3] = 1;
            self.arr[1][4] = 1;
            //	for(var i = 0;i<self.x;i++) {
            //		for(var j = 0;j<self.y;j++) {
            //		self.arr[i][j]	= Math.random() * (1 - 0) + 0;
            //		}
            //	}
            resolve();
        });
    }

    start() {

        Promise.resolve()
            .then(()=> {
            this.rand();
        })
            .then(()=> {
            this.renderText(this.arr);
        })
    }

     pushToMainArr(arr,mainArr)() {
       
            .then(()=>{
            for(var i = 0;i<this.x;i++) {
                for(var j = 0;j<this.y;j++) {
                    this.arrBuff[i][j] =this.arr[i][j];
                }

            }
 
    }



    logicLocal(x,y,arr,arrBuf) {
        var count = 0;

        for(var i = x-1;i<x+1;i++) {
            if(i<0 && i>this.x) {
                continue;
            }
            for(var j = y-1;j<y+1;j++) {
                if(j<0 && j>this.y) {
                    continue;
                }
                if(i ===x && j ===y) {
                    continue;
                }
                if(arr[i][j]===0) {
                    conut++;
                }
            }
            if(conut===3) {
                arrBuff[x][y]=1;
            }
            if(conut<2 && count>3) {
                arrBuff[x][y]=0;
            }
        }
        return arrBuf;
    }

    logics(arr) {
        Promise.resolve()
            .then(()=>{
            var arrBuff = new Array(x).fill(1).map(i => new Array(y)) ;	
            for(var i = 0;i<arr.length;i++) {
                for(var j = 0;j<arr[0].length;j++) {
                    arrBuff = this.logicLocal(x,y,arr,arrBuf);
                }
            }
        })
        .then(()=>{
            
        });
    }
}





var life = new Life(10,10);
life.start();