import React, { useEffect, useState } from 'react';
import grapesjs from 'grapesjs';
import gjsPresetwebpage from 'grapesjs-preset-newsletter';
export default function NewsMgml() {
  const [dynamiceditor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#newsletter',
      plugins: [gjsPresetwebpage],
      pluginsOpts: { gjsPresetwebpage: {} },
    });
    setEditor(editor);
  }, []);
  return (
    <div id="newsletter">
      <h1>Hello world</h1>
    </div>
  );
}
