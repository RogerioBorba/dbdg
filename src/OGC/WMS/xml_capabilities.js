export const bndesXML = `<WMS_Capabilities xmlns="http://www.opengis.net/wms" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.3.0" updateSequence="29941" xsi:schemaLocation="http://www.opengis.net/wms https://geoservicos.inde.gov.br/geoserver/schemas/wms/1.3.0/capabilities_1_3_0.xsd">
<Service>
<Name>WMS</Name>
<Title>GeoServer Web Map Service</Title>
<Abstract>A compliant implementation of WMS 1.1.1 plus most of the SLD 1.0 extension (dynamic styling). Can also generate PDF, SVG, KML, GeoRSS</Abstract>
<KeywordList>
<Keyword>WFS</Keyword>
<Keyword>WMS</Keyword>
<Keyword>GEOSERVER</Keyword>
</KeywordList>
<OnlineResource xlink:type="simple" xlink:href="https://www.inde.gov.br/"/>
<ContactInformation>
<ContactPersonPrimary>
<ContactPerson/>
<ContactOrganization>INDE - Infraestrutura Nacional de Dados Espaciais</ContactOrganization>
</ContactPersonPrimary>
<ContactPosition/>
<ContactAddress>
<AddressType>IBGE - INDE/DBDG</AddressType>
<Address>Av. República do Chile, 500</Address>
<City>Rio de Janeiro</City>
<StateOrProvince>RJ</StateOrProvince>
<PostCode/>
<Country>Brazil</Country>
</ContactAddress>
<ContactVoiceTelephone/>
<ContactFacsimileTelephone/>
<ContactElectronicMailAddress>dbdg@inde.gov.br</ContactElectronicMailAddress>
</ContactInformation>
<Fees>NONE</Fees>
<AccessConstraints>NONE</AccessConstraints>
</Service>
<Capability>
<Request>
<GetCapabilities>
<Format>text/xml</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?SERVICE=WMS&"/>
</Get>
<Post>
<OnlineResource xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?SERVICE=WMS&"/>
</Post>
</HTTP>
</DCPType>
</GetCapabilities>
<GetMap>
<Format>image/png</Format>
<Format>application/atom+xml</Format>
<Format>application/json;type=utfgrid</Format>
<Format>application/pdf</Format>
<Format>application/rss+xml</Format>
<Format>application/vnd.google-earth.kml+xml</Format>
<Format>application/vnd.google-earth.kml+xml;mode=networklink</Format>
<Format>application/vnd.google-earth.kmz</Format>
<Format>image/geotiff</Format>
<Format>image/geotiff8</Format>
<Format>image/gif</Format>
<Format>image/jpeg</Format>
<Format>image/png; mode=8bit</Format>
<Format>image/svg+xml</Format>
<Format>image/tiff</Format>
<Format>image/tiff8</Format>
<Format>image/vnd.jpeg-png</Format>
<Format>image/vnd.jpeg-png8</Format>
<Format>text/html; subtype=openlayers</Format>
<Format>text/html; subtype=openlayers2</Format>
<Format>text/html; subtype=openlayers3</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?SERVICE=WMS&"/>
</Get>
</HTTP>
</DCPType>
</GetMap>
<GetFeatureInfo>
<Format>text/plain</Format>
<Format>application/vnd.ogc.gml</Format>
<Format>text/xml</Format>
<Format>application/vnd.ogc.gml/3.1.1</Format>
<Format>text/xml; subtype=gml/3.1.1</Format>
<Format>text/html</Format>
<Format>application/json</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?SERVICE=WMS&"/>
</Get>
</HTTP>
</DCPType>
</GetFeatureInfo>
</Request>
<Exception>
<Format>XML</Format>
<Format>INIMAGE</Format>
<Format>BLANK</Format>
<Format>JSON</Format>
</Exception>
<Layer>
<Title>GeoServer Web Map Service</Title>
<Abstract>A compliant implementation of WMS 1.1.1 plus most of the SLD 1.0 extension (dynamic styling). Can also generate PDF, SVG, KML, GeoRSS</Abstract>
<!-- Limited list of EPSG projections: -->
<CRS>EPSG:3857</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<CRS>EPSG:900913</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-122.19</westBoundLongitude>
<eastBoundLongitude>-25.28</eastBoundLongitude>
<southBoundLatitude>-59.87</southBoundLatitude>
<northBoundLatitude>32.72</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-122.19" miny="-59.87" maxx="-25.28" maxy="32.72"/>
<Layer queryable="1" opaque="0">
<Name>AP_2009</Name>
<Title>Agropecuária e Pesca 2009</Title>
<Abstract/>
<KeywordList>
<Keyword>AP_2009</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-70.6259101584566</westBoundLongitude>
<eastBoundLongitude>-34.7937031650182</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>3.6058070000649</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-70.6259101584566" miny="-33.7520136933788" maxx="-34.7937031650182" maxy="3.6058070000649"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-70.6259101584566" maxx="3.6058070000649" maxy="-34.7937031650182"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=ca310739-6d45-4a00-bca0-2d7a424763b4"/>
</MetadataURL>
<Style>
<Name>BNDES:AP_2009</Name>
<Title>BNDES:AP_2009</Title>
<LegendURL width="242" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=AP_2009"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>AP_2010</Name>
<Title>Agropecuária e Pesca 2010</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>AP_2010</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-70.6259101584566</westBoundLongitude>
<eastBoundLongitude>-34.7937031650182</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>3.74214767848431</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-70.6259101584566" miny="-33.7520136933788" maxx="-34.7937031650182" maxy="3.74214767848431"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-70.6259101584566" maxx="3.74214767848431" maxy="-34.7937031650182"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=9bc8d7e1-a68f-4518-b446-48c8b44981d0"/>
</MetadataURL>
<Style>
<Name>BNDES:AP_2010</Name>
<Title>BNDES:AP_2010</Title>
<LegendURL width="252" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=AP_2010"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>AP_2011</Name>
<Title>Agropecuária e Pesca 2011</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>AP_2011</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-70.6256218575849</westBoundLongitude>
<eastBoundLongitude>-34.7937031650182</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>4.32536465521008</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-70.6256218575849" miny="-33.7520136933788" maxx="-34.7937031650182" maxy="4.32536465521008"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-70.6256218575849" maxx="4.32536465521008" maxy="-34.7937031650182"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=100a9a50-8e6e-40ef-987c-6caa852c6cdf"/>
</MetadataURL>
<Style>
<Name>BNDES:AP_2011</Name>
<Title>BNDES:AP_2011</Title>
<LegendURL width="252" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=AP_2011"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>AP_2012</Name>
<Title>Agropecuária e Pesca 2012</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>AP_2012</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-69.7783846689228</westBoundLongitude>
<eastBoundLongitude>-34.7937031650182</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>4.32536465521008</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-69.7783846689228" miny="-33.7520136933788" maxx="-34.7937031650182" maxy="4.32536465521008"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-69.7783846689228" maxx="4.32536465521008" maxy="-34.7937031650182"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=aead6912-3114-4932-8694-1fde125fd368"/>
</MetadataURL>
<Style>
<Name>BNDES:AP_2012</Name>
<Title>BNDES:AP_2012</Title>
<LegendURL width="252" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=AP_2012"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>AP_2013</Name>
<Title>Agropecuária e Pesca 2013</Title>
<Abstract/>
<KeywordList>
<Keyword>AP_2013</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-66.2250366210938</westBoundLongitude>
<eastBoundLongitude>-34.793701171875</eastBoundLongitude>
<southBoundLatitude>-33.75201415928419</southBoundLatitude>
<northBoundLatitude>4.325365066386213</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-66.2250366210938" miny="-33.75201415928419" maxx="-34.793701171875" maxy="4.325365066386213"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7520141601562" miny="-66.2250366210938" maxx="4.32536506652832" maxy="-34.793701171875"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=9cc0fe8b-2c91-4c46-b5c1-b7582fcd5877"/>
</MetadataURL>
<Style>
<Name>BNDES:AP_2013</Name>
<Title>BNDES:AP_2013</Title>
<LegendURL width="252" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=AP_2013"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>AP_2014</Name>
<Title>Agropecuária e Pesca 2014</Title>
<Abstract/>
<KeywordList>
<Keyword>AP_2014</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-69.91059423394931</westBoundLongitude>
<eastBoundLongitude>-31.071667423765497</eastBoundLongitude>
<southBoundLatitude>-34.13278795154089</southBoundLatitude>
<northBoundLatitude>4.706138858642917</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-69.91059423394931" miny="-34.13278795154089" maxx="-31.071667423765497" maxy="4.706138858642917"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7520141601562" miny="-66.1885604858398" maxx="4.32536506652832" maxy="-34.793701171875"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=076c6b19-6ef8-4009-a70e-5ad7d539e1b1"/>
</MetadataURL>
<Style>
<Name>BNDES:AP_2014</Name>
<Title>BNDES:AP_2014</Title>
<LegendURL width="252" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=AP_2014"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>AP_2015</Name>
<Title>Agropecuária e Pesca 2015</Title>
<Abstract/>
<KeywordList>
<Keyword>AP_2015</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-72.69600549344543</westBoundLongitude>
<eastBoundLongitude>-28.91553816949918</eastBoundLongitude>
<southBoundLatitude>-36.60073509722276</southBoundLatitude>
<northBoundLatitude>7.179732226723479</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-72.69600549344543" miny="-36.60073509722276" maxx="-28.91553816949918" maxy="7.179732226723479"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504642238386" miny="-72.2667852255636" maxx="4.32946135260956" maxy="-29.344758437381"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=efa4a280-1697-4cff-9938-eed5060b65e5"/>
</MetadataURL>
<Style>
<Name>BNDES:AP_2015</Name>
<Title>BNDES:AP_2015</Title>
<LegendURL width="252" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=AP_2015"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>AP_2016</Name>
<Title>Agropecuária e Pesca 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>AP_2016</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-72.69600549344543</westBoundLongitude>
<eastBoundLongitude>-28.91553816949918</eastBoundLongitude>
<southBoundLatitude>-36.60073509722276</southBoundLatitude>
<northBoundLatitude>7.179732226723479</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-72.69600549344543" miny="-36.60073509722276" maxx="-28.91553816949918" maxy="7.179732226723479"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504642238386" miny="-72.2667852255636" maxx="4.32946135260956" maxy="-29.344758437381"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=6f018de0-cf43-4a45-b27a-2fb6164c5149"/>
</MetadataURL>
<Style>
<Name>BNDES:AP_2016</Name>
<Title>BNDES:AP_2016</Title>
<LegendURL width="252" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=AP_2016"/>
</LegendURL>
</Style>
<Style>
<Name>BNDES:AP_2016</Name>
<Title>BNDES:AP_2016</Title>
<LegendURL width="252" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=AP_2016&style=AP_2016"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>AP_2017</Name>
<Title>Agropecuária e Pesca 2017</Title>
<Abstract/>
<KeywordList>
<Keyword>AP_2017</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-70.6236529312768</westBoundLongitude>
<eastBoundLongitude>-29.344758437381003</eastBoundLongitude>
<southBoundLatitude>-33.750464222966606</southBoundLatitude>
<northBoundLatitude>4.32946135246732</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-70.6236529312768" miny="-33.750464222966606" maxx="-29.344758437381003" maxy="4.32946135246732"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504642238386" miny="-70.6236529312768" maxx="4.32946135260956" maxy="-29.344758437381"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=40db89fb-d1fb-4bd7-bf3e-f45352878095"/>
</MetadataURL>
<Style>
<Name>BNDES:AP_2017</Name>
<Title>BNDES:AP_2017</Title>
<LegendURL width="252" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=AP_2017"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>AP_2018</Name>
<Title>Agropecuária e Pesca 2018</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>agropecuaria_e_pesca2018</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-65.7975082397461</westBoundLongitude>
<eastBoundLongitude>-31.9163475036621</eastBoundLongitude>
<southBoundLatitude>-33.7504653930664</southBoundLatitude>
<northBoundLatitude>3.54034638404846</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-65.7975082397461" miny="-33.7504653930664" maxx="-31.9163475036621" maxy="3.54034638404846"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504653930664" miny="-65.7975082397461" maxx="3.54034638404846" maxy="-31.9163475036621"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=4e835d7a-e35f-4de1-8263-c7c374249a2e"/>
</MetadataURL>
<Style>
<Name>BNDES:AP_2018</Name>
<Title>BNDES:AP_2018</Title>
<LegendURL width="201" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=AP_2018"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CNAES_por_Municipio_2009</Name>
<Title>Setores CNAE por município 2009</Title>
<Abstract/>
<KeywordList>
<Keyword>CNAES_por_Municipio_2009</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9913915619595</westBoundLongitude>
<eastBoundLongitude>-32.3924574827765</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>4.43665587655256</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9913915619595" miny="-33.7520136933788" maxx="-32.3924574827765" maxy="4.43665587655256"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-73.9913915619595" maxx="4.43665587655256" maxy="-32.3924574827765"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=b43bf6dd-7b98-4d7d-b729-0ad3343a5872"/>
</MetadataURL>
<Style>
<Name>BNDES:CNAES_por_Municipio_2009</Name>
<Title>BNDES:CNAES_por_Municipio_2009</Title>
<LegendURL width="201" height="140">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CNAES_por_Municipio_2009"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CNAES_por_Municipio_2010</Name>
<Title>Setores CNAE por município 2010</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>CNAES_por_Municipio_2010</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9913915619595</westBoundLongitude>
<eastBoundLongitude>-32.3924574827765</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>4.88458432699979</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9913915619595" miny="-33.7520136933788" maxx="-32.3924574827765" maxy="4.88458432699979"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-73.9913915619595" maxx="4.88458432699979" maxy="-32.3924574827765"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=95c62c59-305a-40f2-ac15-cd41fbc9f826"/>
</MetadataURL>
<Style>
<Name>BNDES:CNAES_por_Municipio_2010</Name>
<Title>BNDES:CNAES_por_Municipio_2010</Title>
<LegendURL width="208" height="140">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CNAES_por_Municipio_2010"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CNAES_por_Municipio_2011</Name>
<Title>Setores CNAE por município 2011</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>CNAES_por_Municipio_2011</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9913915619595</westBoundLongitude>
<eastBoundLongitude>-32.3924574827765</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>4.88458432699979</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9913915619595" miny="-33.7520136933788" maxx="-32.3924574827765" maxy="4.88458432699979"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-73.9913915619595" maxx="4.88458432699979" maxy="-32.3924574827765"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=923cfa4e-28aa-482c-adab-5ceb235b0be3"/>
</MetadataURL>
<Style>
<Name>BNDES:CNAES_por_Municipio_2011</Name>
<Title>BNDES:CNAES_por_Municipio_2011</Title>
<LegendURL width="208" height="140">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CNAES_por_Municipio_2011"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CNAES_por_Municipio_2012</Name>
<Title>Setores CNAE por município 2012</Title>
<Abstract/>
<KeywordList>
<Keyword>CNAES_por_Municipio_2012</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9913915619595</westBoundLongitude>
<eastBoundLongitude>-32.3924574827765</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>4.88458432699979</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9913915619595" miny="-33.7520136933788" maxx="-32.3924574827765" maxy="4.88458432699979"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-73.9913915619595" maxx="4.88458432699979" maxy="-32.3924574827765"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=cbab7bfd-b9b8-4f8c-a8d0-b786f54d821b"/>
</MetadataURL>
<Style>
<Name>BNDES:CNAES_por_Municipio_2012</Name>
<Title>BNDES:CNAES_por_Municipio_2012</Title>
<LegendURL width="208" height="140">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CNAES_por_Municipio_2012"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CS_2009</Name>
<Title>Comércio e Serviços 2009</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>CS_2009</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9913915619595</westBoundLongitude>
<eastBoundLongitude>-32.3924574827765</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>4.43665587655256</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9913915619595" miny="-33.7520136933788" maxx="-32.3924574827765" maxy="4.43665587655256"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-73.9913915619595" maxx="4.43665587655256" maxy="-32.3924574827765"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=40dc36d3-b6de-4913-8a91-158547718d82"/>
</MetadataURL>
<Style>
<Name>BNDES:CS_2009</Name>
<Title>BNDES:CS_2009</Title>
<LegendURL width="252" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CS_2009"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CS_2010</Name>
<Title>Comércio e Serviços 2010</Title>
<Abstract/>
<KeywordList>
<Keyword>CS_2010</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9913915619595</westBoundLongitude>
<eastBoundLongitude>-32.3924574827765</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>4.88458432699979</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9913915619595" miny="-33.7520136933788" maxx="-32.3924574827765" maxy="4.88458432699979"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-73.9913915619595" maxx="4.88458432699979" maxy="-32.3924574827765"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=e33aee2c-419b-45cd-9bc9-fb6e57e968b8"/>
</MetadataURL>
<Style>
<Name>BNDES:CS_2010</Name>
<Title>BNDES:CS_2010</Title>
<LegendURL width="252" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CS_2010"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CS_2011</Name>
<Title>Comércio e Serviços 2011</Title>
<Abstract/>
<KeywordList>
<Keyword>CS_2011</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9913915619595</westBoundLongitude>
<eastBoundLongitude>-32.3924574827765</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>4.88458432699979</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9913915619595" miny="-33.7520136933788" maxx="-32.3924574827765" maxy="4.88458432699979"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-73.9913915619595" maxx="4.88458432699979" maxy="-32.3924574827765"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=66ec8ad7-aa73-4e9c-bccf-bcd22ece812b"/>
</MetadataURL>
<Style>
<Name>BNDES:CS_2011</Name>
<Title>BNDES:CS_2011</Title>
<LegendURL width="194" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CS_2011"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CS_2012</Name>
<Title>Comércio e Serviços 2012</Title>
<Abstract/>
<KeywordList>
<Keyword>CS_2012</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9913915619595</westBoundLongitude>
<eastBoundLongitude>-32.3924574827765</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>4.88458432699979</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9913915619595" miny="-33.7520136933788" maxx="-32.3924574827765" maxy="4.88458432699979"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-73.9913915619595" maxx="4.88458432699979" maxy="-32.3924574827765"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=1b782bf2-ddfe-4d05-b3c7-195efb6a4b92"/>
</MetadataURL>
<Style>
<Name>BNDES:CS_2012</Name>
<Title>BNDES:CS_2012</Title>
<LegendURL width="201" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CS_2012"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CS_2013</Name>
<Title>Comércio e Serviços 2013</Title>
<Abstract/>
<KeywordList>
<Keyword>CS_2013</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-67.5288314819336</westBoundLongitude>
<eastBoundLongitude>-32.3924560546875</eastBoundLongitude>
<southBoundLatitude>-33.75201415928419</southBoundLatitude>
<northBoundLatitude>4.884584426719569</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-67.5288314819336" miny="-33.75201415928419" maxx="-32.3924560546875" maxy="4.884584426719569"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7520141601562" miny="-67.5288314819336" maxx="4.88458442687988" maxy="-32.3924560546875"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=32c53e75-769d-4617-b845-4d221470e0b9"/>
</MetadataURL>
<Style>
<Name>BNDES:CS_2013</Name>
<Title>BNDES:CS_2013</Title>
<LegendURL width="223" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CS_2013"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CS_2014</Name>
<Title>Comércio e Serviços 2014</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>CS_2014</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-70.44948711306155</westBoundLongitude>
<eastBoundLongitude>-29.44801960080566</eastBoundLongitude>
<southBoundLatitude>-34.93444862241025</southBoundLatitude>
<northBoundLatitude>6.067018889845635</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-70.44948711306155" miny="-34.93444862241025" maxx="-29.44801960080566" maxy="6.067018889845635"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7520141601562" miny="-67.5050506591797" maxx="4.88458442687988" maxy="-32.3924560546875"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=6730c159-02b5-4b83-9568-a6930bb946c4"/>
</MetadataURL>
<Style>
<Name>BNDES:CS_2014</Name>
<Title>BNDES:CS_2014</Title>
<LegendURL width="223" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CS_2014"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CS_2015</Name>
<Title>Comércio e Serviços 2015</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>CS_2015</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9990397779885</westBoundLongitude>
<eastBoundLongitude>-28.84048936307761</eastBoundLongitude>
<southBoundLatitude>-33.750464222966606</southBoundLatitude>
<northBoundLatitude>4.872161977858303</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9990397779885" miny="-33.750464222966606" maxx="-28.84048936307761" maxy="4.872161977858303"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504642238386" miny="-73.9990397779885" maxx="4.87216197801821" maxy="-28.8404893630776"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=9de4d1ca-f27e-437b-b4eb-5b11c1c1803b"/>
</MetadataURL>
<Style>
<Name>BNDES:CS_2015</Name>
<Title>BNDES:CS_2015</Title>
<LegendURL width="203" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CS_2015"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CS_2016</Name>
<Title>Comércio e Serviços 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>CS_2016</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-67.6507797241211</westBoundLongitude>
<eastBoundLongitude>-28.840488433837905</eastBoundLongitude>
<southBoundLatitude>-33.75046539219441</southBoundLatitude>
<northBoundLatitude>4.872162341911623</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-67.6507797241211" miny="-33.75046539219441" maxx="-28.840488433837905" maxy="4.872162341911623"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504653930664" miny="-67.6507797241211" maxx="4.87216234207153" maxy="-28.8404884338379"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=6818db34-c79e-46ae-ba1b-d70dee03d298"/>
</MetadataURL>
<Style>
<Name>BNDES:CS_2016</Name>
<Title>BNDES:CS_2016</Title>
<LegendURL width="168" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CS_2016"/>
</LegendURL>
</Style>
<Style>
<Name>BNDES:CS_2016</Name>
<Title>BNDES:CS_2016</Title>
<LegendURL width="168" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CS_2016&style=CS_2016"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CS_2017</Name>
<Title>Comércio e Serviços 2017</Title>
<Abstract/>
<KeywordList>
<Keyword>CS_2017</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-74.55058090260056</westBoundLongitude>
<eastBoundLongitude>-27.935427758393857</eastBoundLongitude>
<southBoundLatitude>-37.74672769465751</southBoundLatitude>
<northBoundLatitude>8.868425449549202</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-74.55058090260056" miny="-37.74672769465751" maxx="-27.935427758393857" maxy="8.868425449549202"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504642238386" miny="-73.6455192979168" maxx="4.87216197801821" maxy="-28.8404893630776"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=999c63f8-dc2b-4424-81e6-24a373f2f065"/>
</MetadataURL>
<Style>
<Name>BNDES:CS_2017</Name>
<Title>BNDES:CS_2017</Title>
<LegendURL width="184" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CS_2017"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>CS_2018</Name>
<Title>Comércio e Serviços 2018</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>comercio_e_servico2018</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-67.6070938110352</westBoundLongitude>
<eastBoundLongitude>-28.8404884338379</eastBoundLongitude>
<southBoundLatitude>-33.7504653930664</southBoundLatitude>
<northBoundLatitude>4.87216234207153</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-67.6070938110352" miny="-33.7504653930664" maxx="-28.8404884338379" maxy="4.87216234207153"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504653930664" miny="-67.6070938110352" maxx="4.87216234207153" maxy="-28.8404884338379"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=36f7b1a6-3796-46aa-9f45-ae8db231dfcd"/>
</MetadataURL>
<Style>
<Name>BNDES:CS_2018</Name>
<Title>BNDES:CS_2018</Title>
<LegendURL width="194" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CS_2018"/>
</LegendURL>
</Style>
<Style>
<Name>BNDES:CS_2018</Name>
<Title>BNDES:CS_2018</Title>
<LegendURL width="194" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=CS_2018&style=CS_2018"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>Comércio e Serviços 2020</Name>
<Title>Comércio e Serviços 2020</Title>
<Abstract>Aprovações do Sistema BNDES para o grande setor CNAE Comércio e Serviços, por município, no ano de 2020. Valor total aprovado: R$ 52.973.416.782,54. Valor de aprovações em operações sem informação municipal discriminada: R$ 20.132.156.813,30. Definição: Aprovação: autorização do Sistema BNDES para apoio financeiro.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>comercioservicos</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6455230712891</westBoundLongitude>
<eastBoundLongitude>-28.8477687835693</eastBoundLongitude>
<southBoundLatitude>-33.7504653930664</southBoundLatitude>
<northBoundLatitude>4.43655824661255</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6455230712891" miny="-33.7504653930664" maxx="-28.8477687835693" maxy="4.43655824661255"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504653930664" miny="-73.6455230712891" maxx="4.43655824661255" maxy="-28.8477687835693"/>
<Style>
<Name>BNDES:ComercioServicos2020</Name>
<Title>BNDES:ComercioServicos2020</Title>
<LegendURL width="229" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=Com%C3%A9rcio%20e%20Servi%C3%A7os%202020"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IE_2009</Name>
<Title>Indústria Extrativa 2009</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>IE_2009</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6320298587681</westBoundLongitude>
<eastBoundLongitude>-34.8596314626194</eastBoundLongitude>
<southBoundLatitude>-31.8005870747262</southBoundLatitude>
<northBoundLatitude>3.6058070000649</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6320298587681" miny="-31.8005870747262" maxx="-34.8596314626194" maxy="3.6058070000649"/>
<BoundingBox CRS="EPSG:4326" minx="-31.8005870747262" miny="-73.6320298587681" maxx="3.6058070000649" maxy="-34.8596314626194"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=8b1f38bb-9c09-4b6d-bb94-8d464c8d06d6"/>
</MetadataURL>
<Style>
<Name>BNDES:IE_2009</Name>
<Title>BNDES:IE_2009</Title>
<LegendURL width="187" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IE_2009"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IE_2010</Name>
<Title>Indústria Extrativa 2010</Title>
<Abstract/>
<KeywordList>
<Keyword>IE_2010</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-69.7783846689228</westBoundLongitude>
<eastBoundLongitude>-34.828756565886</eastBoundLongitude>
<southBoundLatitude>-32.6440729745871</southBoundLatitude>
<northBoundLatitude>3.6058070000649</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-69.7783846689228" miny="-32.6440729745871" maxx="-34.828756565886" maxy="3.6058070000649"/>
<BoundingBox CRS="EPSG:4326" minx="-32.6440729745871" miny="-69.7783846689228" maxx="3.6058070000649" maxy="-34.828756565886"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=be06216f-cedf-490f-ad78-6694d1e48f65"/>
</MetadataURL>
<Style>
<Name>BNDES:IE_2010</Name>
<Title>BNDES:IE_2010</Title>
<LegendURL width="187" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IE_2010"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IE_2011</Name>
<Title>Indústria Extrativa 2011</Title>
<Abstract/>
<KeywordList>
<Keyword>IE_2011</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6320298587681</westBoundLongitude>
<eastBoundLongitude>-34.7937031650182</eastBoundLongitude>
<southBoundLatitude>-31.8005870747262</southBoundLatitude>
<northBoundLatitude>3.6058070000649</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6320298587681" miny="-31.8005870747262" maxx="-34.7937031650182" maxy="3.6058070000649"/>
<BoundingBox CRS="EPSG:4326" minx="-31.8005870747262" miny="-73.6320298587681" maxx="3.6058070000649" maxy="-34.7937031650182"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=cf478318-be9a-4efd-9bec-6109601ba257"/>
</MetadataURL>
<Style>
<Name>BNDES:IE_2011</Name>
<Title>BNDES:IE_2011</Title>
<LegendURL width="187" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IE_2011"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IE_2012</Name>
<Title>Indústria Extrativa 2013</Title>
<Abstract/>
<KeywordList>
<Keyword>IE_2012</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9913915619595</westBoundLongitude>
<eastBoundLongitude>-34.7937031650182</eastBoundLongitude>
<southBoundLatitude>-32.0166513994693</southBoundLatitude>
<northBoundLatitude>3.6058070000649</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9913915619595" miny="-32.0166513994693" maxx="-34.7937031650182" maxy="3.6058070000649"/>
<BoundingBox CRS="EPSG:4326" minx="-32.0166513994693" miny="-73.9913915619595" maxx="3.6058070000649" maxy="-34.7937031650182"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=2730f707-232f-4334-af35-b833a7401c8f"/>
</MetadataURL>
<Style>
<Name>BNDES:IE_2012</Name>
<Title>BNDES:IE_2012</Title>
<LegendURL width="187" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IE_2012"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IE_2013</Name>
<Title>Indústria Extrativa 2013</Title>
<Abstract/>
<KeywordList>
<Keyword>IE_2013</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-65.6591415405273</westBoundLongitude>
<eastBoundLongitude>-34.8023414611816</eastBoundLongitude>
<southBoundLatitude>-32.64407348547065</southBoundLatitude>
<northBoundLatitude>3.6058070658451458</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-65.6591415405273" miny="-32.64407348547065" maxx="-34.8023414611816" maxy="3.6058070658451458"/>
<BoundingBox CRS="EPSG:4674" minx="-32.6440734863281" miny="-65.6591415405273" maxx="3.60580706596375" maxy="-34.8023414611816"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=fad0b746-5cdb-431d-aed5-5a9e6b7c274e"/>
</MetadataURL>
<Style>
<Name>BNDES:IE_2013</Name>
<Title>BNDES:IE_2013</Title>
<LegendURL width="223" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IE_2013"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IE_2014</Name>
<Title>Indústria Extrativa 2014</Title>
<Abstract/>
<KeywordList>
<Keyword>IE_2014</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-65.6964340209961</westBoundLongitude>
<eastBoundLongitude>-34.793701171875</eastBoundLongitude>
<southBoundLatitude>-32.64407348547065</southBoundLatitude>
<northBoundLatitude>3.6058070658451458</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-65.6964340209961" miny="-32.64407348547065" maxx="-34.793701171875" maxy="3.6058070658451458"/>
<BoundingBox CRS="EPSG:4674" minx="-32.6440734863281" miny="-65.6964340209961" maxx="3.60580706596375" maxy="-34.793701171875"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=4faa93c0-b31c-48a7-84df-b7b53427c161"/>
</MetadataURL>
<Style>
<Name>BNDES:IE_2014</Name>
<Title>BNDES:IE_2014</Title>
<LegendURL width="216" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IE_2014"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IE_2015</Name>
<Title>Indústria Extrativa 2015</Title>
<Abstract/>
<KeywordList>
<Keyword>IE_2015</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6455192979168</westBoundLongitude>
<eastBoundLongitude>-28.84048936307761</eastBoundLongitude>
<southBoundLatitude>-32.64412933776265</southBoundLatitude>
<northBoundLatitude>2.525690761085831</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6455192979168" miny="-32.64412933776265" maxx="-28.84048936307761" maxy="2.525690761085831"/>
<BoundingBox CRS="EPSG:4674" minx="-32.6441293386201" miny="-73.6455192979168" maxx="2.52569076116902" maxy="-28.8404893630776"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=6f982eb4-d2fb-479a-9dfd-02cf4763c996"/>
</MetadataURL>
<Style>
<Name>BNDES:IE_2015</Name>
<Title>BNDES:IE_2015</Title>
<LegendURL width="183" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IE_2015"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IE_2016</Name>
<Title>Indústria Extrativa 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>IE_2016</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-70.05299221772322</westBoundLongitude>
<eastBoundLongitude>-35.5549884723575</eastBoundLongitude>
<southBoundLatitude>-32.64412933776265</southBoundLatitude>
<northBoundLatitude>2.2501361242287867</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-70.05299221772322" miny="-32.64412933776265" maxx="-35.5549884723575" maxy="2.2501361242287867"/>
<BoundingBox CRS="EPSG:4674" minx="-32.6441293386201" miny="-70.0529922177232" maxx="2.25013612430292" maxy="-35.5549884723575"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=7517950f-a241-4450-bb43-f2f07018f311"/>
</MetadataURL>
<Style>
<Name>BNDES:IE_2016</Name>
<Title>BNDES:IE_2016</Title>
<LegendURL width="135" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IE_2016"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IE_2017</Name>
<Title>Indústria Extrativa 2017</Title>
<Abstract/>
<KeywordList>
<Keyword>IE_2017</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-64.3406878020679</westBoundLongitude>
<eastBoundLongitude>-35.5549884723575</eastBoundLongitude>
<southBoundLatitude>-31.85948816907944</southBoundLatitude>
<northBoundLatitude>3.6059879998880087</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-64.3406878020679" miny="-31.85948816907944" maxx="-35.5549884723575" maxy="3.6059879998880087"/>
<BoundingBox CRS="EPSG:4674" minx="-31.8594881699258" miny="-64.3406878020679" maxx="3.60598800000662" maxy="-35.5549884723575"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=ba087b6c-8a4a-49ca-8b06-ceb88189e03c"/>
</MetadataURL>
<Style>
<Name>BNDES:IE_2017</Name>
<Title>BNDES:IE_2017</Title>
<LegendURL width="129" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IE_2017"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IE_2018</Name>
<Title>Indústria Extrativa 2018</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>industria_extrativista2018</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.3128929138184</westBoundLongitude>
<eastBoundLongitude>-29.6093502044678</eastBoundLongitude>
<southBoundLatitude>-32.6441307067871</southBoundLatitude>
<northBoundLatitude>3.70189261436462</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.3128929138184" miny="-32.6441307067871" maxx="-29.6093502044678" maxy="3.70189261436462"/>
<BoundingBox CRS="EPSG:4674" minx="-32.6441307067871" miny="-60.3128929138184" maxx="3.70189261436462" maxy="-29.6093502044678"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=bfd507d6-6f68-43d7-a1db-9c1ae00e1df8"/>
</MetadataURL>
<Style>
<Name>BNDES:IE_2018</Name>
<Title>BNDES:IE_2018</Title>
<LegendURL width="177" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IE_2018"/>
</LegendURL>
</Style>
<Style>
<Name>BNDES:IE_2018</Name>
<Title>BNDES:IE_2018</Title>
<LegendURL width="177" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IE_2018&style=IE_2018"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IT_2009</Name>
<Title>Indústria de Transformação 2009</Title>
<Abstract/>
<KeywordList>
<Keyword>IT_2009</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6320298587681</westBoundLongitude>
<eastBoundLongitude>-34.7937031650182</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>3.6058070000649</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6320298587681" miny="-33.7520136933788" maxx="-34.7937031650182" maxy="3.6058070000649"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-73.6320298587681" maxx="3.6058070000649" maxy="-34.7937031650182"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=9b6005f8-c43b-433f-b09a-3e26ae3425c5"/>
</MetadataURL>
<Style>
<Name>BNDES:IT_2009</Name>
<Title>BNDES:IT_2009</Title>
<LegendURL width="201" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IT_2009"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IT_2010</Name>
<Title>Indústria de Transformação 2010</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>IT_2010</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6320298587681</westBoundLongitude>
<eastBoundLongitude>-34.7937031650182</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>3.6058070000649</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6320298587681" miny="-33.7520136933788" maxx="-34.7937031650182" maxy="3.6058070000649"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-73.6320298587681" maxx="3.6058070000649" maxy="-34.7937031650182"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=a9487562-c511-4a30-bcbf-f176c29d07f1"/>
</MetadataURL>
<Style>
<Name>BNDES:IT_2010</Name>
<Title>BNDES:IT_2010</Title>
<LegendURL width="201" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IT_2010"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IT_2011</Name>
<Title>Indústria de Transformação 2011</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>IT_2011</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9913915619595</westBoundLongitude>
<eastBoundLongitude>-34.7937031650182</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>4.43665587655256</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9913915619595" miny="-33.7520136933788" maxx="-34.7937031650182" maxy="4.43665587655256"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-73.9913915619595" maxx="4.43665587655256" maxy="-34.7937031650182"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=abbc45ff-e420-4294-ad57-074d93b741dd"/>
</MetadataURL>
<Style>
<Name>BNDES:IT_2011</Name>
<Title>BNDES:IT_2011</Title>
<LegendURL width="194" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IT_2011"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IT_2012</Name>
<Title>Indústria de Transformação 2012</Title>
<Abstract/>
<KeywordList>
<Keyword>IT_2012</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6320298587681</westBoundLongitude>
<eastBoundLongitude>-34.7937031650182</eastBoundLongitude>
<southBoundLatitude>-33.7520136933788</southBoundLatitude>
<northBoundLatitude>4.43665587655256</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6320298587681" miny="-33.7520136933788" maxx="-34.7937031650182" maxy="4.43665587655256"/>
<BoundingBox CRS="EPSG:4326" minx="-33.7520136933788" miny="-73.6320298587681" maxx="4.43665587655256" maxy="-34.7937031650182"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=2b54f734-ae9e-4a5d-9f3f-11023018373f"/>
</MetadataURL>
<Style>
<Name>BNDES:IT_2012</Name>
<Title>BNDES:IT_2012</Title>
<LegendURL width="194" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IT_2012"/>
</LegendURL>
</Style>
<MaxScaleDenominator>1.0E20</MaxScaleDenominator>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IT_2013</Name>
<Title>Indústria de Transformação 2013</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>IT_2013</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-67.07700347900389</westBoundLongitude>
<eastBoundLongitude>-34.793701171875</eastBoundLongitude>
<southBoundLatitude>-33.75201415928419</southBoundLatitude>
<northBoundLatitude>4.436655998084245</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-67.07700347900389" miny="-33.75201415928419" maxx="-34.793701171875" maxy="4.436655998084245"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7520141601562" miny="-67.0770034790039" maxx="4.43665599822998" maxy="-34.793701171875"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=8aaf24c0-d38f-4fd1-aa88-63b721927183"/>
</MetadataURL>
<Style>
<Name>BNDES:IT_2013</Name>
<Title>BNDES:IT_2013</Title>
<LegendURL width="216" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IT_2013"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IT_2014</Name>
<Title>Indústria de Transformação 2014</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>IT_2014</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-66.8427352905273</westBoundLongitude>
<eastBoundLongitude>-34.793701171875</eastBoundLongitude>
<southBoundLatitude>-33.75201415928419</southBoundLatitude>
<northBoundLatitude>4.436655998084245</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-66.8427352905273" miny="-33.75201415928419" maxx="-34.793701171875" maxy="4.436655998084245"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7520141601562" miny="-66.8427352905273" maxx="4.43665599822998" maxy="-34.793701171875"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=3ad18114-d044-4f78-89d1-06bfdaa227aa"/>
</MetadataURL>
<Style>
<Name>BNDES:IT_2014</Name>
<Title>BNDES:IT_2014</Title>
<LegendURL width="218" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IT_2014"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IT_2015</Name>
<Title>Indústria de Transformação 2015</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>IT_2015</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6455192979168</westBoundLongitude>
<eastBoundLongitude>-28.84048936307761</eastBoundLongitude>
<southBoundLatitude>-33.750464222966606</southBoundLatitude>
<northBoundLatitude>4.436557792685499</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6455192979168" miny="-33.750464222966606" maxx="-28.84048936307761" maxy="4.436557792685499"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504642238386" miny="-73.6455192979168" maxx="4.43655779283123" maxy="-28.8404893630776"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=fa52d347-2a96-4a2c-9c5c-ac9258cda3b8"/>
</MetadataURL>
<Style>
<Name>BNDES:IT_2015</Name>
<Title>BNDES:IT_2015</Title>
<LegendURL width="203" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IT_2015"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IT_2016</Name>
<Title>Indústria de Transformação 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>IT_2016</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6455192979168</westBoundLongitude>
<eastBoundLongitude>-28.84048936307761</eastBoundLongitude>
<southBoundLatitude>-33.750464222966606</southBoundLatitude>
<northBoundLatitude>4.436557792685499</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6455192979168" miny="-33.750464222966606" maxx="-28.84048936307761" maxy="4.436557792685499"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504642238386" miny="-73.6455192979168" maxx="4.43655779283123" maxy="-28.8404893630776"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=14eb75fe-a409-49b0-a62d-cbe82b10aa58"/>
</MetadataURL>
<Style>
<Name>BNDES:IT_2016</Name>
<Title>BNDES:IT_2016</Title>
<LegendURL width="178" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IT_2016"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IT_2017</Name>
<Title>Indústria de Transformação 2017</Title>
<Abstract/>
<KeywordList>
<Keyword>IT_2017</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6455192979168</westBoundLongitude>
<eastBoundLongitude>-28.84048936307761</eastBoundLongitude>
<southBoundLatitude>-33.750464222966606</southBoundLatitude>
<northBoundLatitude>3.6059879998880087</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6455192979168" miny="-33.750464222966606" maxx="-28.84048936307761" maxy="3.6059879998880087"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504642238386" miny="-73.6455192979168" maxx="3.60598800000662" maxy="-28.8404893630776"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=80fddb07-92e7-43ff-994d-f0d31da03191"/>
</MetadataURL>
<Style>
<Name>BNDES:IT_2017</Name>
<Title>BNDES:IT_2017</Title>
<LegendURL width="184" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IT_2017"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>IT_2018</Name>
<Title>Industria de Transformação 2018</Title>
<Abstract/>
<KeywordList>
<Keyword>industria_de_transformacao2018</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-66.1227111816406</westBoundLongitude>
<eastBoundLongitude>-29.9771137237549</eastBoundLongitude>
<southBoundLatitude>-32.6441307067871</southBoundLatitude>
<northBoundLatitude>2.93227410316467</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-66.1227111816406" miny="-32.6441307067871" maxx="-29.9771137237549" maxy="2.93227410316467"/>
<BoundingBox CRS="EPSG:4674" minx="-32.6441307067871" miny="-66.1227111816406" maxx="2.93227410316467" maxy="-29.9771137237549"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=a3a5e2af-ffcf-4b91-a14f-4ad4a0cf9315"/>
</MetadataURL>
<Style>
<Name>BNDES:IT_2018</Name>
<Title>BNDES:IT_2018</Title>
<LegendURL width="204" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=IT_2018"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>TOTAL_2013</Name>
<Title>Setores CNAE por Município 2013</Title>
<Abstract/>
<KeywordList>
<Keyword>TOTAL_2013</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-67.4343185424805</westBoundLongitude>
<eastBoundLongitude>-32.3924560546875</eastBoundLongitude>
<southBoundLatitude>-33.75201415928419</southBoundLatitude>
<northBoundLatitude>4.884584426719569</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-67.4343185424805" miny="-33.75201415928419" maxx="-32.3924560546875" maxy="4.884584426719569"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7520141601562" miny="-67.4343185424805" maxx="4.88458442687988" maxy="-32.3924560546875"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=76b9395f-e8d6-4105-8588-18d942711968"/>
</MetadataURL>
<Style>
<Name>BNDES:TOTAL_2013</Name>
<Title>BNDES:TOTAL_2013</Title>
<LegendURL width="230" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=TOTAL_2013"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>TOTAL_2014</Name>
<Title>Setores CNAE por município 2014</Title>
<Abstract/>
<KeywordList>
<Keyword>TOTAL_2014</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-67.455322265625</westBoundLongitude>
<eastBoundLongitude>-32.3924560546875</eastBoundLongitude>
<southBoundLatitude>-33.75201415928419</southBoundLatitude>
<northBoundLatitude>4.884584426719569</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-67.455322265625" miny="-33.75201415928419" maxx="-32.3924560546875" maxy="4.884584426719569"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7520141601562" miny="-67.455322265625" maxx="4.88458442687988" maxy="-32.3924560546875"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=eecb6170-a2a5-4815-9a11-1babb065fc17"/>
</MetadataURL>
<Style>
<Name>BNDES:TOTAL_2014</Name>
<Title>BNDES:TOTAL_2014</Title>
<LegendURL width="217" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=TOTAL_2014"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>TOTAL_2015</Name>
<Title>Setores CNAE por município 2015</Title>
<Abstract/>
<KeywordList>
<Keyword>TOTAL_2015</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9990397779885</westBoundLongitude>
<eastBoundLongitude>-28.84048936307761</eastBoundLongitude>
<southBoundLatitude>-33.750464222966606</southBoundLatitude>
<northBoundLatitude>4.872161977858303</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9990397779885" miny="-33.750464222966606" maxx="-28.84048936307761" maxy="4.872161977858303"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504642238386" miny="-73.9990397779885" maxx="4.87216197801821" maxy="-28.8404893630776"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=59515525-733d-4988-80aa-378c703aa701"/>
</MetadataURL>
<Style>
<Name>BNDES:TOTAL_2015</Name>
<Title>BNDES:TOTAL_2015</Title>
<LegendURL width="203" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=TOTAL_2015"/>
</LegendURL>
</Style>
<Style>
<Name>BNDES:TOTAL_2015</Name>
<Title>BNDES:TOTAL_2015</Title>
<LegendURL width="203" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=TOTAL_2015&style=TOTAL_2015"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>Total_2016</Name>
<Title>Setores CNAE por município 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>Total_2016</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9990397779885</westBoundLongitude>
<eastBoundLongitude>-28.84048936307761</eastBoundLongitude>
<southBoundLatitude>-33.750464222966606</southBoundLatitude>
<northBoundLatitude>4.872161977858303</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9990397779885" miny="-33.750464222966606" maxx="-28.84048936307761" maxy="4.872161977858303"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504642238386" miny="-73.9990397779885" maxx="4.87216197801821" maxy="-28.8404893630776"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=1c0bb1ff-6960-4971-865e-7d023139ca85"/>
</MetadataURL>
<Style>
<Name>BNDES:Total_2016</Name>
<Title>BNDES:Total_2016</Title>
<LegendURL width="178" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=Total_2016"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>Total_2017</Name>
<Title>Setores CNAE por município 2017</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>Total_2017</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6455192979168</westBoundLongitude>
<eastBoundLongitude>-28.84048936307761</eastBoundLongitude>
<southBoundLatitude>-33.750464222966606</southBoundLatitude>
<northBoundLatitude>4.872161977858303</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6455192979168" miny="-33.750464222966606" maxx="-28.84048936307761" maxy="4.872161977858303"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504642238386" miny="-73.6455192979168" maxx="4.87216197801821" maxy="-28.8404893630776"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=f358be88-f47d-463d-a22f-4524d1338a63"/>
</MetadataURL>
<Style>
<Name>BNDES:Total_2018</Name>
<Title>BNDES:Total_2018</Title>
<LegendURL width="201" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=Total_2017"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>Total_2018</Name>
<Title>Setores CNAE por município 2018</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>total2018</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-67.4068069458008</westBoundLongitude>
<eastBoundLongitude>-28.8404884338379</eastBoundLongitude>
<southBoundLatitude>-33.7504653930664</southBoundLatitude>
<northBoundLatitude>4.87216234207153</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-67.4068069458008" miny="-33.7504653930664" maxx="-28.8404884338379" maxy="4.87216234207153"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504653930664" miny="-67.4068069458008" maxx="4.87216234207153" maxy="-28.8404884338379"/>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="https://metadados.inde.gov.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=425971af-1be0-4f32-81c4-a2d78bb01a85"/>
</MetadataURL>
<Style>
<Name>BNDES:Total_2018</Name>
<Title>BNDES:Total_2018</Title>
<LegendURL width="201" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=Total_2018"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>agropecuariapesca</Name>
<Title>Agropecuária e Pesca 2020</Title>
<Abstract>Aprovações do Sistema BNDES para o grande setor CNAE Agropeciária e Pesca, por município, no ano de 2020. Valor total aprovado: R$ 20.700.243.175,45. Valor de aprovações em operações sem informação municipal discriminada: R$ 32.954.000,00. Definição: Aprovação: autorização do Sistema BNDES para apoio financeiro.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>agropecuariapesca</Keyword>
<Keyword>BNDES</Keyword>
<Keyword>Agropecuária</Keyword>
<Keyword>Pesca</Keyword>
<Keyword>Economia</Keyword>
<Keyword>Setor CNAE</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6455230712891</westBoundLongitude>
<eastBoundLongitude>-29.3447570800781</eastBoundLongitude>
<southBoundLatitude>-33.7504653930664</southBoundLatitude>
<northBoundLatitude>4.32946157455444</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6455230712891" miny="-33.7504653930664" maxx="-29.3447570800781" maxy="4.32946157455444"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504653930664" miny="-73.6455230712891" maxx="4.32946157455444" maxy="-29.3447570800781"/>
<Style>
<Name>BNDES:AgropecuariaPesca2020</Name>
<Title>BNDES:AgropecuariaPesca2020</Title>
<LegendURL width="239" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=agropecuariapesca"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>ap2019</Name>
<Title>Agropecuária e Pesca 2019</Title>
<Abstract>Aprovações do Sistema BNDES para o grande setor CNAE Agropecuária e Pesca, por município, no ano de 2019. Valor total aprovado: R$ 17.936.027.066 Valor de aprovações em operações sem informação municipal discriminada: R$ 162.780,00. Definição: Aprovação: autorização do Sistema BNDES para apoio financeiro.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>ap2019</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-70.627815246582</westBoundLongitude>
<eastBoundLongitude>-34.7875823974609</eastBoundLongitude>
<southBoundLatitude>-33.7504653930664</southBoundLatitude>
<northBoundLatitude>3.74528861045837</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-70.627815246582" miny="-33.7504653930664" maxx="-34.7875823974609" maxy="3.74528861045837"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504653930664" miny="-70.627815246582" maxx="3.74528861045837" maxy="-34.7875823974609"/>
<Style>
<Name>BNDES:AP_2019</Name>
<Title>BNDES:AP_2019</Title>
<LegendURL width="239" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ap2019"/>
</LegendURL>
</Style>
<Style>
<Name>BNDES:AP_2019</Name>
<Title>BNDES:AP_2019</Title>
<LegendURL width="239" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ap2019&style=AP_2019"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>cs2019</Name>
<Title>Comércio e Serviços 2019</Title>
<Abstract>Aprovações do Sistema BNDES para grande setor CNAE Comércio e Serviço, por município em 2019. Valor total aprovado: R$ 34.361.316.617 Valor de aprovações em operações sem informação municipal discriminada: R$ 17.437.267.686 Definição: Aprovação: autorização do Sistema BNDES para apoio financeiro. Intermunicipal: Projetos em dois ou mais municípios ou não localizados nesse nível de operação.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>cs2019</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-122.19</westBoundLongitude>
<eastBoundLongitude>-25.28</eastBoundLongitude>
<southBoundLatitude>-59.87</southBoundLatitude>
<northBoundLatitude>32.72</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-122.19" miny="-59.87" maxx="-25.28" maxy="32.72"/>
<BoundingBox CRS="EPSG:4674" minx="-59.87" miny="-122.19" maxx="32.72" maxy="-25.28"/>
<Style>
<Name>BNDES:CS_2019</Name>
<Title>BNDES:CS_2019</Title>
<LegendURL width="229" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=cs2019"/>
</LegendURL>
</Style>
<Style>
<Name>BNDES:CS_2019</Name>
<Title>BNDES:CS_2019</Title>
<LegendURL width="229" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=cs2019&style=CS_2019"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>ie2019</Name>
<Title>Indústria Extrativa 2019</Title>
<Abstract>Aprovações do Sistema BNDES para o grande setor CNAE Indústria Extrativa, por município, no ano de 2019. Valor total aprovado: R$ 160.699.866,04. Não houve aprovações de operações sem informação municipal discriminada. Definição: Aprovação: autorização do Sistema BNDES para apoio financeiro.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>ie2019</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-122.19</westBoundLongitude>
<eastBoundLongitude>-25.28</eastBoundLongitude>
<southBoundLatitude>-59.87</southBoundLatitude>
<northBoundLatitude>32.72</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-122.19" miny="-59.87" maxx="-25.28" maxy="32.72"/>
<BoundingBox CRS="EPSG:4674" minx="-59.87" miny="-122.19" maxx="32.72" maxy="-25.28"/>
<Style>
<Name>BNDES:IE_2019</Name>
<Title>BNDES:IE_2019</Title>
<LegendURL width="219" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ie2019"/>
</LegendURL>
</Style>
<Style>
<Name>BNDES:IE_2019</Name>
<Title>BNDES:IE_2019</Title>
<LegendURL width="219" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ie2019&style=IE_2019"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>industriaextrativa</Name>
<Title>Indústria Extrativa 2020</Title>
<Abstract>Aprovações do Sistema BNDES para o grande setor CNAE Indústria Extrativa, por município, no ano de 2020. Valor total aprovado: R$ 872.635.470,79. Valor de aprovações em operações sem informação municipal discriminada: R$ 500.000,00. Definição: Aprovação: autorização do Sistema BNDES para apoio financeiro.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>industriaextrativa</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.7039566040039</westBoundLongitude>
<eastBoundLongitude>-34.8260955810547</eastBoundLongitude>
<southBoundLatitude>-32.6441307067871</southBoundLatitude>
<northBoundLatitude>4.43655824661255</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.7039566040039" miny="-32.6441307067871" maxx="-34.8260955810547" maxy="4.43655824661255"/>
<BoundingBox CRS="EPSG:4674" minx="-32.6441307067871" miny="-60.7039566040039" maxx="4.43655824661255" maxy="-34.8260955810547"/>
<Style>
<Name>BNDES:IndExtrativa2020</Name>
<Title>BNDES:IndExtrativa2020</Title>
<LegendURL width="229" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=industriaextrativa"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>industriatransformacao</Name>
<Title>Indústria de Transformação 2020</Title>
<Abstract>Aprovações do Sistema BNDES para o grande setor CNAE Indústria de Transformação, por município, no ano de 2020. Valor total aprovado: R$ 14.186.263.257,34. Valor de aprovações em operações sem informação municipal discriminada: R$ 354.514.000,00 . Definição: Aprovação: autorização do Sistema BNDES para apoio financeiro.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>industriatransformacao</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6455230712891</westBoundLongitude>
<eastBoundLongitude>-28.8477687835693</eastBoundLongitude>
<southBoundLatitude>-32.6567764282227</southBoundLatitude>
<northBoundLatitude>3.60598802566528</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6455230712891" miny="-32.6567764282227" maxx="-28.8477687835693" maxy="3.60598802566528"/>
<BoundingBox CRS="EPSG:4674" minx="-32.6567764282227" miny="-73.6455230712891" maxx="3.60598802566528" maxy="-28.8477687835693"/>
<Style>
<Name>BNDES:IT_2020</Name>
<Title>BNDES:IT_2020</Title>
<LegendURL width="229" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=industriatransformacao"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>it2019</Name>
<Title>Indústria de Transformação 2019</Title>
<Abstract>Aprovações do Sistema BNDES para o grande setor CNAE Indústria de Transformação, por município, no ano de 2019. Valor total aprovado: R$ 10.618.694.277,37. Valor de aprovações em operações sem informação municipal discriminada: R$ 36.135.038,00. Definição: Aprovação: autorização do Sistema BNDES para apoio financeiro.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>it2019</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-122.19</westBoundLongitude>
<eastBoundLongitude>-25.28</eastBoundLongitude>
<southBoundLatitude>-59.87</southBoundLatitude>
<northBoundLatitude>32.72</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-122.19" miny="-59.87" maxx="-25.28" maxy="32.72"/>
<BoundingBox CRS="EPSG:4674" minx="-59.87" miny="-122.19" maxx="32.72" maxy="-25.28"/>
<Style>
<Name>BNDES:IT_2019</Name>
<Title>BNDES:IT_2019</Title>
<LegendURL width="229" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=it2019"/>
</LegendURL>
</Style>
<Style>
<Name>BNDES:IT_2019</Name>
<Title>BNDES:IT_2019</Title>
<LegendURL width="229" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=it2019&style=IT_2019"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>total2019</Name>
<Title>Setor CNAE por município 2019</Title>
<Abstract>Aprovações do Sistema BNDES para os grandes setores CNAE por município, no ano de 2019. Valor total aprovado: R$ 63.076.737.826,28. Valor de aprovações em operações sem informação municipal discriminada: R$ 17.473.565.504,38 Definição: Aprovação: autorização do Sistema BNDES para apoio financeiro.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>total2019</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-122.19</westBoundLongitude>
<eastBoundLongitude>-25.28</eastBoundLongitude>
<southBoundLatitude>-59.87</southBoundLatitude>
<northBoundLatitude>32.72</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-122.19" miny="-59.87" maxx="-25.28" maxy="32.72"/>
<BoundingBox CRS="EPSG:4674" minx="-59.87" miny="-122.19" maxx="32.72" maxy="-25.28"/>
<Style>
<Name>BNDES:Total_2019</Name>
<Title>BNDES:Total_2019</Title>
<LegendURL width="239" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=total2019"/>
</LegendURL>
</Style>
<Style>
<Name>BNDES:Total_2019</Name>
<Title>BNDES:Total_2019</Title>
<LegendURL width="239" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=total2019&style=Total_2019"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>total2020</Name>
<Title>Setor CNAE por município 2020</Title>
<Abstract>Aprovações do Sistema BNDES para os grandes setores CNAE por município, no ano de 2020. Valor total aprovado: R$ 88.732.558.686,12. Valor de aprovações em operações sem informação municipal discriminada: R$ 20.519.624.813,30. Definição: Aprovação: autorização do Sistema BNDES para apoio financeiro.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>total2020</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6455230712891</westBoundLongitude>
<eastBoundLongitude>-28.8477687835693</eastBoundLongitude>
<southBoundLatitude>-33.7504653930664</southBoundLatitude>
<northBoundLatitude>4.43655824661255</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6455230712891" miny="-33.7504653930664" maxx="-28.8477687835693" maxy="4.43655824661255"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7504653930664" miny="-73.6455230712891" maxx="4.43655824661255" maxy="-28.8477687835693"/>
<Style>
<Name>BNDES:Total2020</Name>
<Title>BNDES:Total2020</Title>
<LegendURL width="246" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://geoservicos.inde.gov.br/geoserver/BNDES/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=total2020"/>
</LegendURL>
</Style>
</Layer>
</Layer>
</Capability>
</WMS_Capabilities>`

