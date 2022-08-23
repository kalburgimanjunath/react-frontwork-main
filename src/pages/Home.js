import React, { useEffect, useState } from 'react';
import grapesjs from 'grapesjs';
import gjsPresetwebpage from 'grapesjs-preset-webpage';
export default function Home() {
  const [dynamiceditor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      plugins: [gjsPresetwebpage],
      pluginsOpts: { gjsPresetwebpage: {} },
    });
    setEditor(editor);
  }, []);
  return (
    <div id="gjs">
      <h1>Hello world</h1>
    </div>
  );
}
