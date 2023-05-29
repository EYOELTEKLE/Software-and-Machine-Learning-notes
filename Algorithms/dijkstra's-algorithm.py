import heapq
graph = {
	"Memphis":[["Nashville",15],["Atlanta",10],["Mobile",7],["New orleans",3]],
    'New orleans':[["Memphis",3],["Mobile",3]],
    "Mobile":[["New orleans",3],["Memphis",7],["Savannah",6],["Atlanta",2]],
    "Savannah":[["Atlanta",1],["Mobile",6]],
    "Atlanta":[["Memphis",10],["Mobile",2],["Savannah",1],["Nashville",2]],
    "Nashville":[["Memphis",15],["Atlanta",2]]
}
start = "Memphis"
cost = {node: float('inf') for node in graph}
cost[start] = 0
heap = []
visited = set()
for node in cost:
    heapq.heappush(heap,[cost[node],node]);
while len(heap) > 0:                               
        distance, curr_node = heapq.heappop(heap)    
        visited.add(curr_node)
        for children,cost_child in graph[curr_node]:  
            if children in visited:
                continue
            if distance + cost_child < cost[children]:
                cost[children] = distance + cost_child
                #heap update
                for i in range(len(heap)):
                    if heap[i][1] == children:
                        heap[i][0] = cost[children]
                heapq.heapify(heap)
print(cost)
"""
# alternative
import heapq
graph = {
	"Memphis":[["Nashville",15],["Atlanta",10],["Mobile",7],["New orleans",3]],
    'New orleans':[["Memphis",3],["Mobile",3]],
    "Mobile":[["New orleans",3],["Memphis",7],["Savannah",6],["Atlanta",2]],
    "Savannah":[["Atlanta",1],["Mobile",6]],
    "Atlanta":[["Memphis",10],["Mobile",2],["Savannah",1],["Nashville",2]],
    "Nashville":[["Memphis",15],["Atlanta",2]]
}
start = "Memphis"
cost = {node: float('inf') for node in graph}
cost[start] = 0
heap = []
visited = set()
for node in cost:
    heapq.heappush(heap,[cost[node],node]);
while len(heap) > 0:                               
        distance, curr_node = heapq.heappop(heap)    
        visited.add(curr_node)
        for children,cost_child in graph[curr_node]:  
            if children in visited:
                continue
            if distance + cost_child < cost[children]:
                cost[children] = distance + cost_child
                heapq.heappush(heap,[cost[children],children])
print(cost)


"""
