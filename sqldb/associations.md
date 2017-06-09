# Links between Models

## 1-1

```
Asset -> Content                foreignKey:contentId
Asset -> Preset                 foreignKey:presetId

AssetsStreams -> Asset          foreignKey:assetId

Broadcaster -> Profile          foreignKey:profileId

ContentsStreams -> Content      foreignKey:contentId

FfmpegLog -> Asset              foreignKey:assetId
FfmpegProgress -> Asset         foreignKey:assetId

Preset -> Profile               foreignKey:profileId

ProfileParameter -> Profile     foreignKey:profileId
ProfileParameter -> Asset       foreignKey:assetId
```

## 1-N

```
Asset.streams[] -> AssetsStreams                  foreignKey:assetId
Asset.ffmpegLogs[] -> FfmpegLog                   foreignKey:assetId
Asset.ffmpegProgress[] -> FfmpegProgress          foreignKey:assetId
Asset.profileParameters[] -> ProfileParameter     foreignKey:assetId

Content.assets[] -> Asset                         foreignKey:contentId
Content.streams[] -> ContentsStreams              foreignKey:contentId

Profile.parameters[] -> ProfileParameter          foreignKey:profileId
```

## N-N

```
Content.profiles[] -> ContentsProfiles -> Profile       foreignKey:profileId,targetKey:contentId
Profile.contents[] -> ContentsProfiles -> Content       foreignKey:contentId,targetKey:profileId
```
