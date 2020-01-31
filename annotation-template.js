var templateFactory = {
    annotationTemplate: `<annotation>
	<folder>images</folder>
	<filename>%%IMAGE_NAME%%</filename>
	<path>%%IMAGE_PATH%%</path>
	<source>
		<database>Unknown</database>
	</source>
	<size>
		<width>%%IMAGE_WIDTH%%</width>
		<height>%%IMAGE_HEIGHT%%</height>
		<depth>3</depth>
	</size>
    <segmented>0</segmented>
    %%OBJECTS%%
	
</annotation>`,
    objectTemplate: `<object>
        <name>%%OBJECT-CLASS%%</name>
        <pose>Unspecified</pose>
        <truncated>0</truncated>
        <difficult>0</difficult>
        <bndbox>
            <xmin>%%X-MIN%%</xmin>
            <ymin>%%Y-MIN%%</ymin>
            <xmax>%%X-MAX%%</xmax>
            <ymax>%%Y-MAX%%</ymax>
        </bndbox>
    </object>`
}