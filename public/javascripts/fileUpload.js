FilePond.registerPlugin(FilePondPluginImagePreview, FilePondPluginImageResize);

FilePond.registerPlugin(FilePondPluginFileEncode);

FilePond.setOptions({
  stylePanelAspectRatio: 150 / 100,
  imageResizeTargetWidth: 100,
  imageResizeTargetHeight: 150,
});

FilePond.parse(document.body);
