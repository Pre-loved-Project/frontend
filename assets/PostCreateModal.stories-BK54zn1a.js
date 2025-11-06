import{j as e}from"./jsx-runtime-08QGGh8s.js";import{r as a}from"./iframe-Hkz5MOcK.js";import{P as r}from"./fetcher-2d7vivJo.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-CMKS7Nxj.js";import"./Modal-SGlAaUTO.js";import"./cn-DWDuF9m2.js";import"./Button-B9sfkEgj.js";import"./ProfileImageChangeInput-TKemFZEG.js";import"./image-DFOPanBA.js";import"./use-merged-ref-DPR0MoPT.js";import"./Input-BnWsYQJ0.js";import"./TextField-BlgCWCT2.js";import"./TextBox-0U0USuLc.js";import"./DropDown-CMpbhFSa.js";const O={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
