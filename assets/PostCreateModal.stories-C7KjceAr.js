import{j as e}from"./jsx-runtime-Bg8eipk2.js";import{r as a}from"./iframe-Cc5xSYv8.js";import{P as r}from"./fetcher-BgxdUzXH.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-Bg495sNL.js";import"./Modal-L2pxacmY.js";import"./cn-DWDuF9m2.js";import"./Button-CFbveLFF.js";import"./ProfileImageChangeInput-OGzm03Md.js";import"./image-I8Few-lK.js";import"./use-merged-ref-Dnj_GhiW.js";import"./Input-DqT6jGq_.js";import"./TextField-CoO7jznM.js";import"./TextBox-DhCH6_G5.js";import"./DropDown-C4YnxfwL.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);
    return <>
        <button onClick={() => setOpen(true)} className="mb-4 rounded bg-blue-500 px-4 py-2 text-white">
          게시물 추가 모달 열기
        </button>

        {open && <PostCreateModal onClose={handleClose} />}
      </>;
  }
}`,...t.parameters?.docs?.source}}};const y=["Main"];export{t as Main,y as __namedExportsOrder,P as default};
