// Tutorial link -
const graph = {
  a: ['b', 'c', 'f'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

const depthFirstPrint = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
};

const depthFirstPrintRecurssive = (graph, source) => {
  console.log(source);
  for (let neighbour of graph[source]) {
    depthFirstPrintRecurssive(graph, neighbour);
  }
};

const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
};

const hasPathDFS = (graph, source, destination) => {
  if (source == destination) return true;
  for (let neighbour of graph[source]) {
    if (hasPathDFS(graph, neighbour, destination)) {
      return true;
    }
  }
  return false;
};

const hasPathBFS = (graph, source, destination) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === destination) return true;
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
  return false;
};

// const shortestPath = (graph, source, destination) => {
//   var path = 0;
//   if (source == destination) return path;
//   for (let neighbour of graph[source]) {
//     if (hasPath(graph, neighbour, destination) >= 0) {
//       return path + 1;
//     }
//   }
//   return path;
// };

// Works in all cases
// depthFirstPrint(graph, "a");

// works only if there are no cyclic loops
// depthFirstPrintRecurssive(graph, "a");

// works in all cases
// breadthFirstPrint(graph, "a");

// hasPath
// console.log(hasPathDFS(graph, "f", "a"));

// hasPathBFS
// console.log(hasPathBFS(graph, "a", "f"));

//---------------------------Undirected graph-------------------------------------//

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  console.log(hasPath(graph, nodeA, nodeB, new Set()));
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const hasPath = (graph, source, destination, visited) => {
  if (source == destination) return true;
  if (visited.has(source)) return false;

  visited.add(source);

  for (let neighbour of graph[source]) {
    if (hasPath(graph, neighbour, destination, visited)) {
      return true;
    }
  }
  return false;
};

// undirectedPath(edges, "j", "o");

//---------------------------Connected Components Count graph-------------------------------------//
const graph2 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visited)) {
      count++;
    }
  }
  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));

  for (let neighbour of graph[current]) {
    explore(graph, neighbour, visited);
  }

  return true;
};

// console.log(connectedComponentsCount(graph2));

//---------------------------Largest Components Count graph-------------------------------------//
const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;
  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > longest) longest = size;
  }
  return longest;
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(String(node))) return 0;

  visited.add(String(node));
  let size = 1;

  for (let neighbour of graph[node]) {
    size += exploreSize(graph, neighbour, visited);
  }

  return size;
};

// console.log(largestComponent(graph2));

//---------------------------Shortest Path graph-------------------------------------//
const edges2 = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const queue = [[nodeA, 0]];
  const visited = new Set([nodeA]);

  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }

  return -1;
};

console.log(shortestPath(edges2, 'w', 'z'));
