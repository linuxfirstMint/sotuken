#!/usr/bin/env python
# -*- coding: utf-8 -*-

###############
"""
前の値と一緒なら　
書き込まない
"""
###############

import sys
import sensor2 as sensor
import sensorJSON as json


before_cm=[]
bef=2
before_flg=0
flg=0

json.check()
print "sensor start!!"
try:
	while 1:
        	before_cm.append( sensor.reading() )
        	if  len(before_cm) == bef :
        		flg = sum(before_cm)/bef
                	before_cm=[]

			if flg == before_flg :
				continue
				
			if flg < bef : 
				before_flg = 1
                		#print "!!!!!"
        			json.write( "true" )

			if flg == bef :
				before_flg = 2
                		#print "....."
                		json.write( "false" )

except KeyboardInterrupt:
	sys.exit(0)


