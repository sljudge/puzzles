function populationGrowth(p0, percent, aug, p){
    //p0 (population after year 1), percent (% increase per year), aug (inhabitants coming or leaving each year), p (population to surpass)
    population = p0
    year = 0
    while(population <= p){
        population = population*(1+percent/100)+aug
        year += 1
        console.log('This is year ' + year + ' and the population is ' + population)
    }
    return year
}

populationGrowth(1500000, 2.5, 10000, 2000000)
// console.log(1500*(1+5/100)+100)