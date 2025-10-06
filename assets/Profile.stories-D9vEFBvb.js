import{j as e}from"./jsx-runtime-BYKgBeBh.js";import{n as c}from"./image-qNUnqPTf.js";import{B as p}from"./Button-COU5wUp8.js";import"./iframe-CW-E9PcZ.js";import"./preload-helper-B4AOKawx.js";import"./use-merged-ref-BXbY4CQM.js";import"./cn-DWDuF9m2.js";const a="/frontend/assets/profile-4D0drlDp.jpg?ignore",m={src:a,height:500,width:500,blurDataURL:a},o=({imageSrc:n,nickname:i,bio:l})=>e.jsx("article",{className:"flex items-center justify-center w-[335px] h-[466px] px-[20px] py-[30px] rounded-[12px] border border-[#353542] bg-[#252530] md:w-[509px] md:h-[451px] md:px-[30px] xl:w-[340px] xl:h-[603px] xl:px-[20px] xl:pt-[40px]",children:e.jsxs("div",{className:"flex flex-col justify-between items-center w-full h-full",children:[e.jsx(c,{src:n||m,alt:"프로필",width:120,height:120,className:"rounded-full xl:w-[180px] xl:h-[180px]"}),e.jsxs("div",{className:"w-full",children:[e.jsx("h1",{className:"mb-[10px] text-center font-semibold text-xl leading-7 text-white xl:text-[24px]",children:i}),e.jsx("p",{className:"font-normal text-sm leading-5 text-gray-600 xl:font-[16px] break-words",children:l})]}),e.jsx("div",{className:"w-full h-[48px] bg-white"}),e.jsx(p,{className:"w-full",children:"프로필 편집"})]})});o.__docgenInfo={description:"",methods:[],displayName:"Profile",props:{imageSrc:{required:!0,tsType:{name:"string"},description:""},nickname:{required:!0,tsType:{name:"string"},description:""},bio:{required:!0,tsType:{name:"string"},description:""}}};const w={title:"User/Profile",component:o,tags:["autodocs"],argTypes:{imageSrc:{control:"text"},nickname:{control:"text"},bio:{control:"text"}}},t={args:{imageSrc:"",nickname:"홍길동",bio:"간단한 자기소개만 있는 프로필입니다."},globals:{viewport:{value:"mobile2",isRotated:!1}}},r={args:{imageSrc:"",nickname:"홍길동",bio:"간단한 자기소개만 있는 프로필입니다."},globals:{viewport:{value:"tablet",isRotated:!1}}},s={args:{imageSrc:"",nickname:"홍길동",bio:"간단한 자기소개만 있는 프로필입니다."},globals:{viewport:{value:"desktop",isRotated:!1}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: "",
    nickname: "홍길동",
    bio: "간단한 자기소개만 있는 프로필입니다."
  },
  globals: {
    viewport: {
      value: "mobile2",
      isRotated: false
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: "",
    nickname: "홍길동",
    bio: "간단한 자기소개만 있는 프로필입니다."
  },
  globals: {
    viewport: {
      value: "tablet",
      isRotated: false
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: "",
    nickname: "홍길동",
    bio: "간단한 자기소개만 있는 프로필입니다."
  },
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
}`,...s.parameters?.docs?.source}}};const v=["Mobile","Tablet","Desktop"];export{s as Desktop,t as Mobile,r as Tablet,v as __namedExportsOrder,w as default};
