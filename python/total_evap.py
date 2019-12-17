def evaporator(content, evap_per_day, threshold):
    day = 0
    end = threshold/100 * content
    while content > end:
        content = content - content*evap_per_day/100
        day += 1
    return day

print(evaporator(20, 10, 40))
