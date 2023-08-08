var solved_sudoku = [[],[],[],[],[],[],[],[],[]];

function createSolvedPuzle(){
    
    solved_sudoku = [[0,0,0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0,0,0]];

    const columnCheck = (row,column,number)=>{
        for(dcolumn=0;dcolumn<solved_sudoku[0].length;dcolumn++){
            if(number==solved_sudoku[row][dcolumn] && dcolumn != column){
                colCheck = true;
                c = dcolumn;
                return c;
                
            }
        }
    };

    const roCheck = (row,column,number)=>{
        for(drow=0;drow<solved_sudoku.length;drow++){
            if(number==solved_sudoku[drow][column] && drow != row){
                rowCheck = true;
                break;
            }
        }
    };

    const squCheck = (row,column,number)=>{
        l1:
        for(drow = parseInt(row/3)*3;drow<parseInt(row/3)*3+3;drow++){
            for(dcolumn = parseInt(column/3)*3;dcolumn<parseInt(column/3)*3+3;dcolumn++){
                if(number==solved_sudoku[drow][dcolumn] && drow != row && dcolumn != column){
                    squareCheck=true;
                    break l1;
                }   
            }
        }
    };
  
    for(var column = 0; column<solved_sudoku[0].length;column++){
        for(var row = 0; row<solved_sudoku.length;row++){
            var check = true;
            while(check){
                check = false;
                var number = parseInt(Math.random()*9+1);

                var c;
                var colCheck = false;
                columnCheck(row,column,number);
                
                var r;
                var rowCheck = false;
                roCheck(row,column,number);

                var sq;
                var squareCheck = false;
                squCheck(row,column,number);

                if(colCheck == true && rowCheck == false && squareCheck == false && column == 5 && c < parseInt(column/3)*3){
                    debugger
                    for(zrow = parseInt(row/3)*3; zrow < parseInt(row/3)*3+3;zrow++){
                        for(zcolumn = parseInt(c/3)*3 ; zcolumn < parseInt(c/3)*3+3;zcolumn++){
                            solved_sudoku[zrow][zcolumn] = 0;
                        }
                    }
                    debugger
                    for(zrow = row; zrow >-1;zrow--){
                        solved_sudoku[zrow][column]=0;
                    }
                    debugger
                    for(zcolumn = parseInt(c/3)*3 ; zcolumn < parseInt(c/3)*3+3;zcolumn++){
                        for(zrow = parseInt(row/3)*3; zrow < parseInt(row/3)*3+3;zrow++){
                            var check = true;
                            while(check){
                                check = false;
                                var number = parseInt(Math.random()*9+1);

                                var colCheck = false;
                                for(dcolumn=0;dcolumn<solved_sudoku[0].length;dcolumn++){
                                    if(number==solved_sudoku[zrow][dcolumn] && dcolumn != zcolumn){
                                        colCheck = true;
                                        break;
                                    }
                                }
                                
                                var rowCheck = false;
                                roCheck(zrow,zcolumn,number);

                                var squareCheck = false;
                                squCheck(zrow,zcolumn,number);

                                if(colCheck == true && rowCheck == false){
                                    for(mrow = parseInt(row/3)*3+2;mrow > -1 ;mrow--){
                                        solved_sudoku[mrow][zcolumn]=0;
                                    }
                                    zrow = 0;
                                    check = true;
                                    continue
                                }
                        
                                if(colCheck == false && rowCheck == false && squareCheck == false){
                                    check = false;
                                }
                                else{
                                    check = true;
                                } 
                            }
                            solved_sudoku[zrow][zcolumn]=number
                        }
                    }
                    debugger
                    row = 0;
                    check = true;
                    continue;
                }
               
                if(colCheck == false && rowCheck == true){
                    for(zrow = 8;zrow > -1 ;zrow--){
                        solved_sudoku[zrow][column]=0;
                    }
                    row = 0;
                    check = true;
                    continue
                }
           
                if(colCheck == false && rowCheck == false && squareCheck == false){
                    check = false;
                }
                else{
                    check = true;
                }

            }
            solved_sudoku[row][column] = number;
        }
    }      
}

var count = 0;
while(true){
    console.time('Execution Time');
    createSolvedPuzle();
    console.log(count);
    count++;
    console.timeEnd('Execution Time');
  
}
/*createSolvedPuzle();
console.log(solved_sudoku);*/

