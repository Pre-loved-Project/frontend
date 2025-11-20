import{j as e}from"./jsx-runtime-3cEkpMno.js";import{n as m}from"./image-tnnyUzsE.js";import{L as p}from"./link-DsBkZNQe.js";import"./iframe-OZvaZ3PD.js";import"./preload-helper-B4AOKawx.js";const o=({postingId:l,title:s,price:i,likeCount:c,chatCount:d,viewCount:u,thumbnail:a})=>e.jsx(p,{href:`/detail/${l}`,children:e.jsx("article",{className:"w-full rounded-lg border border-[#353542] bg-[#252530] p-2.5 md:pb-5 xl:pb-6",children:e.jsxs("div",{className:"flex flex-col gap-2.5 md:gap-5 xl:gap-6",children:[e.jsx("div",{className:"relative h-24 w-full overflow-hidden rounded-md md:h-40 xl:h-56",children:a?e.jsx(m,{src:a,alt:s,fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",className:"object-cover transition-transform duration-200 ease-in-out hover:scale-105"}):e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-[#1c1c22] text-gray-500",children:"이미지 없음"})}),e.jsxs("div",{className:"flex flex-col gap-1.5 md:gap-2.5",children:[e.jsx("h1",{className:"line-clamp-2 h-7 text-sm leading-none font-medium text-[#F1F1F5] md:h-8 md:text-base xl:h-9 xl:text-lg",children:s}),e.jsxs("p",{className:"text-xs text-[#9FA6B2] md:text-sm",children:[i?.toLocaleString()," 원"]}),e.jsxs("div",{className:"flex w-full flex-col gap-1.5 text-xs leading-none font-light text-[#6E6E82] md:flex-row md:justify-between md:text-sm xl:text-base",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("span",{"aria-label":"조회 수",title:"조회 수",children:"조회"}),e.jsx("span",{children:u})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("img",{src:"/icons/chat.svg",alt:"채팅 수",className:"h-2.5 w-2.5"}),e.jsx("span",{children:d}),e.jsx("img",{src:"/icons/heart.svg",alt:"좋아요 수",className:"h-2.5 w-2.5"}),e.jsx("span",{children:c})]})]})]})]})})});o.__docgenInfo={description:"",methods:[],displayName:"PostCard",props:{postingId:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},sellerId:{required:!0,tsType:{name:"number"},description:""},content:{required:!0,tsType:{name:"string"},description:""},createdAt:{required:!0,tsType:{name:"string"},description:""},likeCount:{required:!0,tsType:{name:"number"},description:""},chatCount:{required:!0,tsType:{name:"number"},description:""},viewCount:{required:!0,tsType:{name:"number"},description:""},thumbnail:{required:!0,tsType:{name:"string"},description:""}}};const f={title:"Post/PostCard",component:o,tags:["autodocs"],argTypes:{postingId:{control:"number"},title:{control:"text"},price:{control:"number"},sellerId:{control:"number"},content:{control:"text"},createdAt:{control:"text"},likeCount:{control:"number"},chatCount:{control:"number"},viewCount:{control:"number"},thumbnail:{control:"text"}}},t={args:{postingId:101,title:"다이슨 슈퍼소닉 블루 판매",price:12e5,sellerId:12,content:"사용감 있어서 싸게 팝니다",createdAt:"2025-09-13T15:23:45Z",likeCount:5,chatCount:2,viewCount:101,thumbnail:""},globals:{viewport:{value:"mobile2",isRotated:!1}}},n={args:{postingId:101,title:"다이슨 슈퍼소닉 블루 판매",price:12e5,sellerId:12,content:"사용감 있어서 싸게 팝니다",createdAt:"2025-09-13T15:23:45Z",likeCount:5,chatCount:2,viewCount:101,thumbnail:""},globals:{viewport:{value:"tablet",isRotated:!1}}},r={args:{postingId:101,title:"다이슨 슈퍼소닉 블루 판매",price:12e5,sellerId:12,content:"사용감 있어서 싸게 팝니다",createdAt:"2025-09-13T15:23:45Z",likeCount:5,chatCount:2,viewCount:101,thumbnail:""},globals:{viewport:{value:"desktop",isRotated:!1}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    thumbnail: ""
  },
  globals: {
    viewport: {
      value: "mobile2",
      isRotated: false
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    thumbnail: ""
  },
  globals: {
    viewport: {
      value: "tablet",
      isRotated: false
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    thumbnail: ""
  },
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
}`,...r.parameters?.docs?.source}}};const w=["Mobile","Tablet","Desktop"];export{r as Desktop,t as Mobile,n as Tablet,w as __namedExportsOrder,f as default};
