var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 0.599000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Coursecategories_1 = new ol.format.GeoJSON();
var features_Coursecategories_1 = format_Coursecategories_1.readFeatures(json_Coursecategories_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coursecategories_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coursecategories_1.addFeatures(features_Coursecategories_1);
var lyr_Coursecategories_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coursecategories_1, 
                style: style_Coursecategories_1,
                popuplayertitle: "Course categories",
                interactive: true,
    title: 'Course categories<br />\
    <img src="styles/legend/Coursecategories_1_0.png" /> Technology<br />\
    <img src="styles/legend/Coursecategories_1_1.png" /> Technology & Business<br />\
    <img src="styles/legend/Coursecategories_1_2.png" /> Technology & Health<br />\
    <img src="styles/legend/Coursecategories_1_3.png" /> Technology, Health & Business<br />\
    <img src="styles/legend/Coursecategories_1_4.png" /> Health<br />\
    <img src="styles/legend/Coursecategories_1_5.png" /> Health & Business<br />\
    <img src="styles/legend/Coursecategories_1_6.png" /> Business<br />\
    <img src="styles/legend/Coursecategories_1_7.png" /> Other<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_Coursecategories_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Coursecategories_1];
lyr_Coursecategories_1.set('fieldAliases', {'Programs': 'Programs', 'College': 'College', 'City': 'City', 'Grad %': 'Grad %', 'Emply %': 'Emply %', 'Emply Fld %': 'Emply Fld %', 'Grad Sat %': 'Grad Sat %', 'Emplyr Sat%': 'Emplyr Sat%', 'OSAP de %': 'OSAP de %', });
lyr_Coursecategories_1.set('fieldImages', {'Programs': 'TextEdit', 'College': 'TextEdit', 'City': 'Hidden', 'Grad %': 'TextEdit', 'Emply %': 'TextEdit', 'Emply Fld %': 'TextEdit', 'Grad Sat %': 'TextEdit', 'Emplyr Sat%': 'TextEdit', 'OSAP de %': 'TextEdit', });
lyr_Coursecategories_1.set('fieldLabels', {'Programs': 'inline label - always visible', 'College': 'inline label - always visible', 'Grad %': 'header label - always visible', 'Emply %': 'header label - always visible', 'Emply Fld %': 'header label - always visible', 'Grad Sat %': 'header label - always visible', 'Emplyr Sat%': 'header label - always visible', 'OSAP de %': 'header label - always visible', });
lyr_Coursecategories_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});