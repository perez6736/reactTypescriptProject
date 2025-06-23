import * as esbuild from 'esbuild-wasm';
import ReactDOM from 'react-dom/client';
import { useState, useEffect, useRef } from 'react';
import { unpkgPathPlugin } from './plugins/plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

const App = () => {
  const ref = useRef<any>();
  const iframe = useRef<any>();
  const [input, setInput] = useState('');

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    });
  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = async () => {
    if (!ref.current) {
      return;
    }

    iframe.current.srcdoc = html;

    const result = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    });

    iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*');
  };

  const html = `
    <html>
      <head></head> 
      <body>
        <div id="root"></div>
        <script> 
          window.addEventListener('message', (event)=> {
            try {
              eval(event.data);
            } catch (err) {
               const root = document.querySelector('#root');
               root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>' 
            }
          }, false)
        </script>
      </body> 
    </html>
  `;

  const something = `            try{
              eval(event.data);
            } catch(err){
               const root = document.querySelector('#root');
               root.innerHTML = '<div> + err + '</div>' 
            }`;

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <iframe
        title="code preview"
        sandbox="allow-scripts"
        srcDoc={html}
        ref={iframe}
      />
    </div>
  );
};

root.render(<App />);
