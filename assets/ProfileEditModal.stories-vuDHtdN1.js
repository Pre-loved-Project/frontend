import{j as e}from"./jsx-runtime-DecQm7fW.js";import{r as a}from"./iframe-DbTJhULz.js";import{b as r}from"./fetcher-Cy9oQ-0Q.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-CDRp_oPK.js";import"./Modal-B8CiQnqz.js";import"./cn-DWDuF9m2.js";import"./Button-BKd2E4MB.js";import"./ProfileImageChangeInput-DYG0rASX.js";import"./image-DCZgdKme.js";import"./use-merged-ref-Bgo7eGv8.js";import"./Input-D1jR_4ob.js";import"./TextField-1C23O5Lz.js";import"./TextBox-BXP8F7qR.js";import"./DropDown-C4PIVxLh.js";const D={title:"User/ProfileEditModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}},argTypes:{onClose:{action:"closed"},onSave:{action:"saved"}}},t={render:s=>{const[o,n]=a.useState(!0);return e.jsxs(e.Fragment,{children:[o&&e.jsx(r,{...s,imageUrl:"https://i.namu.wiki/i/bWtUr_r8eY7ikAhSgpZY0kga1QCDgZIsQI9P3UDmIDKqBJ67zQGZg95H2Svkph_k6PkQ2w_HRXj55lF9BSZD07VqH2PUdFLKWDm880fd0dIgk9nsC3vamlu0iPsjnPe4EOt6cGF7u0wWKfyYWjsaRHQRjBwFu5wmUD1RZtcxQyE.webp",nickname:"홍길동",introduction:"안녕하세요. 저는 테스트 사용자입니다.",category:"전자제품/가전제품",onClose:()=>{console.log("모달 닫기"),n(!1)},onSave:()=>{console.log("저장 클릭")}}),!o&&e.jsx("button",{onClick:()=>n(!0),className:"mt-5 rounded bg-blue-500 px-4 py-2 text-white",children:"모달 열기"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const Q=["Main"];export{t as Main,Q as __namedExportsOrder,D as default};
