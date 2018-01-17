const RenderText = (RenderText) =>class extends RenderText {
     renderText(arr) {
		var pre =  document.querySelector('#pre');
		for(var i = 0;i<this.x;i++) {
			for(var j = 0;j<this.y;j++) {
				pre.innerHTML +=arr[i][j];
			}
			pre.innerHTML+='\n';
		}
	}
    
    
    
}