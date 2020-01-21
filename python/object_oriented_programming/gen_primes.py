def genPrimes():
    primes = []   # primes generated so far
    last = 1      # last number tried
    while True:
        last += 1
        for p in primes:
            if last % p == 0:
                break
        else:
            primes.append(last)
            yield last
                
prime = genPrimes()
print (prime)
        
        
print(prime.__next__())
print(prime.__next__())            
print(prime.__next__())
print(prime.__next__())