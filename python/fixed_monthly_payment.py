# Month	Balance	Minimum Payment	    Unpaid Balance	            Interest
# 0	5000.00	    100 (= 5000 * 0.02)	4900 (= 5000 - 100)	        73.50 (= 0.18/12.0 * 4900)
# 1	4973.50     (= 4900 + 73.50)	99.47 (= 4973.50 * 0.02)	4874.03 (= 4973.50 - 99.47)	73.11 (= 0.18/12.0 * 4874.03)
# 2	4947.14     (= 4874.03 + 73.11)	98.94 (= 4947.14 * 0.02)	4848.20 (= 4947.14 - 98.94)	72.72 (= 0.18/12.0 * 4848.20)

# balance = 5000
# minPayment = 0.02
# unpaidBalance = balance - minPayment
# interest = 0.18/12 * unpaidBalance
# updatedBalance = unpaidBalance + interest

balance = 3926
monthBalance = balance
annualInterestRate = 0.2
monthInterest = 0
monthPayment = 10
month = 0
epsilon = 0.01

# low = balance/12
# high = (balance * (1 + monthlyInt)**12)/12
# guess = (low + high) / 2

while month < 12:
    monthInterest = (monthBalance - monthPayment) * (annualInterestRate/12)
    print ('Month Interest: ' + str(monthInterest))
    monthBalance = monthBalance - monthPayment + monthInterest
    print ('Month Balance: ' + str(monthBalance))
    month += 1
    print ('Month Payment: ' + str(monthPayment))
    print ('Month: ' + str(month) + '\n')
    if month == 12 and (monthBalance - monthPayment) > epsilon:
        monthPayment += 10
        month = 0
        monthBalance = balance
        monthInterest = 0
    elif month == 12:
        print ('Lowest monthly payment is: ' + str(monthPayment))


