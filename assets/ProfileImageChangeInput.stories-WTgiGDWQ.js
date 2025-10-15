import{j as a}from"./jsx-runtime-BxeKcGYQ.js";import{r as i}from"./iframe-DIdCkNzQ.js";import{P as s}from"./ProfileImageChangeInput-Bf6DsQtW.js";import"./preload-helper-B4AOKawx.js";import"./image-CU8AScGB.js";import"./use-merged-ref-CtFm3MDb.js";import"./cn-DWDuF9m2.js";import"./image-select-D522DtYO.js";const x={title:"User/ProfileImageChangeInput",component:s,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:300}}},argTypes:{onChange:{action:"changed"}}},e={render:n=>{const[r,o]=i.useState(null);return a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(s,{...n,onChange:t=>{o(t),n.onChange?.(t)}}),a.jsx("div",{className:"text-black-900",children:r?`선택된 파일: ${r.name}`:"선택된 파일 없음"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [file, setFile] = useState<File | null>(null);
    return <div className="flex flex-col gap-4">
        <ProfileImageChangeInput {...args} onChange={f => {
        setFile(f);
        args.onChange?.(f);
      }} />
        <div className="text-black-900">
          {file ? \`선택된 파일: \${file.name}\` : "선택된 파일 없음"}
        </div>
      </div>;
  }
}`,...e.parameters?.docs?.source}}};const h=["Main"];export{e as Main,h as __namedExportsOrder,x as default};
