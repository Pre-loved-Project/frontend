import{j as a}from"./jsx-runtime-B4Z-Cwcd.js";import{r as l}from"./iframe-vISGKOMF.js";import{T as r}from"./TextBox-BthKLb0h.js";import"./preload-helper-B4AOKawx.js";import"./cn-DWDuF9m2.js";const d={title:"COMPONENTS/TextBox",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:300}}},argTypes:{placeholder:{control:"text"},maxLength:{control:"number"}},args:{placeholder:"자기소개를 입력하세요...",maxLength:300}},e={render:s=>{const[t,o]=l.useState("");return a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(r,{...s,value:t,onChange:n=>o(n.target.value)}),a.jsxs("div",{className:"text-black-900",children:["현재 입력 값: ",t||"없음"]})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <div className="flex flex-col gap-4">
        <TextBox {...args} value={value} onChange={e => setValue(e.target.value)} />
        <div className="text-black-900">현재 입력 값: {value || "없음"}</div>
      </div>;
  }
}`,...e.parameters?.docs?.source}}};const p=["Main"];export{e as Main,p as __namedExportsOrder,d as default};
