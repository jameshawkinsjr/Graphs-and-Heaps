function maxValue(node, visited=new Set()) {

    let maxValue = node.val;
    let stack = [ node ];

    while (stack.length) {

        let currNode = stack.pop();

        if (visited.has(currNode)) continue;
        if (maxValue < currNode.val) maxValue = currNode.val;

        visited.add(currNode);

        stack.push(...currNode.neighbors);
    }
    return maxValue;

}

module.exports = {
    maxValue
};