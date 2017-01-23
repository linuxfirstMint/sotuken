#! /bin/bash

sleep 0.2

wlan0=$(ip addr show wlan0 | sed -nEe 's/^[ \t]*inet[ \t]*([0-9.]+)\/.*$/\1/p')
#eth0=$(ip addr show eth0 | sed -nEe 's/^[ \t]*inet[ \t]*([0-9.]+)\/.*$/\1/p')

#echo "wlan0 : "$wlan0
#echo "eth0 : " $eth0
sleep 0.2

echo "webページを表示します"
$(xdg-open http://${wlan0}/home-html-verVOICE/home.html) &
pid=$!
echo "pid番号:" $pid1
# Ctr+c webを閉じる
# trap "kill $pid1" 2

sleep 0.2
#本番→ sudo python ../sotuken/sensor/main2.py
sudo python ../Python/test/main2.py




#echo $status
#if [  $status -eq 0 ];then
#	echo "hcsr04.pyを実行します"
#	sleep 0.2
#	sudo python ~/sotuken/hcsr04.py
#elif [ $status -eq 1 ];then
#	sleep 0.2
#	echo "Failure:others"
#fi

#status=$?
#echo $status
