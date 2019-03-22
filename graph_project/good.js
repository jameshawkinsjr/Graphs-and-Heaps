function canFinish(numCourses, prerequisites) {
  
    let graph = {};
    for (let i = 0; i < prerequisites.length; i++){
      graph[prerequisites[i][0]] = [];
      graph[prerequisites[i][1]] = [];
    }
    
    for (let i = 0; i < prerequisites.length; i++){
      graph[prerequisites[i][0]].push(prerequisites[i][1]);
    }
  
    for (let course in graph) {
      let visited = breadthFirstSearch(parseInt(course), graph);
      if (visited.has(parseInt(course))) return false;
    }
    return true;
  }
  
  function breadthFirstSearch(startingCourse, graph) {
      let visited = new Set();
      let stack = [ ...graph[startingCourse] ];
      while (stack.length) {
          let course = stack.shift();
          if (visited.has(course)) continue;
          visited.add(course);
          if (startingCourse === course) return visited;
          stack.push(...graph[course]);
      }
      return visited;
  }