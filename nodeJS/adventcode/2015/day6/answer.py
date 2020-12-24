file = open("./instructions.txt", 'r')
reading = file.read()
read = reading.splitlines()

field = []
for i in range(1000):
	row = []
	for j in range(1000):
		row.append(False)
	field.append(row)
# print(field)
print("done")


for k in range(len(read)):
	print("========", k+1, "===========")
	x = []
	y = []
	x1 = 0
	x2 = 0
	y1 = 0
	y2 = 0
	if read[k][5:7] == 'on':
		print("<ON>")
		x = read[k].split("turn on ")
		y = x[1].split(",")

		print(y)
		x1 = int(y[0])
		y1 = int(y[1])
		x2 = int(y[2])
		y2 = int(y[3])


		for i in range(y2, y1-1, -1):
			for j in range(x1, x2+1, 1):
				field[j][i] = True

	elif read[k][5:7] == 'of':
		print("<OFF>")
		x = read[k].split("turn off ")
		y = x[1].split(",")

		print(y)
		x1 = int(y[0])
		y1 = int(y[1])
		x2 = int(y[2])
		y2 = int(y[3])

		for i in range(y2, y1-1, -1):
			for j in range(x1, x2+1, 1):
				field[j][i] = False


	else:
		print("<TOGGLE>")
		x = read[k].split("toggle ")
		y = x[1].split(",")

		print(y)
		x1 = int(y[0])
		y1 = int(y[1])
		x2 = int(y[2])
		y2 = int(y[3])

		for i in range(y2, y1-1, -1):
			for j in range(x1, x2+1, 1):
				if field[j][i] == False:
					field[j][i] = True
				else:
					field[j][i] = False


# field[9][9] = True
# field[9][9] = False
n = 0
for item in field:
	for child in item:
		if child == True:
			n+=1
print("lampu hidup",n)