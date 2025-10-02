import{j as s}from"./jsx-runtime-CBY4sRt8.js";import{r as a}from"./iframe-C0PLLnmu.js";import{I as p}from"./Input-DlfgewhE.js";import{B as w}from"./Button-BMJm5I8m.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-DWDuF9m2.js";import"./TextField-Dx7c-xSn.js";import"./image-Byp81VIB.js";import"./use-merged-ref-CCWz8ytW.js";const d=({size:l="lg",onSuccess:b,onError:j,...z})=>{const[g,f]=a.useState(""),[v,E]=a.useState(""),[i,u]=a.useState(null),[m,c]=a.useState(null),h=r=>{r.preventDefault(),console.log("로그인 요청 폼 제출")},x=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),S=r=>{const e=r.target.value;f(e),e!=null&&e!==""&&!x(e)?u("올바른 이메일 형식이 아닙니다."):u(null)},y=r=>{const e=r.target.value;E(e),e!=null&&e!==""&&e.length<8?c("비밀번호는 최소 8자 이상이어야 합니다."):c(null)};return s.jsxs("form",{onSubmit:h,className:"flex flex-col gap-6",children:[s.jsx(p,{size:l,label:"이메일",placeholder:"이메일을 입력해주세요",isError:!!i,errorMessage:i??"",onChange:S}),s.jsx(p,{size:l,label:"비밀번호",placeholder:"비밀번호를 입력해주세요",message:"최소 8자 이상",isHiddenable:!0,isError:!!m,errorMessage:m??"",onChange:y}),s.jsx(w,{variant:"primary",size:l,type:"submit",disabled:!g||i!==null||!v||m!==null,children:"로그인"})]})};d.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"lg"',computed:!1}},onSuccess:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(msg: string) => void",signature:{arguments:[{type:{name:"string"},name:"msg"}],return:{name:"void"}}},description:""}}};const L={title:"Auth/LoginForm",component:d,tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"],description:"폼 전체 Input과 Button 크기를 조절합니다"}}},t={args:{size:"lg"}},o={args:{size:"sm"}},n={args:{size:"md"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...n.parameters?.docs?.source}}};const P=["Default","Small","Medium"];export{t as Default,n as Medium,o as Small,P as __namedExportsOrder,L as default};
