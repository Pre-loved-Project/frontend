import{j as a}from"./jsx-runtime-DcAV_ceR.js";import{r as l}from"./iframe-CPktaBor.js";import{T as t}from"./TextBox-DpDd1weT.js";import"./preload-helper-B4AOKawx.js";import"./cn-DWDuF9m2.js";const d={title:"COMPONENTS/TextBox",component:t,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:300}}},argTypes:{placeholder:{control:"text"},maxLength:{control:"number"}},args:{placeholder:"자기소개를 입력하세요...",maxLength:300}},e={render:r=>{const[s,o]=l.useState("");return a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(t,{value:!0,...r,onChange:n=>o(n.target.value)}),a.jsxs("div",{className:"text-black-900",children:["현재 입력 값: ",s||"없음"]})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <div className="flex flex-col gap-4">
        <TextBox value {...args} onChange={e => setValue(e.target.value)} />
        <div className="text-black-900">현재 입력 값: {value || "없음"}</div>
      </div>;
  }
}`,...e.parameters?.docs?.source}}};const p=["Main"];export{e as Main,p as __namedExportsOrder,d as default};
