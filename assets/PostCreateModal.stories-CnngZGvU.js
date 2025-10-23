import{j as e}from"./jsx-runtime-C35ujaFZ.js";import{r as a}from"./iframe-i6ECFc70.js";import{P as r}from"./fetcher-uwJbRUIf.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-DXmiFN6Y.js";import"./Modal-D_xpNuY_.js";import"./cn-DWDuF9m2.js";import"./Button-BAir-C1N.js";import"./ProfileImageChangeInput-DQI-qlp2.js";import"./image-J7AQQ2ng.js";import"./use-merged-ref-BsNu21aG.js";import"./Input-C3x9gdQs.js";import"./TextField-Cuhy6QR1.js";import"./TextBox-n4483HGR.js";import"./DropDown-Bl2IBPGz.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
