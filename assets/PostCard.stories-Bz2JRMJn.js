import{j as e}from"./jsx-runtime-DJjDd6aN.js";import{n as f}from"./ProfileImageChangeInput-BR2_dKdK.js";import{L as g}from"./link-BKOnX16R.js";import{r as s}from"./iframe-EJAUb7tW.js";import{a as b}from"./fetcher-SVGWhtvk.js";import"./cn-DWDuF9m2.js";import"./preload-helper-B4AOKawx.js";import"./Modal-DtV6fKtH.js";import"./Button-B5UyOlff.js";import"./Input-Dn_tDd35.js";import"./TextField-DlnHdWIV.js";import"./TextBox-D4MqotRn.js";import"./DropDown-DqrRQ5mz.js";var v=s.createContext(void 0),C=t=>{const r=s.useContext(v);if(!r)throw new Error("No QueryClient set, use QueryClientProvider to set one");return r};async function w(t){if(!t)throw new Error("Invalid postingId");return b(`/api/postings/${t}`,{method:"GET"})}function y(t,r){const n=s.useRef(null),o=s.useRef(t);s.useEffect(()=>{o.current=t},[t]);const u=s.useCallback((...a)=>{n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{o.current(...a)},r)},[r]),d=s.useCallback(()=>{n.current&&(clearTimeout(n.current),n.current=null)},[]);return s.useEffect(()=>()=>{n.current&&clearTimeout(n.current)},[]),{debouncedCallback:u,cancel:d}}const p=({postingId:t,title:r,price:n,likeCount:o,chatCount:u,viewCount:d,thumbnail:a})=>{const m=C(),{debouncedCallback:x,cancel:h}=y(()=>{m.getQueryData(["postDetail",t])||m.prefetchQuery({queryKey:["postDetail",t],queryFn:()=>w(t),staleTime:1e3*60*3})},200);return e.jsx(g,{href:`/detail/${t}`,onMouseEnter:x,onMouseLeave:h,children:e.jsx("article",{className:"w-full rounded-lg border border-[#353542] bg-[#252530] p-2.5 md:pb-5 xl:pb-6",children:e.jsxs("div",{className:"flex flex-col gap-2.5 md:gap-5 xl:gap-6",children:[e.jsx("div",{className:"relative h-24 w-full overflow-hidden rounded-md md:h-40 xl:h-56",children:a?e.jsx(f,{src:a,alt:r,fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",className:"object-cover transition-transform duration-200 ease-in-out hover:scale-105"}):e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-[#1c1c22] text-gray-500",children:"이미지 없음"})}),e.jsxs("div",{className:"flex flex-col gap-1.5 md:gap-2.5",children:[e.jsx("h1",{className:"line-clamp-2 h-7 text-sm leading-none font-medium text-[#F1F1F5] md:h-8 md:text-base xl:h-9 xl:text-lg",children:r}),e.jsxs("p",{className:"text-xs text-[#9FA6B2] md:text-sm",children:[n.toLocaleString()," 원"]}),e.jsxs("div",{className:"flex w-full flex-col gap-1.5 text-xs leading-none font-light text-[#6E6E82] md:flex-row md:justify-between md:text-sm xl:text-base",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("span",{children:"조회"}),e.jsx("span",{children:d})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("img",{src:"/icons/chat.svg",alt:"채팅 수",className:"h-2.5 w-2.5"}),e.jsx("span",{children:u}),e.jsx("img",{src:"/icons/heart.svg",alt:"좋아요 수",className:"h-2.5 w-2.5"}),e.jsx("span",{children:o})]})]})]})]})})})};p.__docgenInfo={description:"",methods:[],displayName:"PostCard",props:{postingId:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},sellerId:{required:!0,tsType:{name:"number"},description:""},content:{required:!0,tsType:{name:"string"},description:""},createdAt:{required:!0,tsType:{name:"string"},description:""},likeCount:{required:!0,tsType:{name:"number"},description:""},chatCount:{required:!0,tsType:{name:"number"},description:""},viewCount:{required:!0,tsType:{name:"number"},description:""},thumbnail:{required:!0,tsType:{name:"string"},description:""}}};const Z={title:"Post/PostCard",component:p,tags:["autodocs"],argTypes:{postingId:{control:"number"},title:{control:"text"},price:{control:"number"},sellerId:{control:"number"},content:{control:"text"},createdAt:{control:"text"},likeCount:{control:"number"},chatCount:{control:"number"},viewCount:{control:"number"},thumbnail:{control:"text"}}},i={args:{postingId:101,title:"다이슨 슈퍼소닉 블루 판매",price:12e5,sellerId:12,content:"사용감 있어서 싸게 팝니다",createdAt:"2025-09-13T15:23:45Z",likeCount:5,chatCount:2,viewCount:101,thumbnail:""},globals:{viewport:{value:"mobile2",isRotated:!1}}},l={args:{postingId:101,title:"다이슨 슈퍼소닉 블루 판매",price:12e5,sellerId:12,content:"사용감 있어서 싸게 팝니다",createdAt:"2025-09-13T15:23:45Z",likeCount:5,chatCount:2,viewCount:101,thumbnail:""},globals:{viewport:{value:"tablet",isRotated:!1}}},c={args:{postingId:101,title:"다이슨 슈퍼소닉 블루 판매",price:12e5,sellerId:12,content:"사용감 있어서 싸게 팝니다",createdAt:"2025-09-13T15:23:45Z",likeCount:5,chatCount:2,viewCount:101,thumbnail:""},globals:{viewport:{value:"desktop",isRotated:!1}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const _=["Mobile","Tablet","Desktop"];export{c as Desktop,i as Mobile,l as Tablet,_ as __namedExportsOrder,Z as default};
