# Month	Balance	Minimum Payment	    Unpaid Balance	            Interest
# 0	5000.00	    100 (= 5000 * 0.02)	4900 (= 5000 - 100)	        73.50 (= 0.18/12.0 * 4900)
# 1	4973.50     (= 4900 + 73.50)	99.47 (= 4973.50 * 0.02)	4874.03 (= 4973.50 - 99.47)	73.11 (= 0.18/12.0 * 4874.03)
# 2	4947.14     (= 4874.03 + 73.11)	98.94 (= 4947.14 * 0.02)	4848.20 (= 4947.14 - 98.94)	72.72 (= 0.18/12.0 * 4848.20)

# balance = 5000
# minPayment = 0.02
# unpaidBalance = balance - minPayment
# interest = 0.18/12 * unpaidBalance
# updatedBalance = unpaidBalance + interest

# balance = 42; annualInterestRate = 0.2; monthlyPaymentRate = 0.04


month = 0
balance = 5000
newBalance = balance
monthlyPaymentRate = 0.02
annualInterestRate = 0.18

while month < 12:
    minPayBal = newBalance - (newBalance * monthlyPaymentRate)
    newBalance = round((minPayBal + (annualInterestRate/12 * minPayBal)), 2)
    # print ('Month ' + str(month) + ' remaining balance is: ' + str(newBalance))
    month += 1

print('Remaining balance: ' + str(newBalance))