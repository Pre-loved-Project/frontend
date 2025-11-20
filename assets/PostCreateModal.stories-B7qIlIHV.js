import{j as e}from"./jsx-runtime-D9f7ljSD.js";import{r as a}from"./iframe-CxDRNE0c.js";import{P as r}from"./fetcher-BKOC49B_.js";import"./preload-helper-B4AOKawx.js";import"./Modal-Xffzfzu0.js";import"./cn-DWDuF9m2.js";import"./Button-CJDmlon0.js";import"./ProfileImageChangeInput-Bak3q3jX.js";import"./image-Cv4glXMc.js";import"./Input-Ca9vtZaZ.js";import"./TextField-Bmw5gNgH.js";import"./TextBox-Ck8oR41z.js";import"./DropDown-UXiXYrSa.js";const j={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const M=["Main"];export{t as Main,M as __namedExportsOrder,j as default};
