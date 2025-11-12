import{j as e}from"./jsx-runtime-CH1pz-jq.js";import{r as a}from"./iframe-BmKmLOQA.js";import{P as r}from"./fetcher-DntGSKzL.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-BdX3nISp.js";import"./Modal-De7vkR9k.js";import"./cn-DWDuF9m2.js";import"./Button-Bbx7XU1L.js";import"./ProfileImageChangeInput-CKGX_mWB.js";import"./image-DKpovyLU.js";import"./use-merged-ref-zIv1MnzL.js";import"./Input-Bphor6Xv.js";import"./TextField-Dd3K1pk4.js";import"./TextBox-CG_xlhQu.js";import"./DropDown-BPmt90dQ.js";const O={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
