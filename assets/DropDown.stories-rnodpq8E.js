import{j as r}from"./jsx-runtime-BmgUcmGl.js";import{r as m}from"./iframe-CFp8kgD-.js";import{c as h}from"./cn-DWDuF9m2.js";import{n as j}from"./image-C39fM4rY.js";import"./preload-helper-PPVm8Dsz.js";import"./use-merged-ref-CaZPFU8a.js";const v="data:image/svg+xml,%3csvg%20width='8'%20height='5'%20viewBox='0%200%208%205'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.52009%204.17398L0.36896%201.02288C0.325493%200.979409%200.29126%200.930875%200.26626%200.877275C0.24126%200.823658%200.22876%200.766217%200.22876%200.70495C0.22876%200.582417%200.270193%200.475959%200.35306%200.385576C0.43591%200.295193%200.545118%200.25%200.680685%200.25H7.31909C7.45465%200.25%207.56386%200.295626%207.64671%200.386876C7.72958%200.478143%207.77101%200.584609%207.77101%200.706276C7.77101%200.736709%207.72421%200.842309%207.63061%201.02308L4.47968%204.174C4.40725%204.24643%204.33238%204.29932%204.25506%204.33265C4.17773%204.36598%204.09267%204.38265%203.99988%204.38265C3.9071%204.38265%203.82204%204.36598%203.74471%204.33265C3.66739%204.29932%203.59252%204.24643%203.52009%204.17398Z'%20fill='%239FA6B2'/%3e%3c/svg%3e",N={src:v,height:5,width:8,blurDataURL:v},f="data:image/svg+xml,%3csvg%20width='8'%20height='5'%20viewBox='0%200%208%205'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.47943%200.458837L7.63055%203.60994C7.67402%203.6534%207.70825%203.70194%207.73325%203.75554C7.75825%203.80915%207.77075%203.8666%207.77075%203.92786C7.77075%204.0504%207.72932%204.15685%207.64645%204.24724C7.5636%204.33762%207.45439%204.38281%207.31883%204.38281L0.680427%204.38281C0.54486%204.38281%200.435652%204.33719%200.352802%204.24594C0.269936%204.15467%200.228503%204.0482%200.228503%203.92654C0.228503%203.8961%200.275302%203.7905%200.368902%203.60974L3.51983%200.458812C3.59226%200.386378%203.66714%200.333495%203.74445%200.300161C3.82179%200.266828%203.90684%200.250161%203.99963%200.250161C4.09241%200.250161%204.17747%200.266828%204.2548%200.300162C4.33212%200.333495%204.40699%200.386387%204.47943%200.458837Z'%20fill='%23F1F1F5'/%3e%3c/svg%3e",D={src:f,height:5,width:8,blurDataURL:f},M={lg:{long:{wrapper:"w-[400px] h-[70px] text-[16px]",optionWrapper:"w-[400px] p-[10px] gap-[5px]",option:"w-[380px] h-[34px] text-[16px]"},short:{wrapper:"w-[200px] h-[70px] text-[16px]",optionWrapper:"w-[200px] p-[10px] gap-[5px]",option:"w-[190px] h-[34px] text-[16px]"}},md:{long:{wrapper:"w-[360px] h-[60px] text-[14px]",optionWrapper:"w-[360px] p-[10px] gap-[5px]",option:"w-[320px] h-[32px] text-[14px]"},short:{wrapper:"w-[140px] h-[60px] text-[14px]",optionWrapper:"w-[140px] p-[10px] gap-[5px]",option:"w-[130px] h-[32px] text-[14px]"}},sm:{long:{wrapper:"w-[335px] h-[55px] text-[14px]",optionWrapper:"w-[335px] p-[10px] gap-[5px]",option:"w-[310px] h-[32px] text-[14px]"},short:{wrapper:"w-[100px] h-[55px] text-[14px]",optionWrapper:"w-[100px] p-[10px] gap-[5px]",option:"w-[90px] h-[32px] text-[14px]"}}},w=({size:t="lg",widthSize:n="long",options:o,value:a,onChange:b,placeholder:C="선택하세요"})=>{const[u,g]=m.useState(!1),x=m.useRef(null),{wrapper:z,optionWrapper:S,option:y}=M[t][n];return m.useEffect(()=>{const e=L=>{x.current&&!x.current.contains(L.target)&&g(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),r.jsxs("div",{className:"relative",ref:x,children:[r.jsxs("div",{onClick:()=>g(e=>!e),className:h("flex items-center justify-between rounded-lg border bg-black-800 px-4 cursor-pointer transition-colors",u?"border-blue":"border-gray-400",z),children:[r.jsx("span",{className:a?"text-white":"text-gray-400",children:a?o.find(e=>e.value===a)?.label:C}),r.jsx(j,{src:u?D:N,alt:"arrow",width:10,height:10})]}),r.jsx("ul",{className:h("absolute mt-0.5 top-full left-0 z-10 rounded-lg bg-black-800","border border-gray-400","origin-top overflow-hidden transform-gpu","transition-[opacity,transform] duration-200","max-h-60 overflow-y-auto",S,u?"opacity-100 scale-y-100 pointer-events-auto":"opacity-0 scale-y-0 pointer-events-none"),children:o.map(e=>r.jsx("li",{onClick:()=>{b(e.value),g(!1)},className:h("mt-1 flex items-center px-2 rounded-md cursor-pointer transition-colors",y,"text-gray-400 hover:text-white hover:bg-gray-600"),children:e.label},e.value))})]})};w.__docgenInfo={description:"",methods:[],displayName:"DropDown",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"lg"',computed:!1}},widthSize:{required:!1,tsType:{name:"union",raw:'"long" | "short"',elements:[{name:"literal",value:'"long"'},{name:"literal",value:'"short"'}]},description:"",defaultValue:{value:'"long"',computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택하세요"',computed:!1}}}};const V={title:"COMPONENTS/Dropdown",component:w,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:300}}},argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},widthSize:{control:{type:"radio"},options:["long","short"]},value:{control:"text"},placeholder:{control:"text"},onChange:{action:"changed"}},args:{options:[{label:"옵션 1",value:"1"},{label:"옵션 2",value:"2"},{label:"옵션 4",value:"3"},{label:"옵션 5",value:"3"},{label:"옵션 6",value:"3"},{label:"옵션 7",value:"3"},{label:"옵션 8",value:"3"},{label:"옵션 9",value:"3"},{label:"옵션 10",value:"3"},{label:"옵션 11",value:"3"},{label:"옵션 12",value:"3"},{label:"옵션 13",value:"3"}],placeholder:"선택하세요"}},s={render:t=>{const[n,o]=m.useState("");return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx(w,{...t,value:n,onChange:a=>{o(a),t.onChange?.(a)}}),r.jsxs("div",{className:"text-black-900",children:["선택된 값: ",n||"없음"]})]})},args:{size:"lg",widthSize:"long"}},l={args:{size:"lg",widthSize:"long"}},p={args:{size:"md",widthSize:"long"}},i={args:{size:"sm",widthSize:"long"}},c={args:{size:"lg",widthSize:"long"}},d={args:{size:"lg",widthSize:"short"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    widthSize: "long"
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    widthSize: "long"
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    widthSize: "long"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    widthSize: "long"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    widthSize: "short"
  }
}`,...d.parameters?.docs?.source}}};const _=["Main","Large","Medium","Small","Long","Short"];export{l as Large,c as Long,s as Main,p as Medium,d as Short,i as Small,_ as __namedExportsOrder,V as default};
