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
export const inpeXML = `<WMS_Capabilities xmlns="http://www.opengis.net/wms" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.3.0" updateSequence="14423" xsi:schemaLocation="http://www.opengis.net/wms http://terrabrasilis.dpi.inpe.br/geoserver/schemas/wms/1.3.0/capabilities_1_3_0.xsd">
<Service>
<Name>WMS</Name>
<Title>Geoservices TerraBrasilis</Title>
<Abstract/>
<KeywordList>
<Keyword>geoserviços</Keyword>
<Keyword>INPE</Keyword>
<Keyword>PRODES</Keyword>
<Keyword>DETER</Keyword>
<Keyword>Deforestation</Keyword>
<Keyword>Desflorestamento</Keyword>
</KeywordList>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/"/>
<ContactInformation>
<ContactPersonPrimary>
<ContactPerson>http://terrabrasilis.dpi.inpe.br</ContactPerson>
<ContactOrganization>Terrabrasilis</ContactOrganization>
</ContactPersonPrimary>
<ContactPosition/>
<ContactAddress>
<AddressType>commercial</AddressType>
<Address/>
<City>São José dos Campos</City>
<StateOrProvince>São Paulo</StateOrProvince>
<PostCode/>
<Country>Brazil</Country>
</ContactAddress>
<ContactVoiceTelephone/>
<ContactFacsimileTelephone/>
<ContactElectronicMailAddress>terrabrasilis@dpi.inpe.br</ContactElectronicMailAddress>
</ContactInformation>
<Fees>none</Fees>
<AccessConstraints>none</AccessConstraints>
</Service>
<Capability>
<Request>
<GetCapabilities>
<Format>text/xml</Format>
<DCPType>
<HTTP>
<Get>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?SERVICE=WMS&"/>
</Get>
<Post>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?SERVICE=WMS&"/>
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
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?SERVICE=WMS&"/>
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
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?SERVICE=WMS&"/>
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
<Title>Geoservices TerraBrasilis</Title>
<Abstract/>
<!-- Limited list of EPSG projections: -->
<CRS>EPSG:3857</CRS>
<CRS>EPSG:4326</CRS>
<CRS>EPSG:900913</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-91.67</westBoundLongitude>
<eastBoundLongitude>-28.63</eastBoundLongitude>
<southBoundLatitude>-55.91</southBoundLatitude>
<northBoundLatitude>12.6</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-91.67" miny="-55.91" maxx="-28.63" maxy="12.6"/>
<AuthorityURL name="OBT">
<OnlineResource xlink:type="simple" xlink:href="http://www.obt.inpe.br/"/>
</AuthorityURL>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado-nb:accumulated_deforestation</Name>
<Title>Accumulated deforestation in the Cerrado Biome until 2000</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>accumulated_deforestation</Keyword>
<Keyword>new biome</Keyword>
<Keyword>novo bioma</Keyword>
<Keyword>mascara</Keyword>
<Keyword>mask</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.4663651193621</westBoundLongitude>
<eastBoundLongitude>-41.2849762723456</eastBoundLongitude>
<southBoundLatitude>-24.6808140367616</southBoundLatitude>
<northBoundLatitude>-2.37774400318938</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.4663651193621" miny="-24.6808140367616" maxx="-41.2849762723456" maxy="-2.37774400318938"/>
<BoundingBox CRS="EPSG:4674" minx="-24.6808140367616" miny="-60.4663651193621" maxx="-2.37774400318938" maxy="-41.2849762723456"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=504416f5-b09d-4dce-adb9-5673ad5bd0b2"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado-nb:accumulated_deforestation_en</Name>
<Title>prodes-cerrado-nb:accumulated_deforestation_en</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Aaccumulated_deforestation"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado-nb:accumulated_deforestation_pt-br</Name>
<Title>prodes-cerrado-nb:accumulated_deforestation_pt-br</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Aaccumulated_deforestation&style=accumulated_deforestation_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:accumulated_deforestation_2007</Name>
<Title>Accumulated Deforestation in Legal Amazon - 2007</Title>
<Abstract>Accumulated deforestation commonly called by mask of deforestation up to 2007 to the Legal Amazon.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>accumulated_deforestation_2007</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.8538648282111</westBoundLongitude>
<eastBoundLongitude>-43.9999758301943</eastBoundLongitude>
<southBoundLatitude>-17.6883353092874</southBoundLatitude>
<northBoundLatitude>5.20548191938395</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.8538648282111" miny="-17.6883353092874" maxx="-43.9999758301943" maxy="5.20548191938395"/>
<BoundingBox CRS="EPSG:4674" minx="-17.6883353092874" miny="-73.8538648282111" maxx="5.20548191938395" maxy="-43.9999758301943"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/415220fc-3013-4258-bd21-83014865cee5"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=415220fc-3013-4258-bd21-83014865cee5"/>
</MetadataURL>
<Style>
<Name>prodes-legal-amz:accumulated_deforestation_2007_pt-br</Name>
<Title>Mask polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Aaccumulated_deforestation_2007"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-legal-amz:accumulated_deforestation_2007_en</Name>
<Title>Mask polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Aaccumulated_deforestation_2007&style=accumulated_deforestation_2007_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amz:accumulated_deforestation_2007_biome</Name>
<Title>Accumulated Deforestation in Amazon Biome - 2007</Title>
<Abstract>Accumulated deforestation commonly called by mask of deforestation up to 2007 to the Amazon biome.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>accumulated_deforestation_1988_2007_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.8538648282111</westBoundLongitude>
<eastBoundLongitude>-44.0</eastBoundLongitude>
<southBoundLatitude>-16.2779683090209</southBoundLatitude>
<northBoundLatitude>5.20548191938395</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.8538648282111" miny="-16.2779683090209" maxx="-44.0" maxy="5.20548191938395"/>
<BoundingBox CRS="EPSG:4674" minx="-16.2779683090209" miny="-73.8538648282111" maxx="5.20548191938395" maxy="-44.0"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/c6748fdf-a18e-41b9-a523-ea14bae92602"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=c6748fdf-a18e-41b9-a523-ea14bae92602"/>
</MetadataURL>
<Style>
<Name>prodes-amz:accumulated_deforestation_2007_biome_pt-br</Name>
<Title>Mask polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Aaccumulated_deforestation_2007_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-amz:accumulated_deforestation_2007_biome_en</Name>
<Title>Mask polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Aaccumulated_deforestation_2007_biome&style=accumulated_deforestation_2007_biome_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amazon-nb:accumulated_deforestation_2007_biome</Name>
<Title>Accumulated Deforestation in Amazon Biome - 2007</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>accumulated_deforestation_2007_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.8538648282111</westBoundLongitude>
<eastBoundLongitude>-44.0</eastBoundLongitude>
<southBoundLatitude>-16.6495912153781</southBoundLatitude>
<northBoundLatitude>5.20548191938395</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.8538648282111" miny="-16.6495912153781" maxx="-44.0" maxy="5.20548191938395"/>
<BoundingBox CRS="EPSG:4674" minx="-16.6495912153781" miny="-73.8538648282111" maxx="5.20548191938395" maxy="-44.0"/>
<Style>
<Name>prodes-amazon-nb:accumulated_deforestation_2007_biome_pt-br</Name>
<Title>Mask polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Aaccumulated_deforestation_2007_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado:accumulated_deforestation_up_to_2000</Name>
<Title>Accumulated Deforestation - up to 2000</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>accumulated_deforestation_up_to_2000</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.1455039978027</westBoundLongitude>
<eastBoundLongitude>-41.4313735961914</eastBoundLongitude>
<southBoundLatitude>-24.7919940948486</southBoundLatitude>
<northBoundLatitude>-2.46209216117859</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.1455039978027" miny="-24.7919940948486" maxx="-41.4313735961914" maxy="-2.46209216117859"/>
<BoundingBox CRS="EPSG:4674" minx="-24.7919940948486" miny="-60.1455039978027" maxx="-2.46209216117859" maxy="-41.4313735961914"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/catalog.search#/metadata/504416f5-b09d-4dce-adb9-5673ad5bd0b2"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=504416f5-b09d-4dce-adb9-5673ad5bd0b2"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado:accumulated_deforestation_up_to_2000_en</Name>
<Title>prodes-cerrado:accumulated_deforestation_up_to_2000_en</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Aaccumulated_deforestation_up_to_2000"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado:accumulated_deforestation_up_to_2000_pt-br</Name>
<Title>prodes-cerrado:accumulated_deforestation_up_to_2000_pt-br</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Aaccumulated_deforestation_up_to_2000&style=accumulated_deforestation_up_to_2000_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pampa:accumulated_deforestation_up_to_2016</Name>
<Title>Accumulated Deforestation - up to 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>accumulated_deforestation_up_to_2016</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.5964957782493</westBoundLongitude>
<eastBoundLongitude>-49.6773582935228</eastBoundLongitude>
<southBoundLatitude>-33.7478105395661</southBoundLatitude>
<northBoundLatitude>-28.1004178109922</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.5964957782493" miny="-33.7478105395661" maxx="-49.6773582935228" maxy="-28.1004178109922"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7478105395661" miny="-57.5964957782493" maxx="-28.1004178109922" maxy="-49.6773582935228"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/9b57c4fc-cc95-4ed6-860c-08cee2679dd7"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=9b57c4fc-cc95-4ed6-860c-08cee2679dd7"/>
</MetadataURL>
<Style>
<Name>prodes-pampa:accumulated_deforestation_up_to_2016_en</Name>
<Title>prodes-pampa:accumulated_deforestation_up_to_2016_en</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Aaccumulated_deforestation_up_to_2016"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-pampa:accumulated_deforestation_up_to_2016_pt-br</Name>
<Title>prodes-pampa:accumulated_deforestation_up_to_2016_pt-br</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Aaccumulated_deforestation_up_to_2016&style=accumulated_deforestation_up_to_2016_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pantanal:accumulated_deforestation_up_to_2016</Name>
<Title>Accumulated Deforestation - up to 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>accumulated_deforestation_up_to_2016</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-59.1859764083328</westBoundLongitude>
<eastBoundLongitude>-54.9240256632082</eastBoundLongitude>
<southBoundLatitude>-22.1276849541921</southBoundLatitude>
<northBoundLatitude>-15.5239173532007</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-59.1859764083328" miny="-22.1276849541921" maxx="-54.9240256632082" maxy="-15.5239173532007"/>
<BoundingBox CRS="EPSG:4674" minx="-22.1276849541921" miny="-59.1859764083328" maxx="-15.5239173532007" maxy="-54.9240256632082"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/0732753e-57dd-41b4-848a-e2a54f2b7143"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=0732753e-57dd-41b4-848a-e2a54f2b7143"/>
</MetadataURL>
<Style>
<Name>prodes-pantanal:accumulated_deforestation_up_to_2016_en</Name>
<Title>prodes-pantanal:accumulated_deforestation_up_to_2016_en</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Aaccumulated_deforestation_up_to_2016"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-pantanal:accumulated_deforestation_up_to_2016_pt-br</Name>
<Title>prodes-pantanal:accumulated_deforestation_up_to_2016_pt-br</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Aaccumulated_deforestation_up_to_2016&style=accumulated_deforestation_up_to_2016_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-mata-atlantica:accumulated_deforestation_up_to_2016</Name>
<Title>Accumulated Deforestation in Mata Atlântica Biome - 2000/2016</Title>
<Abstract>Accumulated deforestation commonly called by mask of deforestation for 2000/2016 to the Mata Atlântica biome.</Abstract>
<KeywordList>
<Keyword>accumulated_deforestation_up_to_2016</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-55.6648154605916</westBoundLongitude>
<eastBoundLongitude>-34.7928849739999</eastBoundLongitude>
<southBoundLatitude>-29.9343467915403</southBoundLatitude>
<northBoundLatitude>-5.14343973097836</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-55.6648154605916" miny="-29.9343467915403" maxx="-34.7928849739999" maxy="-5.14343973097836"/>
<BoundingBox CRS="EPSG:4674" minx="-29.9343467915403" miny="-55.6648154605916" maxx="-5.14343973097836" maxy="-34.7928849739999"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/49668005-8fc0-4d3f-9a7b-267aee14d1ff"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=49668005-8fc0-4d3f-9a7b-267aee14d1ff"/>
</MetadataURL>
<Style>
<Name>prodes-mata-atlantica:accumulated_deforestation_up_to_2016_en</Name>
<Title>prodes-mata-atlantica:accumulated_deforestation_up_to_2016_en</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-mata-atlantica%3Aaccumulated_deforestation_up_to_2016"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-mata-atlantica:accumulated_deforestation_up_to_2016_pt-br</Name>
<Title>prodes-mata-atlantica:accumulated_deforestation_up_to_2016_pt-br</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-mata-atlantica%3Aaccumulated_deforestation_up_to_2016&style=accumulated_deforestation_up_to_2016_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-caatinga:accumulated_deforestation_up_to_2016</Name>
<Title>Accumulated Deforestation in Caatinga Biome - 2000/2016</Title>
<Abstract>Accumulated deforestation commonly called by mask of deforestation for 2000/2016 to the Caatinga biome.</Abstract>
<KeywordList>
<Keyword>accumulated_deforestation_up_to_2016</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-44.5088261493881</westBoundLongitude>
<eastBoundLongitude>-35.1720275125903</eastBoundLongitude>
<southBoundLatitude>-16.0889359929823</southBoundLatitude>
<northBoundLatitude>-2.79217120673616</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-44.5088261493881" miny="-16.0889359929823" maxx="-35.1720275125903" maxy="-2.79217120673616"/>
<BoundingBox CRS="EPSG:4674" minx="-16.0889359929823" miny="-44.5088261493881" maxx="-2.79217120673616" maxy="-35.1720275125903"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/588eda4e-ad18-4104-812e-d9223e8c02cb"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=588eda4e-ad18-4104-812e-d9223e8c02cb"/>
</MetadataURL>
<Style>
<Name>prodes-caatinga:accumulated_deforestation_up_to_2016_pt-br</Name>
<Title>prodes-caatinga:accumulated_deforestation_up_to_2016_pt-br</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-caatinga%3Aaccumulated_deforestation_up_to_2016"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-caatinga:accumulated_deforestation_up_to_2016_pt-br</Name>
<Title>prodes-caatinga:accumulated_deforestation_up_to_2016_pt-br</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-caatinga%3Aaccumulated_deforestation_up_to_2016&style=accumulated_deforestation_up_to_2016_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amazon-nb:amazon_biome_border</Name>
<Title>Brazilian Amazon Biome border</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>amazon_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.983182159</westBoundLongitude>
<eastBoundLongitude>-43.399317927</eastBoundLongitude>
<southBoundLatitude>-16.6620184999999</southBoundLatitude>
<northBoundLatitude>5.26958083300003</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.983182159" miny="-16.6620184999999" maxx="-43.399317927" maxy="5.26958083300003"/>
<BoundingBox CRS="EPSG:4674" minx="-16.6620184999999" miny="-73.983182159" maxx="5.26958083300003" maxy="-43.399317927"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/481e439e-b0fa-4cb0-890b-11941264db69"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=481e439e-b0fa-4cb0-890b-11941264db69"/>
</MetadataURL>
<Style>
<Name>prodes-amazon-nb:amazon_biome_border_pt-br</Name>
<Title>Limite simples</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Aamazon_biome_border"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-amazon-nb:amazon_biome_border_en</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Aamazon_biome_border&style=amazon_biome_border_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado:biome_border</Name>
<Title>Brazilian cerrado biome border</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>limite_cerrado</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.1099291026706</westBoundLongitude>
<eastBoundLongitude>-41.5224714772778</eastBoundLongitude>
<southBoundLatitude>-24.6851194256049</southBoundLatitude>
<northBoundLatitude>-2.32670912054645</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.1099291026706" miny="-24.6851194256049" maxx="-41.5224714772778" maxy="-2.32670912054645"/>
<BoundingBox CRS="EPSG:4674" minx="-24.6851194256049" miny="-60.1099291026706" maxx="-2.32670912054645" maxy="-41.5224714772778"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=7b456c35-7f83-4ef6-a5e8-6adf570dea54"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/7b456c35-7f83-4ef6-a5e8-6adf570dea54"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado:biome_border_en</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Abiome_border"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado:biome_border_pt-br</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Abiome_border&style=biome_border_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado-nb:biome_border</Name>
<Title>Brazilian Cerrado Biome border</Title>
<Abstract>Based on the new borders of the biome. See the metadata details.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>biome_border</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.472595634</westBoundLongitude>
<eastBoundLongitude>-41.277535526</eastBoundLongitude>
<southBoundLatitude>-24.681780126</southBoundLatitude>
<northBoundLatitude>-2.33208833399993</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.472595634" miny="-24.681780126" maxx="-41.277535526" maxy="-2.33208833399993"/>
<BoundingBox CRS="EPSG:4674" minx="-24.681780126" miny="-60.472595634" maxx="-2.33208833399993" maxy="-41.277535526"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=c3729553-1ece-47e9-8269-8b24016750a2"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado-nb:biome_border_en</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Abiome_border"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado-nb:biome_border_pt-br</Name>
<Title>Limite simples</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Abiome_border&style=biome_border_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pampa:biome_border</Name>
<Title>Pampa Biome Border</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>biome_border</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.649742824</westBoundLongitude>
<eastBoundLongitude>-49.67279010044</eastBoundLongitude>
<southBoundLatitude>-33.7511779939999</southBoundLatitude>
<northBoundLatitude>-28.076455062</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.649742824" miny="-33.7511779939999" maxx="-49.67279010044" maxy="-28.076455062"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7511779939999" miny="-57.649742824" maxx="-28.076455062" maxy="-49.67279010044"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/9846253b-c8de-46f1-95ab-fbe6806e04aa"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=9846253b-c8de-46f1-95ab-fbe6806e04aa"/>
</MetadataURL>
<Style>
<Name>prodes-pampa:biome_border_en</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Abiome_border"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-pampa:biome_border_pt-br</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Abiome_border&style=biome_border_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pantanal:biome_border</Name>
<Title>Pantanal Biome Border</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>biome_border</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-59.1869409581752</westBoundLongitude>
<eastBoundLongitude>-54.9223080407124</eastBoundLongitude>
<southBoundLatitude>-22.15086658</southBoundLatitude>
<northBoundLatitude>-15.5239173532007</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-59.1869409581752" miny="-22.15086658" maxx="-54.9223080407124" maxy="-15.5239173532007"/>
<BoundingBox CRS="EPSG:4674" minx="-22.15086658" miny="-59.1869409581752" maxx="-15.5239173532007" maxy="-54.9223080407124"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/39c2aefa-acf0-4c00-826c-c7f0f4156e61"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=39c2aefa-acf0-4c00-826c-c7f0f4156e61"/>
</MetadataURL>
<Style>
<Name>prodes-pantanal:biome_border_en</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Abiome_border"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-pantanal:biome_border_pt-br</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Abiome_border&style=biome_border_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-mata-atlantica:biome_border</Name>
<Title>Mata Atlântica Biome Border</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>mata_atlantica_border</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-55.7702217102051</westBoundLongitude>
<eastBoundLongitude>-34.6885185241699</eastBoundLongitude>
<southBoundLatitude>-30.0758876800537</southBoundLatitude>
<northBoundLatitude>-5.01939725875854</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-55.7702217102051" miny="-30.0758876800537" maxx="-34.6885185241699" maxy="-5.01939725875854"/>
<BoundingBox CRS="EPSG:4674" minx="-30.0758876800537" miny="-55.7702217102051" maxx="-5.01939725875854" maxy="-34.6885185241699"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/d78641f2-1054-4140-b2e6-645a6ce908e5"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=d78641f2-1054-4140-b2e6-645a6ce908e5"/>
</MetadataURL>
<Style>
<Name>prodes-mata-atlantica:biome_border_en</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-mata-atlantica%3Abiome_border"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-mata-atlantica:biome_border_pt-br</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-mata-atlantica%3Abiome_border&style=biome_border_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-caatinga:biome_border</Name>
<Title>Caatinga Biome Border</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>caatinga_border</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-44.5555114746094</westBoundLongitude>
<eastBoundLongitude>-35.1253395080566</eastBoundLongitude>
<southBoundLatitude>-16.155460357666</southBoundLatitude>
<northBoundLatitude>-2.71770691871643</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-44.5555114746094" miny="-16.155460357666" maxx="-35.1253395080566" maxy="-2.71770691871643"/>
<BoundingBox CRS="EPSG:4674" minx="-16.155460357666" miny="-44.5555114746094" maxx="-2.71770691871643" maxy="-35.1253395080566"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/ab4f9a01-a1b5-4a55-80ea-6f5e5bbd31e2"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=ab4f9a01-a1b5-4a55-80ea-6f5e5bbd31e2"/>
</MetadataURL>
<Style>
<Name>prodes-caatinga:biome_border_en</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-caatinga%3Abiome_border"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-caatinga:biome_border_pt-br</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-caatinga%3Abiome_border&style=biome_border_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amz:brazilian_amazon_biome_border</Name>
<Title>Brazilian Amazon Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>amazon_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9909438636055</westBoundLongitude>
<eastBoundLongitude>-43.0169133104806</eastBoundLongitude>
<southBoundLatitude>-16.290519038121</southBoundLatitude>
<northBoundLatitude>5.27215639335258</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9909438636055" miny="-16.290519038121" maxx="-43.0169133104806" maxy="5.27215639335258"/>
<BoundingBox CRS="EPSG:4674" minx="-16.290519038121" miny="-73.9909438636055" maxx="5.27215639335258" maxy="-43.0169133104806"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/662fdeaa-d0bc-4cd0-909c-0562ce3b5389"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=662fdeaa-d0bc-4cd0-909c-0562ce3b5389"/>
</MetadataURL>
<Style>
<Name>terrabrasilis:simple_border</Name>
<Title>Simple border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Abrazilian_amazon_biome_border"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:brazilian_legal_amazon</Name>
<Title>Brazilian Legal Amazon</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>brazilian_legal_amazon</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9909722199879</westBoundLongitude>
<eastBoundLongitude>-43.9518273629148</eastBoundLongitude>
<southBoundLatitude>-18.04176667</southBoundLatitude>
<northBoundLatitude>5.27222500000003</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9909722199879" miny="-18.04176667" maxx="-43.9518273629148" maxy="5.27222500000003"/>
<BoundingBox CRS="EPSG:4674" minx="-18.04176667" miny="-73.9909722199879" maxx="5.27222500000003" maxy="-43.9518273629148"/>
<Attribution>
<Title>by INPE</Title>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://www.inpe.br/"/>
</Attribution>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/d6289e13-c6f3-4103-ba83-13a8452d46cb"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=d6289e13-c6f3-4103-ba83-13a8452d46cb"/>
</MetadataURL>
<Style>
<Name>prodes-legal-amz:brazilian_legal_amazon_pt-br</Name>
<Title>Brazilian Legal Amazon</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Abrazilian_legal_amazon"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-legal-amz:brazilian_legal_amazon_en</Name>
<Title>Brazilian Legal Amazon</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Abrazilian_legal_amazon&style=brazilian_legal_amazon_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:cloud</Name>
<Title>Cloud since 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>cloud</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9740351106095</westBoundLongitude>
<eastBoundLongitude>-44.0</eastBoundLongitude>
<southBoundLatitude>-17.5355665478244</southBoundLatitude>
<northBoundLatitude>5.27149090870589</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9740351106095" miny="-17.5355665478244" maxx="-44.0" maxy="5.27149090870589"/>
<BoundingBox CRS="EPSG:4674" minx="-17.5355665478244" miny="-73.9740351106095" maxx="5.27149090870589" maxy="-44.0"/>
<Dimension name="time" default="2021-01-01" units="ISO8601">2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/d6f8da09-5c6c-417b-bfac-769c010e9769"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=d6f8da09-5c6c-417b-bfac-769c010e9769"/>
</MetadataURL>
<Style>
<Name>prodes-legal-amz:cloud_en</Name>
<Title>prodes-legal-amz:cloud_en</Title>
<LegendURL width="57" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Acloud"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-legal-amz:cloud_pt-br</Name>
<Title>prodes-legal-amz:cloud_pt-br</Title>
<LegendURL width="57" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Acloud&style=cloud_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pampa:cloud</Name>
<Title>Cloud</Title>
<Abstract>The cloud mask vector to all scenes of the yearly mosaics.</Abstract>
<KeywordList>
<Keyword>cloud</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.3241188113793</westBoundLongitude>
<eastBoundLongitude>-50.6711610644497</eastBoundLongitude>
<southBoundLatitude>-33.7496389341125</southBoundLatitude>
<northBoundLatitude>-29.7906802579736</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.3241188113793" miny="-33.7496389341125" maxx="-50.6711610644497" maxy="-29.7906802579736"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7496389341125" miny="-57.3241188113793" maxx="-29.7906802579736" maxy="-50.6711610644497"/>
<Dimension name="time" default="2018-01-01T00:00:00.000Z/2019-01-01T00:00:00.000Z" units="ISO8601">2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/c2238908-66e1-431d-848c-2741b96c06fb"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=c2238908-66e1-431d-848c-2741b96c06fb"/>
</MetadataURL>
<Style>
<Name>prodes-pampa:cloud_en</Name>
<Title>prodes-pampa:cloud_en</Title>
<LegendURL width="57" height="40">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Acloud"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-pampa:cloud_pt-br</Name>
<Title>prodes-pampa:cloud_pt-br</Title>
<LegendURL width="57" height="40">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Acloud&style=cloud_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pantanal:cloud</Name>
<Title>Cloud</Title>
<Abstract>The cloud mask vector to all scenes of the yearly mosaics.</Abstract>
<KeywordList>
<Keyword>cloud</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-56.6401901136495</westBoundLongitude>
<eastBoundLongitude>-55.6256813894435</eastBoundLongitude>
<southBoundLatitude>-20.3494370138921</southBoundLatitude>
<northBoundLatitude>-16.2101499308008</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-56.6401901136495" miny="-20.3494370138921" maxx="-55.6256813894435" maxy="-16.2101499308008"/>
<BoundingBox CRS="EPSG:4674" minx="-20.3494370138921" miny="-56.6401901136495" maxx="-16.2101499308008" maxy="-55.6256813894435"/>
<Dimension name="time" default="2018-01-01T00:00:00.000Z/2019-01-01T00:00:00.000Z" units="ISO8601">2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/5aef33f7-db71-4966-8311-8b249af74dc3"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=5aef33f7-db71-4966-8311-8b249af74dc3"/>
</MetadataURL>
<Style>
<Name>prodes-pantanal:cloud_en</Name>
<Title>prodes-pantanal:cloud_en</Title>
<LegendURL width="57" height="40">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Acloud"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-pantanal:cloud_pt-br</Name>
<Title>prodes-pantanal:cloud_pt-br</Title>
<LegendURL width="57" height="40">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Acloud&style=cloud_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-mata-atlantica:cloud</Name>
<Title>Cloud - 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>cloud</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-53.6958336692217</westBoundLongitude>
<eastBoundLongitude>-34.7951072543411</eastBoundLongitude>
<southBoundLatitude>-28.2089708554692</southBoundLatitude>
<northBoundLatitude>-5.19561804662825</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-53.6958336692217" miny="-28.2089708554692" maxx="-34.7951072543411" maxy="-5.19561804662825"/>
<BoundingBox CRS="EPSG:4674" minx="-28.2089708554692" miny="-53.6958336692217" maxx="-5.19561804662825" maxy="-34.7951072543411"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=55fa25eb-5491-4472-942f-55bd790acfbf"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/55fa25eb-5491-4472-942f-55bd790acfbf"/>
</MetadataURL>
<Style>
<Name>prodes-mata-atlantica:cloud_en</Name>
<Title>prodes-mata-atlantica:cloud_en</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-mata-atlantica%3Acloud"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-mata-atlantica:cloud_pt-br</Name>
<Title>prodes-mata-atlantica:cloud_pt-br</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-mata-atlantica%3Acloud&style=cloud_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-caatinga:cloud</Name>
<Title>Cloud - 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>cloud</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-43.9316941534809</westBoundLongitude>
<eastBoundLongitude>-35.1803693425912</eastBoundLongitude>
<southBoundLatitude>-16.0424778545448</southBoundLatitude>
<northBoundLatitude>-2.86422645062609</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-43.9316941534809" miny="-16.0424778545448" maxx="-35.1803693425912" maxy="-2.86422645062609"/>
<BoundingBox CRS="EPSG:4674" minx="-16.0424778545448" miny="-43.9316941534809" maxx="-2.86422645062609" maxy="-35.1803693425912"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/6058a4d2-00d8-43a8-a23c-db137db0b3ea"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=6058a4d2-00d8-43a8-a23c-db137db0b3ea"/>
</MetadataURL>
<Style>
<Name>prodes-caatinga:cloud_en</Name>
<Title>prodes-caatinga:cloud_en</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-caatinga%3Acloud"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-caatinga:cloud_pt-br</Name>
<Title>prodes-caatinga:cloud_pt-br</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-caatinga%3Acloud&style=cloud_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amz:cloud_biome</Name>
<Title>Cloud - 2016/2020</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>cloud_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9725646646282</westBoundLongitude>
<eastBoundLongitude>-44.0</eastBoundLongitude>
<southBoundLatitude>-15.172647297545</southBoundLatitude>
<northBoundLatitude>5.27149090870589</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9725646646282" miny="-15.172647297545" maxx="-44.0" maxy="5.27149090870589"/>
<BoundingBox CRS="EPSG:4674" minx="-15.172647297545" miny="-73.9725646646282" maxx="5.27149090870589" maxy="-44.0"/>
<Dimension name="time" default="2016-01-01T00:00:00.000Z" units="ISO8601">2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/57087018-9cec-4eed-822c-c850b35e5242"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=57087018-9cec-4eed-822c-c850b35e5242"/>
</MetadataURL>
<Style>
<Name>prodes-amz:cloud_biome_en</Name>
<Title>prodes-amz:cloud_biome_en</Title>
<LegendURL width="57" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Acloud_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-amz:cloud_biome_pt-br</Name>
<Title>prodes-amz:cloud_biome_pt-br</Title>
<LegendURL width="57" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Acloud_biome&style=cloud_biome_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amazon-nb:cloud_biome</Name>
<Title>Cloud since 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>cloud_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9740351106095</westBoundLongitude>
<eastBoundLongitude>-44.0</eastBoundLongitude>
<southBoundLatitude>-16.4094640799311</southBoundLatitude>
<northBoundLatitude>5.26958083300003</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9740351106095" miny="-16.4094640799311" maxx="-44.0" maxy="5.26958083300003"/>
<BoundingBox CRS="EPSG:4674" minx="-16.4094640799311" miny="-73.9740351106095" maxx="5.26958083300003" maxy="-44.0"/>
<Dimension name="time" default="2021-01-01" units="ISO8601">2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/57087018-9cec-4eed-822c-c850b35e5242"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=57087018-9cec-4eed-822c-c850b35e5242"/>
</MetadataURL>
<Style>
<Name>prodes-amazon-nb:cloud_biome_en</Name>
<Title>prodes-amazon-nb:cloud_biome_en</Title>
<LegendURL width="57" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Acloud_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-amazon-nb:cloud_biome_pt-br</Name>
<Title>prodes-amazon-nb:cloud_biome_pt-br</Title>
<LegendURL width="57" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Acloud_biome&style=cloud_biome_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amz:conservation_units_amazon_biome</Name>
<Title>Conservation Units Amazon Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>conservation_units_amazon_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9906792050059</westBoundLongitude>
<eastBoundLongitude>-43.0169133104806</eastBoundLongitude>
<southBoundLatitude>-16.1095123280516</southBoundLatitude>
<northBoundLatitude>5.27215639335258</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9906792050059" miny="-16.1095123280516" maxx="-43.0169133104806" maxy="5.27215639335258"/>
<BoundingBox CRS="EPSG:4674" minx="-16.1095123280516" miny="-73.9906792050059" maxx="5.27215639335258" maxy="-43.0169133104806"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/a46f7578-6ec2-40a8-88f3-64e0ccdea278"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=a46f7578-6ec2-40a8-88f3-64e0ccdea278"/>
</MetadataURL>
<Style>
<Name>prodes-amz:conservation_units_amazon_biome</Name>
<Title>Conservation units border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Aconservation_units_amazon_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amazon-nb:conservation_units_amazon_biome</Name>
<Title>Conservation Units Amazon Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>conservation_units_amazon_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.983182159</westBoundLongitude>
<eastBoundLongitude>-43.399317927</eastBoundLongitude>
<southBoundLatitude>-16.1095123280516</southBoundLatitude>
<northBoundLatitude>5.26958083300003</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.983182159" miny="-16.1095123280516" maxx="-43.399317927" maxy="5.26958083300003"/>
<BoundingBox CRS="EPSG:4674" minx="-16.1095123280516" miny="-73.983182159" maxx="5.26958083300003" maxy="-43.399317927"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/a46f7578-6ec2-40a8-88f3-64e0ccdea278"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=a46f7578-6ec2-40a8-88f3-64e0ccdea278"/>
</MetadataURL>
<Style>
<Name>prodes-amazon-nb:conservation_units_amazon_biome</Name>
<Title>Conservation units border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Aconservation_units_amazon_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado-nb:conservation_units_cerrado_biome</Name>
<Title>Conservation Units in the Cerrado Biome</Title>
<Abstract>Intersection with the new border of the biome. See the metadata details.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>conservation_units_cerrado_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-59.5746364597719</westBoundLongitude>
<eastBoundLongitude>-41.354713569</eastBoundLongitude>
<southBoundLatitude>-24.6791500742434</southBoundLatitude>
<northBoundLatitude>-2.33208833399993</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-59.5746364597719" miny="-24.6791500742434" maxx="-41.354713569" maxy="-2.33208833399993"/>
<BoundingBox CRS="EPSG:4674" minx="-24.6791500742434" miny="-59.5746364597719" maxx="-2.33208833399993" maxy="-41.354713569"/>
<Style>
<Name>prodes-cerrado-nb:conservation_units_cerrado_biome_en</Name>
<Title>Conservation units border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Aconservation_units_cerrado_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado-nb:conservation_units_cerrado_biome_pt-br</Name>
<Title>Limites de unidades de conservação</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Aconservation_units_cerrado_biome&style=conservation_units_cerrado_biome_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:conservation_units_legal_amazon</Name>
<Title>Conservation Units Legal Amazon</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>conservation_units_legal_amazon</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9906792050059</westBoundLongitude>
<eastBoundLongitude>-44.0358042582571</eastBoundLongitude>
<southBoundLatitude>-18.0404971634183</southBoundLatitude>
<northBoundLatitude>5.27222500000003</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9906792050059" miny="-18.0404971634183" maxx="-44.0358042582571" maxy="5.27222500000003"/>
<BoundingBox CRS="EPSG:4674" minx="-18.0404971634183" miny="-73.9906792050059" maxx="5.27222500000003" maxy="-44.0358042582571"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/a46f7578-6ec2-40a8-88f3-64e0ccdea278"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=a46f7578-6ec2-40a8-88f3-64e0ccdea278"/>
</MetadataURL>
<Style>
<Name>prodes-legal-amz:conservation_units_legal_amazon</Name>
<Title>Conservation units border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Aconservation_units_legal_amazon"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pampa:conservation_units_pampa_biome</Name>
<Title>Conservation Units Pampa Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>conservation_units_pampa_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.5565443116594</westBoundLongitude>
<eastBoundLongitude>-49.7381086967855</eastBoundLongitude>
<southBoundLatitude>-32.9234219987037</southBoundLatitude>
<northBoundLatitude>-28.9228830773604</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.5565443116594" miny="-32.9234219987037" maxx="-49.7381086967855" maxy="-28.9228830773604"/>
<BoundingBox CRS="EPSG:4674" minx="-32.9234219987037" miny="-57.5565443116594" maxx="-28.9228830773604" maxy="-49.7381086967855"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/a46f7578-6ec2-40a8-88f3-64e0ccdea278"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=a46f7578-6ec2-40a8-88f3-64e0ccdea278"/>
</MetadataURL>
<Style>
<Name>prodes-pampa:conservation_units_pampa_biome</Name>
<Title>Conservation units border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Aconservation_units_pampa_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pantanal:conservation_units_pantanal_biome</Name>
<Title>Conservation Units Pantanal Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>conservation_units_pantanal_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-58.0418403498304</westBoundLongitude>
<eastBoundLongitude>-56.018275</eastBoundLongitude>
<southBoundLatitude>-19.8763990357732</southBoundLatitude>
<northBoundLatitude>-15.7576310880937</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-58.0418403498304" miny="-19.8763990357732" maxx="-56.018275" maxy="-15.7576310880937"/>
<BoundingBox CRS="EPSG:4674" minx="-19.8763990357732" miny="-58.0418403498304" maxx="-15.7576310880937" maxy="-56.018275"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/a46f7578-6ec2-40a8-88f3-64e0ccdea278"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=a46f7578-6ec2-40a8-88f3-64e0ccdea278"/>
</MetadataURL>
<Style>
<Name>prodes-pantanal:conservation_units_pantanal_biome</Name>
<Title>Conservation units border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Aconservation_units_pantanal_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>deter-amz:deter_amz</Name>
<Title>DETER Daily - Anonymous</Title>
<Abstract>For anonymous users. Filtered by areatotalkm >= 0.0625</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>deter_amz</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.5565265252794</westBoundLongitude>
<eastBoundLongitude>-44.0003914444064</eastBoundLongitude>
<southBoundLatitude>-18.0364406523564</southBoundLatitude>
<northBoundLatitude>4.55537642867927</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.5565265252794" miny="-18.0364406523564" maxx="-44.0003914444064" maxy="4.55537642867927"/>
<BoundingBox CRS="EPSG:4674" minx="-18.0364406523564" miny="-73.5565265252794" maxx="4.55537642867927" maxy="-44.0003914444064"/>
<Dimension name="time" default="2016-08-01T00:00:00.000Z/2022-12-01T00:00:00.000Z" units="ISO8601">2016-08-01T00:00:00.000Z,2016-09-01T00:00:00.000Z,2016-10-01T00:00:00.000Z,2016-11-01T00:00:00.000Z,2016-12-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2017-02-01T00:00:00.000Z,2017-03-01T00:00:00.000Z,2017-04-01T00:00:00.000Z,2017-05-01T00:00:00.000Z,2017-06-01T00:00:00.000Z,2017-07-01T00:00:00.000Z,2017-08-01T00:00:00.000Z,2017-09-01T00:00:00.000Z,2017-10-01T00:00:00.000Z,2017-11-01T00:00:00.000Z,2017-12-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2018-02-01T00:00:00.000Z,2018-03-01T00:00:00.000Z,2018-04-01T00:00:00.000Z,2018-05-01T00:00:00.000Z,2018-06-01T00:00:00.000Z,2018-07-01T00:00:00.000Z,2018-08-01T00:00:00.000Z,2018-09-01T00:00:00.000Z,2018-10-01T00:00:00.000Z,2018-11-01T00:00:00.000Z,2018-12-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2019-02-01T00:00:00.000Z,2019-03-01T00:00:00.000Z,2019-04-01T00:00:00.000Z,2019-05-01T00:00:00.000Z,2019-06-01T00:00:00.000Z,2019-07-01T00:00:00.000Z,2019-08-01T00:00:00.000Z,2019-09-01T00:00:00.000Z,2019-10-01T00:00:00.000Z,2019-11-01T00:00:00.000Z,2019-12-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2020-02-01T00:00:00.000Z,2020-03-01T00:00:00.000Z,2020-04-01T00:00:00.000Z,2020-05-01T00:00:00.000Z,2020-06-01T00:00:00.000Z,2020-07-01T00:00:00.000Z,2020-08-01T00:00:00.000Z,2020-09-01T00:00:00.000Z,2020-10-01T00:00:00.000Z,2020-11-01T00:00:00.000Z,2020-12-01T00:00:00.000Z,2021-01-01T00:00:00.000Z,2021-02-01T00:00:00.000Z,2021-03-01T00:00:00.000Z,2021-04-01T00:00:00.000Z,2021-05-01T00:00:00.000Z,2021-06-01T00:00:00.000Z,2021-07-01T00:00:00.000Z,2021-08-01T00:00:00.000Z,2021-09-01T00:00:00.000Z,2021-10-01T00:00:00.000Z,2021-11-01T00:00:00.000Z,2021-12-01T00:00:00.000Z,2022-01-01T00:00:00.000Z,2022-02-01T00:00:00.000Z,2022-03-01T00:00:00.000Z,2022-04-01T00:00:00.000Z,2022-05-01T00:00:00.000Z,2022-06-01T00:00:00.000Z,2022-07-01T00:00:00.000Z</Dimension>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/catalog.search#/metadata/f2153c4a-915b-48a6-8658-963bdce7366c"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=f2153c4a-915b-48a6-8658-963bdce7366c"/>
</MetadataURL>
<Style>
<Name>deter-amz:deter_public_pt-br</Name>
<Title>deter-amz:deter_public_pt-br</Title>
<LegendURL width="199" height="160">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=deter-amz%3Adeter_amz"/>
</LegendURL>
</Style>
<Style>
<Name>deter-amz:deter_public_en</Name>
<Title>deter-amz:deter_public_en</Title>
<LegendURL width="234" height="160">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=deter-amz%3Adeter_amz&style=deter_public_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>deter-cerrado:deter_cerrado</Name>
<Title>DETER Daily - Anonymous</Title>
<Abstract>For anonymous users. Filtered by areatotalkm >= 0.03</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>deter_cerrado</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.0561988039702</westBoundLongitude>
<eastBoundLongitude>-41.5527779461627</eastBoundLongitude>
<southBoundLatitude>-24.6256305793398</southBoundLatitude>
<northBoundLatitude>-2.64975322416018</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.0561988039702" miny="-24.6256305793398" maxx="-41.5527779461627" maxy="-2.64975322416018"/>
<BoundingBox CRS="EPSG:4674" minx="-24.6256305793398" miny="-60.0561988039702" maxx="-2.64975322416018" maxy="-41.5527779461627"/>
<Dimension name="time" default="2018-05-01T00:00:00.000Z/2022-12-01T00:00:00.000Z" units="ISO8601">2018-05-01T00:00:00.000Z,2018-06-01T00:00:00.000Z,2018-07-01T00:00:00.000Z,2018-08-01T00:00:00.000Z,2018-09-01T00:00:00.000Z,2018-10-01T00:00:00.000Z,2018-11-01T00:00:00.000Z,2018-12-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2019-02-01T00:00:00.000Z,2019-03-01T00:00:00.000Z,2019-04-01T00:00:00.000Z,2019-05-01T00:00:00.000Z,2019-06-01T00:00:00.000Z,2019-07-01T00:00:00.000Z,2019-08-01T00:00:00.000Z,2019-09-01T00:00:00.000Z,2019-10-01T00:00:00.000Z,2019-11-01T00:00:00.000Z,2019-12-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2020-02-01T00:00:00.000Z,2020-03-01T00:00:00.000Z,2020-04-01T00:00:00.000Z,2020-05-01T00:00:00.000Z,2020-06-01T00:00:00.000Z,2020-07-01T00:00:00.000Z,2020-08-01T00:00:00.000Z,2020-09-01T00:00:00.000Z,2020-10-01T00:00:00.000Z,2020-11-01T00:00:00.000Z,2020-12-01T00:00:00.000Z,2021-01-01T00:00:00.000Z,2021-02-01T00:00:00.000Z,2021-03-01T00:00:00.000Z,2021-04-01T00:00:00.000Z,2021-05-01T00:00:00.000Z,2021-06-01T00:00:00.000Z,2021-07-01T00:00:00.000Z,2021-08-01T00:00:00.000Z,2021-09-01T00:00:00.000Z,2021-10-01T00:00:00.000Z,2021-11-01T00:00:00.000Z,2021-12-01T00:00:00.000Z</Dimension>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=e6e15388-4ca9-49b9-aec9-03891339a35e"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/e6e15388-4ca9-49b9-aec9-03891339a35e"/>
</MetadataURL>
<Style>
<Name>deter-cerrado:deter_cerrado_pt-br</Name>
<Title>Alerts polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=deter-cerrado%3Adeter_cerrado"/>
</LegendURL>
</Style>
<Style>
<Name>deter-cerrado:deter_cerrado_en</Name>
<Title>Alerts polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=deter-cerrado%3Adeter_cerrado&style=deter_cerrado_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>deter-cerrado-nb:deter_cerrado</Name>
<Title>DETER Daily - Anonymous</Title>
<Abstract>For anonymous users. Filtered by areatotalkm >= 0.03</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>deter_cerrado</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.2644162083976</westBoundLongitude>
<eastBoundLongitude>-41.6440708370284</eastBoundLongitude>
<southBoundLatitude>-24.5852580747093</southBoundLatitude>
<northBoundLatitude>-2.64975322416018</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.2644162083976" miny="-24.5852580747093" maxx="-41.6440708370284" maxy="-2.64975322416018"/>
<BoundingBox CRS="EPSG:4674" minx="-24.5852580747093" miny="-60.2644162083976" maxx="-2.64975322416018" maxy="-41.6440708370284"/>
<Dimension name="time" default="2018-05-01T00:00:00.000Z/2022-12-01T00:00:00.000Z" units="ISO8601">2018-05-01T00:00:00.000Z,2018-06-01T00:00:00.000Z,2018-07-01T00:00:00.000Z,2018-08-01T00:00:00.000Z,2018-09-01T00:00:00.000Z,2018-10-01T00:00:00.000Z,2018-11-01T00:00:00.000Z,2018-12-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2019-02-01T00:00:00.000Z,2019-03-01T00:00:00.000Z,2019-04-01T00:00:00.000Z,2019-05-01T00:00:00.000Z,2019-06-01T00:00:00.000Z,2019-07-01T00:00:00.000Z,2019-08-01T00:00:00.000Z,2019-09-01T00:00:00.000Z,2019-10-01T00:00:00.000Z,2019-11-01T00:00:00.000Z,2019-12-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2020-02-01T00:00:00.000Z,2020-03-01T00:00:00.000Z,2020-04-01T00:00:00.000Z,2020-05-01T00:00:00.000Z,2020-06-01T00:00:00.000Z,2020-07-01T00:00:00.000Z,2020-08-01T00:00:00.000Z,2020-09-01T00:00:00.000Z,2020-10-01T00:00:00.000Z,2020-11-01T00:00:00.000Z,2020-12-01T00:00:00.000Z,2021-01-01T00:00:00.000Z,2021-02-01T00:00:00.000Z,2021-03-01T00:00:00.000Z,2021-04-01T00:00:00.000Z,2021-05-01T00:00:00.000Z,2021-06-01T00:00:00.000Z,2021-07-01T00:00:00.000Z,2021-08-01T00:00:00.000Z,2021-09-01T00:00:00.000Z,2021-10-01T00:00:00.000Z,2021-11-01T00:00:00.000Z,2021-12-01T00:00:00.000Z,2022-01-01T00:00:00.000Z,2022-02-01T00:00:00.000Z,2022-03-01T00:00:00.000Z,2022-04-01T00:00:00.000Z,2022-05-01T00:00:00.000Z,2022-06-01T00:00:00.000Z,2022-07-01T00:00:00.000Z</Dimension>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=e6e15388-4ca9-49b9-aec9-03891339a35e"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/e6e15388-4ca9-49b9-aec9-03891339a35e"/>
</MetadataURL>
<Style>
<Name>deter-cerrado-nb:deter_cerrado_pt-br</Name>
<Title>Alerts polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=deter-cerrado-nb%3Adeter_cerrado"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>deter-amz:deter_degradations</Name>
<Title>DETER Degradations - Anonymous</Title>
<Abstract>Only degradations since August 2019</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>deter_degradations</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.4644820976107</westBoundLongitude>
<eastBoundLongitude>-44.2149153938866</eastBoundLongitude>
<southBoundLatitude>-17.4930070661258</southBoundLatitude>
<northBoundLatitude>4.07042664195673</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.4644820976107" miny="-17.4930070661258" maxx="-44.2149153938866" maxy="4.07042664195673"/>
<BoundingBox CRS="EPSG:4674" minx="-17.4930070661258" miny="-73.4644820976107" maxx="4.07042664195673" maxy="-44.2149153938866"/>
<Style>
<Name>deter-amz:deter_amz_pt-br</Name>
<Title>deter-amz:deter_amz_pt-br</Title>
<LegendURL width="199" height="160">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=deter-amz%3Adeter_degradations"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>deter-sar:deter_dot4</Name>
<Title>deter_dot4</Title>
<Abstract/>
<KeywordList>
<Keyword>deter</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6794281005859</westBoundLongitude>
<eastBoundLongitude>-43.6076354980469</eastBoundLongitude>
<southBoundLatitude>-17.4930076599121</southBoundLatitude>
<northBoundLatitude>5.09199476242065</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6794281005859" miny="-17.4930076599121" maxx="-43.6076354980469" maxy="5.09199476242065"/>
<BoundingBox CRS="EPSG:4674" minx="-17.4930076599121" miny="-73.6794281005859" maxx="5.09199476242065" maxy="-43.6076354980469"/>
<Style>
<Name>polygon</Name>
<Title>A boring default style</Title>
<Abstract>A sample style that just prints out a transparent red interior with a red outline</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=deter-sar%3Adeter_dot4"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>deter-sar:deter_sar_1ha_validados_dot4</Name>
<Title>deter_sar_1ha_validados_dot4</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>deter_sar_1ha_validados</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.6155014038086</westBoundLongitude>
<eastBoundLongitude>-43.6076354980469</eastBoundLongitude>
<southBoundLatitude>-16.6420097351074</southBoundLatitude>
<northBoundLatitude>5.08248853683472</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.6155014038086" miny="-16.6420097351074" maxx="-43.6076354980469" maxy="5.08248853683472"/>
<BoundingBox CRS="EPSG:4674" minx="-16.6420097351074" miny="-73.6155014038086" maxx="5.08248853683472" maxy="-43.6076354980469"/>
<Style>
<Name>polygon</Name>
<Title>A boring default style</Title>
<Abstract>A sample style that just prints out a transparent red interior with a red outline</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=deter-sar%3Adeter_sar_1ha_validados_dot4"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>vegetation-cerrado:ecoregions</Name>
<Title>Cerrado Biome Ecoregions</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>ecoregions</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.472595634</westBoundLongitude>
<eastBoundLongitude>-41.2775355279999</eastBoundLongitude>
<southBoundLatitude>-24.681780126</southBoundLatitude>
<northBoundLatitude>-2.33208833599997</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.472595634" miny="-24.681780126" maxx="-41.2775355279999" maxy="-2.33208833599997"/>
<BoundingBox CRS="EPSG:4674" minx="-24.681780126" miny="-60.472595634" maxx="-2.33208833599997" maxy="-41.2775355279999"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=44115cce-f175-4533-9ec0-6a3ebcb352e4"/>
</MetadataURL>
<Style>
<Name>vegetation-cerrado:ecoregions_pt-br</Name>
<Title>Limites das ecorregiões</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vegetation-cerrado%3Aecoregions"/>
</LegendURL>
</Style>
<Style>
<Name>vegetation-cerrado:ecoregions_en</Name>
<Title>Ecoregions border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vegetation-cerrado%3Aecoregions&style=ecoregions_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0" cascaded="1">
<Name>queimadas:focos_ams_48h</Name>
<Title>Focos na América do Sul nas últimas 48 horas (todos os satélites)</Title>
<Abstract>Focos de calor detectados por todos os satélites em toda a América do Sul nas últimas 48 horas.</Abstract>
<KeywordList>
<Keyword>focos</Keyword>
<Keyword>américa do sul</Keyword>
<Keyword>48 horas</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-91.67</westBoundLongitude>
<eastBoundLongitude>-28.63</eastBoundLongitude>
<southBoundLatitude>-55.91</southBoundLatitude>
<northBoundLatitude>12.6</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-91.67" miny="-55.91" maxx="-28.63" maxy="12.6"/>
<BoundingBox CRS="EPSG:4326" minx="-55.91" miny="-91.67" maxx="12.6" maxy="-28.63"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=6422463f-3652-437f-bb33-2ac7bbc9bebe"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/6422463f-3652-437f-bb33-2ac7bbc9bebe"/>
</MetadataURL>
<Style>
<Name/>
<Title/>
<LegendURL width="2" height="1">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=queimadas%3Afocos_ams_48h"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>queimadas:focos_ref_prodes</Name>
<Title>focos_ref_prodes</Title>
<Abstract>Historical data of active fires grouped by PRODES year</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>focos_ref_prodes</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.674</westBoundLongitude>
<eastBoundLongitude>-34.816</eastBoundLongitude>
<southBoundLatitude>-33.709</southBoundLatitude>
<northBoundLatitude>5.154</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.674" miny="-33.709" maxx="-34.816" maxy="5.154"/>
<BoundingBox CRS="EPSG:4326" minx="-33.709" miny="-73.674" maxx="5.154" maxy="-34.816"/>
<Dimension name="time" default="2008/2021" units="ISO8601">2008-01-01T00:00:00.000Z,2009-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z</Dimension>
<Style>
<Name>queimadas:focos_ref_prodes_pt-br</Name>
<Title>queimadas:focos_ref_prodes_pt-br</Title>
<LegendURL width="118" height="260">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=queimadas%3Afocos_ref_prodes"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:forest</Name>
<Title>Forest since 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>forest</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9783164486978</westBoundLongitude>
<eastBoundLongitude>-43.9135843908962</eastBoundLongitude>
<southBoundLatitude>-17.945519758442</southBoundLatitude>
<northBoundLatitude>5.27149090870589</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9783164486978" miny="-17.945519758442" maxx="-43.9135843908962" maxy="5.27149090870589"/>
<BoundingBox CRS="EPSG:4674" minx="-17.945519758442" miny="-73.9783164486978" maxx="5.27149090870589" maxy="-43.9135843908962"/>
<Dimension name="time" default="2021-01-01" units="ISO8601">2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/dd31e0cb-0b36-4441-9f4a-a4a896bfae70"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=dd31e0cb-0b36-4441-9f4a-a4a896bfae70"/>
</MetadataURL>
<Style>
<Name>prodes-legal-amz:forest_en</Name>
<Title>prodes-legal-amz:forest_en</Title>
<LegendURL width="57" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Aforest"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-legal-amz:forest_pt-br</Name>
<Title>prodes-legal-amz:forest_pt-br</Title>
<LegendURL width="57" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Aforest&style=forest_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amz:forest_biome</Name>
<Title>Forest since 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>forest_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9783164486978</westBoundLongitude>
<eastBoundLongitude>-44.0</eastBoundLongitude>
<southBoundLatitude>-16.2860697422292</southBoundLatitude>
<northBoundLatitude>5.27149090870589</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9783164486978" miny="-16.2860697422292" maxx="-44.0" maxy="5.27149090870589"/>
<BoundingBox CRS="EPSG:4674" minx="-16.2860697422292" miny="-73.9783164486978" maxx="5.27149090870589" maxy="-44.0"/>
<Dimension name="time" default="2016-01-01T00:00:00.000Z" units="ISO8601">2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/e7523c17-8570-4da6-ab41-f7fb62d7b86b"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=e7523c17-8570-4da6-ab41-f7fb62d7b86b"/>
</MetadataURL>
<Style>
<Name>prodes-amz:forest_biome_en</Name>
<Title>prodes-amz:forest_biome_en</Title>
<LegendURL width="57" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Aforest_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-amz:forest_biome_pt-br</Name>
<Title>prodes-amz:forest_biome_pt-br</Title>
<LegendURL width="57" height="100">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Aforest_biome&style=forest_biome_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amazon-nb:forest_biome</Name>
<Title>Forest since 2016</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>forest_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9783164486978</westBoundLongitude>
<eastBoundLongitude>-44.0</eastBoundLongitude>
<southBoundLatitude>-16.6569893090661</southBoundLatitude>
<northBoundLatitude>5.26958083300003</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9783164486978" miny="-16.6569893090661" maxx="-44.0" maxy="5.26958083300003"/>
<BoundingBox CRS="EPSG:4674" minx="-16.6569893090661" miny="-73.9783164486978" maxx="5.26958083300003" maxy="-44.0"/>
<Dimension name="time" default="2016-01-01" units="ISO8601">2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/e7523c17-8570-4da6-ab41-f7fb62d7b86b"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=e7523c17-8570-4da6-ab41-f7fb62d7b86b"/>
</MetadataURL>
<Style>
<Name>prodes-amazon-nb:forest_biome_en</Name>
<Title>prodes-amazon-nb:forest_biome_en</Title>
<LegendURL width="57" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Aforest_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-amazon-nb:forest_biome_pt-br</Name>
<Title>prodes-amazon-nb:forest_biome_pt-br</Title>
<LegendURL width="57" height="120">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Aforest_biome&style=forest_biome_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:grid_landsat_tm_legal_amazon</Name>
<Title>Grid Landsat TM Legal Amazon</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>grid_landsat_tm_legal_amazon</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-75.0776941828</westBoundLongitude>
<eastBoundLongitude>-42.6755267722</eastBoundLongitude>
<southBoundLatitude>-19.610302178</southBoundLatitude>
<northBoundLatitude>6.61429111885</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-75.0776941828" miny="-19.610302178" maxx="-42.6755267722" maxy="6.61429111885"/>
<BoundingBox CRS="EPSG:4674" minx="-19.610302178" miny="-75.0776941828" maxx="6.61429111885" maxy="-42.6755267722"/>
<Style>
<Name>prodes-legal-amz:grid_landsat_tm_legal_amazon_en</Name>
<Title>Grid Landsat TM</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Agrid_landsat_tm_legal_amazon"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-legal-amz:grid_landsat_tm_legal_amazon_pt-br</Name>
<Title>Grade Landsat TM</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Agrid_landsat_tm_legal_amazon&style=grid_landsat_tm_legal_amazon_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado:hydrography</Name>
<Title>Hydrography</Title>
<Abstract/>
<KeywordList>
<Keyword>hydrography</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.042537689209</westBoundLongitude>
<eastBoundLongitude>-41.4303283691406</eastBoundLongitude>
<southBoundLatitude>-24.7843151092529</southBoundLatitude>
<northBoundLatitude>-2.22110438346863</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.042537689209" miny="-24.7843151092529" maxx="-41.4303283691406" maxy="-2.22110438346863"/>
<BoundingBox CRS="EPSG:4674" minx="-24.7843151092529" miny="-60.042537689209" maxx="-2.22110438346863" maxy="-41.4303283691406"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/catalog.search#/metadata/358cee61-8c63-459e-8d8f-5fa271106bbb"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=358cee61-8c63-459e-8d8f-5fa271106bbb"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado:hydrography_en</Name>
<Title>A hydrography polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Ahydrography"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado:hydrography_pt-br</Name>
<Title>Estilo para poligono de hidrografia</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Ahydrography&style=hydrography_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:hydrography</Name>
<Title>Hydrography</Title>
<Abstract/>
<KeywordList>
<Keyword>hydrography</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.2506438875477</westBoundLongitude>
<eastBoundLongitude>-43.9135843925793</eastBoundLongitude>
<southBoundLatitude>-17.8973140658741</southBoundLatitude>
<northBoundLatitude>4.56095791980162</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.2506438875477" miny="-17.8973140658741" maxx="-43.9135843925793" maxy="4.56095791980162"/>
<BoundingBox CRS="EPSG:4674" minx="-17.8973140658741" miny="-73.2506438875477" maxx="4.56095791980162" maxy="-43.9135843925793"/>
<Attribution>
<Title>by INPE</Title>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://www.inpe.br/"/>
</Attribution>
<MetadataURL type="TC211">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://geometadata.dpi.inpe.br/cgi-bin/csw.py?service=CSW&version=2.0.2&request=GetRepositoryItem&id=d18f51fd-f7fa-4e22-a6c3-485a06a29276"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=d18f51fd-f7fa-4e22-a6c3-485a06a29276"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/d18f51fd-f7fa-4e22-a6c3-485a06a29276"/>
</MetadataURL>
<Style>
<Name>prodes-legal-amz:hydrography_en</Name>
<Title>A hydrography polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Ahydrography"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-legal-amz:hydrography_pt-br</Name>
<Title>Estilo para poligonos de hidrografia</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Ahydrography&style=hydrography_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado-nb:hydrography</Name>
<Title>Hydrographic data of the Cerrado Biome</Title>
<Abstract>Related to the new border of the biome. See the metadata details.</Abstract>
<KeywordList>
<Keyword>hydrography</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-59.9503969559547</westBoundLongitude>
<eastBoundLongitude>-41.3285692631146</eastBoundLongitude>
<southBoundLatitude>-24.6027755277645</southBoundLatitude>
<northBoundLatitude>-2.33208833399993</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-59.9503969559547" miny="-24.6027755277645" maxx="-41.3285692631146" maxy="-2.33208833399993"/>
<BoundingBox CRS="EPSG:4674" minx="-24.6027755277645" miny="-59.9503969559547" maxx="-2.33208833399993" maxy="-41.3285692631146"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=358cee61-8c63-459e-8d8f-5fa271106bbb"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado-nb:hydrography_en</Name>
<Title>Hydrography borders</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Ahydrography"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado-nb:hydrography_pt-br</Name>
<Title>Limites de hidrografia</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Ahydrography&style=hydrography_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pampa:hydrography</Name>
<Title>Hydrography</Title>
<Abstract/>
<KeywordList>
<Keyword>hydrography</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.649742824</westBoundLongitude>
<eastBoundLongitude>-49.6727344471998</eastBoundLongitude>
<southBoundLatitude>-33.6881454915972</southBoundLatitude>
<northBoundLatitude>-28.076455062</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.649742824" miny="-33.6881454915972" maxx="-49.6727344471998" maxy="-28.076455062"/>
<BoundingBox CRS="EPSG:4674" minx="-33.6881454915972" miny="-57.649742824" maxx="-28.076455062" maxy="-49.6727344471998"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/986bc6d9-4a26-4727-87df-820e68709936"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=986bc6d9-4a26-4727-87df-820e68709936"/>
</MetadataURL>
<Style>
<Name>prodes-pampa:hydrography_en</Name>
<Title>A hydrography polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Ahydrography"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-pampa:hydrography_pt-br</Name>
<Title>Estilo de polÃ­gono de hidrografia</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Ahydrography&style=hydrography_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pantanal:hydrography</Name>
<Title>Hydrography</Title>
<Abstract/>
<KeywordList>
<Keyword>hydrography</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-59.1831456225824</westBoundLongitude>
<eastBoundLongitude>-54.945515943081</eastBoundLongitude>
<southBoundLatitude>-22.15086658</southBoundLatitude>
<northBoundLatitude>-15.6412453091467</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-59.1831456225824" miny="-22.15086658" maxx="-54.945515943081" maxy="-15.6412453091467"/>
<BoundingBox CRS="EPSG:4674" minx="-22.15086658" miny="-59.1831456225824" maxx="-15.6412453091467" maxy="-54.945515943081"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/dfcba72f-827b-485e-bcb5-bc8e1461054a"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=dfcba72f-827b-485e-bcb5-bc8e1461054a"/>
</MetadataURL>
<Style>
<Name>prodes-pantanal:hydrography_en</Name>
<Title>A hydrography polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Ahydrography"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-pantanal:hydrography_pt-br</Name>
<Title>Estilo de polÃ­gono de hidrografia</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Ahydrography&style=hydrography_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>vegetation-cerrado:hydrography</Name>
<Title>Hydrographic Grid in the Cerrado Biome</Title>
<Abstract>Hydrographic Grid in the Cerrado Biome</Abstract>
<KeywordList>
<Keyword>hydrography</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.4697402363998</westBoundLongitude>
<eastBoundLongitude>-41.2854143139825</eastBoundLongitude>
<southBoundLatitude>-24.6630599693816</southBoundLatitude>
<northBoundLatitude>-2.33742178883093</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.4697402363998" miny="-24.6630599693816" maxx="-41.2854143139825" maxy="-2.33742178883093"/>
<BoundingBox CRS="EPSG:4674" minx="-24.6630599693816" miny="-60.4697402363998" maxx="-2.33742178883093" maxy="-41.2854143139825"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=3ad45bb3-05d4-4503-a776-11a6e5ff9c4a"/>
</MetadataURL>
<Style>
<Name>vegetation-cerrado:hydrography_pt-br</Name>
<Title>vegetation-cerrado:hydrography_pt-br</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vegetation-cerrado%3Ahydrography"/>
</LegendURL>
</Style>
<Style>
<Name>vegetation-cerrado:hydrography_en</Name>
<Title>vegetation-cerrado:hydrography_en</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vegetation-cerrado%3Ahydrography&style=hydrography_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-mata-atlantica:hydrography</Name>
<Title>Hydrography</Title>
<Abstract/>
<KeywordList>
<Keyword>hydrography</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-55.4654110221114</westBoundLongitude>
<eastBoundLongitude>-34.8003341296907</eastBoundLongitude>
<southBoundLatitude>-29.9518437174788</southBoundLatitude>
<northBoundLatitude>-5.1566042782502</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-55.4654110221114" miny="-29.9518437174788" maxx="-34.8003341296907" maxy="-5.1566042782502"/>
<BoundingBox CRS="EPSG:4674" minx="-29.9518437174788" miny="-55.4654110221114" maxx="-5.1566042782502" maxy="-34.8003341296907"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/47bb3fa5-e60a-4afd-ba78-29de35223944"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=47bb3fa5-e60a-4afd-ba78-29de35223944"/>
</MetadataURL>
<Style>
<Name>prodes-mata-atlantica:hydrography_en</Name>
<Title>A hydrography polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-mata-atlantica%3Ahydrography"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-mata-atlantica:hydrography_pt-br</Name>
<Title>Estilo para poligono de hidrografia</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-mata-atlantica%3Ahydrography&style=hydrography_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-caatinga:hydrography</Name>
<Title>Hydrography</Title>
<Abstract/>
<KeywordList>
<Keyword>hydrography</Keyword>
<Keyword>features</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-44.4482076967938</westBoundLongitude>
<eastBoundLongitude>-35.2673038389817</eastBoundLongitude>
<southBoundLatitude>-15.9697742852428</southBoundLatitude>
<northBoundLatitude>-2.78423064999993</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-44.4482076967938" miny="-15.9697742852428" maxx="-35.2673038389817" maxy="-2.78423064999993"/>
<BoundingBox CRS="EPSG:4674" minx="-15.9697742852428" miny="-44.4482076967938" maxx="-2.78423064999993" maxy="-35.2673038389817"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/4c0e3e3d-cb7b-48f1-93e7-cfb2d3c836dd"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=4c0e3e3d-cb7b-48f1-93e7-cfb2d3c836dd"/>
</MetadataURL>
<Style>
<Name>prodes-caatinga:hydrography_en</Name>
<Title>A hydrography polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-caatinga%3Ahydrography"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-caatinga:hydrography_pt-br</Name>
<Title>Estilo para poligono de hidrografia</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-caatinga%3Ahydrography&style=hydrography_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amz:hydrography_biome</Name>
<Title>Hydrography</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>hydrography_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.2506438875477</westBoundLongitude>
<eastBoundLongitude>-44.0</eastBoundLongitude>
<southBoundLatitude>-16.029395019121</southBoundLatitude>
<northBoundLatitude>4.56095791980162</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.2506438875477" miny="-16.029395019121" maxx="-44.0" maxy="4.56095791980162"/>
<BoundingBox CRS="EPSG:4674" minx="-16.029395019121" miny="-73.2506438875477" maxx="4.56095791980162" maxy="-44.0"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/1df78632-68e7-4e91-bca0-25305d3f831e"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=1df78632-68e7-4e91-bca0-25305d3f831e"/>
</MetadataURL>
<Style>
<Name>terrabrasilis:hydrography</Name>
<Title>A hydrography polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Ahydrography_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amazon-nb:hydrography_biome</Name>
<Title>Hydrography</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>hydrography_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.250082895589</westBoundLongitude>
<eastBoundLongitude>-44.0</eastBoundLongitude>
<southBoundLatitude>-16.100428309101</southBoundLatitude>
<northBoundLatitude>4.56095791980162</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.250082895589" miny="-16.100428309101" maxx="-44.0" maxy="4.56095791980162"/>
<BoundingBox CRS="EPSG:4674" minx="-16.100428309101" miny="-73.250082895589" maxx="4.56095791980162" maxy="-44.0"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/1df78632-68e7-4e91-bca0-25305d3f831e"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=1df78632-68e7-4e91-bca0-25305d3f831e"/>
</MetadataURL>
<Style>
<Name>prodes-amazon-nb:hydrography_biome_pt-br</Name>
<Title>Estilo para poligono de hidrografia</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Ahydrography_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amz:indigeneous_area_amazon_biome</Name>
<Title>Indigeneous Area Amazon Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>indigeneous_area_amazon_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.7251885753996</westBoundLongitude>
<eastBoundLongitude>-45.3952408798213</eastBoundLongitude>
<southBoundLatitude>-16.2749094225882</southBoundLatitude>
<northBoundLatitude>5.27212443824354</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.7251885753996" miny="-16.2749094225882" maxx="-45.3952408798213" maxy="5.27212443824354"/>
<BoundingBox CRS="EPSG:4674" minx="-16.2749094225882" miny="-73.7251885753996" maxx="5.27212443824354" maxy="-45.3952408798213"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/22e49b94-4392-4cb2-b509-5d96e45d44df"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=22e49b94-4392-4cb2-b509-5d96e45d44df"/>
</MetadataURL>
<Style>
<Name>prodes-amz:indigeneous_area_amazon_biome</Name>
<Title>Indigeneous area</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Aindigeneous_area_amazon_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado:indigeneous_area_cerrado_biome</Name>
<Title>Indigeneous Area Cerrado Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>indigeneous_area_cerrado_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.1099291026706</westBoundLongitude>
<eastBoundLongitude>-43.2252748173355</eastBoundLongitude>
<southBoundLatitude>-22.41474006</southBoundLatitude>
<northBoundLatitude>-5.00113657703723</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.1099291026706" miny="-22.41474006" maxx="-43.2252748173355" maxy="-5.00113657703723"/>
<BoundingBox CRS="EPSG:4674" minx="-22.41474006" miny="-60.1099291026706" maxx="-5.00113657703723" maxy="-43.2252748173355"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=22e49b94-4392-4cb2-b509-5d96e45d44df"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/22e49b94-4392-4cb2-b509-5d96e45d44df"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado:indigeneous_area_cerrado_biome_pt-br</Name>
<Title>Área indígena</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Aindigeneous_area_cerrado_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado:indigeneous_area_cerrado_biome_en</Name>
<Title>Indigeneous area</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Aindigeneous_area_cerrado_biome&style=indigeneous_area_cerrado_biome_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pampa:indigeneous_area_pampa_biome</Name>
<Title>Indigeneous Area Pampa Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>indigeneous_area_pampa_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-53.2468482084469</westBoundLongitude>
<eastBoundLongitude>-49.7885628569304</eastBoundLongitude>
<southBoundLatitude>-31.205159501523</southBoundLatitude>
<northBoundLatitude>-29.0547135171568</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-53.2468482084469" miny="-31.205159501523" maxx="-49.7885628569304" maxy="-29.0547135171568"/>
<BoundingBox CRS="EPSG:4674" minx="-31.205159501523" miny="-53.2468482084469" maxx="-29.0547135171568" maxy="-49.7885628569304"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/22e49b94-4392-4cb2-b509-5d96e45d44df"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=22e49b94-4392-4cb2-b509-5d96e45d44df"/>
</MetadataURL>
<Style>
<Name>prodes-pampa:indigeneous_area_pampa_biome</Name>
<Title>Indigeneous area</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Aindigeneous_area_pampa_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pantanal:indigeneous_area_pantanal_biome</Name>
<Title>Indigeneous Area Pantanal Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>indigeneous_area_pantanal_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.84757548</westBoundLongitude>
<eastBoundLongitude>-55.0283696939777</eastBoundLongitude>
<southBoundLatitude>-20.98866982</southBoundLatitude>
<northBoundLatitude>-16.4794243609969</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.84757548" miny="-20.98866982" maxx="-55.0283696939777" maxy="-16.4794243609969"/>
<BoundingBox CRS="EPSG:4674" minx="-20.98866982" miny="-57.84757548" maxx="-16.4794243609969" maxy="-55.0283696939777"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/22e49b94-4392-4cb2-b509-5d96e45d44df"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=22e49b94-4392-4cb2-b509-5d96e45d44df"/>
</MetadataURL>
<Style>
<Name>prodes-pantanal:indigeneous_area_pantanal_biome</Name>
<Title>Indigeneous area</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Aindigeneous_area_pantanal_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amazon-nb:indigenous_area_amazon_biome</Name>
<Title>Indigenous Area Amazon Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>indigenous_area_amazon_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.7251885753996</westBoundLongitude>
<eastBoundLongitude>-45.3952408798213</eastBoundLongitude>
<southBoundLatitude>-16.27490942</southBoundLatitude>
<northBoundLatitude>5.26958083300003</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.7251885753996" miny="-16.27490942" maxx="-45.3952408798213" maxy="5.26958083300003"/>
<BoundingBox CRS="EPSG:4674" minx="-16.27490942" miny="-73.7251885753996" maxx="5.26958083300003" maxy="-45.3952408798213"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/22e49b94-4392-4cb2-b509-5d96e45d44df"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=22e49b94-4392-4cb2-b509-5d96e45d44df"/>
</MetadataURL>
<Style>
<Name>prodes-amazon-nb:indigenous_area_amazon_biome</Name>
<Title>Indigenous area</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Aindigenous_area_amazon_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado-nb:indigenous_area_cerrado_biome</Name>
<Title>Indigenous Area in the Cerrado Biome</Title>
<Abstract>Intersection with the new border of the biome. See the metadata details.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>indigenous_area_cerrado_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.313385279</westBoundLongitude>
<eastBoundLongitude>-44.1395783999999</eastBoundLongitude>
<southBoundLatitude>-23.9890277894928</southBoundLatitude>
<northBoundLatitude>-5.01191575909588</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.313385279" miny="-23.9890277894928" maxx="-44.1395783999999" maxy="-5.01191575909588"/>
<BoundingBox CRS="EPSG:4674" minx="-23.9890277894928" miny="-60.313385279" maxx="-5.01191575909588" maxy="-44.1395783999999"/>
<Style>
<Name>prodes-cerrado-nb:indigenous_area_cerrado_biome_en</Name>
<Title>Indigenous area</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Aindigenous_area_cerrado_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado-nb:indigenous_area_cerrado_biome_pt-br</Name>
<Title>Terra indígena</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Aindigenous_area_cerrado_biome&style=indigenous_area_cerrado_biome_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:indigenous_area_legal_amazon</Name>
<Title>Indigenous Area Legal Amazon</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>indigenous_area_legal_amazon</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.7251885753996</westBoundLongitude>
<eastBoundLongitude>-44.72407215191</eastBoundLongitude>
<southBoundLatitude>-17.7062557729068</southBoundLatitude>
<northBoundLatitude>5.27212505789396</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.7251885753996" miny="-17.7062557729068" maxx="-44.72407215191" maxy="5.27212505789396"/>
<BoundingBox CRS="EPSG:4674" minx="-17.7062557729068" miny="-73.7251885753996" maxx="5.27212505789396" maxy="-44.72407215191"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/22e49b94-4392-4cb2-b509-5d96e45d44df"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=22e49b94-4392-4cb2-b509-5d96e45d44df"/>
</MetadataURL>
<Style>
<Name>prodes-legal-amz:indigeneous_area_legal_amazon</Name>
<Title>Indigeneous area</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Aindigenous_area_legal_amazon"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>forest-monitor-ibama:limite_municipal_amz_2007_2500</Name>
<Title>limite_municipal_amz_2007_2500</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>limite_municipal_amz_2007_2500</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9909439086914</westBoundLongitude>
<eastBoundLongitude>-41.7962303161621</eastBoundLongitude>
<southBoundLatitude>-18.0411357879639</southBoundLatitude>
<northBoundLatitude>5.27215576171875</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9909439086914" miny="-18.0411357879639" maxx="-41.7962303161621" maxy="5.27215576171875"/>
<BoundingBox CRS="EPSG:4326" minx="-18.0411357879639" miny="-73.9909439086914" maxx="5.27215576171875" maxy="-41.7962303161621"/>
<Style>
<Name>polygon</Name>
<Title>A boring default style</Title>
<Abstract>A sample style that just prints out a transparent red interior with a red outline</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=forest-monitor-ibama%3Alimite_municipal_amz_2007_2500"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>forest-monitor-semaspa:limite_municipal_amz_2007_2500</Name>
<Title>limite_municipal_amz_2007_2500</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>limite_municipal_amz_2007_2500</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9909439086914</westBoundLongitude>
<eastBoundLongitude>-41.7962303161621</eastBoundLongitude>
<southBoundLatitude>-18.0411357879639</southBoundLatitude>
<northBoundLatitude>5.27215576171875</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9909439086914" miny="-18.0411357879639" maxx="-41.7962303161621" maxy="5.27215576171875"/>
<BoundingBox CRS="EPSG:4326" minx="-18.0411357879639" miny="-73.9909439086914" maxx="5.27215576171875" maxy="-41.7962303161621"/>
<Style>
<Name>polygon</Name>
<Title>A boring default style</Title>
<Abstract>A sample style that just prints out a transparent red interior with a red outline</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=forest-monitor-semaspa%3Alimite_municipal_amz_2007_2500"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>forest-monitor-homologation:limite_municipal_amz_2007_2500</Name>
<Title>limite_municipal_amz_2007_2500</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>limite_municipal_amz_2007_2500</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9909439086914</westBoundLongitude>
<eastBoundLongitude>-41.7962303161621</eastBoundLongitude>
<southBoundLatitude>-18.0411357879639</southBoundLatitude>
<northBoundLatitude>5.27215576171875</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9909439086914" miny="-18.0411357879639" maxx="-41.7962303161621" maxy="5.27215576171875"/>
<BoundingBox CRS="EPSG:4326" minx="-18.0411357879639" miny="-73.9909439086914" maxx="5.27215576171875" maxy="-41.7962303161621"/>
<Style>
<Name>polygon</Name>
<Title>A boring default style</Title>
<Abstract>A sample style that just prints out a transparent red interior with a red outline</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=forest-monitor-homologation%3Alimite_municipal_amz_2007_2500"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>forest-monitor-homologation:mascara_deter</Name>
<Title>mascara_deter</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>mascara_deter</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-67.900749206543</westBoundLongitude>
<eastBoundLongitude>-49.9158058166504</eastBoundLongitude>
<southBoundLatitude>-10.5258693695068</southBoundLatitude>
<northBoundLatitude>-2.09891438484192</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-67.900749206543" miny="-10.5258693695068" maxx="-49.9158058166504" maxy="-2.09891438484192"/>
<BoundingBox CRS="EPSG:4326" minx="-10.5258693695068" miny="-67.900749206543" maxx="-2.09891438484192" maxy="-49.9158058166504"/>
<Style>
<Name>polygon</Name>
<Title>A boring default style</Title>
<Abstract>A sample style that just prints out a transparent red interior with a red outline</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=forest-monitor-homologation%3Amascara_deter"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amz:municipalities_amazon_biome</Name>
<Title>Municipalities Amazon Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>municipalities_amazon_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.990449969</westBoundLongitude>
<eastBoundLongitude>-43.0177679407526</eastBoundLongitude>
<southBoundLatitude>-16.290519038121</southBoundLatitude>
<northBoundLatitude>5.27184107717297</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.990449969" miny="-16.290519038121" maxx="-43.0177679407526" maxy="5.27184107717297"/>
<BoundingBox CRS="EPSG:4674" minx="-16.290519038121" miny="-73.990449969" maxx="5.27184107717297" maxy="-43.0177679407526"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/2d148245-d791-4dd6-84b2-8994f92359ff"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=2d148245-d791-4dd6-84b2-8994f92359ff"/>
</MetadataURL>
<Style>
<Name>prodes-amz:municipalities_amazon_biome</Name>
<Title>Municipalities border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Amunicipalities_amazon_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amazon-nb:municipalities_amazon_biome</Name>
<Title>Municipalities Amazon Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>municipalities_amazon_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.983182159</westBoundLongitude>
<eastBoundLongitude>-43.399317927</eastBoundLongitude>
<southBoundLatitude>-16.6620184999999</southBoundLatitude>
<northBoundLatitude>5.26958083300002</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.983182159" miny="-16.6620184999999" maxx="-43.399317927" maxy="5.26958083300002"/>
<BoundingBox CRS="EPSG:4674" minx="-16.6620184999999" miny="-73.983182159" maxx="5.26958083300002" maxy="-43.399317927"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/bcdae970-b670-4d38-8ee0-bb168f4526c8"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=bcdae970-b670-4d38-8ee0-bb168f4526c8"/>
</MetadataURL>
<Style>
<Name>prodes-amazon-nb:municipalities_amazon_biome</Name>
<Title>Municipalities border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Amunicipalities_amazon_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado:municipalities_cerrado_biome</Name>
<Title>Municipalities of the Cerrado Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>municipalities_cerrado_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.1099291026706</westBoundLongitude>
<eastBoundLongitude>-41.5224714772778</eastBoundLongitude>
<southBoundLatitude>-24.6851194256049</southBoundLatitude>
<northBoundLatitude>-2.32670912054645</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.1099291026706" miny="-24.6851194256049" maxx="-41.5224714772778" maxy="-2.32670912054645"/>
<BoundingBox CRS="EPSG:4674" minx="-24.6851194256049" miny="-60.1099291026706" maxx="-2.32670912054645" maxy="-41.5224714772778"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=5d03e1d4-f896-430a-800f-70ac72eac67b"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/5d03e1d4-f896-430a-800f-70ac72eac67b"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado:municipalities_cerrado_biome_en</Name>
<Title>Municipalities border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Amunicipalities_cerrado_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado:municipalities_cerrado_biome_pt-br</Name>
<Title>Limite de municipios</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Amunicipalities_cerrado_biome&style=municipalities_cerrado_biome_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado-nb:municipalities_cerrado_biome</Name>
<Title>Municipalities of the Cerrado Biome</Title>
<Abstract>Intersection with the new border of the biome. See the metadata details.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>municipalities_cerrado_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.472595634</westBoundLongitude>
<eastBoundLongitude>-41.277535526</eastBoundLongitude>
<southBoundLatitude>-24.681780126</southBoundLatitude>
<northBoundLatitude>-2.33208833399993</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.472595634" miny="-24.681780126" maxx="-41.277535526" maxy="-2.33208833399993"/>
<BoundingBox CRS="EPSG:4674" minx="-24.681780126" miny="-60.472595634" maxx="-2.33208833399993" maxy="-41.277535526"/>
<Style>
<Name>prodes-cerrado-nb:municipalities_cerrado_biome_en</Name>
<Title>Municipalities border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Amunicipalities_cerrado_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado-nb:municipalities_cerrado_biome_pt-br</Name>
<Title>Limite de municipios</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Amunicipalities_cerrado_biome&style=municipalities_cerrado_biome_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:municipalities_legal_amazon</Name>
<Title>Municipalities Legal Amazon</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>municipalities_legal_amazon</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9831821599999</westBoundLongitude>
<eastBoundLongitude>-43.9519185601433</eastBoundLongitude>
<southBoundLatitude>-18.0415609999999</southBoundLatitude>
<northBoundLatitude>5.26958083300002</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9831821599999" miny="-18.0415609999999" maxx="-43.9519185601433" maxy="5.26958083300002"/>
<BoundingBox CRS="EPSG:4674" minx="-18.0415609999999" miny="-73.9831821599999" maxx="5.26958083300002" maxy="-43.9519185601433"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/5d16e199-e534-44ca-bcf3-e59964e47b5f"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=5d16e199-e534-44ca-bcf3-e59964e47b5f"/>
</MetadataURL>
<Style>
<Name>prodes-legal-amz:municipalities_legal_amazon</Name>
<Title>Municipalities border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Amunicipalities_legal_amazon"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pampa:municipalities_pampa_biome</Name>
<Title>Municipalities Pampa Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>municipalities_pampa_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.6497428238478</westBoundLongitude>
<eastBoundLongitude>-49.67279010044</eastBoundLongitude>
<southBoundLatitude>-33.7511779939999</southBoundLatitude>
<northBoundLatitude>-28.0764550623147</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.6497428238478" miny="-33.7511779939999" maxx="-49.67279010044" maxy="-28.0764550623147"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7511779939999" miny="-57.6497428238478" maxx="-28.0764550623147" maxy="-49.67279010044"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/5ea4045d-060e-4ed0-b541-eccb080f17d5"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=5ea4045d-060e-4ed0-b541-eccb080f17d5"/>
</MetadataURL>
<Style>
<Name>prodes-pampa:municipalities_pampa_biome</Name>
<Title>Municipalities border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Amunicipalities_pampa_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pantanal:municipalities_pantanal_biome</Name>
<Title>Municipalities Pantanal Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>municipalities_pantanal_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-59.1869409581433</westBoundLongitude>
<eastBoundLongitude>-54.9223080407124</eastBoundLongitude>
<southBoundLatitude>-22.1508665796596</southBoundLatitude>
<northBoundLatitude>-15.5239173532007</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-59.1869409581433" miny="-22.1508665796596" maxx="-54.9223080407124" maxy="-15.5239173532007"/>
<BoundingBox CRS="EPSG:4674" minx="-22.1508665796596" miny="-59.1869409581433" maxx="-15.5239173532007" maxy="-54.9223080407124"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/84b7accd-bbb0-4bfc-8c7c-a8d09ecc3d0d"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=84b7accd-bbb0-4bfc-8c7c-a8d09ecc3d0d"/>
</MetadataURL>
<Style>
<Name>prodes-pantanal:municipalities_pantanal_biome</Name>
<Title>Municipalities border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Amunicipalities_pantanal_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:no_forest</Name>
<Title>No Forest</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>no_forest</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.0487478282961</westBoundLongitude>
<eastBoundLongitude>-43.9999775450585</eastBoundLongitude>
<southBoundLatitude>-18.0406669808439</southBoundLatitude>
<northBoundLatitude>5.24610091935439</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.0487478282961" miny="-18.0406669808439" maxx="-43.9999775450585" maxy="5.24610091935439"/>
<BoundingBox CRS="EPSG:4674" minx="-18.0406669808439" miny="-73.0487478282961" maxx="5.24610091935439" maxy="-43.9999775450585"/>
<Attribution>
<Title>by INPE</Title>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://www.inpe.br/"/>
</Attribution>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/ab81b88d-b089-4d0f-8185-e34cbfb52464"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=ab81b88d-b089-4d0f-8185-e34cbfb52464"/>
</MetadataURL>
<Style>
<Name>terrabrasilis:no_forest</Name>
<Title>A no forest polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Ano_forest"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amz:no_forest_biome</Name>
<Title>No Forest</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>no_forest_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.0487478282961</westBoundLongitude>
<eastBoundLongitude>-44.0</eastBoundLongitude>
<southBoundLatitude>-16.290519038121</southBoundLatitude>
<northBoundLatitude>5.23022991936453</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.0487478282961" miny="-16.290519038121" maxx="-44.0" maxy="5.23022991936453"/>
<BoundingBox CRS="EPSG:4674" minx="-16.290519038121" miny="-73.0487478282961" maxx="5.23022991936453" maxy="-44.0"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/bed1276c-aa3d-4f5b-b560-1879617ef13d"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=bed1276c-aa3d-4f5b-b560-1879617ef13d"/>
</MetadataURL>
<Style>
<Name>terrabrasilis:no_forest</Name>
<Title>A no forest polygon style</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Ano_forest_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amazon-nb:no_forest_biome</Name>
<Title>No Forest for biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>no_forest_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.0487478282961</westBoundLongitude>
<eastBoundLongitude>-44.0</eastBoundLongitude>
<southBoundLatitude>-16.6620184999999</southBoundLatitude>
<northBoundLatitude>5.24610091935439</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.0487478282961" miny="-16.6620184999999" maxx="-44.0" maxy="5.24610091935439"/>
<BoundingBox CRS="EPSG:4674" minx="-16.6620184999999" miny="-73.0487478282961" maxx="5.24610091935439" maxy="-44.0"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/bed1276c-aa3d-4f5b-b560-1879617ef13d"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=bed1276c-aa3d-4f5b-b560-1879617ef13d"/>
</MetadataURL>
<Style>
<Name>polygon</Name>
<Title>A boring default style</Title>
<Abstract>A sample style that just prints out a transparent red interior with a red outline</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Ano_forest_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado:prodes_cerrado_since_2000</Name>
<Title>Cerrado Yearly Deforestation since 2000</Title>
<Abstract/>
<KeywordList>
<Keyword>prodes_cerrado_2000_2020_epsg4674</Keyword>
<Keyword>WCS</Keyword>
<Keyword>GeoTIFF</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.1094167</westBoundLongitude>
<eastBoundLongitude>-41.52181843267999</eastBoundLongitude>
<southBoundLatitude>-24.684737872714525</southBoundLatitude>
<northBoundLatitude>-2.3404453</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.1094167" miny="-24.684737872714525" maxx="-41.52181843267999" maxy="-2.3404453"/>
<BoundingBox CRS="EPSG:4674" minx="-24.684737872714525" miny="-60.1094167" maxx="-2.3404453" maxy="-41.52181843267999"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/333db098-86ec-4447-a8b8-067ae94a2329"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado:prodes_cerrado_2000_2020_raster</Name>
<Title>A raster style</Title>
<LegendURL width="160" height="438">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Aprodes_cerrado_since_2000"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:residual</Name>
<Title>Residual deforestation in the Legal Amazon</Title>
<Abstract>Related to the residual deforestation in the Legal Amazon. See the metadata details.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>residual</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.5999852554649</westBoundLongitude>
<eastBoundLongitude>-43.9999452949335</eastBoundLongitude>
<southBoundLatitude>-17.6883353092874</southBoundLatitude>
<northBoundLatitude>5.15921391942228</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.5999852554649" miny="-17.6883353092874" maxx="-43.9999452949335" maxy="5.15921391942228"/>
<BoundingBox CRS="EPSG:4674" minx="-17.6883353092874" miny="-73.5999852554649" maxx="5.15921391942228" maxy="-43.9999452949335"/>
<Dimension name="time" default="2010-01-01/2021-01-01" units="ISO8601">2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/2c99c167-05cd-4596-bc32-f0abf9da0dae"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=2c99c167-05cd-4596-bc32-f0abf9da0dae"/>
</MetadataURL>
<Style>
<Name>prodes-legal-amz:residual_pt-br</Name>
<Title>prodes-legal-amz:residual_pt-br</Title>
<LegendURL width="57" height="240">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Aresidual"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado-nb:residual</Name>
<Title>Residual deforestation in the Cerrado Biome</Title>
<Abstract>Related to the new border of the biome. See the metadata details.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>residual</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.4356955537053</westBoundLongitude>
<eastBoundLongitude>-41.331125724507</eastBoundLongitude>
<southBoundLatitude>-24.5099319398861</southBoundLatitude>
<northBoundLatitude>-2.57361847443865</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.4356955537053" miny="-24.5099319398861" maxx="-41.331125724507" maxy="-2.57361847443865"/>
<BoundingBox CRS="EPSG:4674" minx="-24.5099319398861" miny="-60.4356955537053" maxx="-2.57361847443865" maxy="-41.331125724507"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=504bf108-fcc7-4576-b77e-e4119a461c25"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado-nb:residual_pt-br</Name>
<Title>prodes-cerrado-nb:residual_pt-br</Title>
<LegendURL width="57" height="60">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Aresidual"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado-nb:residual_en</Name>
<Title>prodes-cerrado-nb:residual_en</Title>
<LegendURL width="57" height="60">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Aresidual&style=residual_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amazon-nb:residual_biome</Name>
<Title>Residual deforestation in the Amazon Biome</Title>
<Abstract>Related to the residual deforestation in the Amazon Biome. See the metadata details.</Abstract>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>residual_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.5999852554649</westBoundLongitude>
<eastBoundLongitude>-44.0035600929756</eastBoundLongitude>
<southBoundLatitude>-16.6217586027226</southBoundLatitude>
<northBoundLatitude>5.15921391942228</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.5999852554649" miny="-16.6217586027226" maxx="-44.0035600929756" maxy="5.15921391942228"/>
<BoundingBox CRS="EPSG:4674" minx="-16.6217586027226" miny="-73.5999852554649" maxx="5.15921391942228" maxy="-44.0035600929756"/>
<Dimension name="time" default="2010-01-01/2021-01-01" units="ISO8601">2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<Style>
<Name>prodes-amazon-nb:residual_pt-br</Name>
<Title>prodes-amazon-nb:residual_pt-br</Title>
<LegendURL width="57" height="240">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Aresidual_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>vegetation-cerrado:srtm_relief_shading</Name>
<Title>SRTM shaded relief for the Cerrado Biome</Title>
<Abstract>SRTM shaded relief for the Cerrado Biome</Abstract>
<KeywordList>
<Keyword>relevo_sombreado_srtm1arc</Keyword>
<Keyword>WCS</Keyword>
<Keyword>GeoTIFF</Keyword>
<Keyword>SRTM</Keyword>
<Keyword>Relief Shading</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.94817747482933</westBoundLongitude>
<eastBoundLongitude>-40.11401080816267</eastBoundLongitude>
<southBoundLatitude>-24.730845650046955</southBoundLatitude>
<northBoundLatitude>-2.3152900944913988</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.94817747482933" miny="-24.730845650046955" maxx="-40.11401080816267" maxy="-2.3152900944913988"/>
<BoundingBox CRS="EPSG:4326" minx="-24.730845650046955" miny="-60.94817747482933" maxx="-2.3152900944913988" maxy="-40.11401080816267"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=0b8a2ed1-7570-48e7-8389-0aa7cb6732e2"/>
</MetadataURL>
<Style>
<Name>vegetation-cerrado:srtm_relief_shading_pt-br</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vegetation-cerrado%3Asrtm_relief_shading"/>
</LegendURL>
</Style>
<Style>
<Name>vegetation-cerrado:srtm_relief_shading_en</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vegetation-cerrado%3Asrtm_relief_shading&style=srtm_relief_shading_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amz:states_amazon_biome</Name>
<Title>States Amazon Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>states_amazon_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9904499689999</westBoundLongitude>
<eastBoundLongitude>-43.017767940646</eastBoundLongitude>
<southBoundLatitude>-16.290519038121</southBoundLatitude>
<northBoundLatitude>5.271841077</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9904499689999" miny="-16.290519038121" maxx="-43.017767940646" maxy="5.271841077"/>
<BoundingBox CRS="EPSG:4674" minx="-16.290519038121" miny="-73.9904499689999" maxx="5.271841077" maxy="-43.017767940646"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/f8d8c17d-f8f0-4d9d-a7a5-46e90511c377"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=f8d8c17d-f8f0-4d9d-a7a5-46e90511c377"/>
</MetadataURL>
<Style>
<Name>prodes-amz:states_amazon_biome</Name>
<Title>States border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Astates_amazon_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amazon-nb:states_amazon_biome</Name>
<Title>States Amazon Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>states_amazon_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9831821599999</westBoundLongitude>
<eastBoundLongitude>-43.399317927</eastBoundLongitude>
<southBoundLatitude>-16.6620184999999</southBoundLatitude>
<northBoundLatitude>5.26958083300002</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9831821599999" miny="-16.6620184999999" maxx="-43.399317927" maxy="5.26958083300002"/>
<BoundingBox CRS="EPSG:4674" minx="-16.6620184999999" miny="-73.9831821599999" maxx="5.26958083300002" maxy="-43.399317927"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/10d0f50f-166c-4a4a-89c8-861fb7e7406e"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=10d0f50f-166c-4a4a-89c8-861fb7e7406e"/>
</MetadataURL>
<Style>
<Name>prodes-amazon-nb:states_amazon_biome</Name>
<Title>States border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Astates_amazon_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado:states_cerrado_biome</Name>
<Title>States Cerrado Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>states_cerrado_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.1099291026706</westBoundLongitude>
<eastBoundLongitude>-41.5224714772778</eastBoundLongitude>
<southBoundLatitude>-24.6851194256049</southBoundLatitude>
<northBoundLatitude>-2.32670912054645</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.1099291026706" miny="-24.6851194256049" maxx="-41.5224714772778" maxy="-2.32670912054645"/>
<BoundingBox CRS="EPSG:4674" minx="-24.6851194256049" miny="-60.1099291026706" maxx="-2.32670912054645" maxy="-41.5224714772778"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=b4bab3e1-aa91-4ed9-9329-6b0dbd17f04b"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/b4bab3e1-aa91-4ed9-9329-6b0dbd17f04b"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado:states_cerrado_biome_en</Name>
<Title>States border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Astates_cerrado_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado:states_cerrado_biome_pt-br</Name>
<Title>Limites de estados</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Astates_cerrado_biome&style=states_cerrado_biome_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado-nb:states_cerrado_biome</Name>
<Title>Brazilian states in the Cerrado Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>states_cerrado_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.472595634</westBoundLongitude>
<eastBoundLongitude>-41.277535526</eastBoundLongitude>
<southBoundLatitude>-24.681780126</southBoundLatitude>
<northBoundLatitude>-2.33208833399993</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.472595634" miny="-24.681780126" maxx="-41.277535526" maxy="-2.33208833399993"/>
<BoundingBox CRS="EPSG:4674" minx="-24.681780126" miny="-60.472595634" maxx="-2.33208833399993" maxy="-41.277535526"/>
<Style>
<Name>prodes-cerrado-nb:states_cerrado_biome_en</Name>
<Title>States border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Astates_cerrado_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:states_legal_amazon</Name>
<Title>States Legal Amazon</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>states_legal_amazon</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.9904032606715</westBoundLongitude>
<eastBoundLongitude>-43.9518273629148</eastBoundLongitude>
<southBoundLatitude>-18.04176667</southBoundLatitude>
<northBoundLatitude>5.271841077</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.9904032606715" miny="-18.04176667" maxx="-43.9518273629148" maxy="5.271841077"/>
<BoundingBox CRS="EPSG:4674" minx="-18.04176667" miny="-73.9904032606715" maxx="5.271841077" maxy="-43.9518273629148"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/a50f8f38-90e6-4a10-b36b-aa79256909d5"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=a50f8f38-90e6-4a10-b36b-aa79256909d5"/>
</MetadataURL>
<Style>
<Name>prodes-legal-amz:states_legal_amazon</Name>
<Title>States border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Astates_legal_amazon"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pampa:states_pampa_biome</Name>
<Title>States Pampa Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>states_pampa_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.649742824</westBoundLongitude>
<eastBoundLongitude>-49.67279010044</eastBoundLongitude>
<southBoundLatitude>-33.7511779939999</southBoundLatitude>
<northBoundLatitude>-28.076455062</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.649742824" miny="-33.7511779939999" maxx="-49.67279010044" maxy="-28.076455062"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7511779939999" miny="-57.649742824" maxx="-28.076455062" maxy="-49.67279010044"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/484bcf9d-b1ba-4136-8739-83e2248b89a4"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=484bcf9d-b1ba-4136-8739-83e2248b89a4"/>
</MetadataURL>
<Style>
<Name>prodes-pampa:states_pampa_biome</Name>
<Title>States border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Astates_pampa_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pantanal:states_pantanal_biome</Name>
<Title>States Pantanal Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>states_pantanal_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-59.1869409581752</westBoundLongitude>
<eastBoundLongitude>-54.9223080407124</eastBoundLongitude>
<southBoundLatitude>-22.15086658</southBoundLatitude>
<northBoundLatitude>-15.5239173532007</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-59.1869409581752" miny="-22.15086658" maxx="-54.9223080407124" maxy="-15.5239173532007"/>
<BoundingBox CRS="EPSG:4674" minx="-22.15086658" miny="-59.1869409581752" maxx="-15.5239173532007" maxy="-54.9223080407124"/>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/01b5eff0-09a7-4b98-b7e6-8718988cd96a"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=01b5eff0-09a7-4b98-b7e6-8718988cd96a"/>
</MetadataURL>
<Style>
<Name>prodes-pantanal:states_pantanal_biome</Name>
<Title>States border</Title>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Astates_pantanal_biome"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:temporal_mosaic_anual</Name>
<Title>Temporal Mosaic Anual</Title>
<Abstract/>
<KeywordList>
<Keyword>temporal_mosaic_anual</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-56.023882</westBoundLongitude>
<eastBoundLongitude>-53.5927713465873</eastBoundLongitude>
<southBoundLatitude>-4.52104103590888</southBoundLatitude>
<northBoundLatitude>-2.208508</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-56.023882" miny="-4.52104103590888" maxx="-53.5927713465873" maxy="-2.208508"/>
<BoundingBox CRS="EPSG:4326" minx="-4.52104103590888" miny="-56.023882" maxx="-2.208508" maxy="-53.5927713465873"/>
<Dimension name="time" default="1984-01-01T00:00:00Z" units="ISO8601">1984-01-01T00:00:00.000Z,1985-01-01T00:00:00.000Z,1986-01-01T00:00:00.000Z,1987-01-01T00:00:00.000Z,1988-01-01T00:00:00.000Z,1989-01-01T00:00:00.000Z,1990-01-01T00:00:00.000Z,1991-01-01T00:00:00.000Z,1992-01-01T00:00:00.000Z,1993-01-01T00:00:00.000Z,1994-01-01T00:00:00.000Z,1995-01-01T00:00:00.000Z,1996-01-01T00:00:00.000Z,1997-01-01T00:00:00.000Z,1998-01-01T00:00:00.000Z,1999-01-01T00:00:00.000Z,2000-01-01T00:00:00.000Z,2001-01-01T00:00:00.000Z,2002-01-01T00:00:00.000Z,2003-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2005-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2007-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2009-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z</Dimension>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Atemporal_mosaic_anual"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-caatinga-nb:temporal_mosaic_caatinga</Name>
<Title>Caatinga Mosaic</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity.</Abstract>
<KeywordList>
<Keyword>temporal_mosaic_nb</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-45.078141</westBoundLongitude>
<eastBoundLongitude>-35.066981362</eastBoundLongitude>
<southBoundLatitude>-16.71263667</southBoundLatitude>
<northBoundLatitude>-2.748264</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-45.078141" miny="-16.71263667" maxx="-35.066981362" maxy="-2.748264"/>
<BoundingBox CRS="EPSG:4326" minx="-16.71263667" miny="-45.078141" maxx="-2.748264" maxy="-35.066981362"/>
<Dimension name="time" default="2021-01-01T00:00:00.000Z" units="ISO8601">2000-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=8640b278-a6b1-45c9-a5de-032bd3f8b9b5"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/8640b278-a6b1-45c9-a5de-032bd3f8b9b5"/>
</MetadataURL>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-caatinga-nb%3Atemporal_mosaic_caatinga"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-caatinga:temporal_mosaic_caatinga</Name>
<Title>Caatinga Mosaic</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity.</Abstract>
<KeywordList>
<Keyword>temporal_mosaic</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-44.508826</westBoundLongitude>
<eastBoundLongitude>-35.1720273632023</eastBoundLongitude>
<southBoundLatitude>-16.0889363429824</southBoundLatitude>
<northBoundLatitude>-2.784231</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-44.508826" miny="-16.0889363429824" maxx="-35.1720273632023" maxy="-2.784231"/>
<BoundingBox CRS="EPSG:4326" minx="-16.0889363429824" miny="-44.508826" maxx="-2.784231" maxy="-35.1720273632023"/>
<Dimension name="time" default="2021-01-01T00:00:00.000Z" units="ISO8601">2000-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=8640b278-a6b1-45c9-a5de-032bd3f8b9b5"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/8640b278-a6b1-45c9-a5de-032bd3f8b9b5"/>
</MetadataURL>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-caatinga%3Atemporal_mosaic_caatinga"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado:temporal_mosaic_cerrado</Name>
<Title>Cerrado Mosaic</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity.</Abstract>
<KeywordList>
<Keyword>temporal_mosaic</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.109929</westBoundLongitude>
<eastBoundLongitude>-41.5224713746072</eastBoundLongitude>
<southBoundLatitude>-24.6851193050585</southBoundLatitude>
<northBoundLatitude>-2.326709</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.109929" miny="-24.6851193050585" maxx="-41.5224713746072" maxy="-2.326709"/>
<BoundingBox CRS="EPSG:4326" minx="-24.6851193050585" miny="-60.109929" maxx="-2.326709" maxy="-41.5224713746072"/>
<Dimension name="time" default="2000-01-01T00:00:00Z" units="ISO8601">2000-01-01T00:00:00.000Z,2002-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/d24343ee-40de-4caf-97a1-09042963d2e2"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=d24343ee-40de-4caf-97a1-09042963d2e2"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado:temporal_mosaic_cerrado_pt-br</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Atemporal_mosaic_cerrado"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado:temporal_mosaic_cerrado_en</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Atemporal_mosaic_cerrado&style=temporal_mosaic_cerrado_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado-nb:temporal_mosaic_cerrado</Name>
<Title>Cerrado Mosaic</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity.</Abstract>
<KeywordList>
<Keyword>temporal_mosaic_new</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.472596</westBoundLongitude>
<eastBoundLongitude>-41.277535892</eastBoundLongitude>
<southBoundLatitude>-24.6817797920001</southBoundLatitude>
<northBoundLatitude>-2.332088</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.472596" miny="-24.6817797920001" maxx="-41.277535892" maxy="-2.332088"/>
<BoundingBox CRS="EPSG:4326" minx="-24.6817797920001" miny="-60.472596" maxx="-2.332088" maxy="-41.277535892"/>
<Dimension name="time" default="2021-01-01T00:00:00.000Z" units="ISO8601">2000-01-01T00:00:00.000Z,2002-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/d24343ee-40de-4caf-97a1-09042963d2e2"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=d24343ee-40de-4caf-97a1-09042963d2e2"/>
</MetadataURL>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Atemporal_mosaic_cerrado"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:temporal_mosaic_legal_amazon</Name>
<Title>Legal Amazon Mosaic</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity.</Abstract>
<KeywordList>
<Keyword>temporal_mosaic</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.990972</westBoundLongitude>
<eastBoundLongitude>-43.9518271429269</eastBoundLongitude>
<southBoundLatitude>-18.04176667</southBoundLatitude>
<northBoundLatitude>5.272225</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.990972" miny="-18.04176667" maxx="-43.9518271429269" maxy="5.272225"/>
<BoundingBox CRS="EPSG:4326" minx="-18.04176667" miny="-73.990972" maxx="5.272225" maxy="-43.9518271429269"/>
<Dimension name="time" default="2021-01-01T00:00:00.000Z" units="ISO8601">2000-01-01T00:00:00.000Z,2001-01-01T00:00:00.000Z,2002-01-01T00:00:00.000Z,2003-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2005-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2007-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2009-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=243cec4a-0ef5-453b-b8d4-f10a38ed044e"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/243cec4a-0ef5-453b-b8d4-f10a38ed044e"/>
</MetadataURL>
<Style>
<Name>prodes-legal-amz:temporal_mosaic_legal_amazon_en</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Atemporal_mosaic_legal_amazon"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-legal-amz:temporal_mosaic_legal_amazon_pt-br</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Atemporal_mosaic_legal_amazon&style=temporal_mosaic_legal_amazon_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:temporal_mosaic_legal_amazon_principal</Name>
<Title>Legal Amazon Mosaic Principal</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity. Principal images</Abstract>
<KeywordList>
<Keyword>temporal_mosaic_principal</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.990972</westBoundLongitude>
<eastBoundLongitude>-43.9518271429269</eastBoundLongitude>
<southBoundLatitude>-18.04176667</southBoundLatitude>
<northBoundLatitude>5.272225</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.990972" miny="-18.04176667" maxx="-43.9518271429269" maxy="5.272225"/>
<BoundingBox CRS="EPSG:4326" minx="-18.04176667" miny="-73.990972" maxx="5.272225" maxy="-43.9518271429269"/>
<Dimension name="time" default="2012-01-01T00:00:00Z" units="ISO8601">2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z</Dimension>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Atemporal_mosaic_legal_amazon_principal"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:temporal_mosaic_legal_amazon_secondary</Name>
<Title>Legal Amazon Mosaic Secondary</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity. Secondary images</Abstract>
<KeywordList>
<Keyword>temporal_mosaic_secundaria</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.990972</westBoundLongitude>
<eastBoundLongitude>-43.9518271429269</eastBoundLongitude>
<southBoundLatitude>-18.04176667</southBoundLatitude>
<northBoundLatitude>5.272225</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.990972" miny="-18.04176667" maxx="-43.9518271429269" maxy="5.272225"/>
<BoundingBox CRS="EPSG:4326" minx="-18.04176667" miny="-73.990972" maxx="5.272225" maxy="-43.9518271429269"/>
<Dimension name="time" default="2019-01-01T00:00:00Z" units="ISO8601">2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Atemporal_mosaic_legal_amazon_secondary"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-mata-atlantica-nb:temporal_mosaic_mata_atlantica</Name>
<Title>Mata Atlantica Mosaic</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity.</Abstract>
<KeywordList>
<Keyword>temporal_mosaic_nb</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-55.334755</westBoundLongitude>
<eastBoundLongitude>-28.8477705279999</eastBoundLongitude>
<southBoundLatitude>-29.981272957</southBoundLatitude>
<northBoundLatitude>0.917887</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-55.334755" miny="-29.981272957" maxx="-28.8477705279999" maxy="0.917887"/>
<BoundingBox CRS="EPSG:4326" minx="-29.981272957" miny="-55.334755" maxx="0.917887" maxy="-28.8477705279999"/>
<Dimension name="time" default="2021-01-01T00:00:00.000Z" units="ISO8601">2000-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/a00ecfa8-6243-408c-a157-dfaf27104d94"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=a00ecfa8-6243-408c-a157-dfaf27104d94"/>
</MetadataURL>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-mata-atlantica-nb%3Atemporal_mosaic_mata_atlantica"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-mata-atlantica:temporal_mosaic_mata_atlantica</Name>
<Title>Mata Atlantica Mosaic</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity.</Abstract>
<KeywordList>
<Keyword>temporal_mosaic</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-55.665855</westBoundLongitude>
<eastBoundLongitude>-34.79288527</eastBoundLongitude>
<southBoundLatitude>-29.9518439865005</southBoundLatitude>
<northBoundLatitude>-5.14344</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-55.665855" miny="-29.9518439865005" maxx="-34.79288527" maxy="-5.14344"/>
<BoundingBox CRS="EPSG:4326" minx="-29.9518439865005" miny="-55.665855" maxx="-5.14344" maxy="-34.79288527"/>
<Dimension name="time" default="2021-01-01T00:00:00.000Z" units="ISO8601">2000-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/a00ecfa8-6243-408c-a157-dfaf27104d94"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=a00ecfa8-6243-408c-a157-dfaf27104d94"/>
</MetadataURL>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-mata-atlantica%3Atemporal_mosaic_mata_atlantica"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:temporal_mosaic_mensal</Name>
<Title>Temporal Mosaic Mensal</Title>
<Abstract/>
<KeywordList>
<Keyword>temporal_mosaic_mensal</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-56.023882</westBoundLongitude>
<eastBoundLongitude>-53.5927713465873</eastBoundLongitude>
<southBoundLatitude>-4.52104103590888</southBoundLatitude>
<northBoundLatitude>-2.208508</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-56.023882" miny="-4.52104103590888" maxx="-53.5927713465873" maxy="-2.208508"/>
<BoundingBox CRS="EPSG:4326" minx="-4.52104103590888" miny="-56.023882" maxx="-2.208508" maxy="-53.5927713465873"/>
<Dimension name="time" default="1984-06-01T00:00:00Z" units="ISO8601">1984-06-01T00:00:00.000Z,1984-07-01T00:00:00.000Z,1984-08-01T00:00:00.000Z,1984-09-01T00:00:00.000Z,1984-10-01T00:00:00.000Z,1985-06-01T00:00:00.000Z,1985-07-01T00:00:00.000Z,1985-08-01T00:00:00.000Z,1985-09-01T00:00:00.000Z,1985-10-01T00:00:00.000Z,1986-06-01T00:00:00.000Z,1986-07-01T00:00:00.000Z,1986-08-01T00:00:00.000Z,1986-09-01T00:00:00.000Z,1986-10-01T00:00:00.000Z,1987-06-01T00:00:00.000Z,1987-07-01T00:00:00.000Z,1987-08-01T00:00:00.000Z,1987-09-01T00:00:00.000Z,1987-10-01T00:00:00.000Z,1988-06-01T00:00:00.000Z,1988-07-01T00:00:00.000Z,1988-08-01T00:00:00.000Z,1988-09-01T00:00:00.000Z,1988-10-01T00:00:00.000Z,1989-06-01T00:00:00.000Z,1989-07-01T00:00:00.000Z,1989-08-01T00:00:00.000Z,1989-09-01T00:00:00.000Z,1989-10-01T00:00:00.000Z,1990-06-01T00:00:00.000Z,1990-07-01T00:00:00.000Z,1990-08-01T00:00:00.000Z,1990-09-01T00:00:00.000Z,1990-10-01T00:00:00.000Z,1991-06-01T00:00:00.000Z,1991-07-01T00:00:00.000Z,1991-08-01T00:00:00.000Z,1991-09-01T00:00:00.000Z,1991-10-01T00:00:00.000Z,1992-06-01T00:00:00.000Z,1992-07-01T00:00:00.000Z,1992-08-01T00:00:00.000Z,1992-09-01T00:00:00.000Z,1992-10-01T00:00:00.000Z,1993-06-01T00:00:00.000Z,1993-07-01T00:00:00.000Z,1993-08-01T00:00:00.000Z,1993-09-01T00:00:00.000Z,1993-10-01T00:00:00.000Z,1994-06-01T00:00:00.000Z,1994-07-01T00:00:00.000Z,1994-08-01T00:00:00.000Z,1994-09-01T00:00:00.000Z,1994-10-01T00:00:00.000Z,1995-06-01T00:00:00.000Z,1995-07-01T00:00:00.000Z,1995-08-01T00:00:00.000Z,1995-09-01T00:00:00.000Z,1995-10-01T00:00:00.000Z,1996-06-01T00:00:00.000Z,1996-07-01T00:00:00.000Z,1996-08-01T00:00:00.000Z,1996-09-01T00:00:00.000Z,1996-10-01T00:00:00.000Z,1997-06-01T00:00:00.000Z,1997-07-01T00:00:00.000Z,1997-08-01T00:00:00.000Z,1997-09-01T00:00:00.000Z,1997-10-01T00:00:00.000Z,1998-06-01T00:00:00.000Z,1998-07-01T00:00:00.000Z,1998-08-01T00:00:00.000Z,1998-09-01T00:00:00.000Z,1998-10-01T00:00:00.000Z,1999-06-01T00:00:00.000Z,1999-07-01T00:00:00.000Z,1999-08-01T00:00:00.000Z,1999-09-01T00:00:00.000Z,1999-10-01T00:00:00.000Z,2000-06-01T00:00:00.000Z,2000-07-01T00:00:00.000Z,2000-08-01T00:00:00.000Z,2000-09-01T00:00:00.000Z,2000-10-01T00:00:00.000Z,2001-06-01T00:00:00.000Z,2001-07-01T00:00:00.000Z,2001-08-01T00:00:00.000Z,2001-09-01T00:00:00.000Z,2001-10-01T00:00:00.000Z,2002-06-01T00:00:00.000Z,2002-07-01T00:00:00.000Z,2002-08-01T00:00:00.000Z,2002-09-01T00:00:00.000Z,2002-10-01T00:00:00.000Z,2003-07-01T00:00:00.000Z,2003-08-01T00:00:00.000Z,2003-09-01T00:00:00.000Z,2003-10-01T00:00:00.000Z,2004-06-01T00:00:00.000Z,2004-07-01T00:00:00.000Z,2004-08-01T00:00:00.000Z,2004-09-01T00:00:00.000Z,2004-10-01T00:00:00.000Z,2005-06-01T00:00:00.000Z,2005-07-01T00:00:00.000Z,2005-08-01T00:00:00.000Z,2005-09-01T00:00:00.000Z,2005-10-01T00:00:00.000Z,2006-06-01T00:00:00.000Z,2006-07-01T00:00:00.000Z,2006-08-01T00:00:00.000Z,2006-09-01T00:00:00.000Z,2006-10-01T00:00:00.000Z,2007-06-01T00:00:00.000Z,2007-07-01T00:00:00.000Z,2007-08-01T00:00:00.000Z,2007-09-01T00:00:00.000Z,2007-10-01T00:00:00.000Z,2008-06-01T00:00:00.000Z,2008-07-01T00:00:00.000Z,2008-08-01T00:00:00.000Z,2008-09-01T00:00:00.000Z,2008-10-01T00:00:00.000Z,2009-06-01T00:00:00.000Z,2009-07-01T00:00:00.000Z,2009-08-01T00:00:00.000Z,2009-09-01T00:00:00.000Z,2009-10-01T00:00:00.000Z,2010-06-01T00:00:00.000Z,2010-07-01T00:00:00.000Z,2010-08-01T00:00:00.000Z,2010-09-01T00:00:00.000Z,2010-10-01T00:00:00.000Z,2011-06-01T00:00:00.000Z,2011-07-01T00:00:00.000Z,2011-08-01T00:00:00.000Z,2011-09-01T00:00:00.000Z,2011-10-01T00:00:00.000Z,2012-06-01T00:00:00.000Z,2012-07-01T00:00:00.000Z,2012-08-01T00:00:00.000Z,2012-09-01T00:00:00.000Z,2012-10-01T00:00:00.000Z,2013-06-01T00:00:00.000Z,2013-07-01T00:00:00.000Z,2013-08-01T00:00:00.000Z,2013-09-01T00:00:00.000Z,2013-10-01T00:00:00.000Z,2014-06-01T00:00:00.000Z,2014-07-01T00:00:00.000Z,2014-08-01T00:00:00.000Z,2014-09-01T00:00:00.000Z,2014-10-01T00:00:00.000Z,2015-06-01T00:00:00.000Z,2015-07-01T00:00:00.000Z,2015-08-01T00:00:00.000Z,2015-09-01T00:00:00.000Z,2015-10-01T00:00:00.000Z,2016-06-01T00:00:00.000Z,2016-07-01T00:00:00.000Z,2016-08-01T00:00:00.000Z,2016-09-01T00:00:00.000Z,2016-10-01T00:00:00.000Z,2017-06-01T00:00:00.000Z,2017-07-01T00:00:00.000Z,2017-08-01T00:00:00.000Z,2017-09-01T00:00:00.000Z,2017-10-01T00:00:00.000Z,2018-06-01T00:00:00.000Z,2018-07-01T00:00:00.000Z,2018-08-01T00:00:00.000Z,2018-09-01T00:00:00.000Z,2018-10-01T00:00:00.000Z,2019-06-01T00:00:00.000Z,2019-07-01T00:00:00.000Z,2019-08-01T00:00:00.000Z,2019-09-01T00:00:00.000Z,2019-10-01T00:00:00.000Z,2020-06-01T00:00:00.000Z,2020-07-01T00:00:00.000Z,2020-08-01T00:00:00.000Z,2020-09-01T00:00:00.000Z,2020-10-01T00:00:00.000Z</Dimension>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Atemporal_mosaic_mensal"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pampa-nb:temporal_mosaic_pampa</Name>
<Title>Image Mosaic</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity.</Abstract>
<KeywordList>
<Keyword>temporal_mosaic_nb</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.649575</westBoundLongitude>
<eastBoundLongitude>-50.052663773</eastBoundLongitude>
<southBoundLatitude>-33.751178483</southBoundLatitude>
<northBoundLatitude>-27.46156</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.649575" miny="-33.751178483" maxx="-50.052663773" maxy="-27.46156"/>
<BoundingBox CRS="EPSG:4326" minx="-33.751178483" miny="-57.649575" maxx="-27.46156" maxy="-50.052663773"/>
<Dimension name="time" default="2021-01-01T00:00:00.000Z" units="ISO8601">2000-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/0e1faf56-bcfd-4786-adcc-c9c2b5fa6607"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=0e1faf56-bcfd-4786-adcc-c9c2b5fa6607"/>
</MetadataURL>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa-nb%3Atemporal_mosaic_pampa"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pampa:temporal_mosaic_pampa</Name>
<Title>Pampa Mosaic</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity.</Abstract>
<KeywordList>
<Keyword>temporal_mosaic</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.649743</westBoundLongitude>
<eastBoundLongitude>-49.6727902764401</eastBoundLongitude>
<southBoundLatitude>-33.751177932</southBoundLatitude>
<northBoundLatitude>-28.076455</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.649743" miny="-33.751177932" maxx="-49.6727902764401" maxy="-28.076455"/>
<BoundingBox CRS="EPSG:4326" minx="-33.751177932" miny="-57.649743" maxx="-28.076455" maxy="-49.6727902764401"/>
<Dimension name="time" default="2021-01-01T00:00:00.000Z" units="ISO8601">2000-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/0e1faf56-bcfd-4786-adcc-c9c2b5fa6607"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=0e1faf56-bcfd-4786-adcc-c9c2b5fa6607"/>
</MetadataURL>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Atemporal_mosaic_pampa"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pantanal-nb:temporal_mosaic_pantanal</Name>
<Title>Pantanal Mosaic</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity.</Abstract>
<KeywordList>
<Keyword>temporal_mosaic_nb</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-59.140833</westBoundLongitude>
<eastBoundLongitude>-54.793912605</eastBoundLongitude>
<southBoundLatitude>-22.161549158</southBoundLatitude>
<northBoundLatitude>-15.646848</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-59.140833" miny="-22.161549158" maxx="-54.793912605" maxy="-15.646848"/>
<BoundingBox CRS="EPSG:4326" minx="-22.161549158" miny="-59.140833" maxx="-15.646848" maxy="-54.793912605"/>
<Dimension name="time" default="2021-01-01T00:00:00.000Z" units="ISO8601">2000-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/bbd82926-fd28-4fb7-938b-51f35dd69183"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=bbd82926-fd28-4fb7-938b-51f35dd69183"/>
</MetadataURL>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal-nb%3Atemporal_mosaic_pantanal"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pantanal:temporal_mosaic_pantanal</Name>
<Title>Pantanal Mosaic</Title>
<Abstract>Mosaic composed by a set of Landsat images, and similar images, with temporal dimension enabled and yearly granularity.</Abstract>
<KeywordList>
<Keyword>temporal_mosaic</Keyword>
<Keyword>WCS</Keyword>
<Keyword>ImagePyramid</Keyword>
</KeywordList>
<CRS>EPSG:4326</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-59.186941</westBoundLongitude>
<eastBoundLongitude>-54.9223080825372</eastBoundLongitude>
<southBoundLatitude>-22.1508662267992</southBoundLatitude>
<northBoundLatitude>-15.523917</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-59.186941" miny="-22.1508662267992" maxx="-54.9223080825372" maxy="-15.523917"/>
<BoundingBox CRS="EPSG:4326" minx="-22.1508662267992" miny="-59.186941" maxx="-15.523917" maxy="-54.9223080825372"/>
<Dimension name="time" default="2021-01-01T00:00:00.000Z" units="ISO8601">2000-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/bbd82926-fd28-4fb7-938b-51f35dd69183"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=bbd82926-fd28-4fb7-938b-51f35dd69183"/>
</MetadataURL>
<Style>
<Name>raster</Name>
<Title>A boring default style</Title>
<Abstract>A sample style for rasters</Abstract>
<LegendURL width="20" height="20">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Atemporal_mosaic_pantanal"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>vegetation-cerrado:vegetation_types</Name>
<Title>Vegetation types for all ecoregions in the Cerrado Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>all_ecoregions_vegetation</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.472595634</westBoundLongitude>
<eastBoundLongitude>-41.2775355279999</eastBoundLongitude>
<southBoundLatitude>-24.6817801259999</southBoundLatitude>
<northBoundLatitude>-2.3321392824551</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.472595634" miny="-24.6817801259999" maxx="-41.2775355279999" maxy="-2.3321392824551"/>
<BoundingBox CRS="EPSG:4674" minx="-24.6817801259999" miny="-60.472595634" maxx="-2.3321392824551" maxy="-41.2775355279999"/>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=963a7330-9b3a-4e83-bd8b-05d4778a3a66"/>
</MetadataURL>
<Style>
<Name>vegetation-cerrado:vegetation_types_pt-br</Name>
<Title>vegetation-cerrado:vegetation_types_pt-br</Title>
<LegendURL width="380" height="500">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vegetation-cerrado%3Avegetation_types"/>
</LegendURL>
</Style>
<Style>
<Name>vegetation-cerrado:vegetation_types_en</Name>
<Title>vegetation-cerrado:vegetation_types_en</Title>
<LegendURL width="380" height="500">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=vegetation-cerrado%3Avegetation_types&style=vegetation_types_en"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado:yearly_deforestation</Name>
<Title>Yearly Deforestation in Cerrado biome - 2002/2020</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>yearly_deforestation</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.0939559936523</westBoundLongitude>
<eastBoundLongitude>-41.5242309570312</eastBoundLongitude>
<southBoundLatitude>-24.6851196289062</southBoundLatitude>
<northBoundLatitude>-2.38377141952515</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.0939559936523" miny="-24.6851196289062" maxx="-41.5242309570312" maxy="-2.38377141952515"/>
<BoundingBox CRS="EPSG:4674" minx="-24.6851196289062" miny="-60.0939559936523" maxx="-2.38377141952515" maxy="-41.5242309570312"/>
<Dimension name="time" default="2002-01-01T00:00:00.000Z/2019-01-01T00:00:00.000Z" units="ISO8601">2002-01-01T00:00:00.000Z,2004-01-01T00:00:00.000Z,2006-01-01T00:00:00.000Z,2008-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/catalog.search#/metadata/6b621182-93d6-4a83-b5db-ae53a621276d"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=6b621182-93d6-4a83-b5db-ae53a621276d"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado:yearly_deforestation_en</Name>
<Title>prodes-cerrado:yearly_deforestation_en</Title>
<LegendURL width="161" height="280">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Ayearly_deforestation"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado:yearly_deforestation_pt-br</Name>
<Title>prodes-cerrado:yearly_deforestation_pt-br</Title>
<LegendURL width="179" height="280">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado%3Ayearly_deforestation&style=yearly_deforestation_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-legal-amz:yearly_deforestation</Name>
<Title>Yearly deforestation since 2008</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>yearly_deforestation</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.7957608282227</westBoundLongitude>
<eastBoundLongitude>-43.9999455648284</eastBoundLongitude>
<southBoundLatitude>-17.4303643092318</southBoundLatitude>
<northBoundLatitude>5.17041416721839</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.7957608282227" miny="-17.4303643092318" maxx="-43.9999455648284" maxy="5.17041416721839"/>
<BoundingBox CRS="EPSG:4674" minx="-17.4303643092318" miny="-73.7957608282227" maxx="5.17041416721839" maxy="-43.9999455648284"/>
<Dimension name="time" default="2008-01-01/2021-01-01" units="ISO8601">2008-01-01T00:00:00.000Z,2009-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/a5220c18-f7fa-4e3e-b39b-feeb3ccc4830"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=a5220c18-f7fa-4e3e-b39b-feeb3ccc4830"/>
</MetadataURL>
<Style>
<Name>prodes-legal-amz:yearly_deforestation_en</Name>
<Title>prodes-legal-amz:yearly_deforestation_en</Title>
<LegendURL width="161" height="280">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Ayearly_deforestation"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-legal-amz:yearly_deforestation_pt-br</Name>
<Title>prodes-legal-amz:yearly_deforestation_pt-br</Title>
<LegendURL width="179" height="280">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-legal-amz%3Ayearly_deforestation&style=yearly_deforestation_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-cerrado-nb:yearly_deforestation</Name>
<Title>Yearly deforestation in the Cerrado Biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>yearly_deforestation</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-60.4484602560779</westBoundLongitude>
<eastBoundLongitude>-41.2859905300892</eastBoundLongitude>
<southBoundLatitude>-24.6729430738138</southBoundLatitude>
<northBoundLatitude>-2.37846113150865</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-60.4484602560779" miny="-24.6729430738138" maxx="-41.2859905300892" maxy="-2.37846113150865"/>
<BoundingBox CRS="EPSG:4674" minx="-24.6729430738138" miny="-60.4484602560779" maxx="-2.37846113150865" maxy="-41.2859905300892"/>
<Dimension name="time" default="2010-01-01T00:00:00.000Z/2021-01-01T00:00:00.000Z" units="ISO8601">2010-01-01T00:00:00.000Z,2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=6b621182-93d6-4a83-b5db-ae53a621276d"/>
</MetadataURL>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/catalog.search#/metadata/6b621182-93d6-4a83-b5db-ae53a621276d"/>
</MetadataURL>
<Style>
<Name>prodes-cerrado-nb:yearly_deforestation_en</Name>
<Title>prodes-cerrado-nb:yearly_deforestation_en</Title>
<LegendURL width="161" height="300">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Ayearly_deforestation"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-cerrado-nb:yearly_deforestation_pt-br</Name>
<Title>prodes-cerrado-nb:yearly_deforestation_pt-br</Title>
<LegendURL width="179" height="300">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-cerrado-nb%3Ayearly_deforestation&style=yearly_deforestation_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pampa:yearly_deforestation</Name>
<Title>Yearly Deforestation in Pampa biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>yearly_deforestation</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-57.566543546835</westBoundLongitude>
<eastBoundLongitude>-49.6796928900415</eastBoundLongitude>
<southBoundLatitude>-33.7411920378405</southBoundLatitude>
<northBoundLatitude>-28.0952151756678</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-57.566543546835" miny="-33.7411920378405" maxx="-49.6796928900415" maxy="-28.0952151756678"/>
<BoundingBox CRS="EPSG:4674" minx="-33.7411920378405" miny="-57.566543546835" maxx="-28.0952151756678" maxy="-49.6796928900415"/>
<Dimension name="time" default="2018-01-01T00:00:00.000Z/2019-01-01T00:00:00.000Z" units="ISO8601">2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/a551570c-78a2-45b3-95e8-0e518fbce941"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=a551570c-78a2-45b3-95e8-0e518fbce941"/>
</MetadataURL>
<Style>
<Name>prodes-pampa:yearly_deforestation_en</Name>
<Title>prodes-pampa:yearly_deforestation_en</Title>
<LegendURL width="161" height="40">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Ayearly_deforestation"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-pampa:yearly_deforestation_pt-br</Name>
<Title>prodes-pampa:yearly_deforestation_pt-br</Title>
<LegendURL width="179" height="40">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pampa%3Ayearly_deforestation&style=yearly_deforestation_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-pantanal:yearly_deforestation</Name>
<Title>Yearly Deforestation in Pantanal biome</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>yearly_deforestation</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-59.1806234473901</westBoundLongitude>
<eastBoundLongitude>-54.9316133854769</eastBoundLongitude>
<southBoundLatitude>-22.1189653523</southBoundLatitude>
<northBoundLatitude>-15.5343774374525</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-59.1806234473901" miny="-22.1189653523" maxx="-54.9316133854769" maxy="-15.5343774374525"/>
<BoundingBox CRS="EPSG:4674" minx="-22.1189653523" miny="-59.1806234473901" maxx="-15.5343774374525" maxy="-54.9316133854769"/>
<Dimension name="time" default="2018-01-01T00:00:00.000Z/2019-01-01T00:00:00.000Z" units="ISO8601">2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/616943ab-a40f-4196-9592-ecc6a7c4901e"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=616943ab-a40f-4196-9592-ecc6a7c4901e"/>
</MetadataURL>
<Style>
<Name>prodes-pantanal:yearly_deforestation_en</Name>
<Title>prodes-pantanal:yearly_deforestation_en</Title>
<LegendURL width="161" height="40">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Ayearly_deforestation"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-pantanal:yearly_deforestation_pt-br</Name>
<Title>prodes-pantanal:yearly_deforestation_pt-br</Title>
<LegendURL width="179" height="40">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-pantanal%3Ayearly_deforestation&style=yearly_deforestation_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amz:yearly_deforestation_biome</Name>
<Title>Yearly deforestation biome 2008/2020</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>yearly_deforestation_biome_teste</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.7957608282227</westBoundLongitude>
<eastBoundLongitude>-44.0017358894825</eastBoundLongitude>
<southBoundLatitude>-16.2817343090211</southBoundLatitude>
<northBoundLatitude>5.17041416721839</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.7957608282227" miny="-16.2817343090211" maxx="-44.0017358894825" maxy="5.17041416721839"/>
<BoundingBox CRS="EPSG:4674" minx="-16.2817343090211" miny="-73.7957608282227" maxx="5.17041416721839" maxy="-44.0017358894825"/>
<Dimension name="time" default="2008-01-01T00:00:00.000Z/2020-01-01T00:00:00.000Z" units="ISO8601">2008-01-01T00:00:00.000Z,2009-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/b75b83db-8026-43f9-9537-ee1dfa308158"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=b75b83db-8026-43f9-9537-ee1dfa308158"/>
</MetadataURL>
<Style>
<Name>prodes-amz:yearly_deforestation_biome_en</Name>
<Title>prodes-amz:yearly_deforestation_biome_en</Title>
<LegendURL width="161" height="260">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Ayearly_deforestation_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-amz:yearly_deforestation_biome_pt-br</Name>
<Title>prodes-amz:yearly_deforestation_biome_pt-br</Title>
<LegendURL width="179" height="260">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amz%3Ayearly_deforestation_biome&style=yearly_deforestation_biome_pt-br"/>
</LegendURL>
</Style>
</Layer>
<Layer queryable="1" opaque="0">
<Name>prodes-amazon-nb:yearly_deforestation_biome</Name>
<Title>Yearly deforestation biome since 2008</Title>
<Abstract/>
<KeywordList>
<Keyword>features</Keyword>
<Keyword>yearly_deforestation_biome</Keyword>
</KeywordList>
<CRS>EPSG:4674</CRS>
<CRS>CRS:84</CRS>
<EX_GeographicBoundingBox>
<westBoundLongitude>-73.7957608282227</westBoundLongitude>
<eastBoundLongitude>-44.0006598894619</eastBoundLongitude>
<southBoundLatitude>-16.5706403090755</southBoundLatitude>
<northBoundLatitude>5.17041416721839</northBoundLatitude>
</EX_GeographicBoundingBox>
<BoundingBox CRS="CRS:84" minx="-73.7957608282227" miny="-16.5706403090755" maxx="-44.0006598894619" maxy="5.17041416721839"/>
<BoundingBox CRS="EPSG:4674" minx="-16.5706403090755" miny="-73.7957608282227" maxx="5.17041416721839" maxy="-44.0006598894619"/>
<Dimension name="time" default="2008-01-01/2021-01-01" units="ISO8601">2008-01-01T00:00:00.000Z,2009-01-01T00:00:00.000Z,2010-01-01T00:00:00.000Z,2011-01-01T00:00:00.000Z,2012-01-01T00:00:00.000Z,2013-01-01T00:00:00.000Z,2014-01-01T00:00:00.000Z,2015-01-01T00:00:00.000Z,2016-01-01T00:00:00.000Z,2017-01-01T00:00:00.000Z,2018-01-01T00:00:00.000Z,2019-01-01T00:00:00.000Z,2020-01-01T00:00:00.000Z,2021-01-01T00:00:00.000Z</Dimension>
<MetadataURL type="FGDC">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/eng/catalog.search#/metadata/b75b83db-8026-43f9-9537-ee1dfa308158"/>
</MetadataURL>
<MetadataURL type="ISO19115:2003">
<Format>text/plain</Format>
<OnlineResource xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geonetwork/srv/por/csw?service=CSW&version=2.0.2&request=GetRecordById&elementSetName=full&outputSchema=csw:IsoRecord&id=b75b83db-8026-43f9-9537-ee1dfa308158"/>
</MetadataURL>
<Style>
<Name>prodes-amazon-nb:yearly_deforestation_biome_en</Name>
<Title>prodes-amazon-nb:yearly_deforestation_biome_en</Title>
<LegendURL width="161" height="280">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Ayearly_deforestation_biome"/>
</LegendURL>
</Style>
<Style>
<Name>prodes-amazon-nb:yearly_deforestation_biome_pt-br</Name>
<Title>prodes-amazon-nb:yearly_deforestation_biome_pt-br</Title>
<LegendURL width="179" height="280">
<Format>image/png</Format>
<OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="http://terrabrasilis.dpi.inpe.br/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=prodes-amazon-nb%3Ayearly_deforestation_biome&style=yearly_deforestation_biome_pt-br"/>
</LegendURL>
</Style>
</Layer>
</Layer>
</Capability>
</WMS_Capabilities>`