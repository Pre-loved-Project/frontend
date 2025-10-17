import{j as e}from"./jsx-runtime-DZxfYUyo.js";import{r as a}from"./iframe-BfC_cS0A.js";import{P as r}from"./fetcher-DpWYb3YF.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-vxxcDGN1.js";import"./Modal-B7CP1Cf_.js";import"./cn-DWDuF9m2.js";import"./Button-4x18qYty.js";import"./ProfileImageChangeInput-CcNkTsEu.js";import"./image-5WFGI7ju.js";import"./use-merged-ref-CR8oOyEM.js";import"./Input-CBnSy1om.js";import"./TextField-C10ymeTB.js";import"./TextBox-BJSCxX0X.js";import"./DropDown-BpUeF42p.js";const O={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
