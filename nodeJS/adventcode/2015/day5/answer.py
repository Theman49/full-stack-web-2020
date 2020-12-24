import re


# print(vowels['a'])

larangan = ['ab', 'cd', 'pq', 'xy']



file = open('./puzzle.txt', 'r')
read = file.read()
read2 = read.splitlines()
totalNiceWord = 0
# print(read2[0])

for k in range(len(read2)):
	print("\n=============", k+1 ,"=============\n")
	print(read2[k])
	vowels = {
		'a':False,
		'i':False,
		'u':False,
		'e':False,
		'o':False
	}

	rule = {
		'vowels': False,
		'double': False,
		'safe': False
	}

	cek = 0;
	jumlahVokal = 0
	double =''
	for letter in read2[k]:
		if letter == 'a':
			vowels['a'] = True
			jumlahVokal+=1
		if letter == 'i':
			vowels['i'] = True
			jumlahVokal+=1
		if letter == 'u':
			vowels['u'] = True
			jumlahVokal+=1
		if letter == 'e':
			vowels['e'] = True
			jumlahVokal+=1
		if letter == 'o':
			vowels['o'] = True
			jumlahVokal+=1

	for item in vowels:
		if vowels[item] == True:
			cek+=1
	print(vowels, "\nvowels: ", cek, "\njumlah huruf: ", jumlahVokal)

	if jumlahVokal >= 3:
		print("cek1: nice")
		rule["vowels"] = True
	else:
		print("cek1: BAD")

	cek2 = 0
	for i in range(len(read2[k]) - 1):
		if read2[k][i] == read2[k][i+1]:
			cek2+=1
			double += read2[k][i] + read2[k][i+1] + ', '

	if cek2 > 0:
		print("cek2: nice, --> ", double)
		rule["double"] = True
	else:
		print("cek2: BAD")

	criteria = 4;
	for item in larangan:
		cek3 = re.search(item, read2[k])
		if not cek3:
			print(item, ": -")
			criteria -= 1;
		else:
			print(item, ": ada")
	if criteria == 0:
		print("cek3: nice")
		rule["safe"] = True
	else:
		print("cek3: BAD")
	nice = 0

	print(rule)
	for item in rule:
		if rule[item] == True:
			nice +=1

	if nice == 3:
		totalNiceWord += 1
		print("NICE WORD")
	else:
		print("xXxX---BAD WORD---XxXx")
	

print("nice Word: ",totalNiceWord)
