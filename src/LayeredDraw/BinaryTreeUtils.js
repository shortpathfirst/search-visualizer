export class BinaryTreeUtils{
    heap;

    constructor(heap){
        this.heap = heap; 
    }
    
    isEmpty(){
        return this.heap.length === 0;
    }
    size(){
        return  this.heap.length;
    }
    getMin() {
        if(this.heap.length===0) return;
        return this.heap[0];
    }
    rightContour(node){
        let lc = [];

        let current = node;
        lc.push(current);

        while(this.right(current) < this.heap.length){
            current =this.right(current);
            lc.push(current);
        }
        let lastLayer =  Math.floor(Math.log2(current))+1;

        for(let layer=lastLayer; layer <=this.getHeight(); layer++){
            let lastSibling = Math.min(Math.pow(2,layer+1)-2,this.heap.length-1);
            
            let indexLayer = node>0?Math.floor(Math.log2(node)):1;
            let isRightSide = (lastSibling+1).toString(2)[indexLayer] === "1";
            if(lastSibling !== lc[lc.length-1] && isRightSide){
                lc.push(lastSibling);
            }
        }
        return lc;
    }   

    leftContour(node){
        let lc = [];

        let current = node;
        lc.push(current);
        
        while(this.left(current) < this.heap.length){
            current =this.left(current);
            lc.push(current);
        }
        let lastLayer =  Math.floor(Math.log2(current))+1;
        
        for(let layer=lastLayer; layer < this.getHeight(); layer++){
            let lastSibling = Math.min(Math.pow(2,layer+1)-2,this.heap.length-1)
            let indexLayer = node>0?Math.floor(Math.log2(node)):1;
            let isLeftSide = (lastSibling+1).toString(2)[indexLayer] === "0";
            
            if(lastSibling !== lc[lc.length-1]&& isLeftSide ){
                lc.push(lastSibling);
            }
        }
        return lc;
    }
    getHeight(){
        if(!this.isEmpty())
            return Math.floor(Math.log2(this.heap.length));
    }
    parent(i){
        return Math.floor((i-1)/2);
    }
    left(i){
        return Math.floor(2*i+1);
    }
    right(i){
        return Math.floor(2*i+2);
    }

}
