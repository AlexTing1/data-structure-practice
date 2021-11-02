from collections import deque

def mod_knight(n, rowStart, colStart, rowEnd, colEnd):
  queue = deque([[rowStart, colStart]])
  count = 0
  tracker = {}
  tracker[str([rowStart, rowEnd])] = 1

  xDir = [-2, -2, -1, -1, 1, 1, 2, 2]
  yDir = [-1, 1, 2, -2, 2, -2, 1, -1]

  while (len(queue) != 0):
    queueLength = len(queue)

    for i in range(queueLength):
      current = queue.popleft()
      for j in range(len(xDir)):
        if rowEnd == current[0] and colEnd == current[1]:
          return count

        newX = current[0] + xDir[j]
        newY = current[1] + yDir[j]
        newCoord = [newX, newY]

        if str(newCoord) not in tracker and newX < n and newY < n:
          queue.append(newCoord)
          tracker[str(newCoord)] = 1
    count = count + 1
  return -1

print(mod_knight(150, 0, 0, 149, 149))
