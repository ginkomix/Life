const RenderSvg = (RenderSvg) => class extends RenderSvg {
    renderSvg(arr) {



    }

    drawRect() {

        let svg = document.querySelector('#svgGame');
        svg.style.width = this.width+'%';
        svg.style.height = this.height+'%';
        for(let i =0;i<this.x;i++) {   
            for(let j =0;j<this.y;j++) {
                let rect = document.createElement('rect');
                rect.className ='col'+ i;
                rect.className +=' row'+ j;
                rect.setAttribute('x',j*this.square);
                rect.setAttribute('y',i*this.square);
                rect.style.width=this.square+'px';
                 rect.style.height=this.square+'px';
                svg.appendChild(rect);
            }


        } 

    }



}