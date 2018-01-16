class Life {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.arr = new Array(x).fill(1).map(i => new Array(y)) ;
		this.arrBuff = new Array(x).fill(1).map(i => new Array(y)) ; 
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
			//		resolve();
		});
	}

	start() {
		var self = this;
		Promise.resolve()
			.then(function() {
			self.rand();
		})
			.then(function() {
			self.renderText(self.arr);
		})
	}

	createBuff() {
		return new Promise(function(resolve) {
			for(var i = 0;i<this.x;i++) {
				for(var j = 0;j<this.y;j++) {
					this.arrBuff[i][j] =this.arr[i][j];
				}

			}
			resolve();
		});
	}

	renderText(arr) {
		var pre =  document.querySelector('#pre');
		for(var i = 0;i<this.x;i++) {
			for(var j = 0;j<this.y;j++) {
				pre.innerHTML +=arr[i][j];
			}
			pre.innerHTML+='\n';
		}
	}

	logicLocal(x,y,arr) {
		var count = 0;
		for(var i = x-1;i<x+1;i++) {
			if(i<0 && i>) {
			   continue;
			   }
			   for(var j = y-1;j<y+1;j-1++) {
				if(j<0) {
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
	}

	logics(arr) {
		Promise.resolve()
			.then(function() {
			this.createBuff();
		})
			.then(function() {
			for(var i = 0;i<arr.length;i++) {
				for(var j = 0;j<arr[0].length;j++) {
					this.logicLocal(x,y,arr);
				}
			}
		});


	}





	var life = new Life(10,10);
life.start();