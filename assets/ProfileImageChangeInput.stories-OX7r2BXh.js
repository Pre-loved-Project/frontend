import{j as a}from"./jsx-runtime-B4Z-Cwcd.js";import{r as i}from"./iframe-vISGKOMF.js";import{P as t}from"./ProfileImageChangeInput-DKIeeJ0F.js";import"./preload-helper-B4AOKawx.js";import"./image-NwcTq6Ve.js";import"./cn-DWDuF9m2.js";const f={title:"User/ProfileImageChangeInput",component:t,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:300}}},argTypes:{onChange:{action:"changed"}}},e={render:n=>{const[r,o]=i.useState(null);return a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(t,{...n,onChange:s=>{o(s),n.onChange?.(s)}}),a.jsx("div",{className:"text-black-900",children:r?`선택된 파일: ${r.name}`:"선택된 파일 없음"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const u=["Main"];export{e as Main,u as __namedExportsOrder,f as default};
