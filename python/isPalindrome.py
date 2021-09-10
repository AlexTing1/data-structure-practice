import concurrent.futures

def isPalindrome(x):
  xString = str(x)
  start = 0
  end = len(xString) - 1

  while start < end:
    if (xString[start] != xString[end]):
      return False
    start += 1
    end -= 1
  return True

testCases = [131, 187, 112211]

with concurrent.futures.ThreadPoolExecutor() as executor:
  futures = []
  for num in testCases:
    futures.append(executor.submit(isPalindrome, x=num))
  for future in concurrent.futures.as_completed(futures):
    print(future.result())

