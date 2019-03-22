function canFinish(numCourses, prerequisites) {
  
    let graph = {};
    let possible = true;
    
    for (let i = 0; i < prerequisites.length; i++){
      graph[prerequisites[i][0]] = [];
      graph[prerequisites[i][1]] = [];
    }
    
    for (let i = 0; i < prerequisites.length; i++){
      graph[prerequisites[i][0]].push(prerequisites[i][1])
    }
  
    for (let course in graph) {
      let visited = bFS(course, graph);
      if (visited.has(parseInt(course))){
        possible = false;
        break;
      }
    }
    return possible;
  }
  
  function bFS(startingCourse, graph) {
      let visited = new Set();
      let stack = [ ...graph[startingCourse] ];
      while (stack.length) {
          let course = stack.shift();
          if (visited.has(course)) continue;
          visited.add(course);
          if (course === parseInt(startingCourse)) return visited;
          stack.push(...graph[course]);
      }
      return visited;
  }