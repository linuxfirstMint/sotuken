#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sensor
import sensorJSON as json


before_cm=[]
ave_cm=0
bef=2

json.check()
print "sensor start!!"
while 1:
        before_cm.append( sensor.reading() )
        if  len(before_cm) == bef :
        	ave_cm= sum(before_cm)/bef
                #print "before_cm = "+ str(sum(before_cm))
                #print "ave_cm = "+ str(ave_cm)
                before_cm=[]
	if ave_cm == 2000 :
        	json.write( "false" )
                print "....."
        if ave_cm < 2000 :
                json.write( "true" )
                print "!!!!!"




