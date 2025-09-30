import{j as p}from"./jsx-runtime-CE1ZzSho.js";import{c as u}from"./cn-DWDuF9m2.js";import"./iframe-Db6xyQn7.js";import"./preload-helper-PPVm8Dsz.js";const y={sm:"text-base w-[335px] h-[50px]",md:"text-base w-[440px] h-[55px]",lg:"text-lg w-[640px] h-[65px]"},n={primary:{default:"bg-linear-to-r from-[#5097fa] to-[#5363ff] text-[#F1F1F5]",disabled:"bg-[#353542] text-[#6E6E82]"},secondary:{default:"bg-transparent text-[#5097FA] border border-[#5097FA]",disabled:"bg-transparent text-[#6E6E82] border border-[#353542]"},tertiary:{default:"bg-transparent text-[#9FA6B2] border border-[#9FA6B2]",disabled:"bg-transparent text-[#6E6E82] border border-[#353542]"}},o=({variant:t="primary",size:i="sm",disabled:s=!1,className:l,children:d,...m})=>{const c=u("font-semibold leading-none rounded-lg",y[i],s?[n[t].disabled,"cursor-not-allowed"]:[n[t].default,"cursor-pointer"],l);return p.jsx("button",{className:c,disabled:s,...m,children:d})};o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const{fn:g}=__STORYBOOK_MODULE_TEST__,E={title:"Components/Button",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["primary","secondary","tertiary"]},size:{control:{type:"radio"},options:["sm","md","lg"]},disabled:{control:"boolean"}},args:{onClick:g()}},e={args:{variant:"primary",children:"Primary"}},r={args:{variant:"secondary",children:"Secondary"}},a={args:{variant:"tertiary",children:"Tertiary"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    children: "Tertiary"
  }
}`,...a.parameters?.docs?.source}}};const T=["Primary","Secondary","Tertiary"];export{e as Primary,r as Secondary,a as Tertiary,T as __namedExportsOrder,E as default};
