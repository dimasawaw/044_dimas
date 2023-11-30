var wms_layers = [];

var format_jalanlokal_0 = new ol.format.GeoJSON();
var features_jalanlokal_0 = format_jalanlokal_0.readFeatures(json_jalanlokal_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanlokal_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanlokal_0.addFeatures(features_jalanlokal_0);
var lyr_jalanlokal_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalanlokal_0, 
                style: style_jalanlokal_0,
                interactive: true,
                title: '<img src="styles/legend/jalanlokal_0.png" /> jalan lokal'
            });
var format_bingkaipoligon_1 = new ol.format.GeoJSON();
var features_bingkaipoligon_1 = format_bingkaipoligon_1.readFeatures(json_bingkaipoligon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bingkaipoligon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bingkaipoligon_1.addFeatures(features_bingkaipoligon_1);
var lyr_bingkaipoligon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bingkaipoligon_1, 
                style: style_bingkaipoligon_1,
                interactive: true,
    title: 'bingkai poligon<br />\
    <img src="styles/legend/bingkaipoligon_1_0.png" /> 1<br />\
    <img src="styles/legend/bingkaipoligon_1_1.png" /> 2<br />\
    <img src="styles/legend/bingkaipoligon_1_2.png" /> 3<br />\
    <img src="styles/legend/bingkaipoligon_1_3.png" /> 4<br />\
    <img src="styles/legend/bingkaipoligon_1_4.png" /> 5<br />\
    <img src="styles/legend/bingkaipoligon_1_5.png" /> 6<br />\
    <img src="styles/legend/bingkaipoligon_1_6.png" /> 7<br />\
    <img src="styles/legend/bingkaipoligon_1_7.png" /> 8<br />\
    <img src="styles/legend/bingkaipoligon_1_8.png" /> 9<br />\
    <img src="styles/legend/bingkaipoligon_1_9.png" /> 10<br />\
    <img src="styles/legend/bingkaipoligon_1_10.png" /> 11<br />\
    <img src="styles/legend/bingkaipoligon_1_11.png" /> 12<br />\
    <img src="styles/legend/bingkaipoligon_1_12.png" /> 13<br />\
    <img src="styles/legend/bingkaipoligon_1_13.png" /> 14<br />\
    <img src="styles/legend/bingkaipoligon_1_14.png" /> 15<br />\
    <img src="styles/legend/bingkaipoligon_1_15.png" /> 16<br />\
    <img src="styles/legend/bingkaipoligon_1_16.png" /> 17<br />\
    <img src="styles/legend/bingkaipoligon_1_17.png" /> 18<br />\
    <img src="styles/legend/bingkaipoligon_1_18.png" /> 19<br />\
    <img src="styles/legend/bingkaipoligon_1_19.png" /> <br />'
        });

lyr_jalanlokal_0.setVisible(true);lyr_bingkaipoligon_1.setVisible(true);
var layersList = [lyr_jalanlokal_0,lyr_bingkaipoligon_1];
lyr_jalanlokal_0.set('fieldAliases', {'id': 'id', });
lyr_bingkaipoligon_1.set('fieldAliases', {'id': 'id', 'desa': 'desa', });
lyr_jalanlokal_0.set('fieldImages', {'id': 'TextEdit', });
lyr_bingkaipoligon_1.set('fieldImages', {'id': 'TextEdit', 'desa': 'TextEdit', });
lyr_jalanlokal_0.set('fieldLabels', {'id': 'no label', });
lyr_bingkaipoligon_1.set('fieldLabels', {'id': 'no label', 'desa': 'no label', });
lyr_bingkaipoligon_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});