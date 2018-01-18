const RenderSvg = (RenderSvg) => class extends RenderSvg {
    renderSvg(arr) {



    }

    drawRect() {

        let svg = document.querySelector('#svgGame'),
            svgns = "http://www.w3.org/2000/svg";
        svg.style.width = this.width+'%';
        svg.style.height = this.height+'%';
        for(let i =0;i<this.x;i++) {   
            for(let j =0;j<this.y;j++) {
                let rect = document.createElementNS(svgns,'rect');
                rect.setAttribute('class','col'+ i); 
                rect.setAttribute('class',' row'+ j);
                rect.setAttribute('x',j*this.square);
                rect.setAttribute('y',i*this.square);
                rect.setAttribute('width',this.square);
                rect.setAttribute('height',this.square);
                svg.appendChild(rect);
            }


        } 

    }



}