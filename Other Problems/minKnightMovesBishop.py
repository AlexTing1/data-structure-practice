from collections import deque

def isOnBishop(x, y, bishopRow, bishopCol):
  return abs(y - bishopCol) == abs(bishopRow - x)

def minKnightMovesBishop(n, rowStart, colStart, rowEnd, colEnd, bishopRow, bishopCol):
  queue = deque([[rowStart, colStart, False]])
  bishopAliveTracker = {}
  bishopAliveTracker[str([rowStart, colStart])] = 1
  count = 0
  bishopDeadTracker = {}

  xDir = [-2, -2, -1, -1, 1, 1, 2, 2]
  yDir = [-1, 1, -2, 2, -2, 2, -1, 1]

  while len(queue) != 0:
    queueLength = len(queue)

    for i in range(queueLength):
      currentPos = queue.popleft()
      if currentPos[0] == rowEnd and currentPos[1] == colEnd:
        return count

      for j in range(len(xDir)):
        newX = currentPos[0] + xDir[j]
        newY = currentPos[1] + yDir[j]
        bishopIsDead = ((newX == bishopRow and newY == bishopCol) or currentPos[2])
        newCoord = [newX, newY, bishopIsDead]

        if not bishopIsDead:
          if str(newCoord) not in bishopAliveTracker and newX < n and newY < n and newX >= 0 and newY >= 0 and not isOnBishop(newX, newY, bishopRow, bishopCol):
            queue.append(newCoord)
            bishopAliveTracker[str(newCoord)] = 1
        else:
          if str(newCoord) not in bishopDeadTracker and newX < n and newY < n and newX >= 0 and newY >= 0:
            queue.append(newCoord)
            bishopDeadTracker[str(newCoord)] = 1
    count += 1
  return -1

print(minKnightMovesBishop(150, 120, 131, 149, 149, 140, 140))