def genSubsets(L):
    if len(L) == 0:
        return [[]] #list of empty list
    smaller = genSubsets(L[:-1]) #all subsets without last element
    print ('SMALLER: ', smaller)
    extra = L[-1:] #create a list of just last element
    print ('EXTRA: ', extra)
    new = []
    for small in smaller:
        new.append(small + extra)#for all smaller solutions, add one with the last element
        print ('NEW: ', new)
    return smaller + new #combine those with last element and those without

print(genSubsets([1,2,3,4]))