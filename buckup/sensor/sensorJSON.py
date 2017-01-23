#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json

from time import sleep
from time import clock

start=clock()
def write( state ):
	with open('/home/pi/web/home-html-verVOICE/check/json/value.json','r') as f:
		data=json.load(f)
		with open('/home/pi/web/home-html-verVOICE/check/json/value.json','w') as f:
			emptyList = []
			#print data[0]["ParceState"]
			data[0]["ParceState"] = state
			#print data[0]
			emptyList.append(data[0])
			#print emptyList 
			json.dump(emptyList,f,sort_keys=True,indent=4)
			print str(state) + ":書き込み速度 = "+ str(start)

def check():

	with open('/home/pi/web/home-html-verVOICE/check/json/value.json','r') as f:
		data=f.readline()
		if data=="[\n":
			#print "JSONデータが存在します"
			pass
		else:
			print "JSONデータが存在しません"
			sleep(0.3)
			print "復元します"
			sleep(1)
			with open('/home/pi/web/home-html-verVOICE/check/json/buckup_value.json','r') as f:
				data=json.load(f)
				with open('/home/pi/web/home-html-verVOICE/check/json/value.json','w') as f:
					json.dump(data,f,sort_keys=True,indent=4)
					print "復元完了"
					sleep(0.2)

if __name__=='__main__':
	check()
	write("true")
