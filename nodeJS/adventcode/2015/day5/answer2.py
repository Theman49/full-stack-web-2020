import re

file = open('./puzzle.txt', 'r')
read = file.read()
read2 = read.splitlines()


totalNiceWord = 0
for k in range(len(read2)):
	nice = 0
	same = 0
	print("\n=============", k+1, "===========\n")
	print(read2[k], "\n")
	for i in range(len(read2[k]) - 2):
		# print(i)
		sub1 = ''
		sub1 = read2[k][i] + read2[k][i+1]
		
		for j in range(i+2, len(read2[k])-1):
			sub2 = ''
			sub2 = read2[k][j] + read2[k][j+1]
			print(sub1, sub2, sub1 == sub2)
			if sub1 == sub2:
				nice+=1
				print("---------->",sub1, sub2)
		if read2[k][i] == read2[k][i+2]:
			same += 1
			print("---------->",read2[k][i], read2[k][i+1], read2[k][i+2])

	if nice > 0 and same > 0:
		print("NICE WORD")
		totalNiceWord += 1
	else:
		print("NAUGHTY WORD")

print("total nice word: ", totalNiceWord)
# for k in range(len(read2)):
# 	print("\n=============", k+1 ,"=============\n")
# 	print(read2[k])
	
# 	for i in range(len(read2[k]) - 1):
# 		if read2[k][i] == read2[k][i+1]:
# 			cek2+=1
# 			double += read2[k][i] + read2[k][i+1] + ', '

# 	if cek2 > 0:
# 		print("cek2: nice, --> ", double)
# 		rule["double"] = True
# 	else:
# 		print("cek2: BAD")

# 	criteria = 4;
# 	for item in larangan:
# 		cek3 = re.search(item, read2[k])
# 		if not cek3:
# 			print(item, ": -")
# 			criteria -= 1;
# 		else:
# 			print(item, ": ada")
# 	if criteria == 0:
# 		print("cek3: nice")
# 		rule["safe"] = True
# 	else:
# 		print("cek3: BAD")
# 	nice = 0

# 	print(rule)
# 	for item in rule:
# 		if rule[item] == True:
# 			nice +=1

# 	if nice == 3:
# 		totalNiceWord += 1
# 		print("NICE WORD")
# 	else:
# 		print("xXxX---BAD WORD---XxXx")
	

# print("nice Word: ",totalNiceWord)
