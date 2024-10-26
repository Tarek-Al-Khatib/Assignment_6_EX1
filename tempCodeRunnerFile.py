rows = int(input("Enter the number of rows: "))

for i in range(rows):
  print(" " * (rows - i) + "*" * (2 * i - 1))
for i in range(rows - 2, 0, -1):
  print(" " * (rows - i) + "*" * (2 * i - 1))