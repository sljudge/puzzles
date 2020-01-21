def payment (balance, annualInt):
    # Payment vars
    month = 1
    interest = 0
    monthlyInt = annualInt / 12.0
    unpaidBalance = 0
    newBalance = balance
    # Bisection vars
    low = balance/12
    high = (balance * (1 + monthlyInt)**12)/12
    guess = (low + high) / 2
    epsilon = 0.01
    
    while month < 13:
        if month == 12 and round((newBalance - guess),2) < epsilon:
        # Payments are too big
            # Change guess
            high = guess
            guess = (low + high) / 2
            # Reset vars
            month = 1
            interest = 0
            unpaidBalance = 0
            newBalance = balance
        elif month == 12 and round((newBalance - guess),2) > epsilon:
        # Payments are not big enough
            # change guess
            low = guess
            guess = (low + high) / 2
            # Reset vars
            month = 1
            interest = 0
            unpaidBalance = 0
            newBalance = balance
        else:
        # Calculate Yearly Payments
            unpaidBalance = newBalance - guess
            interest = monthlyInt * unpaidBalance
            newBalance = unpaidBalance + interest
            month += 1
            
            
        
payment (999999, 0.18)
        
    



