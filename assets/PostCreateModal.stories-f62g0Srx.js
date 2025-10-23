import{j as e}from"./jsx-runtime-DNZlp-xI.js";import{r as a}from"./iframe-DDRRR3qt.js";import{P as r}from"./fetcher-BChL5pi-.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-Bv2JeoWK.js";import"./Modal-BW6XIqc4.js";import"./cn-DWDuF9m2.js";import"./Button-Wy1OgcdQ.js";import"./ProfileImageChangeInput-NPsnY8D2.js";import"./image-5q_jz1bG.js";import"./use-merged-ref-DCl3Bycp.js";import"./Input-BLQRf0Ri.js";import"./TextField-CUxRhdeP.js";import"./TextBox-C77EzbJA.js";import"./DropDown-ohPvjKMX.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