export const ebXML =`<WMS_Capabilities xmlns="http://www.opengis.net/wms" xmlns:sld="http://www.opengis.net/sld" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ms="http://mapserver.gis.umn.edu/mapserver" version="1.3.0" xsi:schemaLocation="http://www.opengis.net/wms http://schemas.opengis.net/wms/1.3.0/capabilities_1_3_0.xsd http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/sld_capabilities.xsd http://mapserver.gis.umn.edu/mapserver https://bdgex.eb.mil.br/mapcache3857?service=WMS&version=1.3.0&request=GetSchemaExtension">
<!--  MapServer version 7.7-dev OUTPUT=PNG OUTPUT=JPEG OUTPUT=KML SUPPORTS=PROJ SUPPORTS=AGG SUPPORTS=FREETYPE SUPPORTS=CAIRO SUPPORTS=SVG_SYMBOLS SUPPORTS=RSVG SUPPORTS=ICONV SUPPORTS=FRIBIDI SUPPORTS=WMS_SERVER SUPPORTS=WMS_CLIENT SUPPORTS=WFS_SERVER SUPPORTS=WFS_CLIENT SUPPORTS=WCS_SERVER SUPPORTS=SOS_SERVER SUPPORTS=FASTCGI SUPPORTS=GEOS SUPPORTS=POINT_Z_M SUPPORTS=PBF INPUT=JPEG INPUT=POSTGIS INPUT=OGR INPUT=GDAL INPUT=SHAPEFILE  -->
<Service>
<Name>WMS</Name>
<Title>BDGEx</Title>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
<ContactInformation> </ContactInformation>
<MaxWidth>4096</MaxWidth>
<MaxHeight>4096</MaxHeight>
</Service>
<Capability>
<Request>
<GetCapabilities>
<Format>text/xml</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
</Get>
<Post>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
</Post>
</HTTP>
</DCPType>
</GetCapabilities>
<GetMap>
<Format>image/png</Format>
<Format>image/jpeg</Format>
<Format>image/png; mode=8bit</Format>
<Format>image/vnd.jpeg-png</Format>
<Format>image/vnd.jpeg-png8</Format>
<Format>application/x-pdf</Format>
<Format>image/svg+xml</Format>
<Format>image/tiff</Format>
<Format>application/vnd.google-earth.kml+xml</Format>
<Format>application/vnd.google-earth.kmz</Format>
<Format>application/x-protobuf</Format>
<Format>application/json</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
</Get>
<Post>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
</Post>
</HTTP>
</DCPType>
</GetMap>
<GetFeatureInfo>
<Format>text/html</Format>
<Format>application/vnd.ogc.gml</Format>
<Format>text/plain</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
</Get>
<Post>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
</Post>
</HTTP>
</DCPType>
</GetFeatureInfo>
<sld:DescribeLayer>
<Format>text/xml</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
</Get>
<Post>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
</Post>
</HTTP>
</DCPType>
</sld:DescribeLayer>
<sld:GetLegendGraphic>
<Format>image/png</Format>
<Format>image/jpeg</Format>
<Format>image/png; mode=8bit</Format>
<Format>image/vnd.jpeg-png</Format>
<Format>image/vnd.jpeg-png8</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
</Get>
<Post>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
</Post>
</HTTP>
</DCPType>
</sld:GetLegendGraphic>
<ms:GetStyles>
<Format>text/xml</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
</Get>
<Post>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://bdgex.eb.mil.br/mapcache3857?"/>
</Post>
</HTTP>
</DCPType>
</ms:GetStyles>
</Request>
<Exception>
<Format>XML</Format>
<Format>INIMAGE</Format>
<Format>BLANK</Format>
</Exception>
<sld:UserDefinedSymbolization SupportSLD="1" UserLayer="0" UserStyle="1" RemoteWFS="0" InlineFeature="0" RemoteWCS="0"/>
<Layer queryable="1">
<Name>BDGEx</Name>
<Title>BDGEx</Title>
<Abstract>BDGEx</Abstract>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:3857</CRS>
<CRS>EPSG:3395</CRS>
<CRS>EPSG:900913</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-125</westBoundLongitude>
<eastBoundLongitude>0</eastBoundLongitude>
<southBoundLatitude>-82.5</southBoundLatitude>
<northBoundLatitude>42.5</northBoundLatitude>
</EX_GeographicBoundingBox>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>ram_colorimetria_50</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>ram_colorimetria_50</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=ram_colorimetria_50"/>
</MetadataURL>
</Layer>
<Layer queryable="1" opaque="0" cascaded="1">
<Name>capitais</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>capitais</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=capitais"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>ram_colorimetria_25</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>ram_colorimetria_25</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=ram_colorimetria_25"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>curva_nivel100</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>curva_nivel100</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=curva_nivel100"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>estados</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>estados</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=estados"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>rapideye</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>rapideye</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=rapideye"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>ctm100</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>ctm100</Title>
<CRS>EPSG:4326</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-125</westBoundLongitude>
<eastBoundLongitude>0</eastBoundLongitude>
<southBoundLatitude>-55</southBoundLatitude>
<northBoundLatitude>15</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="EPSG:4326" minx="-55" miny="-125" maxx="15" maxy="0"/>
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=ctm100"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>curva_nivel250</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>curva_nivel250</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=curva_nivel250"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>basebrasil</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>basebrasil</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=basebrasil"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>ctm250</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>ctm250</Title>
<CRS>EPSG:4326</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-125</westBoundLongitude>
<eastBoundLongitude>0</eastBoundLongitude>
<southBoundLatitude>-55</southBoundLatitude>
<northBoundLatitude>15</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="EPSG:4326" minx="-55" miny="-125" maxx="15" maxy="0"/>
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=ctm250"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>mds250</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>mds250</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=mds250"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>landsat7</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>landsat7</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=landsat7"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>ortoimagem_scn25</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>ortoimagem_scn25</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=ortoimagem_scn25"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>municipios</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>municipios</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=municipios"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>curva_nivel50</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>curva_nivel50</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=curva_nivel50"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>ctm</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>ctm</Title>
<CRS>EPSG:4326</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-125</westBoundLongitude>
<eastBoundLongitude>0</eastBoundLongitude>
<southBoundLatitude>-55</southBoundLatitude>
<northBoundLatitude>15</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="EPSG:4326" minx="-55" miny="-125" maxx="15" maxy="0"/>
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=ctm"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>curva_nivel25</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>curva_nivel25</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=curva_nivel25"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>ctm50</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>ctm50</Title>
<CRS>EPSG:4326</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-125</westBoundLongitude>
<eastBoundLongitude>0</eastBoundLongitude>
<southBoundLatitude>-55</southBoundLatitude>
<northBoundLatitude>15</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="EPSG:4326" minx="-55" miny="-125" maxx="15" maxy="0"/>
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=ctm50"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>ctm25</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>ctm25</Title>
<CRS>EPSG:4326</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-125</westBoundLongitude>
<eastBoundLongitude>0</eastBoundLongitude>
<southBoundLatitude>-55</southBoundLatitude>
<northBoundLatitude>15</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="EPSG:4326" minx="-55" miny="-125" maxx="15" maxy="0"/>
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=ctm25"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>mds25</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>mds25</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=mds25"/>
</MetadataURL>
</Layer>
<Layer queryable="0" opaque="0" cascaded="1">
<Name>mds50</Name>
<!--  WARNING: Mandatory metadata '..._title' was missing in this context.  -->
<Title>mds50</Title>
<CRS>EPSG:4326</CRS>
<!--  WARNING: Optional Ex_GeographicBoundingBox could not be established for this layer.  Consider setting the EXTENT in the LAYER object, or wms_extent metadata. Also check that your data exists in the DATA statement  -->
<MetadataURL type="TC211">
<Format>text/xml</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://bdgex.eb.mil.br/mapcache3857?request=GetMetadata&layer=mds50"/>
</MetadataURL>
</Layer>
</Layer>
</Capability>
</WMS_Capabilities>`
export const ideRSXML = `<WMS_Capabilities xmlns="http://www.opengis.net/wms" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:esri_wms="http://www.esri.com/wms" version="1.3.0" xsi:schemaLocation="http://www.opengis.net/wms http://schemas.opengis.net/wms/1.3.0/capabilities_1_3_0.xsd http://www.esri.com/wms https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?version=1.3.0%26service=WMS%26request=GetSchemaExtension">
<Service>
<Name>
<![CDATA[ WMS ]]>
</Name>
<Title>
<![CDATA[ INDE_IEDE_RS ]]>
</Title>
<Abstract>WMS</Abstract>
<KeywordList>
<Keyword>
<![CDATA[ ]]>
</Keyword>
</KeywordList>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?"/>
<ContactInformation>
<ContactPersonPrimary>
<ContactPerson>
<![CDATA[ ]]>
</ContactPerson>
<ContactOrganization>
<![CDATA[ ]]>
</ContactOrganization>
</ContactPersonPrimary>
<ContactPosition>
<![CDATA[ ]]>
</ContactPosition>
<ContactAddress>
<AddressType>
<![CDATA[ ]]>
</AddressType>
<Address>
<![CDATA[ ]]>
</Address>
<City>
<![CDATA[ ]]>
</City>
<StateOrProvince>
<![CDATA[ ]]>
</StateOrProvince>
<PostCode>
<![CDATA[ ]]>
</PostCode>
<Country>
<![CDATA[ ]]>
</Country>
</ContactAddress>
<ContactVoiceTelephone>
<![CDATA[ ]]>
</ContactVoiceTelephone>
<ContactFacsimileTelephone>
<![CDATA[ ]]>
</ContactFacsimileTelephone>
<ContactElectronicMailAddress>
<![CDATA[ ]]>
</ContactElectronicMailAddress>
</ContactInformation>
<Fees>
<![CDATA[ ]]>
</Fees>
<AccessConstraints>
<![CDATA[ ]]>
</AccessConstraints>
<MaxWidth>4096</MaxWidth>
<MaxHeight>4096</MaxHeight>
</Service>
<Capability>
<Request>
<GetCapabilities>
<Format>application/vnd.ogc.wms_xml</Format>
<Format>text/xml</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?"/>
</Get>
</HTTP>
</DCPType>
</GetCapabilities>
<GetMap>
<Format>image/bmp</Format>
<Format>image/jpeg</Format>
<Format>image/tiff</Format>
<Format>image/png</Format>
<Format>image/png8</Format>
<Format>image/png24</Format>
<Format>image/png32</Format>
<Format>image/gif</Format>
<Format>image/svg+xml</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?"/>
</Get>
</HTTP>
</DCPType>
</GetMap>
<GetFeatureInfo>
<Format>application/vnd.esri.wms_raw_xml</Format>
<Format>application/vnd.esri.wms_featureinfo_xml</Format>
<Format>application/vnd.ogc.wms_xml</Format>
<Format>application/geojson</Format>
<Format>text/xml</Format>
<Format>text/html</Format>
<Format>text/plain</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?"/>
</Get>
</HTTP>
</DCPType>
</GetFeatureInfo>
<esri_wms:GetStyles>
<Format>application/vnd.ogc.sld+xml</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?"/>
</Get>
</HTTP>
</DCPType>
</esri_wms:GetStyles>
</Request>
<Exception>
<Format>application/vnd.ogc.se_xml</Format>
<Format>application/vnd.ogc.se_inimage</Format>
<Format>application/vnd.ogc.se_blank</Format>
<Format>text/xml</Format>
<Format>XML</Format>
</Exception>
<Layer>
<Title>
<![CDATA[ Mapa ]]>
</Title>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.649743</westBoundLongitude>
<eastBoundLongitude>-49.691352</eastBoundLongitude>
<southBoundLatitude>-33.752081</southBoundLatitude>
<northBoundLatitude>-27.079941</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.649743" miny="-33.752081" maxx="-49.691352" maxy="-27.079941"/>
<BoundingBox CRS="EPSG:4326" minx="-33.752081" miny="-57.649743" maxx="-27.079941" maxy="-49.691352"/>
<BoundingBox CRS="EPSG:4674" minx="-33.752081" miny="-57.649743" maxx="-27.079941" maxy="-49.691352"/>
<Layer queryable="1">
<Name>0</Name>
<Title>
<![CDATA[ Ecossistemas Regionais de Inovação - ERIs ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P><SPAN><SPAN>Foram compilados os dados de Parques Científicos e Tecnológicos credenciados no Programa Gaúcho de Parques Científicos e Tecnológicos (PGTEC) junto a Secretaria Estadual de Inovação, Ciência e Tecnologia. Informações não atualizadas junto a Secretaria e relativas a novas unidades ou campi de parques foram obtidas diretamente dos sítios eletrônicos das instituições em questão e aqui agregadas.</SPAN></SPAN></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.649743</westBoundLongitude>
<eastBoundLongitude>-49.691352</eastBoundLongitude>
<southBoundLatitude>-33.751178</southBoundLatitude>
<northBoundLatitude>-27.082302</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.649743" miny="-33.751178" maxx="-49.691352" maxy="-27.082302"/>
<BoundingBox CRS="EPSG:4326" minx="-33.751178" miny="-57.649743" maxx="-27.082302" maxy="-49.691352"/>
<BoundingBox CRS="EPSG:4674" minx="-33.751178" miny="-57.649743" maxx="-27.082302" maxy="-49.691352"/>
<Style>
<Name>default</Name>
<Title>0</Title>
<LegendURL width="192" height="144">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=0" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>1</Name>
<Title>
<![CDATA[ Estimativa Populacional por Município 2019 ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><P><SPAN><SPAN>Dados relacionados com as estimativas populacionais, para 2019, por município, calculadas pelo IBGE (ver metodologia em https://www.ibge.gov.br/estatisticas/sociais/populacao/9103-estimativas-de-popul?=&amp;t=o-que-e)</SPAN></SPAN></P></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.649743</westBoundLongitude>
<eastBoundLongitude>-49.691352</eastBoundLongitude>
<southBoundLatitude>-33.751178</southBoundLatitude>
<northBoundLatitude>-27.082302</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.649743" miny="-33.751178" maxx="-49.691352" maxy="-27.082302"/>
<BoundingBox CRS="EPSG:4326" minx="-33.751178" miny="-57.649743" maxx="-27.082302" maxy="-49.691352"/>
<BoundingBox CRS="EPSG:4674" minx="-33.751178" miny="-57.649743" maxx="-27.082302" maxy="-49.691352"/>
<Style>
<Name>default</Name>
<Title>1</Title>
<LegendURL width="120" height="108">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=1" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>2</Name>
<Title>
<![CDATA[ Áreas de Inundação da Bacia Hidrográfica do Rio dos Sinos - TR 100 ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P STYLE="margin:0 0 8 0;"><SPAN><SPAN>Dado produzido no âmbito do</SPAN></SPAN><SPAN /><SPAN /><SPAN><SPAN>Plano Metropolitano de Proteção Contra Cheias, contendo as planícies de inundação da Bacia Hidrográfica do Rio dos Sinos, com tempo de retorno de 100 anos.</SPAN></SPAN></P><P><SPAN /></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-51.278185</westBoundLongitude>
<eastBoundLongitude>-50.357563</eastBoundLongitude>
<southBoundLatitude>-29.926511</southBoundLatitude>
<northBoundLatitude>-29.476843</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-51.278185" miny="-29.926511" maxx="-50.357563" maxy="-29.476843"/>
<BoundingBox CRS="EPSG:4326" minx="-29.926511" miny="-51.278185" maxx="-29.476843" maxy="-50.357563"/>
<BoundingBox CRS="EPSG:4674" minx="-29.926511" miny="-51.278185" maxx="-29.476843" maxy="-50.357563"/>
<Style>
<Name>default</Name>
<Title>2</Title>
<LegendURL width="18" height="18">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=2" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>3</Name>
<Title>
<![CDATA[ Áreas de Inundação da Bacia Hidrográfica do Rio Gravataí - TR 100 ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P STYLE="margin:0 0 8 0;"><SPAN><SPAN>Dado produzido no âmbito do</SPAN></SPAN><SPAN /><SPAN /><SPAN><SPAN>Plano Metropolitano de Proteção Contra Cheias, contendo as planícies de inundação da Bacia Hidrográfica do Rio Gravataí, com tempo de retorno de 100 anos.</SPAN></SPAN></P><P><SPAN /></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-51.200230</westBoundLongitude>
<eastBoundLongitude>-50.708739</eastBoundLongitude>
<southBoundLatitude>-30.060225</southBoundLatitude>
<northBoundLatitude>-29.892423</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-51.200230" miny="-30.060225" maxx="-50.708739" maxy="-29.892423"/>
<BoundingBox CRS="EPSG:4326" minx="-30.060225" miny="-51.200230" maxx="-29.892423" maxy="-50.708739"/>
<BoundingBox CRS="EPSG:4674" minx="-30.060225" miny="-51.200230" maxx="-29.892423" maxy="-50.708739"/>
<Style>
<Name>default</Name>
<Title>3</Title>
<LegendURL width="18" height="18">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=3" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>4</Name>
<Title>
<![CDATA[ Áreas de Inundação do Arroio Águas Belas - TR 50 - Alvorada e Porto Alegre/RS ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P STYLE="margin:0 0 8 0;"><SPAN><SPAN>Dado produzido no âmbito do</SPAN></SPAN><SPAN /><SPAN>Plano Metropolitano de Proteção Contra Cheias, contendo as planícies de inundação do Arroio Águas Belas, nos municípios de Porto Alegre e Alvorada/RS, com tempo de retorno de 50 anos.</SPAN></P><P STYLE="margin:0 0 8 0;"><SPAN /></P><P><SPAN /></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-51.200413</westBoundLongitude>
<eastBoundLongitude>-51.001868</eastBoundLongitude>
<southBoundLatitude>-30.029277</southBoundLatitude>
<northBoundLatitude>-29.955068</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-51.200413" miny="-30.029277" maxx="-51.001868" maxy="-29.955068"/>
<BoundingBox CRS="EPSG:4326" minx="-30.029277" miny="-51.200413" maxx="-29.955068" maxy="-51.001868"/>
<BoundingBox CRS="EPSG:4674" minx="-30.029277" miny="-51.200413" maxx="-29.955068" maxy="-51.001868"/>
<Style>
<Name>default</Name>
<Title>4</Title>
<LegendURL width="18" height="18">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=4" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>5</Name>
<Title>
<![CDATA[ Áreas de Inundação do Arroio Feijó - TR 50 - Alvorada e Porto Alegre/RS - ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P STYLE="margin:0 0 8 0;"><SPAN><SPAN>Dado produzido no âmbito do</SPAN></SPAN><SPAN /><SPAN>Plano Metropolitano de Proteção Contra Cheias, contendo as planícies de inundação do Arroio Feijó, nos municípios de Porto Alegre e Alvorada/RS, com tempo de retorno de 50 anos.</SPAN></P><P><SPAN /></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-51.114812</westBoundLongitude>
<eastBoundLongitude>-51.001878</eastBoundLongitude>
<southBoundLatitude>-30.050568</southBoundLatitude>
<northBoundLatitude>-29.955904</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-51.114812" miny="-30.050568" maxx="-51.001878" maxy="-29.955904"/>
<BoundingBox CRS="EPSG:4326" minx="-30.050568" miny="-51.114812" maxx="-29.955904" maxy="-51.001878"/>
<BoundingBox CRS="EPSG:4674" minx="-30.050568" miny="-51.114812" maxx="-29.955904" maxy="-51.001878"/>
<Style>
<Name>default</Name>
<Title>5</Title>
<LegendURL width="18" height="18">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=5" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>6</Name>
<Title>
<![CDATA[ Áreas de Inundação do Arroio São João - TR 50 - Alvorada e Porto Alegre/RS ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P STYLE="margin:0 0 8 0;"><SPAN><SPAN>Dado produzido no âmbito do</SPAN></SPAN><SPAN /><SPAN>Plano Metropolitano de Proteção Contra Cheias, contendo as planícies de inundação do Arroio São João, nos municípios de Porto Alegre e Alvorada/RS, com tempo de retorno de 50 anos.</SPAN></P><P><SPAN /></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-51.116057</westBoundLongitude>
<eastBoundLongitude>-51.001878</eastBoundLongitude>
<southBoundLatitude>-30.029277</southBoundLatitude>
<northBoundLatitude>-29.956054</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-51.116057" miny="-30.029277" maxx="-51.001878" maxy="-29.956054"/>
<BoundingBox CRS="EPSG:4326" minx="-30.029277" miny="-51.116057" maxx="-29.956054" maxy="-51.001878"/>
<BoundingBox CRS="EPSG:4674" minx="-30.029277" miny="-51.116057" maxx="-29.956054" maxy="-51.001878"/>
<Style>
<Name>default</Name>
<Title>6</Title>
<LegendURL width="18" height="18">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=6" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>7</Name>
<Title>
<![CDATA[ Áreas de Inundação do Delta do Jacuí - TR 100 ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P STYLE="margin:0 0 8 0;"><SPAN><SPAN>Dado produzido no âmbito do</SPAN></SPAN><SPAN /><SPAN>Plano Metropolitano de Proteção Contra Cheias, contendo as planícies de inundação com diferentes tempos de retorno, no Delta do Jacuí.</SPAN></P><P><SPAN /></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-51.800306</westBoundLongitude>
<eastBoundLongitude>-51.176812</eastBoundLongitude>
<southBoundLatitude>-30.024028</southBoundLatitude>
<northBoundLatitude>-29.876130</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-51.800306" miny="-30.024028" maxx="-51.176812" maxy="-29.876130"/>
<BoundingBox CRS="EPSG:4326" minx="-30.024028" miny="-51.800306" maxx="-29.876130" maxy="-51.176812"/>
<BoundingBox CRS="EPSG:4674" minx="-30.024028" miny="-51.800306" maxx="-29.876130" maxy="-51.176812"/>
<Style>
<Name>default</Name>
<Title>7</Title>
<LegendURL width="18" height="18">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=7" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>8</Name>
<Title>
<![CDATA[ Arranjos Urbanos Região Metropolitana de POA ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P><SPAN>Arranjos urbanos institucionalizados nas seguintes leis: Lei Complementar nº 14/1973; Lei Complementar nº 11.876/2002; Lei Complementar nº 12.100 / 2004; Lei Complementar nº 14.293/2013.</SPAN></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-52.746042</westBoundLongitude>
<eastBoundLongitude>-49.712566</eastBoundLongitude>
<southBoundLatitude>-32.644146</southBoundLatitude>
<northBoundLatitude>-28.577586</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-52.746042" miny="-32.644146" maxx="-49.712566" maxy="-28.577586"/>
<BoundingBox CRS="EPSG:4326" minx="-32.644146" miny="-52.746042" maxx="-28.577586" maxy="-49.712566"/>
<BoundingBox CRS="EPSG:4674" minx="-32.644146" miny="-52.746042" maxx="-28.577586" maxy="-49.712566"/>
<Style>
<Name>default</Name>
<Title>8</Title>
<LegendURL width="288" height="72">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=8" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>9</Name>
<Title>
<![CDATA[ Municípios no RS ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P><SPAN>Divisão Municipal do Estado do Rio Grande do Sul 2017.</SPAN></P><P><SPAN>Fonte original: IBGE</SPAN><SPAN>. </SPAN><SPAN>As bases cartográficas disponibilizadas são compatíveis com a escala original de trabalho – 1:250.000, sem supressão de pontos, de acordo com critérios técnicos preestabelecidos pela IBGE/DGC/CETE. A Malha Municipal Digital do Brasil é um produto elaborado pela Coordenação de Estruturas Territoriais – CETE da Diretoria de Geociências – DGC, que teve origem no projeto “Arquivo Gráfico Municipal – AGM”.</SPAN></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.644716</westBoundLongitude>
<eastBoundLongitude>-49.691466</eastBoundLongitude>
<southBoundLatitude>-33.751499</southBoundLatitude>
<northBoundLatitude>-27.079941</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.644716" miny="-33.751499" maxx="-49.691466" maxy="-27.079941"/>
<BoundingBox CRS="EPSG:4326" minx="-33.751499" miny="-57.644716" maxx="-27.079941" maxy="-49.691466"/>
<BoundingBox CRS="EPSG:4674" minx="-33.751499" miny="-57.644716" maxx="-27.079941" maxy="-49.691466"/>
<Style>
<Name>default</Name>
<Title>9</Title>
<LegendURL width="18" height="18">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=9" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>10</Name>
<Title>
<![CDATA[ Conselhos Regionais de Desenvolvimento - COREDEs ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P><SPAN>Arquivo obtido a partir da agregação dos dados dos COREDES (tabela .xls), elaborada conforme Decreto n°47.543 de 08 de novembro de 2010, com o shapefile de municípios obtido junto ao site do IBGE</SPAN><SPAN>.</SPAN></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.643885</westBoundLongitude>
<eastBoundLongitude>-49.691352</eastBoundLongitude>
<southBoundLatitude>-33.752081</southBoundLatitude>
<northBoundLatitude>-27.082302</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.643885" miny="-33.752081" maxx="-49.691352" maxy="-27.082302"/>
<BoundingBox CRS="EPSG:4326" minx="-33.752081" miny="-57.643885" maxx="-27.082302" maxy="-49.691352"/>
<BoundingBox CRS="EPSG:4674" minx="-33.752081" miny="-57.643885" maxx="-27.082302" maxy="-49.691352"/>
<Style>
<Name>default</Name>
<Title>10</Title>
<LegendURL width="186" height="504">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=10" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>11</Name>
<Title>
<![CDATA[ Incubadoras de Empresas de Base Tecnológica e Indústria Criativa ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P><SPAN>Dados compilados de incubadoras credenciadas no Programa RS TECNÓPOLE de Apoio às Incubadoras de Base Tecnológica e Indústria Criativa (RS INCUBADORAS) junto a Secretaria de Inovação, Ciência e Tecnologia. </SPAN></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-55.994820</westBoundLongitude>
<eastBoundLongitude>-49.753607</eastBoundLongitude>
<southBoundLatitude>-32.063674</southBoundLatitude>
<northBoundLatitude>-27.650772</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-55.994820" miny="-32.063674" maxx="-49.753607" maxy="-27.650772"/>
<BoundingBox CRS="EPSG:4326" minx="-32.063674" miny="-55.994820" maxx="-27.650772" maxy="-49.753607"/>
<BoundingBox CRS="EPSG:4674" minx="-32.063674" miny="-55.994820" maxx="-27.650772" maxy="-49.753607"/>
<Style>
<Name>default</Name>
<Title>11</Title>
<LegendURL width="22" height="22">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=11" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>12</Name>
<Title>
<![CDATA[ Núcleos de Inovação Tecnológica - NITs ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P><SPAN><SPAN>Dados compilados dos Núcleos de Inovação Tecnológica (NITs) mapeados pela Secretaria Estadual de Inovação, Ciência e Tecnologia. </SPAN></SPAN></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.109069</westBoundLongitude>
<eastBoundLongitude>-51.112575</eastBoundLongitude>
<southBoundLatitude>-32.068035</southBoundLatitude>
<northBoundLatitude>-27.105810</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.109069" miny="-32.068035" maxx="-51.112575" maxy="-27.105810"/>
<BoundingBox CRS="EPSG:4326" minx="-32.068035" miny="-57.109069" maxx="-27.105810" maxy="-51.112575"/>
<BoundingBox CRS="EPSG:4674" minx="-32.068035" miny="-57.109069" maxx="-27.105810" maxy="-51.112575"/>
<Style>
<Name>default</Name>
<Title>12</Title>
<LegendURL width="22" height="22">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=12" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>13</Name>
<Title>
<![CDATA[ Parques Tecnológicos ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P><SPAN>Informações não atualizadas junto a Secretaria e relativas a novas unidades ou campi de parques foram obtidas diretamente dos sítios eletrônicos das instituições em questão e aqui agregadas.</SPAN></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-55.762876</westBoundLongitude>
<eastBoundLongitude>-51.050865</eastBoundLongitude>
<southBoundLatitude>-32.063401</southBoundLatitude>
<northBoundLatitude>-28.227733</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-55.762876" miny="-32.063401" maxx="-51.050865" maxy="-28.227733"/>
<BoundingBox CRS="EPSG:4326" minx="-32.063401" miny="-55.762876" maxx="-28.227733" maxy="-51.050865"/>
<BoundingBox CRS="EPSG:4674" minx="-32.063401" miny="-55.762876" maxx="-28.227733" maxy="-51.050865"/>
<Style>
<Name>default</Name>
<Title>13</Title>
<LegendURL width="22" height="22">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=13" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>14</Name>
<Title>
<![CDATA[ Hospitais no RS ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><P><SPAN><SPAN>Dado criado a partir dos pontos dos estabelecimentos de saúde no RS</SPAN></SPAN></P></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.083776</westBoundLongitude>
<eastBoundLongitude>-49.728047</eastBoundLongitude>
<southBoundLatitude>-33.524364</southBoundLatitude>
<northBoundLatitude>-27.194038</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.083776" miny="-33.524364" maxx="-49.728047" maxy="-27.194038"/>
<BoundingBox CRS="EPSG:4326" minx="-33.524364" miny="-57.083776" maxx="-27.194038" maxy="-49.728047"/>
<BoundingBox CRS="EPSG:4674" minx="-33.524364" miny="-57.083776" maxx="-27.194038" maxy="-49.728047"/>
<Style>
<Name>default</Name>
<Title>14</Title>
<LegendURL width="18" height="18">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=14" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1">
<Name>15</Name>
<Title>
<![CDATA[ Aeroportos em Operação no RS ]]>
</Title>
<Abstract>
<![CDATA[ <DIV STYLE="text-align:Left;"><DIV><DIV><P><SPAN>Pontos dos aeroportos em operação no RS - 2016</SPAN></P></DIV></DIV></DIV> ]]>
</Abstract>
<CRS>CRS:84</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:4674</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.037778</westBoundLongitude>
<eastBoundLongitude>-49.810278</eastBoundLongitude>
<southBoundLatitude>-32.081667</southBoundLatitude>
<northBoundLatitude>-27.659444</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.037778" miny="-32.081667" maxx="-49.810278" maxy="-27.659444"/>
<BoundingBox CRS="EPSG:4326" minx="-32.081667" miny="-57.037778" maxx="-27.659444" maxy="-49.810278"/>
<BoundingBox CRS="EPSG:4674" minx="-32.081667" miny="-57.037778" maxx="-27.659444" maxy="-49.810278"/>
<Style>
<Name>default</Name>
<Title>15</Title>
<LegendURL width="23" height="23">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://iede.rs.gov.br/server/services/INDE/IEDE_RS/MapServer/WMSServer?request=GetLegendGraphic%26version=1.3.0%26format=image/png%26layer=15" xlink:type="simple"/>
</LegendURL>
</Style>
</Layer>
</Layer>
</Capability>
</WMS_Capabilities>`
export const cnpm_embrapaXML = `<WMS_Capabilities version="1.3.0" updateSequence="644" xsi:schemaLocation="http://www.opengis.net/wms http://atlas.geoinfo.cnpm.embrapa.br/geoserver/schemas/wms/1.3.0/capabilities_1_3_0.xsd">
<Service>
<Name>WMS</Name>
<Title>My GeoServer WMS</Title>
<Abstract>
</Abstract>
<KeywordList>
<Keyword>WFS</Keyword>
<Keyword>WMS</Keyword>
<Keyword>GEOSERVER</Keyword>
</KeywordList>
<OnlineResource xlink:type="simple" xlink:href="http://geoserver.org"/>
<ContactInformation>
<ContactPersonPrimary>
<ContactPerson/>
<ContactOrganization/>
</ContactPersonPrimary>
<ContactPosition/>
<ContactAddress>
<AddressType/>
<Address/>
<City/>
<StateOrProvince/>
<PostCode/>
<Country/>
</ContactAddress>
<ContactVoiceTelephone/>
<ContactFacsimileTelephone/>
<ContactElectronicMailAddress/>
</ContactInformation>
<Fees>NONE</Fees>
<AccessConstraints>NONE</AccessConstraints>
</Service>
<Capability>
<Request>
<GetCapabilities>
<Format>text/xml</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/geoserver/ows?SERVICE=WMS&"/>
</Get>
<Post>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/geoserver/ows?SERVICE=WMS&"/>
</Post>
</HTTP>
</DCPType>
</GetCapabilities>
<GetMap>
<Format>image/png</Format>
<Format>application/atom+xml</Format>
<Format>application/pdf</Format>
<Format>application/rss+xml</Format>
<Format>application/vnd.google-earth.kml+xml</Format>
<Format>
application/vnd.google-earth.kml+xml;mode=networklink
</Format>
<Format>application/vnd.google-earth.kmz</Format>
<Format>image/geotiff</Format>
<Format>image/geotiff8</Format>
<Format>image/gif</Format>
<Format>image/jpeg</Format>
<Format>image/png; mode=8bit</Format>
<Format>image/svg+xml</Format>
<Format>image/tiff</Format>
<Format>image/tiff8</Format>
<Format>text/html; subtype=openlayers</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/geoserver/ows?SERVICE=WMS&"/>
</Get>
</HTTP>
</DCPType>
</GetMap>
<GetFeatureInfo>
<Format>text/plain</Format>
<Format>application/vnd.ogc.gml</Format>
<Format>text/xml</Format>
<Format>application/vnd.ogc.gml/3.1.1</Format>
<Format>text/xml; subtype=gml/3.1.1</Format>
<Format>text/html</Format>
<Format>application/json</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/geoserver/ows?SERVICE=WMS&"/>
</Get>
</HTTP>
</DCPType>
</GetFeatureInfo>
</Request>
<Exception>
<Format>XML</Format>
<Format>INIMAGE</Format>
<Format>BLANK</Format>
</Exception>
<Layer>
<Title>My GeoServer WMS</Title>
<Abstract>This is a description of your Web Map Server.</Abstract>
<!--All supported EPSG projections:-->
<CRS>EPSG:4326</CRS>
<CRS>EPSG:3857</CRS>
<CRS>EPSG:3395</CRS>
<CRS>EPSG:900913</CRS>
<CRS>AUTO:42004</CRS>
<CRS>EPSG:WGS84(DD)</CRS>
<CRS>EPSG:42303</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6166666666667</westBoundLongitude>
<eastBoundLongitude>-34.7933347300137</eastBoundLongitude>
<southBoundLatitude>-31.6536626963763</southBoundLatitude>
<northBoundLatitude>4.2</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6166666666667" miny="-31.6536626963763" maxx="-34.7933347300137" maxy="4.2"/>
<Layer queryable="1" opaque="0">
<Name>geonode:embrapa_completo</Name>
<Title>
Campo Experimental da Embrapa Caprinos e Ovinos no Ano de 2016
</Title>
<Abstract>
Este mapa mostra os Campos Experimentais da Embrapa Caprinos e Ovinos na Fazenda Três Lagoas em Sobral -Ceará. Estas áreas são usadas para produzir alimentos para os rebanhos da Unidade. Ainda, estas áreas são usadas como forma de Transferência de Tecnologias, utilizando instrumentos como Dia de Campo, dentre outros.
</Abstract>
<KeywordList>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-40.3741226196289" miny="-3.78242659568787" maxx="-40.3247909545898" maxy="-3.73813819885254"/>
<BoundingBox CRS="EPSG:4326" minx="-3.78242659568787" miny="-40.3741226196289" maxx="-3.73813819885254" maxy="-40.3247909545898"/>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.w3.org%2F2005%2FAtom&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=6012aa98-5c28-11e7-9311-0200c0a80a3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fgcmd.gsfc.nasa.gov%2FAboutus%2Fxml%2Fdif%2F&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=6012aa98-5c28-11e7-9311-0200c0a80a3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.opengis.net%2Fcat%2Fcsw%2F2.0.2&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=6012aa98-5c28-11e7-9311-0200c0a80a3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=urn%3Aoasis%3Anames%3Atc%3Aebxml-regrep%3Axsd%3Arim%3A3.0&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=6012aa98-5c28-11e7-9311-0200c0a80a3c"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/xml</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.opengis.net%2Fcat%2Fcsw%2Fcsdgm&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=6012aa98-5c28-11e7-9311-0200c0a80a3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.isotc211.org%2F2005%2Fgmd&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=6012aa98-5c28-11e7-9311-0200c0a80a3c"/>
</MetadataURL>
<Style>
<Name>embrapa_completo</Name>
<Title>embrapa_completo</Title>
<LegendURL width="22" height="40">
<Format>image/png</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=geonode%3Aembrapa_completo"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>
geonode:idaf_ac_totbov_0001a0010_cabsporprop_2475ptos
</Name>
<Title>
Acre: 2475 propriedades com 1 até 10 cabeças de bovinos
</Title>
<Abstract>
Fonte: Instituto de Defesa Agropecuária e Florestal do Acre - IDAF Acre. Mnemômico de arquivo: idaf_ac_totbov_0001a0010_cabsporprop_2475ptos
</Abstract>
<KeywordList>
<Keyword>idaf_ac_totbov_0001a0010_cabsporprop_2475ptos</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6166666666667</westBoundLongitude>
<eastBoundLongitude>-66.6652777777778</eastBoundLongitude>
<southBoundLatitude>-11.1294444444444</southBoundLatitude>
<northBoundLatitude>-7.37555555555555</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6166666666667" miny="-11.1294444444444" maxx="-66.6652777777778" maxy="-7.37555555555555"/>
<BoundingBox CRS="EPSG:4326" minx="-11.1294444444444" miny="-73.6166666666667" maxx="-7.37555555555555" maxy="-66.6652777777778"/>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.isotc211.org%2F2005%2Fgmd&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=2227415a-6859-11e9-baf3-0200753f7c3c"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/xml</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.opengis.net%2Fcat%2Fcsw%2Fcsdgm&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=2227415a-6859-11e9-baf3-0200753f7c3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=urn%3Aoasis%3Anames%3Atc%3Aebxml-regrep%3Axsd%3Arim%3A3.0&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=2227415a-6859-11e9-baf3-0200753f7c3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.opengis.net%2Fcat%2Fcsw%2F2.0.2&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=2227415a-6859-11e9-baf3-0200753f7c3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fgcmd.gsfc.nasa.gov%2FAboutus%2Fxml%2Fdif%2F&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=2227415a-6859-11e9-baf3-0200753f7c3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.w3.org%2F2005%2FAtom&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=2227415a-6859-11e9-baf3-0200753f7c3c"/>
</MetadataURL>
<Style>
<Name>idaf_ac_totbov_0001a0010_cabsporprop_2475ptos</Name>
<Title>idaf_ac_totbov_0001a0010_cabsporprop_2475ptos</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=geonode%3Aidaf_ac_totbov_0001a0010_cabsporprop_2475ptos"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>geonode:municipios_tabela</Name>
<Title>Parceiros da Embrapa Caprinos e Ovinos em 2016.</Title>
<Abstract>
Cartografia das parcerias formalizadas da Embrapa Caprinos e Ovinos no ano de 2016.
</Abstract>
<KeywordList>
<Keyword>Transferência de tecnologias</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-56.6671890822103</westBoundLongitude>
<eastBoundLongitude>-34.7933347300137</eastBoundLongitude>
<southBoundLatitude>-31.6536626963763</southBoundLatitude>
<northBoundLatitude>-2.62647106338881</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-56.6671890822103" miny="-31.6536626963763" maxx="-34.7933347300137" maxy="-2.62647106338881"/>
<BoundingBox CRS="EPSG:4326" minx="-31.6536626963763" miny="-56.6671890822103" maxx="-2.62647106338881" maxy="-34.7933347300137"/>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.w3.org%2F2005%2FAtom&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=4a7c47e8-5d09-11e7-b8c3-0200c0a80a3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fgcmd.gsfc.nasa.gov%2FAboutus%2Fxml%2Fdif%2F&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=4a7c47e8-5d09-11e7-b8c3-0200c0a80a3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.opengis.net%2Fcat%2Fcsw%2F2.0.2&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=4a7c47e8-5d09-11e7-b8c3-0200c0a80a3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=urn%3Aoasis%3Anames%3Atc%3Aebxml-regrep%3Axsd%3Arim%3A3.0&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=4a7c47e8-5d09-11e7-b8c3-0200c0a80a3c"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/xml</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.opengis.net%2Fcat%2Fcsw%2Fcsdgm&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=4a7c47e8-5d09-11e7-b8c3-0200c0a80a3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.isotc211.org%2F2005%2Fgmd&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=4a7c47e8-5d09-11e7-b8c3-0200c0a80a3c"/>
</MetadataURL>
<Style>
<Name>municipios_tabela</Name>
<Title>municipios_tabela</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=geonode%3Amunicipios_tabela"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>
geonode:regioes_produtividade_arroz_brs_catiana_brasil_2022
</Name>
<Title>
Caracterização Ambiental da Região Produtora de Arroz Irrigado Tropical no Brasil em 2022
</Title>
<Abstract>
Plano de informação representando as regiões homogêneas de produtividade para a cultivar de arroz BRS Catiana. Com foco em identificar grupos ambientais homogêneos na região produtora de arroz irrigado tropical e caracterizar fatores limitantes a produtividade (fatores ambientais, temperatura, radiação global acumulada, manejo e datas de semeadura). O modelo de simulação da produtividade, desenvolvimento e crescimento da cultura do arroz (ORIZAV3) foi parametrizado e validado para simular a performance das cultivares BRS Catiana. Os dados utilizados na parametrização e validação do modelo são provenientes do programa de melhoramento do arroz irrigado da Embrapa. O modelo de simulação da cultura do arroz foi aplicado para simular a produtividade das cultivares BRS Catiana na região tropical.
</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>
regioes_produtividade_arroz_brs_catiana_brasil_2022
</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.1</westBoundLongitude>
<eastBoundLongitude>-36.47</eastBoundLongitude>
<southBoundLatitude>-23.1</southBoundLatitude>
<northBoundLatitude>4.2</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.1" miny="-23.1" maxx="-36.47" maxy="4.2"/>
<BoundingBox CRS="EPSG:4326" minx="-23.1" miny="-60.1" maxx="4.2" maxy="-36.47"/>
<Attribution>
<Title>[<Profile: embrapa>]</Title>
</Attribution>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.isotc211.org%2F2005%2Fgmd&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=5f584554-e1c0-11ec-aec5-0200753f7c3c"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/xml</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.opengis.net%2Fcat%2Fcsw%2Fcsdgm&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=5f584554-e1c0-11ec-aec5-0200753f7c3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=urn%3Aoasis%3Anames%3Atc%3Aebxml-regrep%3Axsd%3Arim%3A3.0&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=5f584554-e1c0-11ec-aec5-0200753f7c3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.opengis.net%2Fcat%2Fcsw%2F2.0.2&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=5f584554-e1c0-11ec-aec5-0200753f7c3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fgcmd.gsfc.nasa.gov%2FAboutus%2Fxml%2Fdif%2F&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=5f584554-e1c0-11ec-aec5-0200753f7c3c"/>
</MetadataURL>
<MetadataURL type="other">
<Format>other</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/catalogue/csw?outputschema=http%3A%2F%2Fwww.w3.org%2F2005%2FAtom&service=CSW&request=GetRecordById&version=2.0.2&elementsetname=full&id=5f584554-e1c0-11ec-aec5-0200753f7c3c"/>
</MetadataURL>
<Style>
<Name>
regioes_produtividade_arroz_brs_catiana_brasil_2022
</Name>
<Title>
regioes_produtividade_arroz_brs_catiana_brasil_2022
</Title>
<LegendURL width="209" height="60">
<Format>image/png</Format>
<OnlineResource xlink:type="simple" xlink:href="http://atlas.geoinfo.cnpm.embrapa.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=geonode%3Aregioes_produtividade_arroz_brs_catiana_brasil_2022"/>
</LegendURL>
</Style>
</Layer>
</Layer>
</Capability>
</WMS_Capabilities>`