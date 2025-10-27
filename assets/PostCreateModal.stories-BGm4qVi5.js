import{j as e}from"./jsx-runtime-ibvY5E17.js";import{r as a}from"./iframe-CM6bk4Uq.js";import{P as r}from"./fetcher-DQRn4xX3.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-BfJcWadx.js";import"./Modal-BkrFrjx1.js";import"./cn-DWDuF9m2.js";import"./Button-DaIg-nZZ.js";import"./ProfileImageChangeInput-DRf_MWVN.js";import"./image-PymV-qkx.js";import"./use-merged-ref-CStE8h3x.js";import"./Input-NEQRj3D1.js";import"./TextField-DX1frlIr.js";import"./TextBox-hYmtUu3z.js";import"./DropDown-DH29d027.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
