const RenderText = (RenderText) =>class extends RenderText {
    renderText(arr) {
        
        for(var i = 0;i<this.x;i++) {
            for(var j = 0;j<this.y;j++) {
                let field = document.querySelector('.col'+i+'.row'+j);
                 field.innerHTML = 'X';
               if(arr[i][j]===0) {
                   continue;
               }
                
               field.innerHTML = 'O';
            }
        }
    }

    drawTable() {

        let game = document.querySelector('#textGame');

        let table = document.createElement('table');
        table.id = 'tableLife';
        for(let i =0;i<this.x;i++) {
            let tr = document.createElement('tr');
            for(let j =0;j<this.y;j++) {
                let td = document.createElement('td');
                td.className ='col'+ i;
                td.className +=' row'+ j;
                tr.appendChild(td);
            }

            table.appendChild(tr);
        } 
        game.appendChild(table);

    }


}