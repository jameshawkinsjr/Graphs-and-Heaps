function numRegions(graph) {

    let visited = new Set();
    let totalRegions = 0;

    for (let node in graph) {
        totalRegions += _numRegionsRecur(node, graph, visited);
    }

    return totalRegions;
}

function _numRegionsRecur(node, graph, visited){

    
    let totalRegions = 0;
    
    graph[node].forEach( neighbor => {
        visited.add(neighbor);
    });
    if (visited.has(node)) return 0;
    visited.add(node);

    totalRegions++;
    return totalRegions;
}


module.exports = {
    numRegions
};