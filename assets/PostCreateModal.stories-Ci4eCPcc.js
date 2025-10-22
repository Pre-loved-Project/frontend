import{j as e}from"./jsx-runtime-Byb1RjEF.js";import{r as a}from"./iframe-BeyBxvIE.js";import{P as r}from"./fetcher-CMYfVKiD.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-Dd3_LYmc.js";import"./Modal-pt-Rxqxo.js";import"./cn-DWDuF9m2.js";import"./Button-NJeIi6Ao.js";import"./ProfileImageChangeInput-BQB6LCS0.js";import"./image-DL054i5R.js";import"./use-merged-ref-Cw1vAPR2.js";import"./Input-CBbutIuK.js";import"./TextField-DTCCPXWc.js";import"./TextBox-B-JSJyJV.js";import"./DropDown-km9eiTb1.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
