import{j as g}from"./jsx-runtime-CBY4sRt8.js";import{I as i}from"./Input-DlfgewhE.js";import{r as u}from"./iframe-C0PLLnmu.js";import"./cn-DWDuF9m2.js";import"./TextField-Dx7c-xSn.js";import"./image-Byp81VIB.js";import"./use-merged-ref-CCWz8ytW.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"USER/Input",component:i,tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"],description:"Input 크기 (label, text, message 동시 조정)"},widthSize:{control:{type:"radio"},options:["long","short"],description:"TextField 너비"},label:{control:"text",description:"Input label 텍스트"},value:{control:"text",description:"Controlled value (직접 입력 가능)"},placeholder:{control:"text",description:"Input placeholder"},isHiddenable:{control:"boolean",description:"비밀번호 토글 버튼 활성화"},isError:{control:"boolean",description:"에러 상태 여부"},message:{control:"text",description:"가이드 메시지 (value 없을 때 표시)"},errorMessage:{control:"text",description:"에러 메시지 (isError=true일 때 표시)"},onChange:{action:"changed",description:"값 변경 이벤트"}}},e={args:{label:"Small input",size:"sm",widthSize:"long",placeholder:"Small input",message:"가이드 메시지"}},r={args:{label:"Medium input",size:"md",widthSize:"long",placeholder:"Medium input",message:"가이드 메시지"}},s={args:{label:"Large input",size:"lg",widthSize:"long",placeholder:"Large input",message:"가이드 메시지"}},o={args:{label:"Long width input",size:"lg",widthSize:"long",placeholder:"Long input",message:"가이드 메시지"}},a={args:{label:"Short width input",size:"lg",widthSize:"short",placeholder:"Short input",message:"가이드 메시지"}},t={args:{label:"비밀번호",size:"lg",widthSize:"long",placeholder:"비밀번호를 입력하세요",isHiddenable:!0,message:"최소 8자 이상 입력하세요"}},n={args:{label:"닉네임",size:"lg",widthSize:"long",placeholder:"닉네임을 입력하세요",isError:!0,errorMessage:"이미 사용 중인 닉네임입니다"}},l={render:m=>{const[d,p]=u.useState("초기값");return g.jsx(i,{label:"Controlled input",size:"lg",widthSize:"long",value:d,placeholder:"값을 입력하세요",onChange:c=>p(c.target.value),message:"가이드 메시지"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Small input",
    size: "sm",
    widthSize: "long",
    placeholder: "Small input",
    message: "가이드 메시지"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Medium input",
    size: "md",
    widthSize: "long",
    placeholder: "Medium input",
    message: "가이드 메시지"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Large input",
    size: "lg",
    widthSize: "long",
    placeholder: "Large input",
    message: "가이드 메시지"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Long width input",
    size: "lg",
    widthSize: "long",
    placeholder: "Long input",
    message: "가이드 메시지"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Short width input",
    size: "lg",
    widthSize: "short",
    placeholder: "Short input",
    message: "가이드 메시지"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "비밀번호",
    size: "lg",
    widthSize: "long",
    placeholder: "비밀번호를 입력하세요",
    isHiddenable: true,
    message: "최소 8자 이상 입력하세요"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "닉네임",
    size: "lg",
    widthSize: "long",
    placeholder: "닉네임을 입력하세요",
    isError: true,
    errorMessage: "이미 사용 중인 닉네임입니다"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("초기값");
    return <Input label="Controlled input" size="lg" widthSize="long" value={value} placeholder="값을 입력하세요" onChange={e => setValue(e.target.value)} message="가이드 메시지" />;
  }
}`,...l.parameters?.docs?.source}}};const M=["Small","Medium","Large","LongWidth","ShortWidth","Password","Error","Controlled"];export{l as Controlled,n as Error,s as Large,o as LongWidth,r as Medium,t as Password,a as ShortWidth,e as Small,M as __namedExportsOrder,v as default};
