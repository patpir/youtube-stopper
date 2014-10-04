
all: pause-all-youtubes.xpi

debug: pause-all-youtubes.xpi
	wget --post-file=pause-all-youtubes.xpi http://localhost:8888/ 2> /dev/null; true

pause-all-youtubes.xpi: lib/main.js data/fill-video-list.js data/video-list.html data/pause.png
	../addon-sdk/addon-sdk-1.15/bin/cfx xpi

clean:
	rm pause-all-youtubes.xpi

