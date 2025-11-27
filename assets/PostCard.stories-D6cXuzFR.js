import{j as e}from"./jsx-runtime-BZhABoa4.js";import{n as b}from"./ProfileImageChangeInput-DI2MZl-i.js";import{u as f,a as v,L as E}from"./useDebouncedCallback-Cm-xxTGx.js";import{a as S}from"./fetcher-RUK5asli.js";import{c as w}from"./cn-DWDuF9m2.js";import"./iframe-Bn8txrDM.js";import"./preload-helper-B4AOKawx.js";import"./Modal-_ta0y0hI.js";import"./Button-CNERo1eV.js";import"./Input-Br3bX5P9.js";import"./TextField-D51212Zb.js";import"./TextBox-N2MPxeLz.js";import"./DropDown-CsY_J7kw.js";async function C(t){if(!t)throw new Error("Invalid postingId");return S(`/api/postings/${t}`,{method:"GET"})}const L={SELLING:"판매 중",RESERVED:"예약 중",SOLD:"판매 완료"},y={SELLING:"bg-linear-to-r from-[#5097fa] to-[#5363ff] text-[#F1F1F5]",RESERVED:"bg-white text-[#5097FA]",SOLD:"bg-black text-[#9FA6B2]"},d=({status:t,className:n})=>{const o=L[t],l=y[t];return e.jsx("span",{className:w("inline-block rounded-md px-2 py-[2px] text-[14px] font-medium",l,n),children:o})};d.__docgenInfo={description:"",methods:[],displayName:"PostStatusBadge",props:{status:{required:!0,tsType:{name:"union",raw:'"SELLING" | "RESERVED" | "SOLD"',elements:[{name:"literal",value:'"SELLING"'},{name:"literal",value:'"RESERVED"'},{name:"literal",value:'"SOLD"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const u=({postingId:t,title:n,price:o,likeCount:l,chatCount:m,viewCount:p,thumbnail:i,status:x})=>{const c=f(),{debouncedCallback:g,cancel:h}=v(()=>{c.getQueryData(["postDetail",t])||c.prefetchQuery({queryKey:["postDetail",t],queryFn:()=>C(t),staleTime:1e3*60*3})},200);return e.jsx(E,{href:`/detail/${t}`,onMouseEnter:g,onMouseLeave:h,children:e.jsx("article",{className:"w-full rounded-lg border border-[#353542] bg-[#252530] p-2.5 md:pb-5 xl:pb-6",children:e.jsxs("div",{className:"flex flex-col gap-2.5 md:gap-5 xl:gap-6",children:[e.jsx("div",{className:"relative h-24 w-full overflow-hidden rounded-md md:h-40 xl:h-56",children:i?e.jsx(b,{src:i,alt:n,fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",className:"object-cover transition-transform duration-200 ease-in-out hover:scale-105"}):e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-[#1c1c22] text-gray-500",children:"이미지 없음"})}),e.jsxs("div",{className:"flex flex-col gap-1.5 md:gap-2.5",children:[e.jsx("h1",{className:"line-clamp-2 h-7 text-sm leading-none font-medium text-[#F1F1F5] md:h-8 md:text-base xl:h-9 xl:text-lg",children:n}),e.jsx(d,{status:x,className:"block w-fit"}),e.jsxs("p",{className:"text-xs text-[#9FA6B2] md:text-sm",children:[o.toLocaleString()," 원"]}),e.jsxs("div",{className:"flex w-full flex-col gap-1.5 text-xs leading-none font-light text-[#6E6E82] md:flex-row md:justify-between md:text-sm xl:text-base",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("span",{children:"조회"}),e.jsx("span",{children:p})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("img",{src:"/icons/chat.svg",alt:"채팅 수",className:"h-2.5 w-2.5"}),e.jsx("span",{children:m}),e.jsx("img",{src:"/icons/heart.svg",alt:"좋아요 수",className:"h-2.5 w-2.5"}),e.jsx("span",{children:l})]})]})]})]})})})};u.__docgenInfo={description:"",methods:[],displayName:"PostCard",props:{postingId:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},sellerId:{required:!0,tsType:{name:"number"},description:""},content:{required:!0,tsType:{name:"string"},description:""},createdAt:{required:!0,tsType:{name:"string"},description:""},likeCount:{required:!0,tsType:{name:"number"},description:""},chatCount:{required:!0,tsType:{name:"number"},description:""},viewCount:{required:!0,tsType:{name:"number"},description:""},thumbnail:{required:!0,tsType:{name:"string"},description:""},status:{required:!0,tsType:{name:"union",raw:'"SELLING" | "RESERVED" | "SOLD"',elements:[{name:"literal",value:'"SELLING"'},{name:"literal",value:'"RESERVED"'},{name:"literal",value:'"SOLD"'}]},description:""}}};const _={title:"Post/PostCard",component:u,tags:["autodocs"],argTypes:{postingId:{control:"number"},title:{control:"text"},price:{control:"number"},sellerId:{control:"number"},content:{control:"text"},createdAt:{control:"text"},likeCount:{control:"number"},chatCount:{control:"number"},viewCount:{control:"number"},thumbnail:{control:"text"},status:{control:{type:"radio"},options:["SELLING","RESERVED","SOLD"]}}},s={args:{postingId:101,title:"다이슨 슈퍼소닉 블루 판매",price:12e5,sellerId:12,content:"사용감 있어서 싸게 팝니다",createdAt:"2025-09-13T15:23:45Z",likeCount:5,chatCount:2,viewCount:101,thumbnail:"",status:"SELLING"},globals:{viewport:{value:"mobile2",isRotated:!1}}},r={args:{postingId:101,title:"다이슨 슈퍼소닉 블루 판매",price:12e5,sellerId:12,content:"사용감 있어서 싸게 팝니다",createdAt:"2025-09-13T15:23:45Z",likeCount:5,chatCount:2,viewCount:101,thumbnail:"",status:"RESERVED"},globals:{viewport:{value:"tablet",isRotated:!1}}},a={args:{postingId:101,title:"다이슨 슈퍼소닉 블루 판매",price:12e5,sellerId:12,content:"사용감 있어서 싸게 팝니다",createdAt:"2025-09-13T15:23:45Z",likeCount:5,chatCount:2,viewCount:101,thumbnail:"",status:"SOLD"},globals:{viewport:{value:"desktop",isRotated:!1}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const P=["Mobile","Tablet","Desktop"];export{a as Desktop,s as Mobile,r as Tablet,P as __namedExportsOrder,_ as default};
