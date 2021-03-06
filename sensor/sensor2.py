#!/usr/bin/env python
# -*- coding: utf-8 -*-

# TRIG_pin 11
# ECHO_pin 13
# 5V 

import time
import RPi.GPIO as GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
TRIG = 11
ECHO = 13

def reading():

    	signalon=0
    	signaloff=0

    	GPIO.setup(TRIG,GPIO.OUT)
    	GPIO.setup(ECHO,GPIO.IN)
    	GPIO.output(TRIG, GPIO.LOW)
    	time.sleep(0.5)

        GPIO.output(TRIG, True)
        time.sleep(0.00001)
        GPIO.output(TRIG, False)
 
        while GPIO.input(ECHO) == 0:
          signaloff = time.time()
         
        while GPIO.input(ECHO) == 1:
          signalon = time.time()

        timepassed = signalon - signaloff
        distance = timepassed * 17000
	distance = round(distance,2)
	#print "距離＝" + str(distance)

	if distance >= 2000 :
		return 2 

	if distance >= 10 and distance <= 81 :
		return 1
	else :
		return 2


if __name__=="__main__":
	while 1:
		reading()

