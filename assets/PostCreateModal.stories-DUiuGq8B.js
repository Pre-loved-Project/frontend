import{j as e}from"./jsx-runtime-B5D50MO9.js";import{r as a}from"./iframe-nfyL5hn7.js";import{P as r}from"./fetcher-YsTRt1og.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-CLRaGDyn.js";import"./Modal-9DMZYG_Y.js";import"./cn-DWDuF9m2.js";import"./Button-BHTDQTWY.js";import"./ProfileImageChangeInput-D6BnqbmD.js";import"./image-DXMLgmIY.js";import"./use-merged-ref-17uDdDtK.js";import"./Input-BTuB9_Bh.js";import"./TextField-DMWjb4IR.js";import"./TextBox-Bi102O48.js";import"./DropDown-uCKoEGO8.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
