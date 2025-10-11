import{j as e}from"./jsx-runtime-zKX-543m.js";import{u as f}from"./iframe-Bpx-WQyx.js";import{n as b}from"./image-BIFhweVd.js";import{u as h}from"./auth.store-7HaHCkYZ.js";import{B as o}from"./Button-C1U6mEj7.js";import"./preload-helper-B4AOKawx.js";import"./use-merged-ref-Dq8rxQjD.js";import"./cn-DWDuF9m2.js";const i="/frontend/assets/profile-4D0drlDp.jpg?ignore",v={src:i,height:500,width:500,blurDataURL:i},c=({imageSrc:p,nickname:m,bio:x,stats:s})=>{const d=f(),{logout:u}=h(),n=[{label:"구매내역",value:s.purchase},{label:"판매내역",value:s.sales},{label:"관심 카테고리",value:s.category}];return e.jsx("article",{className:"flex items-center justify-center w-[335px] h-[466px] px-[20px] py-[30px] rounded-[12px] border border-[#353542] bg-[#252530] md:w-[509px] md:h-[451px] md:px-[30px] xl:w-[340px] xl:h-[603px] xl:px-[20px] xl:pt-[40px]",children:e.jsxs("div",{className:"flex flex-col items-center justify-between w-full h-full",children:[e.jsx(b,{src:p||v,alt:"프로필",width:120,height:120,className:"rounded-full xl:w-[180px] xl:h-[180px]"}),e.jsxs("div",{className:"w-full",children:[e.jsx("h1",{className:"text-center font-semibold text-xl leading-7 text-white mb-[10px] xl:text-[24px]",children:m}),e.jsx("p",{className:"font-normal text-sm leading-5 text-gray-600 xl:font-[16px] break-words",children:x})]}),e.jsx("dl",{className:"flex w-full text-center",children:n.map((l,g)=>e.jsxs("div",{className:"relative flex-1",children:[e.jsx("dd",{className:"font-semibold text-[18px] leading-none text-[#F1F1F5] lg:text-[20px]",children:l.value}),e.jsx("dt",{className:"mt-[10px] font-[400] text-[14px] leading-none text-[#9FA6B2] lg:text-[16px]",children:l.label}),g<n.length-1&&e.jsx("span",{className:"absolute top-0 right-0 h-full w-[1px] bg-[#353542]"})]},l.label))}),e.jsxs("div",{className:"flex flex-col w-full gap-[10px] md:gap-[15px] lg:gap-[20px]",children:[e.jsx(o,{className:"w-full",children:"프로필 편집"}),e.jsx(o,{variant:"tertiary",className:"w-full",onClick:()=>{u(),d.push("/login")},children:"로그아웃"})]})]})})};c.__docgenInfo={description:"",methods:[],displayName:"Profile",props:{imageSrc:{required:!0,tsType:{name:"string"},description:""},nickname:{required:!0,tsType:{name:"string"},description:""},bio:{required:!0,tsType:{name:"string"},description:""},stats:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  purchase: number;
  sales: number;
  category: string;
}`,signature:{properties:[{key:"purchase",value:{name:"number",required:!0}},{key:"sales",value:{name:"number",required:!0}},{key:"category",value:{name:"string",required:!0}}]}},description:""}}};const T={title:"User/Profile",component:c,tags:["autodocs"],argTypes:{imageSrc:{control:"text"},nickname:{control:"text"},bio:{control:"text"}}},t={args:{imageSrc:"",nickname:"홍길동",bio:"간단한 자기소개만 있는 프로필입니다."},globals:{viewport:{value:"mobile2",isRotated:!1}}},a={args:{imageSrc:"",nickname:"홍길동",bio:"간단한 자기소개만 있는 프로필입니다."},globals:{viewport:{value:"tablet",isRotated:!1}}},r={args:{imageSrc:"",nickname:"홍길동",bio:"간단한 자기소개만 있는 프로필입니다."},globals:{viewport:{value:"desktop",isRotated:!1}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const D=["Mobile","Tablet","Desktop"];export{r as Desktop,t as Mobile,a as Tablet,D as __namedExportsOrder,T as default};
