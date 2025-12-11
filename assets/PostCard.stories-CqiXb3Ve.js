import{j as e}from"./jsx-runtime-K-Dn0W6b.js";import{n as x}from"./image-BddvPFAU.js";import{L as g}from"./link-CuBds-ls.js";import{c as h}from"./cn-DWDuF9m2.js";import"./iframe-D2r0lrqQ.js";import"./preload-helper-B4AOKawx.js";const b={SELLING:"판매 중",RESERVED:"예약 중",SOLD:"판매 완료"},f={SELLING:"bg-linear-to-r from-[#5097fa] to-[#5363ff] text-[#F1F1F5]",RESERVED:"bg-white text-[#5097FA]",SOLD:"bg-black text-[#9FA6B2]"},c=({status:t,className:n})=>{const o=b[t],l=f[t];return e.jsx("span",{className:h("inline-block rounded-md px-2 py-[2px] text-[14px] font-medium",l,n),children:o})};c.__docgenInfo={description:"",methods:[],displayName:"PostStatusBadge",props:{status:{required:!0,tsType:{name:"union",raw:'"SELLING" | "RESERVED" | "SOLD"',elements:[{name:"literal",value:'"SELLING"'},{name:"literal",value:'"RESERVED"'},{name:"literal",value:'"SOLD"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const d=({postingId:t,title:n,price:o,likeCount:l,chatCount:u,viewCount:m,thumbnail:i,status:p})=>e.jsx(g,{href:`/detail/${t}`,children:e.jsx("article",{className:"w-full rounded-lg border border-[#353542] bg-[#252530] p-2.5 md:pb-5 xl:pb-6",children:e.jsxs("div",{className:"flex flex-col gap-2.5 md:gap-5 xl:gap-6",children:[e.jsx("div",{className:"relative h-24 w-full overflow-hidden rounded-md md:h-40 xl:h-56",children:i?e.jsx(x,{src:i,alt:n,fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",className:"object-cover transition-transform duration-200 ease-in-out hover:scale-105"}):e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-[#1c1c22] text-gray-500",children:"이미지 없음"})}),e.jsxs("div",{className:"flex flex-col gap-1.5 md:gap-2.5",children:[e.jsx("h1",{className:"line-clamp-2 h-7 text-sm leading-none font-medium text-[#F1F1F5] md:h-8 md:text-base xl:h-9 xl:text-lg",children:n}),e.jsx(c,{status:p,className:"block w-fit"}),e.jsxs("p",{className:"text-xs text-[#9FA6B2] md:text-sm",children:[o.toLocaleString()," 원"]}),e.jsxs("div",{className:"flex w-full flex-col gap-1.5 text-xs leading-none font-light text-[#6E6E82] md:flex-row md:justify-between md:text-sm xl:text-base",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("span",{children:"조회"}),e.jsx("span",{children:m})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("img",{src:"/icons/chat.svg",alt:"채팅 수",className:"h-2.5 w-2.5"}),e.jsx("span",{children:u}),e.jsx("img",{src:"/icons/heart.svg",alt:"좋아요 수",className:"h-2.5 w-2.5"}),e.jsx("span",{children:l})]})]})]})]})})});d.__docgenInfo={description:"",methods:[],displayName:"PostCard",props:{postingId:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},sellerId:{required:!0,tsType:{name:"number"},description:""},content:{required:!0,tsType:{name:"string"},description:""},createdAt:{required:!0,tsType:{name:"string"},description:""},likeCount:{required:!0,tsType:{name:"number"},description:""},chatCount:{required:!0,tsType:{name:"number"},description:""},viewCount:{required:!0,tsType:{name:"number"},description:""},thumbnail:{required:!0,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"union",raw:'"SELLING" | "RESERVED" | "SOLD"',elements:[{name:"literal",value:'"SELLING"'},{name:"literal",value:'"RESERVED"'},{name:"literal",value:'"SOLD"'}]},description:""}}};const I={title:"Post/PostCard",component:d,tags:["autodocs"],argTypes:{postingId:{control:"number"},title:{control:"text"},price:{control:"number"},sellerId:{control:"number"},content:{control:"text"},createdAt:{control:"text"},likeCount:{control:"number"},chatCount:{control:"number"},viewCount:{control:"number"},thumbnail:{control:"text"},status:{control:{type:"radio"},options:["SELLING","RESERVED","SOLD"]}}},s={args:{postingId:101,title:"다이슨 슈퍼소닉 블루 판매",price:12e5,sellerId:12,content:"사용감 있어서 싸게 팝니다",createdAt:"2025-09-13T15:23:45Z",likeCount:5,chatCount:2,viewCount:101,thumbnail:"",status:"SELLING"},globals:{viewport:{value:"mobile2",isRotated:!1}}},r={args:{postingId:101,title:"다이슨 슈퍼소닉 블루 판매",price:12e5,sellerId:12,content:"사용감 있어서 싸게 팝니다",createdAt:"2025-09-13T15:23:45Z",likeCount:5,chatCount:2,viewCount:101,thumbnail:"",status:"RESERVED"},globals:{viewport:{value:"tablet",isRotated:!1}}},a={args:{postingId:101,title:"다이슨 슈퍼소닉 블루 판매",price:12e5,sellerId:12,content:"사용감 있어서 싸게 팝니다",createdAt:"2025-09-13T15:23:45Z",likeCount:5,chatCount:2,viewCount:101,thumbnail:"",status:"SOLD"},globals:{viewport:{value:"desktop",isRotated:!1}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    postingId: 101,
    title: "다이슨 슈퍼소닉 블루 판매",
    price: 1200000,
    sellerId: 12,
    content: "사용감 있어서 싸게 팝니다",
    createdAt: "2025-09-13T15:23:45Z",
    likeCount: 5,
    chatCount: 2,
    viewCount: 101,
    thumbnail: "",
    status: "SELLING"
  },
  globals: {
    viewport: {
      value: "mobile2",
      isRotated: false
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    postingId: 101,
    title: "다이슨 슈퍼소닉 블루 판매",
    price: 1200000,
    sellerId: 12,
    content: "사용감 있어서 싸게 팝니다",
    createdAt: "2025-09-13T15:23:45Z",
    likeCount: 5,
    chatCount: 2,
    viewCount: 101,
    thumbnail: "",
    status: "RESERVED"
  },
  globals: {
    viewport: {
      value: "tablet",
      isRotated: false
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    postingId: 101,
    title: "다이슨 슈퍼소닉 블루 판매",
    price: 1200000,
    sellerId: 12,
    content: "사용감 있어서 싸게 팝니다",
    createdAt: "2025-09-13T15:23:45Z",
    likeCount: 5,
    chatCount: 2,
    viewCount: 101,
    thumbnail: "",
    status: "SOLD"
  },
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
}`,...a.parameters?.docs?.source}}};const N=["Mobile","Tablet","Desktop"];export{a as Desktop,s as Mobile,r as Tablet,N as __namedExportsOrder,I as default};
