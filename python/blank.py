def powerSet(items):
    N = len(items)
    # enumerate the 2**N possible combinations
    for i in range(2**N):
        print(i)
        combo = []
        for j in range(N):
            # test bit jth of integer i
            if (i >> j) % 2 == 1:
                combo.append(items[j])
        yield combo

items = ['pizza', 'burger', 'wine']

answer = powerSet(items)

for n in answer:
    print(n)

print(1%2)
