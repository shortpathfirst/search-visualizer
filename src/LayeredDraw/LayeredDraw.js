/**
 * 
 * LAYERED TREE DRAW
 * 
 */

export function LayeredTreeDraw(tree,root,layer,positions){

    if(tree.right(root) >= tree.size() &&  tree.left(root) >= tree.size()){
        positions[root] = {x:50,y:layer*50};
    }
    else{
        LayeredTreeDraw(tree,tree.left(root),layer+1,positions);
        LayeredTreeDraw(tree,tree.right(root),layer+1,positions);
        
        let contDx = tree.leftContour(tree.right(root));  
        let contSx = tree.rightContour(tree.left(root));  


        let min = contSx.length < contDx.length ? contSx:contDx;

        let delta = 0;

        for(let i=0; i<min.length; i++){

            let diff = (positions[contDx[i]].x - positions[contSx[i]].x);

            if(diff <= 0 && (-diff +2*50) > delta){ 
                delta = positions[contSx[i]].x +60; 
            }
        } 
        //left
        if(tree.left(root) < tree.size())
        positions[tree.left(root)].x =  positions[contSx[0]].x;

        // right
        if(tree.right(root) < tree.size()){

            var nodes =[];
            nodes.push(tree.right(root));

            while(nodes.length !==0){
                var curr = nodes.pop();
                
                if ( positions[curr] != null){
                    positions[curr].x +=delta;
                if(tree.right(curr) < tree.size())
                        nodes.push(tree.right(curr));
                if(tree.left(curr) < tree.size())
                        nodes.push(tree.left(curr));
                }
            }
        }
        //center

        let rootXPos =  positions[tree.left(root)].x + (positions[contDx[0]].x - positions[tree.left(root)].x) /2;
        let rootYPos = (layer)*50;
        positions[root] = {x:rootXPos,y:rootYPos};  
    }
}