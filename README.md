# afrostream-pf

read-only API & GUI over mysql PF database

# Describing the PF data model

a Broadcaster is a video platform where we broadcast. ex: ORANGE_NEWBOX, BOUYGUES_MIAMI, ...  
a Broadcaster contains multiple Profiles

a Profile is a group of task called Presets  
a Profile contains multiple presets  
a Preset is a task (a script, ffmpeg, or other)

we call "Transcode" the launch of a Broadcaster Profile's tasks on a specific Content

a Content is a video  
a Content has ContentStreams : multiple audio & video stream of the source video  

Assets are the result of the Transcode operation.

a Content can have multiple Assets  
an Asset is linked to a Content and to a Preset  
an Asset can depends on another Asset
