# jumpusaurus

A quick look into making a randomly created 2D terrain for a proof-of-concept game.
The change in slope is coded to start small and grow as the map moves from left to right.
This simulates a "rising difficulty" for the mover in the map if the aim was
to advance as far as possible in the game. So basically smooth slopes at first, 
then bigger and bigger mountains and valleys.

Logic written with javascript and visualized in html. To use download both files and tun .html
file in a browser. Refreshing creates a new random map. After each iteration of the map, an info
bubble appears to give the actual map data that would be used by the game.