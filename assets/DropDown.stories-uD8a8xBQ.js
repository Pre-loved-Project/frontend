import{j as l}from"./jsx-runtime-CjjdAsDC.js";import{D as d}from"./DropDown-DI-rELFy.js";import{r as m}from"./iframe-DO-BT6ub.js";import"./cn-DWDuF9m2.js";import"./image-By2KvBaC.js";import"./use-merged-ref-BqhwzBip.js";import"./preload-helper-B4AOKawx.js";const x={title:"COMPONENTS/Dropdown",component:d,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:300}}},argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},widthSize:{control:{type:"radio"},options:["long","short"]},value:{control:"text"},placeholder:{control:"text"},onChange:{action:"changed"}},args:{options:[{label:"옵션 1",value:"1"},{label:"옵션 2",value:"2"},{label:"옵션 4",value:"3"},{label:"옵션 5",value:"3"},{label:"옵션 6",value:"3"},{label:"옵션 7",value:"3"},{label:"옵션 8",value:"3"},{label:"옵션 9",value:"3"},{label:"옵션 10",value:"3"},{label:"옵션 11",value:"3"},{label:"옵션 12",value:"3"},{label:"옵션 13",value:"3"}],placeholder:"선택하세요"}},e={render:t=>{const[i,g]=m.useState("");return l.jsxs("div",{className:"flex flex-col gap-4",children:[l.jsx(d,{...t,value:i,onChange:c=>{g(c),t.onChange?.(c)}}),l.jsxs("div",{className:"text-black-900",children:["선택된 값: ",i||"없음"]})]})},args:{size:"lg",widthSize:"long"}},a={args:{size:"lg",widthSize:"long"}},r={args:{size:"md",widthSize:"long"}},s={args:{size:"sm",widthSize:"long"}},o={args:{size:"lg",widthSize:"long"}},n={args:{size:"lg",widthSize:"short"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number>("");
    return <div className="flex flex-col gap-4">
        <DropDown {...args} value={value} onChange={val => {
        setValue(val);
        args.onChange?.(val);
      }} />
        <div className="text-black-900">선택된 값: {value || "없음"}</div>
      </div>;
  },
  args: {
    size: "lg",
    widthSize: "long"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    widthSize: "long"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    widthSize: "long"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    widthSize: "long"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    widthSize: "long"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    widthSize: "short"
  }
}`,...n.parameters?.docs?.source}}};const b=["Main","Large","Medium","Small","Long","Short"];export{a as Large,o as Long,e as Main,r as Medium,n as Short,s as Small,b as __namedExportsOrder,x as default};
