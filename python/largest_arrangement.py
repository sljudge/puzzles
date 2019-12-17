def largest_arrangement(numbers):
    answer = sorted(numbers, key=lambda x: str(x)[0], reverse=True)
    print(answer)
    for num in range(len(answer)-1, 0, -1):
        print(num, 'num')
        for x in range(num):
            print('x', x)
            try:
                if str(answer[x])[0] == str(answer[x+1])[0] and str(answer[x])[1] < str(answer[x+1])[1]:
                    answer[x], answer[x+1] = answer[x+1], answer[x]
                    print(1)
            except:
                if str(answer[x])[0] == str(answer[x+1])[0] and len(str(answer[x])) == 1 and str(answer[x]) <= str(answer[x+1])[0] and str(answer[x]) < str(answer[x+1])[1]:
                    answer[x], answer[x+1] = answer[x+1], answer[x]
                    print(3)
                elif str(answer[x])[0] == str(answer[x+1])[0] and len(str(answer[x+1])) == 1 and str(answer[x])[0] <= str(answer[x+1])[0] and str(answer[x])[1] < str(answer[x+1]):
                    print(4)
                    answer[x], answer[x+1] = answer[x+1], answer[x]
            print(answer)
    print('***', answer)
    answer = int(''.join(str(x) for x in answer))
    return answer

print(largest_arrangement([73, 79, 7, 6, 356]))


def largest_arrangement(numbers):
    answer = sorted(numbers, key=lambda x: str(x)[0], reverse=True)
    print(answer)
    for num in range(len(answer)-1, 0, -1):
        for x in range(num):
            #check if first numbers are same
            if str(answer[x])[0] == str(answer[x+1])[0]:
                print('x = ', answer[x])
                print('x+1 =', answer[x+1])
                #check if numbers have multiple digits
                if len(str(answer[x])) > 1 and len(str(answer[x+1])) > 1:
                    for i
                    if str(answer[x])[1] < str(answer[x+1])[1]:
                        answer[x], answer[x+1] = answer[x+1], answer[x]
                        print(1, 'SWAP')
                        print(answer)
                elif len(str(answer[x])) == 1 and len(str(answer[x+1])) > 1:
                    if str(answer[x])[0] < str(answer[x+1])[1]:
                        answer[x], answer[x+1] = answer[x+1], answer[x]
                        print(2, 'SWAP')
                        print(answer)
                elif len(str(answer[x])) > 1 and len(str(answer[x+1])) == 1:
                    if str(answer[x])[1] < str(answer[x+1])[0]:
                        answer[x], answer[x+1] = answer[x+1], answer[x]
                        print(3, 'SWAP')
                        print(answer)
            else:
                continue
            print('result: ', answer)
    return int(''.join(str(x) for x in answer))

print(largest_arrangement([64, 29, 5, 9, 982, 3]))
