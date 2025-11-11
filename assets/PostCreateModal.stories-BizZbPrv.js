import{j as e}from"./jsx-runtime-YVm6bqbv.js";import{r as a}from"./iframe-BjZD5P3s.js";import{P as r}from"./fetcher-B5-4lPFP.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-BSSMWILw.js";import"./Modal-CWPvQOtN.js";import"./cn-DWDuF9m2.js";import"./Button-Br2vS-2q.js";import"./ProfileImageChangeInput-cg31Sdkz.js";import"./image-P025EpM1.js";import"./use-merged-ref-D-jqizCb.js";import"./Input-DLTxetfm.js";import"./TextField-DwOWmk5q.js";import"./TextBox-CEovk1S7.js";import"./DropDown-s4Mbjvl5.js";const O={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
