import{j as e}from"./jsx-runtime-CCP1ajar.js";import{r as a}from"./iframe-Ddwvd8iZ.js";import{P as r}from"./fetcher-AWOaIqG6.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-BBAowgZz.js";import"./Modal-D-d8YcKv.js";import"./cn-DWDuF9m2.js";import"./Button-OAZ0FdyP.js";import"./ProfileImageChangeInput-l8j74uNm.js";import"./image-Bnt-RcDh.js";import"./Input-DVPTOUmT.js";import"./TextField-CnMuZhYC.js";import"./TextBox-BEjhjDFl.js";import"./DropDown-vgyOdIWK.js";const M={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const O=["Main"];export{t as Main,O as __namedExportsOrder,M as default};
