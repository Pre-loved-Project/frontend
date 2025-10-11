import{j as l}from"./jsx-runtime-bukIPEy0.js";import{I as t}from"./Input-COvofX_h.js";import{r as c}from"./iframe-9S3Ogy7W.js";import"./cn-DWDuF9m2.js";import"./TextField-D9fREGYx.js";import"./image-Bh_P-Tq1.js";import"./use-merged-ref-l2RE6dSb.js";import"./preload-helper-B4AOKawx.js";const x={title:"USER/Input",component:t,tags:["autodocs"],argTypes:{label:{control:"text",description:"Input label 텍스트"},value:{control:"text",description:"Controlled value (직접 입력 가능)"},placeholder:{control:"text",description:"Input placeholder"},isHiddenable:{control:"boolean",description:"비밀번호 토글 버튼 활성화"},isError:{control:"boolean",description:"에러 상태 여부"},message:{control:"text",description:"가이드 메시지 (value 없을 때 표시)"},errorMessage:{control:"text",description:"에러 메시지 (isError=true일 때 표시)"},onChange:{action:"changed",description:"값 변경 이벤트"}}},e={render:()=>{const[a,s]=c.useState("초기값");return l.jsx(t,{label:"Controlled input",value:a,placeholder:"값을 입력하세요",onChange:n=>s(n.target.value),message:"가이드 메시지"})}},r={args:{label:"비밀번호",placeholder:"비밀번호를 입력하세요",isHiddenable:!0,message:"최소 8자 이상 입력하세요"}},o={args:{label:"닉네임",placeholder:"닉네임을 입력하세요",isError:!0,errorMessage:"이미 사용 중인 닉네임입니다"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("초기값");
    return <Input label="Controlled input" value={value} placeholder="값을 입력하세요" onChange={e => setValue(e.target.value)} message="가이드 메시지" />;
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력하세요",
    isHiddenable: true,
    message: "최소 8자 이상 입력하세요"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "닉네임",
    placeholder: "닉네임을 입력하세요",
    isError: true,
    errorMessage: "이미 사용 중인 닉네임입니다"
  }
}`,...o.parameters?.docs?.source}}};const E=["Controlled","Password","Error"];export{e as Controlled,o as Error,r as Password,E as __namedExportsOrder,x as default};
