/*
	Do you know the cheapest way to San Jose?
	
	I'm starting my own cut-rate airline.  I think it's totally going to work out!
	
	The only problem is that there are some...odd pricing fluctations for my customers to work out.
	Depending on the direction and the port pair, the price of a flight can vary wildly.

	You find yourself in NYC but need to get to San Jose as CHEAPLY as possible.

	Assuming that NYC is the root node of our tree and that San Jose is one of the leaves,
	write a function to return the cheapest cost of getting there.

  Example: 

	                                    NYC
                            /(13)      | (10)         \ (5)
                          SFO         SJC             LAX
                     (3)  /  \ (2)               (4) /   \ (3)
                        SJC  LAX                   SJC   MCO

  EXPECTED OUTPUT:  9  [ NYC -> LAX -> SJC]

  */

  