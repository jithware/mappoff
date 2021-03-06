# Mappoff

Mappoff was created for and maintained by hikers. Because it is often neccesary to do MAPPing OFFline when in remote areas, Mappoff allows you to save map layers and tiles for later offline use. Additionally you can create your own waypoints or enable tracking to save hiking routes. There are several [preset](#presets) layers including the [PCT Water Report](https://www.google.com/maps/d/viewer?mid=1UtogyvQzegPXZYLARMCTwckZTRxIOOLf), the Appalachian Trail, the Continental Divide Trail, the Pacific Crest Trail, among others.

[<img src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
     alt="Get it on Google Play"
     height="80">](https://play.google.com/store/apps/details?id=com.jithware.mappoff)
[<img src="./images/get-it-on.png"
     alt="Get it on The Web"
     height="80">](https://jithware.github.io/mappoff)
     
*Note the web version has a limited amount of features and can only be used while online.*

## Screenshots

![feature](./images/feature.png)

## Usage

### Location

To move the map to your current location, press the Location button. Accept the location permission while using the application. Press the Location button again.

[<img src="./screenshots/android/location.webp"
     alt="Location"
     height="400">](./screenshots/android/location.webp)

### Zoom

To zoom in or out, pinch the screen in or out or press the Zoom In or Zoom Out buttons. To zoom to the layer's extent, hold down either the Zoom In or Zoom Out button. To zoom to a placemark, press the placemark cluster and then press the placemark. Press the screen away from the placemark to remove the placemark pop-up.

[<img src="./screenshots/android/zoom.webp"
     alt="Zoom"
     height="400">](./screenshots/android/zoom.webp)

### Move 

To move the map, touch anywhere on the map and drag to the location to move to.

[<img src="./screenshots/android/move.webp"
     alt="Move"
     height="400">](./screenshots/android/move.webp)

### Preferences

To modify preferences, press Preferences from the menu. Update your Trail Name if desired. This will be used when [sharing](#share) placemarks. Adjust the Default Zoom. This will be used when [zooming](#zoom) to a placemark.

[<img src="./screenshots/android/preferences.webp"
     alt="Preferences"
     height="400">](./screenshots/android/preferences.webp)

### Placemarks

To view the description of a placemark, press the placemark to open a pop-up. To jump to the placemark in the list of placemarks, press the placemark pop-up. Scroll up or down to view placemarks. Press a placemark to move the map to the placemark. You can also scroll the description in the placemark pop-up as well.

[<img src="./screenshots/android/placemarks.webp"
     alt="Placemarks"
     height="400">](./screenshots/android/placemarks.webp)


### Placemark

To add a new placemark, press the Add Point button to center the placemark on the map or long press a location on the screen. Press the Save button. To edit a placemark, long press the placemark and update the desired fields. Press the Save button.

[<img src="./screenshots/android/placemark.webp"
     alt="Placemark"
     height="400">](./screenshots/android/placemark.webp)

### Layers

To add a new layer, press Layers from the menu. From the Layers screen, press the Add button. Press the New File button and the press the Add button to add the layer. To edit a layer, long press the layer to edit. Update the desired fields and press the Save button. To enable or disable a layer, press the checkbox. To remove a layer, swipe the layer either left or right.

[<img src="./screenshots/android/layers.webp"
     alt="Layers"
     height="400">](./screenshots/android/layers.webp)

### Edit

To edit multiple layers, first create multiple [layers](#layers). Ensure the Edit checkbox is checked for layers to be edited. Adding a [placemark](#placemark) will add it to multiple layers. To edit only one layer, ensure only the desired layer Edit is checked. Add a placemark to the layer.

[<img src="./screenshots/android/edit.webp"
     alt="Edit"
     height="400">](./screenshots/android/edit.webp)

### Cache

To cache map tiles for offline use, [edit](#layers) the layer and select the Cache Tiles checkbox. Adjust the Tile Cache Size to the desired amount of tiles to cache. Adjust the Tile Cache Range to modify the range of tiles to cache. For example, a range of 0-25 will cache the first 25% of points and lines in the layer. This allows for higher zoom resolution of the tiles cached. Press the Download button to download the tiles.

[<img src="./screenshots/android/cache.webp"
     alt="Cache"
     height="400">](./screenshots/android/cache.webp)


### Show

To show only points in a Layer, [edit](#layers) the layer and select only the points checkbox. Press the Save button. To show only lines, do the same for the lines checkbox. Note: if this is an editable layer, it will remove the points and/or lines. An edit checkbox will be visisble if the layer is editable.

[<img src="./screenshots/android/show.webp"
     alt="Show"
     height="400">](./screenshots/android/show.webp)

### Tracking

To start tracking, press the Track button. Select the Allow all the time permission. Adjust the desired Tracking Interval and/or Tracking Distance Filter from the Preferences menu. Tracking Interval is time between tracking points. Tracking Distance Filter is the minimum amount of distance in meters that must be between points for a new point to be created. To stop tracking, press the Track button again.

[<img src="./screenshots/android/tracking.webp"
     alt="Tracking"
     height="400">](./screenshots/android/tracking.webp)

### Presets

To load a preset layer, press Layers from the menu. From the Layers screen, press the Presets button. Press the preset you would like to load. Disable other layers if desired. Press the layer to view the preset placemarks. Press a placemark to jump to the placemark on the map.

[<img src="./screenshots/android/presets.webp"
     alt="Presets"
     height="400">](./screenshots/android/presets.webp)

### Share

To share a placemark, press the placemark pop-up. Long press the placemark. Press the Share button. Edit the desired fields. Press the Send button. Choose the desired method of sharing. Update who to share with. Send the message. An advantage to using email as the share method is that when you are offline, your email client should queue up your messages and send them once you return online.

[<img src="./screenshots/android/share.webp"
     alt="Share"
     height="400">](./screenshots/android/share.webp)

### Equalize

If it appears the map is lagging when drawn, either disable/remove other layers or equalize the lines in the layer. Equalizing reduces the number of lines drawn. To equalize the lines in a layer, begin editing the layer. Increase the equalize to reduce the number of lines. Press the Save button. Notice the lines and distance are reduced in the Layer description. 

[<img src="./screenshots/android/equalize.webp"
     alt="Equalize"
     height="400">](./screenshots/android/equalize.webp)

### Export

To export a layer, first create a new [layer](#layers). Edit the layer and select the Share button. Choose a method to share with.

[<img src="./screenshots/android/export.webp"
     alt="Export"
     height="400">](./screenshots/android/export.webp)

## Donate

Donate to the project's maintainer [@jithware](https://github.com/jithware)

[![liberapay](https://liberapay.com/assets/widgets/donate.svg)](https://liberapay.com/jithware/donate) | [![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/donate/?hosted_button_id=2ZFSMQ8DGQVFS)
