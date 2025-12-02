import{j as a}from"./jsx-runtime-D-utVvNy.js";import{D as s}from"./DropDown-CYEYB49W.js";import{r as n}from"./iframe-ZQ11aTVI.js";import"./cn-DWDuF9m2.js";import"./preload-helper-B4AOKawx.js";const m={title:"COMPONENTS/Dropdown",component:s,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:300}}},argTypes:{value:{control:"text"},placeholder:{control:"text"},onChange:{action:"changed"}},args:{options:[{label:"옵션 1",value:"1"},{label:"옵션 2",value:"2"},{label:"옵션 4",value:"3"},{label:"옵션 5",value:"3"},{label:"옵션 6",value:"3"},{label:"옵션 7",value:"3"},{label:"옵션 8",value:"3"},{label:"옵션 9",value:"3"},{label:"옵션 10",value:"3"},{label:"옵션 11",value:"3"},{label:"옵션 12",value:"3"},{label:"옵션 13",value:"3"}],placeholder:"선택하세요"}},e={render:l=>{const[r,t]=n.useState("");return a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(s,{...l,value:r,onChange:o=>{t(o),l.onChange?.(o)}}),a.jsxs("div",{className:"text-black-900",children:["선택된 값: ",r||"없음"]})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number>("");
    return <div className="flex flex-col gap-4">
        <DropDown {...args} value={value} onChange={val => {
        setValue(val);
        args.onChange?.(val);
      }} />
        <div className="text-black-900">선택된 값: {value || "없음"}</div>
      </div>;
  }
}`,...e.parameters?.docs?.source}}};const d=["Main"];export{e as Main,d as __namedExportsOrder,m as default};
