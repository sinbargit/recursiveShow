
var data = {};
var nodes = [];
var edges = []
var generateParenthesis = function(n) {
    var left = 0;
    var right = 0;
    var arr = [];
    var cur = '';
    var id = Math.random()+'';
    function generate(left,cur,right,id){

        nodes.push({
            id:id,
            label:`${left}--${right}--${cur}`
        });
        if(cur.length==n*2)
        {
            arr.push(cur)

            return;
        }
        if(left<n)
        {
         let  newId = Math.random()+'';
            edges.push({
                source: id,
                target: newId,
                style: {
                    endArrow: true
                }
            })
            generate(++left,cur+='(',right,newId)
        }
        if(right<left)
        {

            let  newId = Math.random()+'';
            edges.push({
                source: id,
                target: newId,
                style: {
                    endArrow: true
                }
            })
            generate(left,cur+=')',++right,newId)
        }
    }
    generate(0,'',0,id)
    return arr;
};
generateParenthesis(3)
nodes.forEach((ele,i)=>{
    ele.label += `~${i}`
})
data.nodes = nodes;
data.edges = edges;
const graph = new G6.Graph({
    container: 'mountNode',  // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
    width: 1800,              // Number，必须，图的宽度
    height:1000,
    modes: {
        default: ["drag-canvas", {
            type: "drag-node",
            delegate: false
        }, {
            type: "zoom-canvas",
            sensitivity: 0.5
        }]
    }// Number，必须，图的高度
});
graph.data(data);
graph.render();
