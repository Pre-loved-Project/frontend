import{j as e}from"./jsx-runtime-B6kckyHA.js";import{r as a}from"./iframe-CZJm9iCZ.js";import{b as r}from"./fetcher-B4gLBSk4.js";import"./preload-helper-B4AOKawx.js";import"./Modal-ucRMDPKu.js";import"./cn-DWDuF9m2.js";import"./Button-Bgx-BROD.js";import"./ProfileImageChangeInput-274QjSuG.js";import"./image-Dn6p6XKt.js";import"./Input-BD0GARsR.js";import"./TextField-1ZkxOmy0.js";import"./TextBox-Ci_jVdhL.js";import"./DropDown-DPkMrd_x.js";const P={title:"User/ProfileEditModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}},argTypes:{onClose:{action:"closed"},onSave:{action:"saved"}}},t={render:s=>{const[o,n]=a.useState(!0);return e.jsxs(e.Fragment,{children:[o&&e.jsx(r,{...s,imageUrl:"https://i.namu.wiki/i/bWtUr_r8eY7ikAhSgpZY0kga1QCDgZIsQI9P3UDmIDKqBJ67zQGZg95H2Svkph_k6PkQ2w_HRXj55lF9BSZD07VqH2PUdFLKWDm880fd0dIgk9nsC3vamlu0iPsjnPe4EOt6cGF7u0wWKfyYWjsaRHQRjBwFu5wmUD1RZtcxQyE.webp",nickname:"홍길동",introduction:"안녕하세요. 저는 테스트 사용자입니다.",category:"전자제품/가전제품",onClose:()=>{console.log("모달 닫기"),n(!1)},onSave:()=>{console.log("저장 클릭")}}),!o&&e.jsx("button",{onClick:()=>n(!0),className:"mt-5 rounded bg-blue-500 px-4 py-2 text-white",children:"모달 열기"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        {open && <ProfileEditModal {...args} imageUrl="https://i.namu.wiki/i/bWtUr_r8eY7ikAhSgpZY0kga1QCDgZIsQI9P3UDmIDKqBJ67zQGZg95H2Svkph_k6PkQ2w_HRXj55lF9BSZD07VqH2PUdFLKWDm880fd0dIgk9nsC3vamlu0iPsjnPe4EOt6cGF7u0wWKfyYWjsaRHQRjBwFu5wmUD1RZtcxQyE.webp" nickname="홍길동" introduction="안녕하세요. 저는 테스트 사용자입니다." category="전자제품/가전제품" onClose={() => {
        console.log("모달 닫기");
        setOpen(false);
      }} onSave={() => {
        console.log("저장 클릭");
      }} />}
        {!open && <button onClick={() => setOpen(true)} className="mt-5 rounded bg-blue-500 px-4 py-2 text-white">
            모달 열기
          </button>}
      </>;
  }
}`,...t.parameters?.docs?.source}}};const b=["Main"];export{t as Main,b as __namedExportsOrder,P as default};
