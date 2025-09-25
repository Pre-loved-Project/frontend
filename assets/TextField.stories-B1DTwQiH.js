import{j as i}from"./jsx-runtime-Bae3JrSl.js";import{r as c}from"./iframe-CLjA7gU8.js";import"./preload-helper-PPVm8Dsz.js";const p=e=>{const{width:s,height:d,error:l,className:u,...m}=e,[h,x]=c.useState(""),[g,a]=c.useState(!1);return i.jsx("div",{className:`
        flex items-center rounded-lg transition-colors
        bg-[#252530]
        px-[20px] py-[23px]
        ${l?"border-2 border-red-500":g?"border-2 border-[#5097FA]":"border-2 border-[#353542]"}
        ${u}
      `,style:{width:s,height:d},children:i.jsx("input",{...m,value:h,onChange:r=>{x(r.target.value),e.onChange?.(r)},className:"flex-1 bg-transparent outline-none font-[Pretendard] text-[20px] text-[#F1F1F5]",onFocus:r=>{a(!0),e.onFocus?.(r)},onBlur:r=>{a(!1),e.onBlur?.(r)}})})};p.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},error:{required:!1,tsType:{name:"boolean"},description:""}},composes:["InputHTMLAttributes"]};const T={title:"Components/TextField",component:p,tags:["autodocs"],argTypes:{width:{control:"text"},height:{control:"text"},placeholder:{control:"text"},error:{control:"boolean"}}},t={args:{width:"400px",height:"70px",placeholder:"Enter your text"}},n={args:{width:"400px",height:"70px",placeholder:"Type something..."},play:async({canvasElement:e})=>{e.querySelector("input")?.focus()}},o={args:{placeholder:"This field has an error",error:!0,width:"400px",height:"70px"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: "400px",
    height: "70px",
    placeholder: "Enter your text"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    width: "400px",
    height: "70px",
    placeholder: "Type something..."
  },
  play: async ({
    canvasElement
  }) => {
    const input = canvasElement.querySelector("input") as HTMLInputElement;
    input?.focus();
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "This field has an error",
    error: true,
    width: "400px",
    height: "70px"
  }
}`,...o.parameters?.docs?.source}}};const F=["Default","Focused","Error"];export{t as Default,o as Error,n as Focused,F as __namedExportsOrder,T as default};
