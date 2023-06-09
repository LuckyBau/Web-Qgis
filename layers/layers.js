var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JumlahPendudukKabTTUpadatahun2020_1 = new ol.format.GeoJSON();
var features_JumlahPendudukKabTTUpadatahun2020_1 = format_JumlahPendudukKabTTUpadatahun2020_1.readFeatures(json_JumlahPendudukKabTTUpadatahun2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahPendudukKabTTUpadatahun2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JumlahPendudukKabTTUpadatahun2020_1.addFeatures(features_JumlahPendudukKabTTUpadatahun2020_1);
var lyr_JumlahPendudukKabTTUpadatahun2020_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahPendudukKabTTUpadatahun2020_1, 
                style: style_JumlahPendudukKabTTUpadatahun2020_1,
                interactive: true,
                title: '<img src="styles/legend/JumlahPendudukKabTTUpadatahun2020_1.png" /> Jumlah Penduduk Kab. TTU pada tahun 2020'
            });
var format_ADMINISTRASIKECAMATAN_AR_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_2 = format_ADMINISTRASIKECAMATAN_AR_2.readFeatures(json_ADMINISTRASIKECAMATAN_AR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_2.addFeatures(features_ADMINISTRASIKECAMATAN_AR_2);
var lyr_ADMINISTRASIKECAMATAN_AR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_2, 
                style: style_ADMINISTRASIKECAMATAN_AR_2,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_2.png" /> ADMINISTRASIKECAMATAN_AR'
            });

lyr_OSMStandard_0.setVisible(true);lyr_JumlahPendudukKabTTUpadatahun2020_1.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_JumlahPendudukKabTTUpadatahun2020_1,lyr_ADMINISTRASIKECAMATAN_AR_2];
lyr_JumlahPendudukKabTTUpadatahun2020_1.set('fieldAliases', {'id': 'id', 'Nama_Kec': 'Nama_Kec', 'Jmlh_Pnddk': 'Jmlh_Pnddk', 'Photo': 'Photo', });
lyr_ADMINISTRASIKECAMATAN_AR_2.set('fieldAliases', {'FCODE': 'FCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JumlahPendudukKabTTUpadatahun2020_1.set('fieldImages', {'id': 'TextEdit', 'Nama_Kec': 'TextEdit', 'Jmlh_Pnddk': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_ADMINISTRASIKECAMATAN_AR_2.set('fieldImages', {'FCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JumlahPendudukKabTTUpadatahun2020_1.set('fieldLabels', {'id': 'inline label', 'Nama_Kec': 'inline label', 'Jmlh_Pnddk': 'inline label', 'Photo': 'inline label', });
lyr_ADMINISTRASIKECAMATAN_AR_2.set('fieldLabels', {'FCODE': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});