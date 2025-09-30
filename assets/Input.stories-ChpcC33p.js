import{j as e}from"./jsx-runtime-BTZun5XJ.js";import{c as x}from"./cn-DWDuF9m2.js";import{T as y}from"./TextField-WYecwIHM.js";import{r as T}from"./iframe-Dlaih5Ao.js";import"./image-CAl7wF2K.js";import"./use-merged-ref-Bm4sr2S5.js";import"./preload-helper-PPVm8Dsz.js";const E={sm:"text-[14px]",md:"text-[16px]",lg:"text-[16px]"},L={sm:"text-[12px]",md:"text-[12px]",lg:"text-[14px]"},S=({size:r="lg",widthSize:u="long",label:a,value:s,placeholder:z,isHiddenable:f=!1,isError:g=!1,message:b,errorMessage:w,onChange:v})=>{let t=null,h="text-gray-400";return g?(t=w??"",h="text-red"):!g&&!s&&(t=b??"",h="text-gray-400"),e.jsxs("div",{className:"flex flex-col gap-[6px]",children:[a&&e.jsx("label",{className:x("font-medium text-black-800",E[r]),children:a}),e.jsx(y,{fieldSize:r,widthSize:u,value:s,placeholder:z,isHiddenable:f,isError:g,onChange:v}),t&&e.jsx("span",{className:x("mt-1",L[r],h),children:t})]})};S.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"lg"',computed:!1}},widthSize:{required:!1,tsType:{name:"union",raw:'"long" | "short"',elements:[{name:"literal",value:'"long"'},{name:"literal",value:'"short"'}]},description:"",defaultValue:{value:'"long"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},isHiddenable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isError:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},message:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const R={title:"USER/Input",component:S,tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"],description:"Input 크기 (label, text, message 동시 조정)"},widthSize:{control:{type:"radio"},options:["long","short"],description:"TextField 너비"},label:{control:"text",description:"Input label 텍스트"},value:{control:"text",description:"Controlled value (직접 입력 가능)"},placeholder:{control:"text",description:"Input placeholder"},isHiddenable:{control:"boolean",description:"비밀번호 토글 버튼 활성화"},isError:{control:"boolean",description:"에러 상태 여부"},message:{control:"text",description:"가이드 메시지 (value 없을 때 표시)"},errorMessage:{control:"text",description:"에러 메시지 (isError=true일 때 표시)"},onChange:{action:"changed",description:"값 변경 이벤트"}}},n={args:{label:"Small input",size:"sm",widthSize:"long",placeholder:"Small input",message:"가이드 메시지"}},l={args:{label:"Medium input",size:"md",widthSize:"long",placeholder:"Medium input",message:"가이드 메시지"}},o={args:{label:"Large input",size:"lg",widthSize:"long",placeholder:"Large input",message:"가이드 메시지"}},i={args:{label:"Long width input",size:"lg",widthSize:"long",placeholder:"Long input",message:"가이드 메시지"}},d={args:{label:"Short width input",size:"lg",widthSize:"short",placeholder:"Short input",message:"가이드 메시지"}},p={args:{label:"비밀번호",size:"lg",widthSize:"long",placeholder:"비밀번호를 입력하세요",isHiddenable:!0,message:"최소 8자 이상 입력하세요"}},c={args:{label:"닉네임",size:"lg",widthSize:"long",placeholder:"닉네임을 입력하세요",isError:!0,errorMessage:"이미 사용 중인 닉네임입니다"}},m={render:r=>{const[u,a]=T.useState("초기값");return e.jsx(S,{label:"Controlled input",size:"lg",widthSize:"long",value:u,placeholder:"값을 입력하세요",onChange:s=>a(s.target.value),message:"가이드 메시지"})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Small input",
    size: "sm",
    widthSize: "long",
    placeholder: "Small input",
    message: "가이드 메시지"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Medium input",
    size: "md",
    widthSize: "long",
    placeholder: "Medium input",
    message: "가이드 메시지"
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Large input",
    size: "lg",
    widthSize: "long",
    placeholder: "Large input",
    message: "가이드 메시지"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Long width input",
    size: "lg",
    widthSize: "long",
    placeholder: "Long input",
    message: "가이드 메시지"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Short width input",
    size: "lg",
    widthSize: "short",
    placeholder: "Short input",
    message: "가이드 메시지"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "비밀번호",
    size: "lg",
    widthSize: "long",
    placeholder: "비밀번호를 입력하세요",
    isHiddenable: true,
    message: "최소 8자 이상 입력하세요"
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "닉네임",
    size: "lg",
    widthSize: "long",
    placeholder: "닉네임을 입력하세요",
    isError: true,
    errorMessage: "이미 사용 중인 닉네임입니다"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("초기값");
    return <Input label="Controlled input" size="lg" widthSize="long" value={value} placeholder="값을 입력하세요" onChange={e => setValue(e.target.value)} message="가이드 메시지" />;
  }
}`,...m.parameters?.docs?.source}}};const N=["Small","Medium","Large","LongWidth","ShortWidth","Password","Error","Controlled"];export{m as Controlled,c as Error,o as Large,i as LongWidth,l as Medium,p as Password,d as ShortWidth,n as Small,N as __namedExportsOrder,R as default};
