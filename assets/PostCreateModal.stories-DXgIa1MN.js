import{j as e}from"./jsx-runtime-CtkiAMiR.js";import{r as a}from"./iframe-fEZ2A_g4.js";import{P as r}from"./fetcher-Zk7H5Oxq.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-By7xUD_j.js";import"./Modal-B5qR-sYW.js";import"./cn-DWDuF9m2.js";import"./Button-DxSCDik6.js";import"./ProfileImageChangeInput-BUby59ZR.js";import"./image-CoC-VM-A.js";import"./use-merged-ref-DaPMvQD5.js";import"./Input-Be--aLUp.js";import"./TextField-BGHm_XGS.js";import"./TextBox-CqEyPKV7.js";import"./DropDown-Dj8xiLCs.js";const O={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const P=["Main"];export{t as Main,P as __namedExportsOrder,O as default};
