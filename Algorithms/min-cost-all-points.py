"""
"""
class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        graph = self.construct(points)
        res = 0
        visited = set()
        minHeap = [[0,0]]
        length = len(points)

        if len(points) == 1:
            return 0    
        while len(visited) < length:
            cost, node = heapq.heappop(minHeap)
            if node in visited:
                continue
            res += cost
            visited.add(node)
            for neigh, distance in graph[node]:
                if neigh not in visited:
                    heapq.heappush(minHeap,[distance, neigh])
        return res
    def construct(self, points):
        graph = {}
        for i in range(len(points)):
            for j in range(i + 1, len(points)):
                if i not in graph:
                    graph[i] = []
                x0, y0 = points[i]
                x1, y1 = points[j]
                x = abs(x1 - x0)
                y = abs(y1 - y0)
                d = x + y
                graph[i].append([j, d])
                if j not in graph:
                    graph[j] = []
                graph[j].append([i, d])
        return graph
