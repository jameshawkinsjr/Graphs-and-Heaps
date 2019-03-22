function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();
    let stack = [ startingNode ];

    while (stack.length) {

        let node = stack.shift();
        if ( node.val === targetVal ) return node;
        if (visited.has(node.val)) continue;

        visited.add(node.val);

        stack.push(... node.neighbors);
    }
    return null;


}

module.exports = {
    breadthFirstSearch
};