import{j as e}from"./jsx-runtime-Czi9EJiJ.js";import{r as a}from"./iframe-D5qhrdFV.js";import{P as r}from"./fetcher-BRjlZRIL.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-DSFcoNzr.js";import"./Modal-BwjqGdZg.js";import"./cn-DWDuF9m2.js";import"./Button-DmKtGRYb.js";import"./ProfileImageChangeInput-C11VMuTL.js";import"./image-DtcfOlC0.js";import"./use-merged-ref-Cp8N0evl.js";import"./Input--ZQFqzwH.js";import"./TextField-w-8HQ9Kt.js";import"./TextBox-BalULYZP.js";import"./DropDown-BaqzAnwg.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
